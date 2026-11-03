import { DICTIONARY } from "@/data/dictionary";

import { m01 } from "./m01";
// Modules are appended here as content is added: m02..m12.
import { m02 } from "./m02";

import type { Module, QuizQuestion } from "@/data/types";

export const MODULES: Module[] = [m01, m02];

export function allQuestions(): QuizQuestion[] {
  const pool: QuizQuestion[] = [];
  for (const m of MODULES) {
    for (const l of m.lessons) pool.push(...l.quiz);
    pool.push(...m.exam);
  }
  return pool;
}

export function findModule(id: string): Module | undefined {
  return MODULES.find((m) => m.id === id);
}

export function findLesson(
  moduleId: string,
  lessonId: string,
): { module: Module; lesson: Module["lessons"][number]; index: number } | undefined {
  const module = findModule(moduleId);
  if (!module) return undefined;
  const index = module.lessons.findIndex((l) => l.id === lessonId);
  if (index === -1) return undefined;
  return { module, lesson: module.lessons[index]!, index };
}

export const TOTAL_LESSON_COUNT = MODULES.reduce((n, m) => n + m.lessons.length, 0);

export { DICTIONARY };
