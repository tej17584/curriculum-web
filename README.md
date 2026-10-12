# Portfolio Website

_A modern, bilingual portfolio website with unique book-themed design_

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)

## About This Project

An elegant portfolio website featuring a book-inspired interface with smooth page transitions and full bilingual support (Spanish/English). Content is driven by locale JSON files under `src/locales/`.

## Key Features

- **Book-inspired UI** with chapter navigation and intro loader
- **Bilingual routes** (`/es`, `/en`) with session-persisted chapter when switching language
- **Dark/light theme** via `next-themes`
- **SEO** — sitemap, robots, Open Graph, JSON-LD Person
- **Security** — CSP and headers via `proxy.ts` middleware chain

## Technologies

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, shadcn/ui (button, badge, card)
- Framer Motion, next-themes, Vercel Analytics

## Running Locally

```bash
pnpm install
pnpm dev
```

Optional: set `NEXT_PUBLIC_SITE_URL` for canonical URLs in metadata (defaults to production Vercel URL).

## Scripts

- `pnpm dev` — development server
- `pnpm build` — production build
- `pnpm type-check` — TypeScript
- `pnpm test` — Jest unit tests
- `pnpm lint` — ESLint

## Project Structure

- `app/[lang]/` — localized page and metadata
- `src/components/chapters/` — CV chapter sections
- `src/components/cv-client.tsx` — client shell (loader, pagination, motion)
- `src/locales/` — Spanish and English copy
- `proxy.ts` — i18n + security middleware chain
