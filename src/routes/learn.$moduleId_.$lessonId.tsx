import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { findLesson } from "@/data/modules";
import { lessonKey, useProgress } from "@/state/progress";
import { QuizRunner } from "@/components/QuizRunner";
import { Chip, SectionHeading } from "@/components/common";
import {
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Lightbulb,
  NotebookPen,
  Target,
} from "lucide-react";

export const Route = createFileRoute("/learn/$moduleId_/$lessonId")({
  head: () => ({
    meta: [
      { title: "Lesson — Basics Political Science" },
      {
        name: "description",
        content: "Read the lesson, learn the key terms, and take the knowledge check.",
      },
      { property: "og:title", content: "Lesson — Basics Political Science" },
      { property: "og:description", content: "Read the lesson and take the knowledge check." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LessonPage,
});

function LessonPage() {
  const { moduleId, lessonId } = Route.useParams();
  const { state, completeLesson, recordQuiz, toggleBookmark, saveNote } = useProgress();
  const [noteDraft, setNoteDraft] = useState<string | null>(null);
  const [noteSavedFlash, setNoteSavedFlash] = useState(false);

  const found = findLesson(moduleId, lessonId);
  if (!found) {
    throw notFound();
  }
  const { module, lesson, index } = found;

  const key = lessonKey(module.id, lesson.id);
  const isDone = state.completedLessons.includes(key);
  const isBookmarked = state.bookmarks.includes(key);
  const note = state.notes[key];
  const draft = noteDraft ?? note?.text ?? "";
  const prevLesson = index > 0 ? module.lessons[index - 1] : undefined;
  const nextLesson = index < module.lessons.length - 1 ? module.lessons[index + 1] : undefined;

  function persistNote() {
    saveNote(key, draft);
    setNoteSavedFlash(true);
    window.setTimeout(() => setNoteSavedFlash(false), 1800);
  }

  return (
    <div className="space-y-6 px-4 pt-6">
      <Link
        to="/learn/$moduleId_"
        params={{ moduleId: module.id }}
        className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Module {module.number}
      </Link>

      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <Chip tone="navy">
            Lesson {index + 1} of {module.lessons.length}
          </Chip>
          <Chip tone="muted">{lesson.level}</Chip>
          <Chip tone="muted">
            <Clock className="h-3 w-3" aria-hidden="true" /> {lesson.minutes} min
          </Chip>
          {isDone && <Chip tone="success">Completed</Chip>}
        </div>
        <div className="flex items-start justify-between gap-3">
          <h1 className="text-2xl font-extrabold leading-tight text-foreground">{lesson.title}</h1>
          <button
            onClick={() => toggleBookmark(key)}
            aria-label={isBookmarked ? "Remove bookmark" : "Bookmark this lesson"}
            className="shrink-0 rounded-xl border border-input p-2.5"
          >
            {isBookmarked ? (
              <BookmarkCheck className="h-5 w-5 text-gold-foreground" aria-hidden="true" />
            ) : (
              <Bookmark className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
            )}
          </button>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{lesson.intro}</p>
      </header>

      <section className="bps-card p-4">
        <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-gold-foreground">
          <Target className="h-4 w-4" aria-hidden="true" /> What you will learn
        </p>
        <ul className="mt-2 space-y-1.5">
          {lesson.objectives.map((o) => (
            <li key={o} className="flex gap-2 text-sm text-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              {o}
            </li>
          ))}
        </ul>
      </section>

      <article className="bps-card space-y-5 p-5">
        {lesson.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-extrabold tracking-tight text-foreground">{section.heading}</h2>
            <div className="lesson-prose mt-2 text-sm text-foreground/90">
              {section.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            {section.callout && (
              <div className="mt-3 rounded-xl border border-gold/40 bg-gold/10 p-3">
                <p className="text-sm font-extrabold text-gold-foreground">{section.callout.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground">{section.callout.body}</p>
              </div>
            )}
            {section.table && (
              <div className="bps-scroll-x mt-3 rounded-xl border border-border">
                <table className="w-full min-w-[26rem] text-left text-xs">
                  <thead>
                    <tr className="bg-muted">
                      {section.table.headers.map((h) => (
                        <th key={h} className="px-3 py-2 font-extrabold text-foreground">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.rows.map((row, r) => (
                      <tr key={r} className="border-t border-border">
                        {row.map((cell, c) => (
                          <td key={c} className="px-3 py-2 align-top text-muted-foreground">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}
      </article>

      <section>
        <SectionHeading title="Key terms" subtitle="The vocabulary of this lesson." />
        <div className="space-y-2">
          {lesson.keyTerms.map((t) => (
            <div key={t.term} className="bps-card p-3">
              <p className="text-sm font-extrabold text-foreground">{t.term}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{t.definition}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading title="Real-world examples" />
        <div className="space-y-3">
          {lesson.examples.map((ex) => (
            <div key={ex.title} className="bps-card p-4">
              <p className="flex items-center gap-2 text-sm font-extrabold text-foreground">
                <Lightbulb className="h-4 w-4 text-gold" aria-hidden="true" /> {ex.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{ex.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bps-navy-panel p-5">
        <p className="text-[11px] font-bold uppercase tracking-widest text-gold">Takeaways</p>
        <ul className="mt-2 space-y-2">
          {lesson.takeaways.map((t) => (
            <li key={t} className="flex gap-2 text-sm text-primary-foreground/90">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeading title="Knowledge check" subtitle="Instant feedback — wrong answers teach too." />
        <QuizRunner
          questions={lesson.quiz}
          title="Check quiz"
          sourceLabel={`${lesson.title}`}
          onFinish={(score, total) =>
            recordQuiz(
              { kind: "lesson", label: `${lesson.title} — Quiz`, score, total },
              score * 5,
            )
          }
        />
      </section>

      <section>
        <SectionHeading title="Your note" subtitle="Private, stored only on this device." />
        <div className="bps-card p-4">
          <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
            <NotebookPen className="h-3.5 w-3.5 text-gold-foreground" aria-hidden="true" /> Write what
            stuck with you.
          </div>
          <textarea
            value={draft}
            onChange={(e) => setNoteDraft(e.target.value)}
            placeholder="e.g. The difference between authority and power finally makes sense…"
            rows={4}
            className="mt-2 w-full resize-y rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <div className="mt-2 flex items-center gap-3">
            <button
              onClick={persistNote}
              className="rounded-xl bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
            >
              Save note
            </button>
            {noteSavedFlash && <span className="text-xs font-bold text-success">Saved.</span>}
          </div>
        </div>
      </section>

      <section className="space-y-3">
        {!isDone && (
          <button
            onClick={() => completeLesson(key)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3.5 text-sm font-bold text-primary-foreground"
          >
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" /> Mark lesson complete (+30 XP)
          </button>
        )}
        <div className="grid grid-cols-2 gap-3">
          {prevLesson ? (
            <Link
              to="/learn/$moduleId_/$lessonId"
              params={{ moduleId: module.id, lessonId: prevLesson.id }}
              className="bps-card flex items-center gap-1.5 p-3 text-xs font-bold text-foreground"
            >
              <ChevronLeft className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <span className="truncate">{prevLesson.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {nextLesson ? (
            <Link
              to="/learn/$moduleId_/$lessonId"
              params={{ moduleId: module.id, lessonId: nextLesson.id }}
              className="bps-card flex items-center justify-end gap-1.5 p-3 text-right text-xs font-bold text-foreground"
            >
              <span className="truncate">{nextLesson.title}</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            </Link>
          ) : (
            <Link
              to="/learn/$moduleId_"
              params={{ moduleId: module.id }}
              className="bps-card flex items-center justify-end gap-1.5 p-3 text-right text-xs font-bold text-foreground"
            >
              <span className="truncate">Module exam</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
