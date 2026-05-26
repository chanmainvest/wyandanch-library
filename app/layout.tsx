import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { I18nProvider } from '@/lib/i18n/context';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Wyandanch Library | Open Source Finance Education',
  description:
    'A free, open source curriculum for learning investing and quantitative finance from first principles. 38 readings across 8 progressive levels.',
  keywords: [
    'finance education',
    'investing curriculum',
    'quantitative finance',
    'value investing',
    'open source',
    'free education',
  ],
  authors: [{ name: 'Wyandanch Library' }],
  metadataBase: new URL('https://wyandanchlibrary.com'),
  openGraph: {
    title: 'Wyandanch Library',
    description:
      'Free, open source education in investing and quantitative finance. From Menger to machine learning.',
    url: 'https://wyandanchlibrary.com',
    siteName: 'Wyandanch Library',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Wyandanch Library — Open Source Finance Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wyandanch Library',
    description:
      'Free, open source finance education. 38 readings across 8 levels — from Menger to machine learning.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Prevent flash of wrong theme before React hydrates */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('wl-theme'),dark=t!=='light';document.documentElement.setAttribute('data-theme',dark?'dark':'light');document.documentElement.style.backgroundColor=dark?'#0a0a0a':'#f5f5f5';var l=localStorage.getItem('wl-lang');if(l)document.documentElement.setAttribute('lang',l)}catch(e){}})()` }} />
      </head>
      <body>
        <I18nProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
