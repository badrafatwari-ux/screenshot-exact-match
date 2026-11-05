import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { findModule, MODULES } from "@/data/modules";
import { lessonKey, useProgress } from "@/state/progress";
import { QuizRunner } from "@/components/QuizRunner";
import { ProgressBar, SectionHeading, Chip } from "@/components/common";
import { CheckCircle2, ChevronLeft, Clock, FileText, Lock } from "lucide-react";

export const Route = createFileRoute("/learn/$moduleId_")({
  head: () => ({
    meta: [
      { title: "Module — Basics Political Science" },
      {
        name: "description",
        content: "Module overview: lessons, key terms, and the module examination.",
      },
      { property: "og:title", content: "Module — Basics Political Science" },
      { property: "og:description", content: "Lessons, key terms, and the module examination." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ModulePage,
});

function ModulePage() {
  const { moduleId } = Route.useParams();
  const { state, recordQuiz } = useProgress();
  const [examOpen, setExamOpen] = useState(false);

  const module = findModule(moduleId);
  if (!module) {
    throw notFound();
  }

  const done = new Set(state.completedLessons);
  const doneCount = module.lessons.filter((l) => done.has(lessonKey(module.id, l.id))).length;
  const allLessonsDone = doneCount === module.lessons.length && module.lessons.length > 0;
  const examTaken = state.quizResults.some((r) => r.kind === "exam" && r.label.includes(module.title));
  const minutes = module.lessons.reduce((n, l) => n + l.minutes, 0);
  const idx = MODULES.findIndex((m) => m.id === module.id);
  const nextModule = MODULES[idx + 1];

  return (
    <div className="space-y-6 px-4 pt-6">
      <Link
        to="/learn"
        className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" /> All modules
      </Link>

      <header className="bps-navy-panel p-5">
        <p className="text-[11px] font-bold uppercase tracking-widest text-gold">
          Module {module.number}
        </p>
        <h1 className="mt-1 text-2xl font-extrabold leading-tight">{module.title}</h1>
        <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">{module.description}</p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Chip tone="gold">
            {doneCount} of {module.lessons.length} lessons
          </Chip>
          <Chip tone="navy">~{minutes} min total</Chip>
        </div>
        <ProgressBar
          className="mt-3"
          value={(doneCount / Math.max(1, module.lessons.length)) * 100}
          tone={allLessonsDone ? "success" : "gold"}
        />
      </header>

      <section>
        <SectionHeading title="Lessons" subtitle="Read, take the check quiz, then move on." />
        <div className="space-y-3">
          {module.lessons.map((lesson, i) => {
            const isDone = done.has(lessonKey(module.id, lesson.id));
            return (
              <Link
                key={lesson.id}
                to="/learn/$moduleId_/$lessonId"
                params={{ moduleId: module.id, lessonId: lesson.id }}
                className="bps-card block p-4 transition-shadow hover:shadow-[var(--shadow-lift)]"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-extrabold ${
                      isDone ? "bg-success/15 text-success" : "bg-primary/10 text-primary"
                    }`}
                  >
                    {isDone ? <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> : i + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-foreground">{lesson.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {lesson.level} · <Clock className="inline h-3 w-3" aria-hidden="true" />{" "}
                      {lesson.minutes} min
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeading title="Module examination" subtitle="Ten questions across the whole module." />
        <div className="bps-card p-4">
          {!allLessonsDone ? (
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Lock className="h-4 w-4 text-gold-foreground" aria-hidden="true" />
              Finish every lesson in this module to unlock the exam.
            </div>
          ) : !examOpen ? (
            <button
              onClick={() => setExamOpen(true)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              {examTaken ? "Retake the exam" : "Start the exam"}
            </button>
          ) : (
            <QuizRunner
              questions={module.exam}
              title={`${module.title} exam`}
              sourceLabel={`Module ${module.number}`}
              onFinish={(score, total) =>
                recordQuiz(
                  { kind: "exam", label: `${module.title} — Module Exam`, score, total },
                  score * 10,
                )
              }
            />
          )}
        </div>
      </section>

      {nextModule && (
        <Link
          to="/learn/$moduleId_"
          params={{ moduleId: nextModule.id }}
          className="bps-card flex items-center justify-between p-4"
        >
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              Up next
            </p>
            <p className="mt-0.5 font-bold text-foreground">
              Module {nextModule.number} · {nextModule.title}
            </p>
          </div>
          <span className="text-gold-foreground" aria-hidden="true">
            →
          </span>
        </Link>
      )}
    </div>
  );
}
