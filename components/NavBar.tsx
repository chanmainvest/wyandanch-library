'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LangSelector } from '@/components/LangSelector';
import { useI18n } from '@/lib/i18n/context';

export function NavBar() {
  const [open, setOpen] = useState(false);
  const { t } = useI18n();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo.png`}
            alt="Wyandanch"
            width={40}
            height={40}
            className="navbar-logo-img"
          />
          <div>
            <div className="navbar-logo-text">{t('site.name')}</div>
            <div className="navbar-logo-sub">{t('site.tagline')}</div>
          </div>
        </Link>

        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          <li><Link href="/curriculum" onClick={() => setOpen(false)}>{t('nav.curriculum')}</Link></li>
          <li><Link href="/track/fundamental" onClick={() => setOpen(false)}>{t('nav.tracks')}</Link></li>
          <li><Link href="/reading-queue" onClick={() => setOpen(false)}>{t('nav.readingQueue')}</Link></li>
        </ul>

        <div className="navbar-actions">
          <LangSelector />
          <ThemeToggle />
          <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? '\u2715' : '\u2630'}
          </button>
        </div>
      </div>
    </nav>
  );
}
