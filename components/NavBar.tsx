'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';

export function NavBar() {
  const [open, setOpen] = useState(false);

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
            <div className="navbar-logo-text">Wyandanch Library</div>
            <div className="navbar-logo-sub">Open Source Education</div>
          </div>
        </Link>

        <ul className={`navbar-links ${open ? 'open' : ''}`}>
          <li><Link href="/curriculum" onClick={() => setOpen(false)}>Curriculum</Link></li>
          <li><Link href="/track/fundamental" onClick={() => setOpen(false)}>Tracks</Link></li>
          <li><Link href="/reading-queue" onClick={() => setOpen(false)}>Reading Queue</Link></li>
        </ul>

        <div className="navbar-actions">
          <ThemeToggle />
          <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? '\u2715' : '\u2630'}
          </button>
        </div>
      </div>
    </nav>
  );
}
