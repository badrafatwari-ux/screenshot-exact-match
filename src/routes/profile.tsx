import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useProgress } from "@/state/progress";
import { LEVELS, BADGES, computeEarnedBadges, XP } from "@/lib/gamification";
import { SectionHeading, Chip, EmptyState } from "@/components/common";
import {
  Download,
  Moon,
  ShieldCheck,
  Sun,
  Trash2,
  WifiOff,
  BookMarked,
  RotateCcw,
} from "lucide-react";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile & Settings — Basics Political Science" },
      {
        name: "description",
        content:
          "Appearance, your saved bookmarks and notes, data export and reset, and what this academy stands for.",
      },
      { property: "og:title", content: "Profile & Settings — Basics Political Science" },
      {
        property: "og:description",
        content: "Settings, bookmarks, notes, and data controls — everything stays on your device.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const { state, hydrated, setDarkMode, resetAll, toggleBookmark } = useProgress();
  const [confirmReset, setConfirmReset] = useState(false);
  const [exported, setExported] = useState(false);

  function exportData() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "basics-political-science-progress.json";
    a.click();
    URL.revokeObjectURL(url);
    setExported(true);
    window.setTimeout(() => setExported(false), 2500);
  }

  return (
    <div className="space-y-6 px-4 pt-6">
      <header className="bps-navy-panel p-5">
        <p className="text-[11px] font-bold uppercase tracking-widest text-gold">Your academy</p>
        <h1 className="mt-1 text-2xl font-extrabold leading-tight">Profile &amp; settings</h1>
        <p className="mt-2 text-sm text-primary-foreground/80">
          No account, no sign-up. Everything lives on this device.
        </p>
      </header>

      <section>
        <SectionHeading title="Appearance" />
        <div className="bps-card flex items-center justify-between gap-3 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              {state.settings.darkMode ? (
                <Moon className="h-5 w-5 text-primary" aria-hidden="true" />
              ) : (
                <Sun className="h-5 w-5 text-primary" aria-hidden="true" />
              )}
            </div>
            <div>
              <p className="text-sm font-extrabold text-foreground">Dark mode</p>
              <p className="text-xs text-muted-foreground">Easier on the eyes at night.</p>
            </div>
          </div>
          <button
            role="switch"
            aria-checked={state.settings.darkMode}
            aria-label="Toggle dark mode"
            onClick={() => setDarkMode(!state.settings.darkMode)}
            className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
              state.settings.darkMode ? "bg-gold" : "bg-muted"
            }`}
          >
            <span
              className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-all ${
                state.settings.darkMode ? "left-[1.4rem]" : "left-0.5"
              }`}
            />
          </button>
        </div>
      </section>

      <section>
        <SectionHeading title="Saved" subtitle={`${state.bookmarks.length} bookmarks · ${Object.keys(state.notes).length} notes`} />
        {state.bookmarks.length === 0 && Object.keys(state.notes).length === 0 ? (
          <EmptyState
            title="Nothing saved yet"
            body="Bookmark lessons or write notes while reading — they collect here."
          />
        ) : (
          <div className="space-y-2">
            {state.bookmarks.map((key) => {
              const [moduleId, lessonId] = key.split("/");
              const note = state.notes[key];
              return (
                <div key={key} className="bps-card flex items-center gap-3 p-3">
                  <BookMarked className="h-4 w-4 shrink-0 text-gold-foreground" aria-hidden="true" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-foreground">
                      {moduleId} / {lessonId}
                    </p>
                    {note && <p className="truncate text-xs text-muted-foreground">{note.text}</p>}
                  </div>
                  <button
                    onClick={() => toggleBookmark(key)}
                    className="rounded-lg border border-input px-2.5 py-1 text-[11px] font-bold text-muted-foreground"
                    aria-label={`Remove bookmark ${key}`}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section>
        <SectionHeading title="Your data" subtitle="Nothing leaves this device — no account required." />
        <div className="bps-card space-y-3 p-4">
          <button
            onClick={exportData}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-input px-4 py-2.5 text-sm font-bold text-foreground"
          >
            <Download className="h-4 w-4 text-gold-foreground" aria-hidden="true" />
            Export my progress (JSON)
          </button>
          {exported && <p className="text-center text-xs font-bold text-success">Download started.</p>}
          {!confirmReset ? (
            <button
              onClick={() => setConfirmReset(true)}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-destructive/40 px-4 py-2.5 text-sm font-bold text-destructive"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" /> Reset all progress
            </button>
          ) : (
            <div className="rounded-xl border border-destructive/40 bg-destructive/5 p-3">
              <p className="text-sm font-bold text-destructive">
                This erases every lesson, quiz, badge, and note on this device.
              </p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => {
                    resetAll();
                    setConfirmReset(false);
                  }}
                  className="flex-1 rounded-xl bg-destructive px-3 py-2 text-sm font-bold text-destructive-foreground"
                >
                  Yes, erase everything
                </button>
                <button
                  onClick={() => setConfirmReset(false)}
                  className="flex-1 rounded-xl border border-input px-3 py-2 text-sm font-bold text-foreground"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section>
        <SectionHeading title="How this academy works" />
        <div className="bps-card space-y-3 p-4">
          <FeatureRow
            icon={WifiOff}
            title="Fully offline"
            body="Every lesson, quiz, and tool is bundled in the app. No internet needed after the first load."
          />
          <FeatureRow
            icon={ShieldCheck}
            title="Private by design"
            body="Progress, notes, and bookmarks never leave your device. There is no account and no tracking."
          />
          <FeatureRow
            icon={Moon}
            title="Neutrality"
            body="We teach how political systems work, not which one to prefer. Facts are separated from contested interpretations."
          />
        </div>
      </section>

      <section>
        <SectionHeading title="About" />
        <div className="bps-card p-4">
          <p className="text-sm font-extrabold text-foreground">Basics Political Science</p>
          <p className="mt-1 text-sm text-muted-foreground">
            A pocket academy for ordinary citizens. {MODULE_SUMMARY}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Chip tone="gold">{LEVELS.length} levels</Chip>
            <Chip tone="navy">{BADGES.length} badges</Chip>
            <Chip tone="muted">+{XP.lesson} XP per lesson</Chip>
          </div>
        </div>
      </section>
    </div>
  );
}

const MODULE_SUMMARY =
  "Twelve modules, six learning tools, and a 100-term political dictionary — built to make politics understandable.";

function FeatureRow({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof WifiOff;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-4.5 w-4.5 text-primary" aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-extrabold text-foreground">{title}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}
