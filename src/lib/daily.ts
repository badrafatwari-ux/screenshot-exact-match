import { DICTIONARY } from "@/data/dictionary";
import { allQuestions } from "@/data/modules";
import type { QuizQuestion } from "@/data/types";

export function dayOfYear(date: Date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date.getTime() - start.getTime()) / 86400000);
}

/** Deterministic PRNG so "daily" content is stable for the whole day. */
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function seededShuffle<T>(items: T[], seed: number): T[] {
  const rand = mulberry32(seed);
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    const tmp = arr[i]!;
    arr[i] = arr[j]!;
    arr[j] = tmp;
  }
  return arr;
}

/** The Daily Political Concept, stable per calendar day. */
export function dailyConcept() {
  const day = dayOfYear();
  return DICTIONARY[day % DICTIONARY.length];
}

/** The Daily Knowledge Challenge: 5 questions chosen deterministically per day. */
export function dailyChallengeQuestions(count = 5): QuizQuestion[] {
  const pool = allQuestions();
  const day = dayOfYear();
  const shuffled = seededShuffle(pool, day * 2654435761);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
