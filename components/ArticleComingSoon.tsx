'use client';

import { useI18n } from '@/lib/i18n/context';

export function ArticleComingSoon() {
  const { t } = useI18n();
  return (
    <p className="mdx-p" style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>
      {t('article.comingSoon')}
    </p>
  );
}
