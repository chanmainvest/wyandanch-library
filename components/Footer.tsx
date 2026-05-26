'use client';

import { BlinkingCursor } from './BlinkingCursor';
import { useI18n } from '@/lib/i18n/context';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <span className="prompt">&gt;</span> {t('site.name')} &nbsp;|&nbsp; {t('footer.text')}{' '}
      &nbsp;|&nbsp; {new Date().getFullYear()}
      <BlinkingCursor />
    </footer>
  );
}
