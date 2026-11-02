import { useState } from "react";
import { Check, X, RotateCcw, Link2 } from "lucide-react";
import type { QuizQuestion } from "@/data/types";
import { ProgressBar } from "@/components/common";

interface Props {
  questions: QuizQuestion[];
  title?: string;
  onFinish?: (score: number, total: number) => void;
  /** Extra XP label context, purely informational. */
  sourceLabel?: string;
}

export function QuizRunner({ questions, title, onFinish, sourceLabel }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [finished, setFinished] = useState(false);

  // Matching state: leftIndex -> rightIndex
  const [pendingLeft, setPendingLeft] = useState<number | null>(null);
  const [pairMap, setPairMap] = useState<Record<number, number>>({});
  const [matchingRevealed, setMatchingRevealed] = useState(false);

  const q = questions[index]!;

  function reset() {
    setIndex(0);
    setSelected(null);
    setRevealed(false);
    setScore(0);
    setDone(false);
    setFinished(false);
    setPendingLeft(null);
    setPairMap({});
    setMatchingRevealed(false);
  }

  function answer(i: number) {
    if (revealed) return;
    setSelected(i);
    setRevealed(true);
    if (i === q.correctIndex) setScore((s) => s + 1);
  }

  function tapLeft(i: number) {
    if (matchingRevealed) return;
    setPairMap((m) => {
      const next = { ...m };
      for (const [l, r] of Object.entries(next)) if (r === i) delete next[Number(l)];
      return next;
    });
    setPendingLeft(i === pendingLeft ? null : i);
  }

  function tapRight(i: number) {
    if (matchingRevealed || pendingLeft === null) return;
    setPairMap((m) => {
      const next = { ...m };
      for (const [l, r] of Object.entries(next)) if (r === i) delete next[Number(l)];
      next[pendingLeft] = i;
      return next;
    });
    setPendingLeft(null);
  }

  function submitMatching() {
    const rightPositions = q.pairs!.map((_, i) => i);
    const correct = q.pairs!.every((pair, leftIdx) => pairMap[leftIdx] === rightPositions.indexOf(leftIdx));
    const count = q.pairs!.filter((pair, leftIdx) => pairMap[leftIdx] === rightPositions.indexOf(leftIdx)).length;
    setScore((s) => s + count);
    setMatchingRevealed(true);
    setRevealed(true);
    void correct;
  }

  function next() {
    if (index + 1 >= questions.length) {
      setDone(true);
      setFinished(true);
      onFinish?.(score, questions.length);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
    setRevealed(false);
    setPendingLeft(null);
    setPairMap({});
    setMatchingRevealed(false);
  }

  if (questions.length === 0) {
    return <p className="text-sm text-muted-foreground">No questions available yet.</p>;
  }

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="bps-card p-5 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {title ?? "Quiz"} complete
        </p>
        <p className="mt-2 text-4xl font-extrabold text-foreground">{pct}%</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {score} of {questions.length} correct{sourceLabel ? ` · ${sourceLabel}` : ""}
        </p>
        <div className="mt-2">
          {pct === 100 ? (
            <p className="text-sm font-bold text-success">Perfect score — outstanding work.</p>
          ) : pct >= 60 ? (
            <p className="text-sm font-bold text-success">Solid understanding. Keep going.</p>
          ) : (
            <p className="text-sm font-bold text-destructive">
              Worth reviewing the lesson and trying again.
            </p>
          )}
        </div>
        <button
          onClick={reset}
          className="mt-4 inline-flex items-center gap-2 rounded-xl border border-input px-4 py-2 text-sm font-semibold text-foreground"
        >
          <RotateCcw className="h-4 w-4" aria-hidden="true" /> Try again
        </button>
      </div>
    );
  }

  const progressPct = ((index + (revealed ? 1 : 0)) / questions.length) * 100;

  const correctOpt = selected === q.correctIndex ? q.options?.[q.correctIndex ?? -1] : undefined;
  const pickedOpt = selected !== null ? q.options?.[selected] : undefined;
  const whyText =
    selected === q.correctIndex
      ? (correctOpt?.feedback ?? q.explanation)
      : `${pickedOpt?.feedback ? `${pickedOpt.feedback} ` : ""}${q.explanation}`;

  return (
    <div className="bps-card p-5">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {title ?? "Quiz"} · Question {index + 1} of {questions.length}
        </p>
        <span className="text-xs font-bold text-gold">{score} correct</span>
      </div>
      <ProgressBar value={progressPct} className="mb-4" />

      <p className="text-base font-bold leading-snug text-foreground">{q.question}</p>

      {q.type === "matching" && q.pairs ? (
        <MatchingBody
          pairs={q.pairs}
          pendingLeft={pendingLeft}
          pairMap={pairMap}
          revealed={matchingRevealed}
          onTapLeft={tapLeft}
          onTapRight={tapRight}
          onSubmit={submitMatching}
        />
      ) : (
        <div className="mt-4 space-y-2">
          {q.options?.map((opt, i) => {
            const isCorrect = i === q.correctIndex;
            const isPicked = i === selected;
            let cls =
              "w-full rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors";
            if (!revealed) {
              cls += " border-input bg-card text-foreground hover:bg-muted";
            } else if (isCorrect) {
              cls += " border-success bg-success/10 text-success";
            } else if (isPicked) {
              cls += " border-destructive bg-destructive/10 text-destructive";
            } else {
              cls += " border-border bg-card text-muted-foreground";
            }
            return (
              <button key={i} onClick={() => answer(i)} disabled={revealed} className={cls}>
                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[10px] font-extrabold text-foreground">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt.label}
                {revealed && isCorrect && <Check className="ml-1 inline h-4 w-4" aria-hidden="true" />}
                {revealed && isPicked && !isCorrect && (
                  <X className="ml-1 inline h-4 w-4" aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {revealed && q.type !== "matching" && (
        <div className="mt-4 rounded-xl border border-gold/40 bg-gold/10 p-3">
          <p className="text-sm text-foreground">
            <span className="font-extrabold text-gold-foreground">Why: </span>
            {whyText}
          </p>
        </div>
      )}

      {revealed && (
        <button
          onClick={next}
          className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
        >
          {index + 1 >= questions.length ? "See results" : "Next question"}
        </button>
      )}
    </div>
  );
}

function MatchingBody({
  pairs,
  pendingLeft,
  pairMap,
  revealed,
  onTapLeft,
  onTapRight,
  onSubmit,
}: {
  pairs: { left: string; right: string }[];
  pendingLeft: number | null;
  pairMap: Record<number, number>;
  revealed: boolean;
  onTapLeft: (i: number) => void;
  onTapRight: (i: number) => void;
  onSubmit: () => void;
}) {
  const allPaired = Object.keys(pairMap).length === pairs.length;
  return (
    <div className="mt-4">
      <p className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link2 className="h-3.5 w-3.5" aria-hidden="true" /> Tap a concept, then its matching definition.
      </p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-2">
          {pairs.map((p, i) => {
            const paired = pairMap[i] !== undefined;
            const active = pendingLeft === i;
            let cls = "rounded-xl border px-3 py-2.5 text-left text-xs font-bold w-full";
            if (revealed) {
              cls += pairMap[i] === i
                ? " border-success bg-success/10 text-success"
                : " border-destructive bg-destructive/10 text-destructive";
            } else if (active) {
              cls += " border-gold bg-gold/15 text-gold-foreground";
            } else if (paired) {
              cls += " border-gold/40 bg-gold/10 text-foreground";
            } else {
              cls += " border-input bg-card text-foreground";
            }
            return (
              <button key={i} onClick={() => onTapLeft(i)} className={cls}>
                {p.left}
              </button>
            );
          })}
        </div>
        <div className="space-y-2">
          {pairs.map((p, i) => {
            const owner = Object.entries(pairMap).find(([, r]) => Number(r) === i);
            let cls = "rounded-xl border px-3 py-2.5 text-left text-xs w-full";
            if (revealed) {
              const ownerIdx = owner ? Number(owner[0]) : -1;
              cls +=
                ownerIdx === i
                  ? " border-success bg-success/10 text-success"
                  : " border-destructive bg-destructive/10 text-muted-foreground";
            } else if (owner) {
              cls += " border-gold/40 bg-gold/10 text-foreground";
            } else {
              cls += " border-input bg-card text-foreground";
            }
            return (
              <button key={i} onClick={() => onTapRight(i)} className={cls}>
                <span className="font-semibold">{p.right}</span>
                {owner && !revealed && (
                  <span className="mt-0.5 block text-[10px] font-bold text-gold-foreground">
                    ↔ {pairs[Number(owner[0])]!.left}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      {!revealed && (
        <button
          onClick={onSubmit}
          disabled={!allPaired}
          className="mt-3 w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground disabled:opacity-40"
        >
          Check matches
        </button>
      )}
    </div>
  );
}
