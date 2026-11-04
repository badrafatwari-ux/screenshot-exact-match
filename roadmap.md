# Roadmap — Basics Political Science

Fully offline, mobile-first political science academy. No backend; localStorage only.

## Done
- Design system (navy/gold/paper, dark mode) in `src/styles.css`
- Storage layer (`src/lib/storage.ts`), progress state (`src/state/progress.tsx`)
- Gamification: XP, levels, badges (`src/lib/gamification.ts`), daily logic (`src/lib/daily.ts`)
- Quiz engine `src/components/QuizRunner.tsx` (mc / tf / matching), common UI
- Political dictionary — 100+ terms (`src/data/dictionary.ts`)
- Modules 1–2 (`src/data/modules/m01.ts`, `m02.ts`)

## In progress
- [ ] Route skeleton: home, learn (+module, lesson), explore (+6 tools), progress, profile
- [ ] Explore data + tools: dictionary, simulator, comparison, timeline, thinkers, power structure
- [ ] Modules 3–12 content (3 lessons + exam each), wired into `src/data/modules/index.ts`

## Notes
- Routing is TanStack Start (platform-fixed); app data is bundled/local per spec.
- Route naming uses un-nesting (`learn.$moduleId_.tsx`) so pages are independent.
- Every route file needs its own head() metadata.
