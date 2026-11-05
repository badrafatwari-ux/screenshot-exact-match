import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SCENARIOS, ROLE_LABELS, type Scenario, type SimEffects } from "@/data/simulator";
import { useProgress } from "@/state/progress";
import { ProgressBar, SectionHeading } from "@/components/common";
import { ChevronLeft, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/explore/simulator")({
  head: () => ({
    meta: [
      { title: "Scenario Simulator — Basics Political Science" },
      {
        name: "description",
        content:
          "Fictional, neutral decision games: govern through a fuel crisis, an anti-corruption bill, or a security emergency. Every choice has trade-offs.",
      },
      { property: "og:title", content: "Scenario Simulator — Basics Political Science" },
      {
        property: "og:description",
        content: "Political decision games with real trade-offs — no right answers, only consequences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SimulatorPage,
});

const METERS: { key: keyof SimEffects; label: string }[] = [
  { key: "economy", label: "Economy" },
  { key: "approval", label: "Approval" },
  { key: "liberties", label: "Civil liberties" },
  { key: "integrity", label: "Integrity" },
];

function SimulatorPage() {
  const { registerSimulatorRun } = useProgress();
  const [scenario, setScenario] = useState<Scenario | null>(null);
  const [step, setStep] = useState(0);
  const [effects, setEffects] = useState<SimEffects>({ economy: 0, approval: 0, liberties: 0, integrity: 0 });
  const [lastChoice, setLastChoice] = useState<{ outcome: string; tradeoff: string } | null>(null);
  const [verdictShown, setVerdictShown] = useState(false);

  function start(s: Scenario) {
    setScenario(s);
    setStep(0);
    setEffects({ economy: 0, approval: 0, liberties: 0, integrity: 0 });
    setLastChoice(null);
    setVerdictShown(false);
  }

  function choose(choiceIndex: number) {
    if (!scenario) return;
    const choice = scenario.steps[step]!.choices[choiceIndex]!;
    const next: SimEffects = {
      economy: effects.economy + choice.effects.economy,
      approval: effects.approval + choice.effects.approval,
      liberties: effects.liberties + choice.effects.liberties,
      integrity: effects.integrity + choice.effects.integrity,
    };
    setEffects(next);
    setLastChoice({ outcome: choice.outcome, tradeoff: choice.tradeoff });
  }

  function advance() {
    if (!scenario) return;
    if (step + 1 >= scenario.steps.length) {
      setVerdictShown(true);
      registerSimulatorRun();
    } else {
      setStep((s) => s + 1);
      setLastChoice(null);
    }
  }

  function restart() {
    setScenario(null);
  }

  // ----- Scenario select -----
  if (!scenario) {
    return (
      <div className="space-y-5 px-4 pt-6">
        <Link to="/explore" className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground">
          <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Explore
        </Link>
        <header>
          <h1 className="text-2xl font-extrabold leading-tight text-foreground">Scenario simulator</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Fictional situations, honest trade-offs. There is no ideologically correct answer — the
            lesson is in the consequences.
          </p>
        </header>
        <SectionHeading title="Choose a scenario" />
        <div className="space-y-3">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => start(s)}
              className="bps-card block w-full p-4 text-left transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <p className="text-[11px] font-bold uppercase tracking-widest text-gold-foreground">
                {ROLE_LABELS[s.role]}
              </p>
              <p className="mt-1 font-extrabold text-foreground">{s.title}</p>
              <p className="mt-1 line-clamp-3 text-sm text-muted-foreground">{s.intro}</p>
              <p className="mt-2 text-xs font-bold text-gold-foreground">
                {s.steps.length} decisions →
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ----- Verdict -----
  if (verdictShown) {
    const verdict = scenario.verdicts.find((v) => v.test(effects)) ?? scenario.verdicts.at(-1)!;
    return (
      <div className="space-y-5 px-4 pt-6">
        <header className="bps-navy-panel p-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-gold">Your verdict</p>
          <h1 className="mt-1 text-2xl font-extrabold leading-tight">{verdict.title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{verdict.body}</p>
        </header>

        <SectionHeading title="Final standing" subtitle="Where your decisions left the country." />
        <div className="bps-card space-y-3 p-4">
          {METERS.map(({ key, label }) => (
            <MeterRow key={key} label={label} value={effects[key]} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => start(scenario)}
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> Play again
          </button>
          <button
            onClick={restart}
            className="rounded-xl border border-input px-4 py-3 text-sm font-bold text-foreground"
          >
            Other scenarios
          </button>
        </div>
      </div>
    );
  }

  // ----- Playing -----
  const current = scenario.steps[step]!;
  return (
    <div className="space-y-5 px-4 pt-6">
      <button
        onClick={restart}
        className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Leave scenario
      </button>

      <header>
        <p className="text-[11px] font-bold uppercase tracking-widest text-gold-foreground">
          {ROLE_LABELS[scenario.role]} · {scenario.title}
        </p>
        <h1 className="mt-1 text-xl font-extrabold leading-tight text-foreground">
          Decision {step + 1} of {scenario.steps.length}
        </h1>
        <ProgressBar className="mt-2" value={(step / scenario.steps.length) * 100} />
      </header>

      <div className="bps-card p-4">
        <p className="text-sm leading-relaxed text-foreground">{current.situation}</p>
        <p className="mt-3 text-sm font-extrabold text-gold-foreground">{current.prompt}</p>
      </div>

      {!lastChoice ? (
        <div className="space-y-2">
          {current.choices.map((choice, i) => (
            <button
              key={i}
              onClick={() => choose(i)}
              className="bps-card w-full p-4 text-left text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              {choice.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="bps-card p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              What happened
            </p>
            <p className="mt-1 text-sm leading-relaxed text-foreground">{lastChoice.outcome}</p>
            <p className="mt-3 rounded-xl border border-gold/40 bg-gold/10 p-3 text-sm leading-relaxed text-foreground">
              <span className="font-extrabold text-gold-foreground">The trade-off: </span>
              {lastChoice.tradeoff}
            </p>
          </div>
          <SectionHeading title="Standing so far" />
          <div className="bps-card space-y-3 p-4">
            {METERS.map(({ key, label }) => (
              <MeterRow key={key} label={label} value={effects[key]} />
            ))}
          </div>
          <button
            onClick={advance}
            className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
          >
            {step + 1 >= scenario.steps.length ? "See your verdict" : "Next decision"}
          </button>
        </div>
      )}
    </div>
  );
}

function MeterRow({ label, value }: { label: string; value: number }) {
  const positive = value > 0;
  const negative = value < 0;
  const color = positive ? "text-success" : negative ? "text-destructive" : "text-muted-foreground";
  const bar = positive ? "bg-success" : negative ? "bg-destructive" : "bg-muted-foreground";
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-bold">
        <span className="text-muted-foreground">{label}</span>
        <span className={color}>
          {value > 0 ? "+" : ""}
          {value}
        </span>
      </div>
      <div className="mt-1 flex h-2 items-center gap-1">
        <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className={`absolute inset-y-0 left-1/2 h-full rounded-full ${bar}`}
            style={{
              width: `${Math.min(50, Math.abs(value) * 12)}%`,
              transform: negative ? "translateX(-100%)" : undefined,
            }}
          />
        </div>
      </div>
    </div>
  );
}
