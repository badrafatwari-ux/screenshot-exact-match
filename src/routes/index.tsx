import { createFileRoute } from "@tanstack/react-router";
import { MODULES } from "@/data/modules";
import { lessonKey, useProgress } from "@/state/progress";
import { Link } from "@tanstack/react-router";
import { Chip, ProgressBar, ProgressRing, SectionHeading } from "@/components/common";
import { DailyChallengeCard, DailyConceptCard } from "@/components/DailyCards";
import { computeEarnedBadges } from "@/lib/gamification";
import {
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Flame,
  GraduationCap,
  Sparkles,
  Trophy,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Basics Political Science — Your Pocket Academy" },
      {
        name: "description",
        content:
          "Learning dashboard: continue your modules, read the daily political concept, take the daily knowledge challenge, and track your streak.",
      },
      { property: "og:title", content: "Basics Political Science — Your Pocket Academy" },
      {
        property: "og:description",
        content: "Continue learning politics: modules, daily concept, daily challenge, and your streak.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  const { state, hydrated, recordQuiz } = useProgress();

  // Continue-learning: first module with an unfinished lesson.
  const done = new Set(state.completedLessons);
  const continueModule = MODULES.find((m) => m.lessons.some((l) => !done.has(lessonKey(m.id, l.id))));
  const continueLesson = continueModule?.lessons.find((l) => !done.has(lessonKey(continueModule.id, l.id)));

  const totalLessons = MODULES.reduce((n, m) => n + m.lessons.length, 0);
  const completedPct = totalLessons > 0 ? Math.round((done.size / totalLessons) * 100) : 0;

  return (
    <div className="space-y-6 px-4 pt-6">
      {/* Welcome hero */}
      <section className="bps-navy-panel p-5">
        <p className="text-[11px] font-bold uppercase tracking-widest text-gold">
          Basics Political Science
        </p>
        <h1 className="mt-1 text-2xl font-extrabold leading-tight">
          Politics, made understandable.
        </h1>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-primary-foreground/80">
          A pocket academy for ordinary citizens: how power works, how systems differ, and how
          politics shapes your everyday life. Everything works offline.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
            <Flame className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {hydrated ? `${state.streak.current}-day streak` : "0-day streak"}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
            <Sparkles className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {hydrated ? `${state.xp} XP` : "0 XP"}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
            <BookOpen className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {hydrated ? `${done.size} of ${totalLessons} lessons` : "0 lessons"}
          </span>
        </div>
      </section>

      {/* Continue learning */}
      <section>
        <SectionHeading
          title="Continue learning"
          subtitle={continueModule ? `Module ${continueModule.number} · ${continueModule.title}` : undefined}
        />
        {continueModule && continueLesson ? (
          <Link
            to="/learn/$moduleId/$lessonId"
            params={{ moduleId: continueModule.id, lessonId: continueLesson.id }}
            className="bps-card block p-4 transition-shadow hover:shadow-[var(--shadow-lift)]"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15">
                <GraduationCap className="h-5 w-5 text-gold-foreground" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Next lesson
                </p>
                <p className="mt-0.5 truncate font-extrabold text-foreground">{continueLesson.title}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" aria-hidden="true" /> {continueLesson.minutes} min read
                </p>
              </div>
            </div>
            <ProgressBar
              className="mt-3"
              value={
                (done.size /
                  Math.max(
                    1,
                    MODULES.reduce((n, m) => n + m.lessons.length, 0),
                  )) *
                100
              }
            />
          </Link>
        ) : (
          <div className="bps-card p-4 text-sm text-muted-foreground">
            You have completed every lesson available. Try a module exam or the daily challenge.
          </div>
        )}
      </section>

      {/* Daily concept + daily challenge */}
      {hydrated && (
        <section className="space-y-4">
          <SectionHeading title="Today's learning" subtitle="Fresh each day, even offline." />
          <DailyConceptCard />
          <DailyChallengeCard
            onFinish={(score, total) =>
              recordQuiz(
                { kind: "daily", label: "Daily Knowledge Challenge", score, total },
                score * 4,
              )
            }
          />
        </section>
      )}

      {/* Recommended modules */}
      <section>
        <SectionHeading
          title="Learning modules"
          subtitle="Twelve modules, from first questions to critical thinking."
          action={
            <Link to="/learn" className="text-xs font-bold text-gold-foreground underline-offset-2 hover:underline">
              See all
            </Link>
          }
        />
        <div className="space-y-3">
          {MODULES.slice(0, 3).map((m) => {
            const doneCount = m.lessons.filter((l) => done.has(lessonKey(m.id, l.id))).length;
            return (
              <Link
                key={m.id}
                to="/learn/$moduleId"
                params={{ moduleId: m.id }}
                className="bps-card flex items-center gap-3 p-4 transition-shadow hover:shadow-[var(--shadow-lift)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-extrabold text-primary">
                  {m.number}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold text-foreground">{m.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{m.tagline}</p>
                  <ProgressBar className="mt-2" value={(doneCount / Math.max(1, m.lessons.length)) * 100} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Progress snapshot */}
      <section>
        <SectionHeading title="Your progress" />
        <div className="bps-card flex items-center gap-5 p-4">
          <ProgressRing value={completedPct}>
            <span className="text-xl font-extrabold text-foreground">{completedPct}%</span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              complete
            </span>
          </ProgressRing>
          <div className="min-w-0 flex-1 space-y-2">
            <SnapshotRow icon={CheckCircle2} label="Lessons completed" value={hydrated ? `${done.size}/${totalLessons}` : "—"} />
            <SnapshotRow icon={ClipboardCheck} label="Quizzes taken" value={hydrated ? String(state.quizResults.length) : "—"} />
            <SnapshotRow icon={Trophy} label="Badges earned" value={hydrated ? `${earnedBadgeCount(state)} of 11` : "—"} />
          </div>
        </div>
        <Link
          to="/progress"
          className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-input px-4 py-2.5 text-sm font-bold text-foreground"
        >
          <Award className="h-4 w-4 text-gold-foreground" aria-hidden="true" /> View full progress
        </Link>
      </section>

      <div className="px-1 pb-2 text-center text-[11px] leading-relaxed text-muted-foreground">
        <Chip tone="gold">Neutrality note</Chip>
        <p className="mt-2">
          This academy teaches how political systems work. It promotes no party, ideology, or
          government, and separates established facts from contested interpretations.
        </p>
      </div>

    </div>
  );
}

function SnapshotRow({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof CheckCircle2;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <Icon className="h-3.5 w-3.5 text-gold-foreground" aria-hidden="true" /> {label}
      </span>
      <span className="text-sm font-extrabold text-foreground">{value}</span>
    </div>
  );
}

/** Lazy: computed in parent scope to avoid importing gamification twice. */
function earnedBadgeCount(state: Parameters<typeof import("@/lib/gamification")["computeEarnedBadges"]>[0]): number {
  return computeEarnedBadges(state).length;
}
