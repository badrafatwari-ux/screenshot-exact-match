import { createFileRoute, Link } from "@tanstack/react-router";
import { MODULES, TOTAL_LESSON_COUNT } from "@/data/modules";
import { lessonKey, useProgress } from "@/state/progress";
import { computeEarnedBadges, LEVELS, levelFor, nextLevelProgress, BADGES } from "@/lib/gamification";
import { ProgressBar, ProgressRing, SectionHeading, Chip, EmptyState } from "@/components/common";
import { BookOpen, CheckCircle2, Flame, Sparkles, Trophy } from "lucide-react";

export const Route = createFileRoute("/progress")({
  head: () => ({
    meta: [
      { title: "Your Progress — Basics Political Science" },
      {
        name: "description",
        content:
          "Your level, XP, badges, streak, and full quiz history — everything stored privately on your device.",
      },
      { property: "og:title", content: "Your Progress — Basics Political Science" },
      {
        property: "og:description",
        content: "Levels, badges, streaks, and quiz history — all stored on your device.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProgressPage,
});

function ProgressPage() {
  const { state, hydrated } = useProgress();
  const done = new Set(state.completedLessons);
  const earned = computeEarnedBadges(state);
  const earnedSet = new Set(earned);
  const level = levelFor(state.xp);
  const next = nextLevelProgress(state.xp);
  const completedPct = Math.round((done.size / Math.max(1, TOTAL_LESSON_COUNT)) * 100);
  const completedModules = MODULES.filter((m) =>
    m.lessons.every((l) => done.has(lessonKey(m.id, l.id))),
  ).length;

  return (
    <div className="space-y-6 px-4 pt-6">
      <header className="bps-navy-panel p-5 text-center">
        <p className="text-[11px] font-bold uppercase tracking-widest text-gold">Level {level.level}</p>
        <h1 className="mt-1 text-2xl font-extrabold leading-tight">{level.title}</h1>
        <div className="mt-4 flex justify-center">
          <ProgressRing value={next.pct} size={120}>
            <span className="text-2xl font-extrabold text-primary-foreground">{state.xp}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary-foreground/70">
              XP
            </span>
          </ProgressRing>
        </div>
        <p className="mt-3 text-sm text-primary-foreground/80">
          {next.nextTitle
            ? `${next.remaining} XP to ${next.nextTitle}`
            : "You have reached the highest level."}
        </p>
      </header>

      <section>
        <SectionHeading title="Learning stats" />
        <div className="bps-card space-y-3 p-4">
          <StatRow icon={BookOpen} label="Lessons completed" value={`${done.size} / ${TOTAL_LESSON_COUNT}`} />
          <ProgressBar value={completedPct} />
          <StatRow icon={CheckCircle2} label="Modules finished" value={`${completedModules} of ${MODULES.length}`} />
          <StatRow icon={Flame} label="Current streak" value={`${state.streak.current} day${state.streak.current === 1 ? "" : "s"}`} />
          <StatRow icon={Flame} label="Longest streak" value={`${state.streak.longest} day${state.streak.longest === 1 ? "" : "s"}`} />
          <StatRow icon={Sparkles} label="Quizzes taken" value={String(state.quizResults.length)} />
          <StatRow icon={Trophy} label="Badges earned" value={`${earned.length} of ${BADGES.length}`} />
        </div>
      </section>

      <section>
        <SectionHeading title="Badges" subtitle={`${earned.length} of ${BADGES.length} earned`} />
        <div className="grid grid-cols-2 gap-3">
          {BADGES.map((badge) => {
            const has = earnedSet.has(badge.id);
            return (
              <div
                key={badge.id}
                className={`bps-card p-3 ${has ? "" : "opacity-55"}`}
                aria-label={`${badge.title}: ${has ? "earned" : "locked"}`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                    has ? "bg-gold/15" : "bg-muted"
                  }`}
                >
                  <Trophy className={`h-4.5 w-4.5 ${has ? "text-gold-foreground" : "text-muted-foreground"}`} aria-hidden="true" />
                </div>
                <p className="mt-2 text-sm font-extrabold text-foreground">{badge.title}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeading title="Quiz history" subtitle="Your latest results." />
        {state.quizResults.length === 0 ? (
          <EmptyState
            title="No quizzes yet"
            body="Finish a lesson quiz or the daily challenge and your results will appear here."
          />
        ) : (
          <div className="space-y-2">
            {state.quizResults.slice(0, 15).map((r) => {
              const pct = r.total > 0 ? Math.round((r.score / r.total) * 100) : 0;
              return (
                <div key={r.id} className="bps-card flex items-center gap-3 p-3">
                  <div
                    className={`flex h-10 w-12 shrink-0 flex-col items-center justify-center rounded-xl text-xs font-extrabold ${
                      pct >= 60 ? "bg-success/15 text-success" : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    {pct}%
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-foreground">{r.label}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {r.date} · {r.kind === "exam" ? "Module exam" : r.kind === "daily" ? "Daily challenge" : "Lesson quiz"}
                    </p>
                  </div>
                  <Chip tone="muted">
                    {r.score}/{r.total}
                  </Chip>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section>
        <SectionHeading title="Module progress" />
        <div className="space-y-2">
          {MODULES.map((m) => {
            const doneCount = m.lessons.filter((l) => done.has(lessonKey(m.id, l.id))).length;
            const pct = Math.round((doneCount / Math.max(1, m.lessons.length)) * 100);
            return (
              <Link
                key={m.id}
                to="/learn/$moduleId_"
                params={{ moduleId: m.id }}
                className="bps-card block p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-bold text-foreground">
                    {m.number}. {m.title}
                  </p>
                  <span className="text-xs font-extrabold text-muted-foreground">{pct}%</span>
                </div>
                <ProgressBar className="mt-2" value={pct} tone={pct === 100 ? "success" : "gold"} />
              </Link>
            );
          })}
        </div>
      </section>

      <p className="pb-2 text-center text-[11px] text-muted-foreground">
        All progress is stored only on this device. {hydrated ? "" : ""}
      </p>
    </div>
  );
}

function StatRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof BookOpen;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
        <Icon className="h-4 w-4 text-gold-foreground" aria-hidden="true" /> {label}
      </span>
      <span className="text-sm font-extrabold text-foreground">{value}</span>
    </div>
  );
}
