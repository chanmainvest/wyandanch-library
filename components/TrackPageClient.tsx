'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useLocalizedCurriculum } from '@/lib/i18n/use-localized-curriculum';
import type { TrackSlug } from '@/lib/curriculum';
import { getItemsByTrack } from '@/lib/curriculum';

interface TrackPageClientProps {
  slug: TrackSlug;
}

export function TrackPageClient({ slug }: TrackPageClientProps) {
  const { tracks, localizeItem: li } = useLocalizedCurriculum();
  const track = tracks.find((tr) => tr.slug === slug)!;
  const items = getItemsByTrack(slug).map((item) => li(item));

  return (
    <>
      <div className="page-header">
        <div className="track-detail-header">
          <div className="track-detail-icon">{track.icon}</div>
          <h1 className="track-detail-title">{track.title}</h1>
          <p className="track-detail-subtitle">{track.subtitle}</p>
          <p className="track-detail-desc">{track.description}</p>
        </div>
      </div>

      <div className="section-container">
        <nav className="track-nav">
          {tracks.map((tr) => (
            <Link
              key={tr.slug}
              href={`/track/${tr.slug}`}
              className={`track-nav-link ${tr.slug === slug ? 'active' : ''}`}
            >
              {tr.title}
            </Link>
          ))}
        </nav>

        <div className="track-items-list">
          {items.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.04}>
              <Link href={`/read/${item.slug}`} className="track-item-card">
                <span className="track-item-level">L{item.level}</span>
                <div className="track-item-info">
                  <div className="track-item-title">{item.title}</div>
                  <div className="track-item-author">{item.author}</div>
                  <div className="track-item-desc">{item.description}</div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}
