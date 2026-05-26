'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TerminalWindow } from '@/components/TerminalWindow';
import { ScanLine } from '@/components/ScanLine';
import { BlinkingCursor } from '@/components/BlinkingCursor';
import { useI18n } from '@/lib/i18n/context';
import { allItems, levels } from '@/lib/curriculum';

export function HomeHero() {
  const { t } = useI18n();

  return (
    <section className="hero-section">
      <div className="hero-terminal">
        <TerminalWindow>
          <ScanLine />
          <div className="hero-content">
            <div className="hero-fade hero-fade-1">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo.png`}
                alt="Wyandanch"
                width={80}
                height={80}
                className="hero-logo"
              />
              <h1 className="hero-title">{t('site.name')}</h1>
              <p className="hero-subtitle">{t('home.subtitle')}</p>
            </div>
            <div className="hero-fade hero-fade-2">
              <p className="hero-tagline">
                <span className="prompt">&gt;</span> {t('home.tagline')}
                <BlinkingCursor />
              </p>
            </div>
            <div className="hero-fade hero-fade-3">
              <p className="hero-desc">
                {t('home.desc')} {allItems.length} {t('home.readingCount')} {levels.length}{' '}
                {t('home.levelCount')}
              </p>
            </div>
            <div className="hero-fade hero-fade-4">
              <div className="hero-ctas">
                <Link href="/curriculum" className="btn-primary">
                  <span className="prompt">&gt;</span> {t('home.cta.start')}
                </Link>
                <Link href="/track/fundamental" className="btn-secondary">
                  {t('home.cta.browse')}
                </Link>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
