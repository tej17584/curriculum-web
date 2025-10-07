This repository is a Next.js (app-router) front-end for a curriculum/CV site generated from v0.app. Keep guidance short and concrete so an AI coding agent can be productive immediately.

- Project type and key libs
  - Next.js 15 (app directory), React 19, TypeScript. See `package.json`.
  - Tailwind CSS (v4) and shadcn-style components; `components.json` config explains aliases and generated UI style.
  - Deployed via Vercel and auto-synced from v0.app (see `README.md`).

- Where to look first (big-picture files)
  - `app/layout.tsx` — root layout, fonts, global CSS, and `Analytics` injection.
  - `app/page.tsx` — main page wiring: uses `LanguageProvider` and imports `src/components/chapters/*`.
  - `src/components/` — UI and chapter components. `src/components/ui/` contains shadcn-style primitives.
  - `src/lib/language-context.tsx` — single source of truth for translations and `useLanguage()` hook.
  - `src/components/book-loader.tsx` — startup loading animation and example of client component patterns.
  - `public/` — images and assets used by the site.

- Important structural/conventions to preserve
  - App-directory server components are the default. Files that use React hooks or client-side state must include "use client" at the top (see `src/components/chapters/*` and `src/components/book-loader.tsx`).
  - Path aliasing: imports use `@/` which maps to `src/` (see `tsconfig.json` paths). Use that alias instead of relative deep paths.
  - Translations: edit `src/lib/language-context.tsx` — it stores the `translations` object keyed by string keys consumed by components (e.g. `t('chapterAbout')`).
  - Styling: global CSS is in `app/globals.css` and `styles/globals.css`; Tailwind config is implied by `components.json`.

- Build / dev / lint commands (use from repo root)
  - dev: npm run dev (or pnpm dev) — runs the Next dev server
  - build: npm run build — Next production build (note: `next.config.mjs` disables ESLint/TS errors during build)
  - start: npm run start — run built app
  - lint: npm run lint — run Next's linting
  - Notes: there is a `pnpm-lock.yaml` in the repo — CI or maintainers may use pnpm. If strict type-checking is required locally, run `npx tsc --noEmit`.

- Integration points / external dependencies
  - Vercel: deployed automatically from repo; analytics via `@vercel/analytics/next` in `app/layout.tsx`.
  - v0.app: repository is kept in sync with a v0 project (see `README.md`). Avoid making structural changes that conflict with v0-generated layout unless you intend to maintain them here.

- Small examples (copy/paste-friendly)
  - Using translation hook: import { useLanguage } from '@/lib/language-context'; const { t } = useLanguage(); t('chapterProjects')
  - Importing a component via alias: import { BookLoader } from '@/components/book-loader'

- Typical quick tasks and where to change them
  - Add a new section/chapter: create `src/components/chapters/chapter-X-*.tsx` and import in `app/page.tsx`.
  - Add translation strings: update `translations` in `src/lib/language-context.tsx` and use `t('yourKey')` in components.
  - Add global CSS or Tailwind utilities: edit `app/globals.css` or `styles/globals.css`.

- Gotchas for agents
  - The project relies on Next's app router: avoid moving UI that must be client-side into server-only files without adding "use client".
  - `next.config.mjs` sets `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` — a green build does not guarantee type- or lint-free code. Run `npx tsc --noEmit` and `npm run lint` during PR preparation.
  - Tailwind version here is 4.x; some community snippets assume Tailwind v3+ — verify class utilities if refactoring styles.

If anything in this file is unclear or you want extra sections (tests, CI steps, or example PR checklist), tell me which area to expand and I'll iterate.
