# Internationalization (i18n)

Wyandanch Library ships with English plus three Chinese locales (Hong Kong, Taiwan, mainland). The system is designed so forks can add or remove languages without changing core app code.

## Adding a locale (fork checklist)

1. **`lib/i18n/locales.ts`** — Add a `LocaleDefinition` (flag SVG, labels, display order).
2. **`lib/i18n/locales.ts`** — Add a `localeFallbacks` chain for the new code.
3. **`lib/i18n/translations/<code>.ts`** — UI strings (`site.*`, `nav.*`, `level.*`, etc.).
4. **`lib/i18n/translations/readings/<code>.ts`** — Optional reading metadata overrides (`reading.<slug>.title`, etc.). Run `node scripts/generate-reading-translations.mjs` after editing the `cn` / `tw` maps in that script, or author the file by hand.
5. **`lib/i18n/index.ts`** — Import the dict(s) and register in `translationRegistry`.
6. **`lib/mdx-map.ts`** — Optional: add `localeMdxMap['<code>']` entries for translated MDX bodies.

English curriculum text in `lib/curriculum.ts` remains the canonical fallback when a translation key is missing.

## Key naming

| Pattern | Example |
|---------|---------|
| UI chrome | `nav.curriculum`, `home.tagline` |
| Track / topic / level | `track.fundamental.title`, `topic.the-canon.desc`, `level.3.title` |
| Reading metadata | `reading.<slug>.title`, `reading.<slug>.desc`, `reading.<slug>.concept.0` |
| Reading queue | `queue.0.title`, `queue.0.author` |

## Client usage

```tsx
import { useI18n } from '@/lib/i18n/context';
import { useLocalizedCurriculum } from '@/lib/i18n/use-localized-curriculum';

const { t, locale, setLocale } = useI18n();
const { tracks, levels, localizeItem } = useLocalizedCurriculum();
```

Language choice is persisted in `localStorage` under `wl-lang`.
