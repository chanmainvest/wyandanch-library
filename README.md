# Wyandanch Library

Free, open-source curriculum for learning investing and quantitative finance—from first principles through practitioner and quant topics. The site is a static publication: curriculum browser, topical tracks, reading queue, and MDX study notes for each reading.

**Live site:** [wyandanchlibrary.com](https://wyandanchlibrary.com)  
**GitHub Pages (project site):** served from the [`docs/`](docs/) folder on the default branch.

---

## What you get

- **Eight progressive levels** — readings grouped from foundations to advanced quant.
- **Four tracks** — Fundamental, Quantitative, Practitioner, and Macro lenses on the same material.
- **38 published readings** — original summaries and study notes in MDX (not full book text).
- **Reading queue** — planned titles not yet published.
- **Languages** — English plus Traditional Chinese (Hong Kong, Taiwan) and Simplified Chinese (mainland). UI and curriculum metadata switch in the browser; choice is saved in `localStorage`.
- **Light / dark theme** — terminal-inspired monochrome UI.

---

## Requirements

- **Node.js** 22 or newer (developed on v25; `@types/node` is pinned to ^22).
- **npm** (comes with Node).

---

## Quick start

```bash
git clone https://github.com/chanmainvest/wyandanch-library.git
cd wyandanch-library
npm install
npm run dev
```

Open [http://localhost:3000/wyandanch-library](http://localhost:3000/wyandanch-library) (the app uses a `basePath` of `/wyandanch-library` for GitHub Pages).

---

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development server with hot reload |
| `npm run build` | Production static export → `out/` (validation) |
| `npm run export:docs` | Build and copy static site into `docs/` for GitHub Pages |
| `npm run lint` | Next.js ESLint |
| `node scripts/generate-sitemap.mjs` | Regenerate `public/sitemap.xml` after route changes |
| `node scripts/generate-og.mjs` | Regenerate `public/og.svg` and `public/og.png` after logo changes |
| `node scripts/generate-reading-translations.mjs` | Regenerate Chinese reading metadata translation files |
| `node scripts/extract-readings.mjs` | Helper to extract reading text (maintainer tooling) |

---

## How publishing works

The **source app** lives at the repo root (`app/`, `components/`, `content/`, `lib/`). Next.js builds into:

| Folder | Role | In git? |
|--------|------|---------|
| `.next/` | Next.js build cache | No (gitignored) |
| `out/` | Static export from `npm run build` | No (gitignored) |
| `docs/` | **Published** HTML/CSS/JS for GitHub Pages | Yes |

Do **not** set `distDir` to `docs`. That folder must contain only static files (HTML, assets, `.nojekyll`), not Next.js server manifests.

To refresh GitHub Pages:

```bash
npm run export:docs
git add docs/
git commit -m "Update static site"
git push
```

`scripts/export-static.mjs` runs `next build`, replaces `docs/` with the contents of `out/`, and adds `.nojekyll` so GitHub does not run Jekyll on `_next/`.

Configure the repository for **Pages → Deploy from branch → `/docs` on `main`** (or your default branch).

---

## Project layout

```
app/                 # Routes (home, curriculum, tracks, readings, queue)
components/          # UI (nav, panels, MDX helpers, client page shells)
content/level-N/     # MDX article bodies
lib/
  curriculum.ts      # Canonical reading metadata, tracks, queue
  mdx-map.ts         # Slug → MDX import map (and optional locale MDX)
  i18n/              # Locales, UI strings, localized curriculum helpers
public/              # Static assets (logo, sitemap, robots)
scripts/             # Export, OG, sitemap, translation generators
docs/                # Generated static site (commit after export:docs)
```

Stack: **Next.js 14** (App Router), **React 18**, **TypeScript**, **MDX** with `remark-gfm`. Styling is global CSS in `app/globals.css`. The app uses `output: 'export'` and unoptimized images so everything stays static-export safe.

Path alias `@/*` maps to the repository root.

---

## Adding or editing content

1. **Metadata** — Edit `lib/curriculum.ts` (`allItems`, tracks, reading queue).
2. **Article body** — Add or edit `content/level-N/<slug>.mdx`.
3. **Routing** — Register the slug in `lib/mdx-map.ts`.
4. **Sitemap** — Add the slug to `scripts/generate-sitemap.mjs` and run the script.
5. **Translations (optional)** — UI keys in `lib/i18n/translations/`; reading titles/descriptions via `lib/i18n/translations/readings/` or `generate-reading-translations.mjs`. See [`lib/i18n/README.md`](lib/i18n/README.md).

Use original analysis only; do not paste copyrighted book text beyond brief attributed excerpts.

MDX helpers (`Callout`, `KeyConcept`, etc.) live in `components/MDXComponents.tsx`.

---

## Internationalization

Locales: `en`, `zh-HK`, `zh-TW`, `zh-CN`. Flag selector in the navbar; language stored as `wl-lang`. English in `lib/curriculum.ts` is the fallback when a translation key is missing.

Fork maintainers: full checklist in [`lib/i18n/README.md`](lib/i18n/README.md).

---

## License

Dual license—see [LICENSE](LICENSE):

- **Code** (app, components, styles, config): All Rights Reserved.
- **Content** (`content/`): [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).

---

## For AI coding agents

Repository conventions, changelog, and validation rules for automated edits: **[AGENTS.md](AGENTS.md)**.
