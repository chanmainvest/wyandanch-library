'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import {
  resolve,
  localeDefinitions,
  DEFAULT_LOCALE,
  LOCALE_STORAGE_KEY,
} from './index';
import type { LocaleCode } from './types';

interface I18nContextValue {
  locale: LocaleCode;
  setLocale: (code: LocaleCode) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  locale: DEFAULT_LOCALE,
  setLocale: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  // Read persisted preference on mount (avoids SSR mismatch)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (stored && localeDefinitions.some((l) => l.code === stored)) {
        setLocaleState(stored);
      }
    } catch {
      // localStorage not available (e.g. private browsing with exceptions)
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((code: LocaleCode) => {
    setLocaleState(code);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, code);
    } catch {}
    // Update the html lang attribute
    try {
      document.documentElement.setAttribute('lang', code);
    } catch {}
  }, []);

  const t = useCallback(
    (key: string) => resolve(key, locale),
    [locale]
  );

  // Sync html[lang] once mounted
  useEffect(() => {
    if (mounted) {
      try { document.documentElement.setAttribute('lang', locale); } catch {}
    }
  }, [locale, mounted]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

/** Access the current locale, setLocale, and t() translation function. */
export function useI18n() {
  return useContext(I18nContext);
}
