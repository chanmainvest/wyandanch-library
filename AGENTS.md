# AGENTS.md

## Project Overview

Wyandanch Library is a Next.js 14 static site for open source finance education. It presents a structured investing and quantitative finance curriculum with progressive levels, topical tracks, a reading queue, and MDX article pages.

The app is intentionally static: `next.config.mjs` uses `output: 'export'` and unoptimized images, so changes should remain compatible with static export and GitHub Pages-style hosting.

## Stack

- Node.js >=22 (developed on v25.2.1). `@types/node` is pinned to `^22`.
- Next.js App Router with React 18 and strict TypeScript.
- MDX content through `@next/mdx`, `@mdx-js/react`, and `remark-gfm`.
- Global styling in `app/globals.css`, built around a monochrome, terminal-inspired design system.
- Path alias `@/*` maps to the repository root.

## Important Paths

- `app/page.tsx` - home page and main landing experience.
- `app/curriculum/page.tsx` - level-based curriculum view.
- `app/track/[slug]/page.tsx` - track-specific curriculum pages.
- `app/read/[slug]/page.tsx` - static reading pages loaded from MDX.
- `app/reading-queue/page.tsx` - planned future readings.
- `components/` - reusable UI and article/MDX presentation components.
- `content/level-N/*.mdx` - reading content grouped by curriculum level.
- `lib/curriculum.ts` - source of truth for tracks, topics, reading metadata, level grouping, and the reading queue.
- `lib/mdx-map.ts` - explicit slug-to-MDX dynamic import map used by article pages.
- `scripts/generate-og.mjs` - regenerates `public/og.svg` and `public/og.png`.
- `scripts/generate-sitemap.mjs` - regenerates `public/sitemap.xml`.

## Commands

- Install dependencies with `npm install`.
- Start local development with `npm run dev`.
- Validate production/static-export behavior with `npm run build`. The static site is written to `docs/` (configured via `distDir: 'docs'` in `next.config.mjs`), not the default `out/`.
- Run `npm run lint` when useful, but be aware this repo currently relies on Next's lint command and may need script maintenance if the installed Next version changes.
- After changing the logo or Open Graph image, run `node scripts/generate-og.mjs`.
- After adding, removing, or renaming public routes/readings, run `node scripts/generate-sitemap.mjs` and keep its article list in sync.

## Content Editing Rules

- Treat `lib/curriculum.ts` as the canonical metadata source for readings. A reading's `slug`, `title`, `author`, `level`, `tracks`, `topics`, `description`, and `keyConcepts` live there.
- When adding a published reading, add the metadata entry to `allItems`, add the matching MDX file under `content/level-N/`, and add the slug import to `lib/mdx-map.ts`.
- Keep slugs consistent across `allItems`, MDX filenames, `lib/mdx-map.ts`, and `scripts/generate-sitemap.mjs`.
- If reading counts are shown in metadata, copy, scripts, or generated assets, update them when the curriculum changes.
- Use original summaries, notes, and analysis. Do not paste copyrighted book or article text except for brief, necessary, attributed excerpts.
- Prefer existing MDX presentation helpers from `components/MDXComponents.tsx`, especially `Callout` and `KeyConcept`, before creating new article-only components.

## UI And Code Style

- Preserve the dark monochrome terminal aesthetic unless the user explicitly asks for a redesign.
- Reuse existing components such as `Panel`, `PanelHeader`, `TerminalWindow`, `ScrollReveal`, `LevelCard`, and `ReadingQueueCard` before introducing new component patterns.
- Keep route components focused on composition and data selection; place reusable UI in `components/` and shared curriculum logic in `lib/`.
- Keep pages static-export safe. Avoid API routes, server-only runtime assumptions, request-time data fetching, or environment-dependent rendering unless the deployment model changes.
- Use TypeScript types from `lib/curriculum.ts` for tracks, topics, and curriculum items instead of duplicating string unions.
- Make styling changes in `app/globals.css` consistent with the existing CSS custom properties and responsive patterns.

## Validation Expectations

- For content-only MDX edits, inspect the affected article locally when practical.
- For metadata, routing, component, or styling changes, run `npm run build` before finishing.
- If build or lint cannot be run, explain why in the final response and name the remaining risk.
- Do not commit changes unless the user explicitly asks for a commit.