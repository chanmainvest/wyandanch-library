'use client';

import Link from 'next/link';
import { Breadcrumb } from './Breadcrumb';
import type { CurriculumItem } from '@/lib/curriculum';
import type { TrackSlug } from '@/lib/curriculum';
import { useI18n } from '@/lib/i18n/context';
import { useLocalizedCurriculum } from '@/lib/i18n/use-localized-curriculum';

interface ArticleLayoutProps {
  item: CurriculumItem;
  prev: CurriculumItem | null;
  next: CurriculumItem | null;
  children: React.ReactNode;
}

export function ArticleLayout({ item, prev, next, children }: ArticleLayoutProps) {
  const { t } = useI18n();
  const { localizeItem } = useLocalizedCurriculum();
  const localized = localizeItem(item);
  const prevL = prev ? localizeItem(prev) : null;
  const nextL = next ? localizeItem(next) : null;

  return (
    <div className="article-layout">
      <Breadcrumb
        items={[
          { label: t('breadcrumb.home'), href: '/' },
          { label: t('breadcrumb.curriculum'), href: '/curriculum' },
          { label: `${t('article.level')} ${item.level}` },
          { label: localized.title },
        ]}
      />

      <header className="article-header">
        <div className="article-level-badge">
          {t('article.level')} {item.level}
        </div>
        <h1 className="article-title">{localized.title}</h1>
        <div className="article-author">{localized.author}</div>
        <p className="article-description">{localized.description}</p>

        {localized.keyConcepts.length > 0 && (
          <div className="article-concepts">
            <div className="article-concepts-label">{t('article.keyConcepts')}</div>
            <div className="article-concepts-list">
              {localized.keyConcepts.map((concept) => (
                <span key={concept} className="tag">
                  {concept}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="article-tracks">
          {item.tracks.map((trackSlug) => (
            <Link key={trackSlug} href={`/track/${trackSlug}`} className="article-track-link">
              {t(`article.track.${trackSlug as TrackSlug}`)}
            </Link>
          ))}
        </div>
      </header>

      <div className="article-content">{children}</div>

      <nav className="article-nav">
        {prevL ? (
          <Link href={`/read/${prevL.slug}`} className="article-nav-link article-nav-prev">
            <span className="article-nav-label">{t('article.prev')}</span>
            <span className="article-nav-title">{prevL.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextL ? (
          <Link href={`/read/${nextL.slug}`} className="article-nav-link article-nav-next">
            <span className="article-nav-label">{t('article.next')}</span>
            <span className="article-nav-title">{nextL.title}</span>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
