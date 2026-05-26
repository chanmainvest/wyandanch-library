'use client';

import { useEffect, useState, type ComponentType } from 'react';
import { useI18n } from '@/lib/i18n/context';
import { mdxComponents } from '@/components/MDXComponents';

interface LocalizedMDXProps {
  slug: string;
  englishContent: React.ReactNode;
}

/**
 * Shows English SSG content immediately, then on mount checks locale
 * and swaps in locale-specific MDX if available.
 */
export function LocalizedMDX({ slug, englishContent }: LocalizedMDXProps) {
  const { locale } = useI18n();
  const [content, setContent] = useState<React.ReactNode>(englishContent);

  useEffect(() => {
    if (locale === 'en') {
      setContent(englishContent);
      return;
    }

    let cancelled = false;

    async function loadLocale() {
      try {
        const { loadMDXContent } = await import('@/lib/mdx-map');
        const Content: ComponentType<any> | null = await loadMDXContent(slug, locale);
        if (!cancelled && Content) {
          setContent(<Content components={mdxComponents} />);
        } else if (!cancelled) {
          setContent(englishContent);
        }
      } catch {
        if (!cancelled) setContent(englishContent);
      }
    }

    loadLocale();
    return () => { cancelled = true; };
  }, [slug, locale, englishContent]);

  return <>{content}</>;
}
