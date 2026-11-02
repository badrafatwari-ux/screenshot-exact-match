/** Shared content types for the bundled learning data. */

export type Level = "beginner" | "intermediate" | "advanced";

export interface QuizOption {
  label: string;
  /** Shown when the learner picks this wrong option (or the right one). */
  feedback: string;
}

export interface QuizQuestion {
  id: string;
  type: "mc" | "tf" | "matching";
  question: string;
  /** Multiple-choice / true-false options; first option is NOT implicitly correct. */
  options?: QuizOption[];
  correctIndex?: number;
  /** For matching: left concepts and right definitions. */
  pairs?: { left: string; right: string }[];
  explanation: string;
}

export interface LessonSection {
  heading: string;
  body: string[];
  callout?: { title: string; body: string };
  table?: { headers: string[]; rows: string[][] };
}

export interface Lesson {
  id: string;
  title: string;
  level: Level;
  minutes: number;
  objectives: string[];
  intro: string;
  sections: LessonSection[];
  keyTerms: { term: string; definition: string }[];
  examples: { title: string; body: string }[];
  takeaways: string[];
  quiz: QuizQuestion[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  tagline: string;
  description: string;
  lessons: Lesson[];
  exam: QuizQuestion[];
}
