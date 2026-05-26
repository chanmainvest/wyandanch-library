'use client';

import { useI18n } from '@/lib/i18n/context';
import { localeDefinitions } from '@/lib/i18n/locales';

export function LangSelector() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div className="lang-flags" role="group" aria-label={t('nav.langToggle')}>
      {localeDefinitions.map((ld) => (
        <button
          key={ld.code}
          className={`flag-btn${locale === ld.code ? ' active' : ''}`}
          onClick={() => setLocale(ld.code)}
          aria-label={ld.nativeLabel}
          title={ld.nativeLabel}
          aria-pressed={locale === ld.code}
        >
          <span
            className="flag-icon"
            dangerouslySetInnerHTML={{ __html: ld.flagSvg }}
          />
          <span className="flag-label">{ld.label}</span>
        </button>
      ))}
    </div>
  );
}
