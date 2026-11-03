import type { AppState } from "@/state/progress";
import { MODULES } from "@/data/modules";

export const XP = {
  lesson: 30,
  quizCorrect: 5,
  examCorrect: 10,
  dailyChallengeCorrect: 4,
  simulator: 15,
} as const;

export const TOTAL_LESSONS = MODULES.reduce((n, m) => n + m.lessons.length, 0);

export interface LevelDef {
  min: number;
  title: string;
}

export const LEVELS: LevelDef[] = [
  { min: 0, title: "Curious Citizen" },
  { min: 150, title: "Apprentice of Politics" },
  { min: 400, title: "Student of the State" },
  { min: 750, title: "Policy Analyst" },
  { min: 1200, title: "Political Scholar" },
  { min: 1800, title: "Master of the Polis" },
];

export function levelFor(xp: number): { level: number; title: string } {
  let idx = 0;
  for (let i = 0; i < LEVELS.length; i++) {
    const def = LEVELS[i]!;
    if (xp >= def.min) idx = i;
  }
  return { level: idx + 1, title: LEVELS[idx]!.title };
}

export function nextLevelProgress(xp: number): { pct: number; nextTitle: string; remaining: number } {
  let current = 0;
  for (let i = 0; i < LEVELS.length; i++) {
    const def = LEVELS[i]!;
    if (xp >= def.min) current = i;
  }
  const next = LEVELS[current + 1];
  if (!next) return { pct: 100, nextTitle: "", remaining: 0 };
  const floor = LEVELS[current]!.min;
  const pct = Math.round(((xp - floor) / (next.min - floor)) * 100);
  return { pct: Math.min(100, Math.max(0, pct)), nextTitle: next.title, remaining: next.min - xp };
}

export interface BadgeDef {
  id: string;
  title: string;
  description: string;
}

export const BADGES: BadgeDef[] = [
  { id: "first-lesson", title: "First Steps", description: "Complete your first lesson" },
  { id: "five-lessons", title: "Getting Serious", description: "Complete 5 lessons" },
  { id: "fifteen-lessons", title: "Committed Learner", description: "Complete 15 lessons" },
  { id: "half-way", title: "Halfway Scholar", description: "Complete half of all lessons" },
  { id: "all-lessons", title: "Full Curriculum", description: "Complete every lesson" },
  { id: "first-module", title: "Module Master", description: "Finish all lessons of one module" },
  { id: "three-modules", title: "Broad Thinker", description: "Finish 3 complete modules" },
  { id: "perfect-quiz", title: "Flawless", description: "Score 100% on any quiz or exam" },
  { id: "exam-pass", title: "Examined", description: "Pass your first module examination" },
  { id: "streak-3", title: "Building Momentum", description: "3-day learning streak" },
  { id: "streak-7", title: "Weekly Thinker", description: "7-day learning streak" },
  { id: "first-simulator", title: "In the Hot Seat", description: "Complete a scenario simulation" },
  { id: "first-note", title: "Annotation", description: "Write your first personal note" },
];

export function computeEarnedBadges(state: AppState): string[] {
  const earned: string[] = [];
  const done = new Set(state.completedLessons);
  const completedModules = MODULES.filter((m) =>
    m.lessons.every((l) => done.has(`${m.id}/${l.id}`)),
  ).length;
  const push = (id: string, cond: boolean) => cond && earned.push(id);

  push("first-lesson", done.size >= 1);
  push("five-lessons", done.size >= 5);
  push("fifteen-lessons", done.size >= 15);
  push("half-way", done.size >= Math.ceil(TOTAL_LESSONS / 2));
  push("all-lessons", done.size >= TOTAL_LESSONS && TOTAL_LESSONS > 0);
  push("first-module", completedModules >= 1);
  push("three-modules", completedModules >= 3);
  push(
    "perfect-quiz",
    state.quizResults.some((r) => r.total > 0 && r.score === r.total),
  );
  push(
    "exam-pass",
    state.quizResults.some((r) => r.kind === "exam" && r.score >= Math.ceil(r.total * 0.6)),
  );
  push("streak-3", state.streak.longest >= 3);
  push("streak-7", state.streak.longest >= 7);
  push("first-simulator", state.simulatorRuns >= 1);
  push("first-note", Object.keys(state.notes).length >= 1);
  return earned;
}
