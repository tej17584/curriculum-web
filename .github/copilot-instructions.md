This repository is a Next.js (app-router) front-end for a curriculum/CV site generated from v0.app. Keep guidance short and concrete so an AI coding agent can be productive immediately.

- Project type and key libs
  - Next.js 15 (app directory), React 19, TypeScript. See `package.json`.
  - Tailwind CSS (v4) and shadcn-style components; `components.json` config explains aliases and generated UI style.
  - Deployed via Vercel and auto-synced from v0.app (see `README.md`).
  - i18n: Uses Next.js dynamic routes with `[lang]` parameter. Middleware handles locale detection and redirects.

- Where to look first (big-picture files)
  - `app/layout.tsx` — root layout, minimal HTML wrapper.
  - `app/[lang]/layout.tsx` — locale-specific layout, metadata, SEO, uses `lang` param.
  - `app/[lang]/page.tsx` — main page: server component that loads `dict` via `getDictionary(lang)` and passes to chapter components.
  - `src/components/chapters/*` — chapter components that receive `dict` prop for translations.
  - `src/hooks/getDictionary.ts` — loads translation JSON files, memoized with React.cache.
  - `src/locales/es.json` & `en.json` — nested translation files by component.
  - `middleware.ts` & `src/middlewares/i18n.ts` — i18n middleware for locale detection and redirects.
  - `src/components/book-loader.tsx` — startup loading animation and example of client component patterns.
  - `public/` — images and assets used by the site.

- Important structural/conventions to preserve
  - App-directory server components are the default. Files that use React hooks or client-side state must include "use client" at the top.
  - Path aliasing: imports use `@/` which maps to `src/` (see `tsconfig.json` paths). Use that alias instead of relative deep paths.
  - Translations: edit `src/locales/es.json` or `en.json` — nested by component. Access via `dict` prop passed from server component.
  - Dynamic params: ALWAYS await `params` and `searchParams` before using their properties (Next.js 15 requirement).
  - Styling: global CSS is in `app/globals.css` and `styles/globals.css`; Tailwind config is implied by `components.json`.

- Build / dev / lint commands (use from repo root)
  - dev: npm run dev (or pnpm dev) — runs the Next dev server
  - build: npm run build — Next production build (note: `next.config.mjs` disables ESLint/TS errors during build)
  - start: npm run start — run built app
  - lint: npm run lint — run Next's linting (uses eslint-config-next)
  - test: npm run test — run Jest tests; npm run test:watch — watch mode; npm run test:coverage — with coverage
  - format: npm run format — run Prettier on all files
  - Notes: there is a `pnpm-lock.yaml` in the repo — CI or maintainers may use pnpm. If strict type-checking is required locally, run `npx tsc --noEmit`.

- Integration points / external dependencies
  - Vercel: deployed automatically from repo; analytics via `@vercel/analytics/next` in `app/layout.tsx`.
  - v0.app: repository is kept in sync with a v0 project (see `README.md`). Avoid making structural changes that conflict with v0-generated layout unless you intend to maintain them here.
  - Console Ninja: Wallaby debugging tool. Configured via `.console-ninja` to exclude server components (prevents Next.js dynamic API errors).

- Small examples (copy/paste-friendly)
  - Using dictionary in component: const { dict }: { dict: Dictionary } = props; then access dict.chapters.about
  - Importing a component via alias: import { BookLoader } from '@/components/book-loader'
  - Awaiting dynamic params: const { lang } = await params; (required in Next.js 15)
  - Importing a component via alias: import { BookLoader } from '@/components/book-loader'

- Typical quick tasks and where to change them
  - Add a new section/chapter: create `src/components/chapters/chapter-X-*.tsx` and import in `app/[lang]/page.tsx`.
  - Add translation strings: update `src/locales/es.json` and `en.json` with nested keys by component.
  - Add global CSS or Tailwind utilities: edit `app/globals.css` or `styles/globals.css`.

- Gotchas for agents
  - The project relies on Next's app router: avoid moving UI that must be client-side into server-only files without adding "use client".
  - `next.config.mjs` sets `typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` — a green build does not guarantee type- or lint-free code. Run `npx tsc --noEmit` and `npm run lint` during PR preparation.
  - Tailwind version here is 4.x; some community snippets assume Tailwind v3+ — verify class utilities if refactoring styles.
  - Jest uses `tsconfig.jest.json` (extends main tsconfig but sets `jsx: "react-jsx"`) so tests can compile TSX while Next.js uses `jsx: "preserve"`.
  - ESLint uses `next/core-web-vitals` config; `@next/next/no-img-element` is disabled because project uses unoptimized images.
  - Console Ninja may instrument code at runtime. If you see errors related to dynamic params serialization, check `.console-ninja` config or disable the extension.

If anything in this file is unclear or you want extra sections (tests, CI steps, or example PR checklist), tell me which area to expand and I'll iterate.
