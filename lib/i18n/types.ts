// ─── i18n Types ─────────────────────────────────────────────────────────────
// Any string is a valid LocaleCode so that forks can add their own locales
// without touching core library code.
export type LocaleCode = string;

export interface LocaleDefinition {
  code: LocaleCode;
  /** Short display label shown next to the flag */
  label: string;
  /** Label in the locale's own script */
  nativeLabel: string;
  /** Raw SVG markup for the country/region flag */
  flagSvg: string;
  /** Text direction */
  dir: 'ltr' | 'rtl';
}

/** A translation dict is a partial mapping from string key → translated string.
 *  Missing keys fall back through the fallback chain defined in the registry. */
export type TranslationDict = Partial<Record<string, string>>;
