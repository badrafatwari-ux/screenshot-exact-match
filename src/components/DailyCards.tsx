import { useState } from "react";
import { dailyChallengeQuestions, dailyConcept } from "@/lib/daily";
import { QuizRunner } from "@/components/QuizRunner";
import { ChevronDown, ChevronUp, Quote, Sparkles } from "lucide-react";

/** Today's Political Concept — deterministic per calendar day. */
export function DailyConceptCard() {
  const [open, setOpen] = useState(false);
  const entry = dailyConcept();

  return (
    <div className="bps-card p-4">
      <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gold-foreground">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Daily political concept
      </p>
      <p className="mt-1.5 text-lg font-extrabold text-foreground">{entry.term}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{entry.simple}</p>
      {open && (
        <div className="mt-3 space-y-2 border-t border-border pt-3">
          <p className="text-sm leading-relaxed text-foreground">{entry.detailed}</p>
          <p className="rounded-xl bg-muted px-3 py-2 text-sm leading-relaxed text-foreground">
            <span className="font-extrabold text-gold-foreground">Example: </span>
            {entry.example}
          </p>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-gold-foreground"
        aria-expanded={open}
      >
        {open ? (
          <>
            Show less <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
          </>
        ) : (
          <>
            Learn more <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
          </>
        )}
      </button>
    </div>
  );
}

/** The Daily Knowledge Challenge — 5 questions, deterministic per day. */
export function DailyChallengeCard({
  onFinish,
}: {
  onFinish?: (score: number, total: number) => void;
}) {
  const [started, setStarted] = useState(false);
  const questions = dailyChallengeQuestions(5);

  return (
    <div className="bps-card p-4">
      {!started ? (
        <>
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-gold-foreground">
            <Quote className="h-3.5 w-3.5" aria-hidden="true" /> Daily knowledge challenge
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            Five questions from across the academy — a fresh set every day. +4 XP per correct answer.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="mt-3 w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
          >
            Start today&apos;s challenge
          </button>
        </>
      ) : (
        <QuizRunner
          questions={questions}
          title="Daily challenge"
          sourceLabel="Daily Knowledge Challenge"
          onFinish={(score, total) => onFinish?.(score, total)}
        />
      )}
    </div>
  );
}
