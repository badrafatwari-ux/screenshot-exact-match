import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { THINKERS } from "@/data/thinkers";
import { Chip, EmptyState } from "@/components/common";
import { ChevronLeft, Quote, X } from "lucide-react";

export const Route = createFileRoute("/explore/thinkers")({
  head: () => ({
    meta: [
      { title: "Great Thinkers — Basics Political Science" },
      {
        name: "description",
        content:
          "The political philosophers who shaped how we think about power: Plato, Machiavelli, Hobbes, Locke, Rousseau, Marx, Mill, Arendt, Rawls, and more — ideas, context, and critics.",
      },
      { property: "og:title", content: "Great Thinkers — Basics Political Science" },
      {
        property: "og:description",
        content: "Their ideas, their context, their critics — read the arguments, not just the names.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ThinkersPage,
});

function ThinkersPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const thinker = THINKERS.find((t) => t.id === selectedId);

  if (thinker) {
    return (
      <div className="space-y-5 px-4 pt-6">
        <button
          onClick={() => setSelectedId(null)}
          className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" /> All thinkers
        </button>

        <header className="bps-navy-panel p-5">
          <p className="text-[11px] font-bold uppercase tracking-widest text-gold">
            {thinker.years} · {thinker.region}
          </p>
          <h1 className="mt-1 text-2xl font-extrabold leading-tight">{thinker.name}</h1>
          <p className="mt-1 text-xs font-bold text-primary-foreground/70">{thinker.tradition}</p>
          <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{thinker.bio}</p>
        </header>

        <section className="bps-card p-4">
          <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            Historical context
          </p>
          <p className="mt-1 text-sm leading-relaxed text-foreground">{thinker.context}</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-extrabold tracking-tight text-foreground">Core ideas</h2>
          <div className="space-y-2">
            {thinker.ideas.map((idea) => (
              <div key={idea.title} className="bps-card p-4">
                <p className="text-sm font-extrabold text-foreground">{idea.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{idea.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-3">
          <div className="bps-card p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-success">Contributions</p>
            <ul className="mt-2 space-y-1.5">
              {thinker.contributions.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="bps-card p-4">
            <p className="text-[11px] font-bold uppercase tracking-widest text-destructive">
              Criticisms
            </p>
            <ul className="mt-2 space-y-1.5">
              {thinker.criticisms.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {thinker.quote && (
          <blockquote className="bps-navy-panel p-5">
            <Quote className="h-5 w-5 text-gold" aria-hidden="true" />
            <p className="mt-2 text-sm italic leading-relaxed text-primary-foreground/90">
              {thinker.quote}
            </p>
            <footer className="mt-2 text-xs font-bold text-primary-foreground/60">— {thinker.name}</footer>
          </blockquote>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-5 px-4 pt-6">
      <Link to="/explore" className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground">
        <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Explore
      </Link>

      <header>
        <h1 className="text-2xl font-extrabold leading-tight text-foreground">Great thinkers</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {THINKERS.length} voices across 2,400 years. Presented with their ideas and their critics —
          not as heroes to worship.
        </p>
      </header>

      {THINKERS.length === 0 ? (
        <EmptyState title="Coming soon" body="Thinker profiles are being written." />
      ) : (
        <div className="space-y-2">
          {THINKERS.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedId(t.id)}
              className="bps-card flex w-full items-start gap-3 p-4 text-left transition-shadow hover:shadow-[var(--shadow-lift)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xs font-extrabold text-primary">
                {t.name
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-extrabold text-foreground">{t.name}</p>
                  <Chip tone="muted" className="shrink-0">
                    {t.years}
                  </Chip>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">{t.tradition}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{t.bio}</p>
              </div>
              <X className="mt-1 hidden" aria-hidden="true" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
