import { createFileRoute, Link } from "@tanstack/react-router";
import { MODULES, TOTAL_LESSON_COUNT } from "@/data/modules";
import { lessonKey, useProgress } from "@/state/progress";
import { ProgressBar, SectionHeading, Chip } from "@/components/common";
import { BookOpen, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/learn")({
  head: () => ({
    meta: [
      { title: "Learning Modules — Basics Political Science" },
      {
        name: "description",
        content:
          "All twelve learning modules: power, political philosophy, systems, democracy, elections, policy, and critical thinking. Read offline, track progress.",
      },
      { property: "og:title", content: "Learning Modules — Basics Political Science" },
      {
        property: "og:description",
        content: "Twelve structured modules, from first questions to critical thinking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LearnIndex,
});

function LearnIndex() {
  const { state } = useProgress();
  const done = new Set(state.completedLessons);

  return (
    <div className="space-y-6 px-4 pt-6">
      <header className="bps-navy-panel p-5">
        <p className="text-[11px] font-bold uppercase tracking-widest text-gold">Curriculum</p>
        <h1 className="mt-1 text-2xl font-extrabold leading-tight">Learning modules</h1>
        <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
          Twelve modules that build on each other — start anywhere, but the order helps. Each module
          ends with an exam.
        </p>
        <div className="mt-3">
          <Chip tone="gold">
            {done.size} of {TOTAL_LESSON_COUNT} lessons completed
          </Chip>
        </div>
      </header>

      <section>
        <SectionHeading title="All modules" subtitle="Lessons, key terms, examples, and an exam." />
        <div className="space-y-3">
          {MODULES.map((m) => {
            const doneCount = m.lessons.filter((l) => done.has(lessonKey(m.id, l.id))).length;
            const complete = doneCount === m.lessons.length && m.lessons.length > 0;
            const minutes = m.lessons.reduce((n, l) => n + l.minutes, 0);
            return (
              <Link
                key={m.id}
                to="/learn/$moduleId_"
                params={{ moduleId: m.id }}
                className="bps-card block p-4 transition-shadow hover:shadow-[var(--shadow-lift)]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-extrabold text-primary">
                    {m.number}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="truncate font-extrabold text-foreground">{m.title}</p>
                      {complete && <CheckCircle2 className="h-4 w-4 shrink-0 text-success" aria-hidden="true" />}
                    </div>
                    <p className="truncate text-xs text-muted-foreground">{m.tagline}</p>
                    <p className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-muted-foreground">
                      <BookOpen className="h-3 w-3" aria-hidden="true" /> {m.lessons.length} lessons
                      <span aria-hidden="true">·</span>
                      <Clock className="h-3 w-3" aria-hidden="true" /> ~{minutes} min
                    </p>
                    <ProgressBar
                      className="mt-2"
                      value={(doneCount / Math.max(1, m.lessons.length)) * 100}
                      tone={complete ? "success" : "gold"}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
