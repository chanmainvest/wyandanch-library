// ─── i18n Registry ────────────────────────────────────────────────────────────
// This is the single file a fork edits to add or remove a locale:
//   1. Import the locale definition (or add it to localeDefinitions in locales.ts)
//   2. Import the translation dict
//   3. Add an entry to the `registry` map below
//
// The fallback chain for each locale is defined in lib/i18n/locales.ts.

import { localeDefinitions, localeFallbacks } from './locales';
import type { LocaleCode, LocaleDefinition, TranslationDict } from './types';
import en    from './translations/en';
import zhHK  from './translations/zh-HK';
import zhTW  from './translations/zh-TW';
import zhCN  from './translations/zh-CN';
import readingsZhCN from './translations/readings/zh-CN';
import readingsZhTW from './translations/readings/zh-TW';
import readingsZhHK from './translations/readings/zh-HK';

export { localeDefinitions, localeFallbacks };
export type { LocaleCode, LocaleDefinition, TranslationDict };

function mergeDict(...dicts: TranslationDict[]): TranslationDict {
  return Object.assign({}, ...dicts);
}

// ─── Translation registry ─────────────────────────────────────────────────────
// Forks: add UI strings in translations/<code>.ts and optional readings/<code>.ts
export const translationRegistry: Record<string, TranslationDict> = {
  'en':    en,
  'zh-HK': mergeDict(zhHK, readingsZhHK),
  'zh-TW': mergeDict(zhTW, readingsZhTW),
  'zh-CN': mergeDict(zhCN, readingsZhCN),
};

/** Resolve a translation key for a given locale, following the fallback chain. */
export function resolve(key: string, locale: LocaleCode): string {
  const chain = localeFallbacks[locale] ?? ['en'];
  for (const code of chain) {
    const dict = translationRegistry[code];
    if (dict && dict[key] != null) return dict[key]!;
  }
  return key; // last resort: return the key itself
}

/** All valid locale codes in display order. */
export const localeCodes: LocaleCode[] = localeDefinitions.map((l) => l.code);

/** Default locale. */
export const DEFAULT_LOCALE: LocaleCode = 'en';

/** localStorage key for persisting the user's locale choice. */
export const LOCALE_STORAGE_KEY = 'wl-lang';
