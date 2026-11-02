/**
 * Centralized, versioned local data management.
 * Safe JSON parsing, default merging, and storage error handling.
 * Every persisted concern lives in its own versioned key.
 */

const PREFIX = "bps";
export const STATE_VERSION = 1;

function storageKey(key: string): string {
  return `${PREFIX}.v${STATE_VERSION}.${key}`;
}

/** Load a JSON value, falling back to the provided default on any failure. */
export function loadJSON<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(storageKey(key));
    if (!raw) return fallback;
    const parsed: unknown = JSON.parse(raw);
    if (parsed === null || typeof parsed !== "object") return fallback;
    // Merge so new fields added by app updates keep their defaults.
    if (Array.isArray(fallback) || Array.isArray(parsed)) return parsed as T;
    return { ...(fallback as object), ...(parsed as object) } as T;
  } catch {
    return fallback;
  }
}

/** Persist a value; storage failures are swallowed so the app keeps working in-memory. */
export function saveJSON<T>(key: string, value: T): void {
  try {
    window.localStorage.setItem(storageKey(key), JSON.stringify(value));
  } catch {
    // Storage full or unavailable (private mode): stay silent, app remains usable.
  }
}

export function removeKey(key: string): void {
  try {
    window.localStorage.removeItem(storageKey(key));
  } catch {
    // ignore
  }
}

/** Clear every app-managed key (used by "Reset progress"). */
export function clearAll(): void {
  try {
    const doomed: string[] = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const k = window.localStorage.key(i);
      if (k && k.startsWith(`${PREFIX}.`)) doomed.push(k);
    }
    doomed.forEach((k) => window.localStorage.removeItem(k));
  } catch {
    // ignore
  }
}

/** Local date key "yyyy-mm-dd" for streaks and daily content. */
export function todayKey(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, "0");
  const d = `${date.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function daysBetween(from: string, to: string): number {
  const a = new Date(`${from}T00:00:00`);
  const b = new Date(`${to}T00:00:00`);
  return Math.round((b.getTime() - a.getTime()) / 86400000);
}
