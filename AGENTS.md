# AGENTS.md

Guidance for automated coding agents working in this repository. **Setup, commands, stack versions, and publishing steps are in [README.md](README.md).** Locale fork steps are in [lib/i18n/README.md](lib/i18n/README.md).

## Project constraints

- Static site only: `output: 'export'` in `next.config.mjs`. No API routes, no server-only runtime, no request-time data fetching.
- `basePath` is `/wyandanch-library` — links and assets must stay compatible with GitHub Pages project hosting.
- **`docs/` is the GitHub Pages publish root** — static HTML/CSS/JS only. Never point `distDir` at `docs/`. Use `npm run export:docs` (see README) to populate `docs/` from `out/`.
- Do not commit unless the user explicitly asks.

## Repository changelog

Record of notable changes on the current feature work (agents should keep this section updated when they land substantive repo changes).

### Static export and GitHub Pages (`docs/`)

- Removed `distDir: 'docs'` from `next.config.mjs` (it had been writing Next.js build cache/server artifacts into `docs/` instead of a static site).
- Default build output: `.next/` (cache, gitignored) and `out/` (static export, gitignored).
- Added `scripts/export-static.mjs` and npm script `export:docs` — builds the app and copies `out/` → `docs/` plus `.nojekyll`.
- Restored `docs/` as committed static HTML for github.io.

### Internationalization (i18n)

- Added `lib/i18n/` — locale registry, translation dictionaries, `I18nProvider`, `useLocalizedCurriculum`, fallback chains.
- Locales: `en`, `zh-HK`, `zh-TW`, `zh-CN` with navbar flag selector (`components/LangSelector.tsx`).
- UI strings in `lib/i18n/translations/*.ts`; reading metadata overrides in `lib/i18n/translations/readings/*.ts`.
- `lib/mdx-map.ts` extended for optional per-locale MDX bodies.
- Maintainer scripts: `scripts/generate-reading-translations.mjs`, `scripts/extract-readings.mjs`.

### Chinese locale translation policy

**The three Chinese locales (`zh-HK`, `zh-TW`, `zh-CN`) must each be translated independently from the English source. Do NOT derive one from another by character substitution or conversion.**

- Cantonese Hong Kong (`zh-HK`): Traditional characters, Cantonese vocabulary and phrasing (e.g. 嘅, 咁, 係), formal written register used in HK financial press.
- Taiwan Mandarin (`zh-TW`): Traditional characters, Taiwan-specific financial terminology and idioms (e.g. 股市 vocabulary preferred in TW press, 您 for formal address).
- Mainland Mandarin (`zh-CN`): Simplified characters, PRC financial terminology and phrasing (e.g. 股份, 证券 conventions from mainland press).

Word choice, tone, and style differ substantially across these three. Character conversion (e.g. running a Simplified→Traditional mapper on zh-CN to produce zh-HK) produces broken, unnatural text and must **never** be used as a shortcut. Always translate each locale fresh from English.

### UI refactor (client shells + layout)

- Extracted client-heavy page UI into dedicated components: `HomeHero`, `HomeSections`, `CurriculumPageClient`, `TrackPageClient`, `ReadingQueuePageClient`, `ArticleComingSoon`.
- Updated `NavBar`, `Footer`, `ThemeToggle`, `ArticleLayout`, cards, and topic/track browsers for i18n and theme behavior.
- Theme/language bootstrapped in `app/layout.tsx` (inline script for flash-free `data-theme` / `lang`).

### Other

- `tsconfig.json` — removed erroneous `docs/types/**/*.ts` include (build types live under `.next/types/`).
- `AGENTS.md` / `README.md` — split human technical docs vs agent rules; this changelog.

## Important paths

| Path | Role |
|------|------|
| `app/page.tsx` | Home |
| `app/curriculum/page.tsx` | Level-based curriculum |
| `app/track/[slug]/page.tsx` | Track pages |
| `app/read/[slug]/page.tsx` | MDX articles |
| `app/reading-queue/page.tsx` | Queue |
| `lib/curriculum.ts` | Canonical metadata, tracks, queue |
| `lib/mdx-map.ts` | Slug → MDX imports |
| `lib/i18n/` | Locales and localization |
| `content/level-N/*.mdx` | Article bodies |
| `components/` | Shared UI and MDX presentation |
| `scripts/export-static.mjs` | Build → `docs/` for Pages |
| `scripts/generate-sitemap.mjs` | `public/sitemap.xml` |
| `scripts/generate-og.mjs` | OG images |
| `docs/` | Published static site (generated; commit after export) |

## Content editing rules

- `lib/curriculum.ts` is canonical for `slug`, `title`, `author`, `level`, `tracks`, `topics`, `description`, `keyConcepts`.
- New reading: `allItems` entry + `content/level-N/<slug>.mdx` + `lib/mdx-map.ts` + sitemap script list.
- Keep slugs aligned across curriculum, MDX filenames, `mdx-map`, and `generate-sitemap.mjs`.
- Update reading counts in copy/scripts when the curriculum size changes.
- Original summaries only; no pasted copyrighted book text except brief attributed excerpts.
- Prefer `components/MDXComponents.tsx` (`Callout`, `KeyConcept`) before new article-only components.
- For new UI copy, add translation keys for all supported locales or accept English fallback.

## UI and code style

- Preserve the dark monochrome terminal aesthetic unless the user requests a redesign.
- Reuse `Panel`, `PanelHeader`, `TerminalWindow`, `ScrollReveal`, `LevelCard`, `ReadingQueueCard`, existing client page shells.
- Route files: composition and data selection; reusable UI in `components/`, logic in `lib/`.
- Types from `lib/curriculum.ts` — do not duplicate track/topic unions.
- Style via `app/globals.css` custom properties and existing responsive patterns.

## Validation

- MDX-only edits: preview the article when practical.
- Metadata, routing, components, styling, i18n: run `npm run build` or `npm run export:docs` before finishing.
- If build/lint cannot run, state the risk in the final response.
- After logo/OG changes: `node scripts/generate-og.mjs`.
- After route/slug changes: `node scripts/generate-sitemap.mjs` and sync its article list.

## When you change the repo

1. Implement the change following the rules above.
2. Append or update the **Repository changelog** in this file if the change is user-visible or affects agent workflow (new scripts, folders, conventions, major features).
3. Update **README.md** if humans need new setup, commands, or layout explanation.
