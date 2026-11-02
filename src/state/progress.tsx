import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { loadJSON, saveJSON, clearAll, todayKey, daysBetween } from "@/lib/storage";
import { XP } from "@/lib/gamification";

export interface QuizRecord {
  id: string;
  kind: "lesson" | "exam" | "daily";
  label: string;
  score: number;
  total: number;
  date: string;
}

export interface AppState {
  completedLessons: string[];
  quizResults: QuizRecord[];
  bookmarks: string[];
  notes: Record<string, { text: string; updated: string }>;
  streak: { current: number; longest: number; lastDay: string };
  settings: { darkMode: boolean };
  simulatorRuns: number;
  xp: number;
}

const FALLBACK: AppState = {
  completedLessons: [],
  quizResults: [],
  bookmarks: [],
  notes: {},
  streak: { current: 0, longest: 0, lastDay: "" },
  settings: { darkMode: false },
  simulatorRuns: 0,
  xp: 0,
};

interface ProgressContextValue {
  state: AppState;
  hydrated: boolean;
  completeLesson: (lessonKey: string) => void;
  recordQuiz: (record: Omit<QuizRecord, "id" | "date">, xpEarned: number) => void;
  toggleBookmark: (lessonKey: string) => void;
  saveNote: (lessonKey: string, text: string) => void;
  setDarkMode: (dark: boolean) => void;
  registerSimulatorRun: () => void;
  resetAll: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(FALLBACK);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate once after mount so SSR and first paint are identical.
  useEffect(() => {
    setState(loadJSON("state", FALLBACK));
    setHydrated(true);
  }, []);

  // Persist after every change once hydrated.
  useEffect(() => {
    if (hydrated) saveJSON("state", state);
  }, [state, hydrated]);

  // Daily learning streak: advance once per calendar day on app open.
  useEffect(() => {
    if (!hydrated) return;
    const today = todayKey();
    setState((s) => {
      if (s.streak.lastDay === today) return s;
      const gap = s.streak.lastDay ? daysBetween(s.streak.lastDay, today) : 99;
      const current = gap === 1 ? s.streak.current + 1 : 1;
      return {
        ...s,
        streak: {
          current,
          longest: Math.max(current, s.streak.longest),
          lastDay: today,
        },
      };
    });
  }, [hydrated]);

  // Dark mode class on <html>.
  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.classList.toggle("dark", state.settings.darkMode);
  }, [state.settings.darkMode, hydrated]);

  const completeLesson = useCallback((lessonKey: string) => {
    setState((s) => {
      if (s.completedLessons.includes(lessonKey)) return s;
      return {
        ...s,
        completedLessons: [...s.completedLessons, lessonKey],
        xp: s.xp + XP.lesson,
      };
    });
  }, []);

  const recordQuiz = useCallback(
    (record: Omit<QuizRecord, "id" | "date">, xpEarned: number) => {
      setState((s) => ({
        ...s,
        quizResults: [
          { ...record, id: `${record.kind}-${Date.now()}`, date: todayKey() },
          ...s.quizResults,
        ].slice(0, 60),
        xp: s.xp + xpEarned,
      }));
    },
    [],
  );

  const toggleBookmark = useCallback((lessonKey: string) => {
    setState((s) => ({
      ...s,
      bookmarks: s.bookmarks.includes(lessonKey)
        ? s.bookmarks.filter((b) => b !== lessonKey)
        : [lessonKey, ...s.bookmarks],
    }));
  }, []);

  const saveNote = useCallback((lessonKey: string, text: string) => {
    setState((s) => {
      const trimmed = text.trim();
      const notes = { ...s.notes };
      if (trimmed) notes[lessonKey] = { text: trimmed, updated: todayKey() };
      else delete notes[lessonKey];
      return { ...s, notes };
    });
  }, []);

  const setDarkMode = useCallback((dark: boolean) => {
    setState((s) => ({ ...s, settings: { ...s.settings, darkMode: dark } }));
  }, []);

  const registerSimulatorRun = useCallback(() => {
    setState((s) => ({ ...s, simulatorRuns: s.simulatorRuns + 1 }));
  }, []);

  const resetAll = useCallback(() => {
    clearAll();
    setState(FALLBACK);
  }, []);

  const value = useMemo<ProgressContextValue>(
    () => ({
      state,
      hydrated,
      completeLesson,
      recordQuiz,
      toggleBookmark,
      saveNote,
      setDarkMode,
      registerSimulatorRun,
      resetAll,
    }),
    [
      state,
      hydrated,
      completeLesson,
      recordQuiz,
      toggleBookmark,
      saveNote,
      setDarkMode,
      registerSimulatorRun,
      resetAll,
    ],
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressContextValue {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used inside ProgressProvider");
  return ctx;
}

/** "moduleId/lessonId" composite key helpers. */
export const lessonKey = (moduleId: string, lessonId: string) => `${moduleId}/${lessonId}`;
