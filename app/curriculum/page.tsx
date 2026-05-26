import type { Metadata } from 'next';
import { CurriculumPageClient } from '@/components/CurriculumPageClient';

export const metadata: Metadata = {
  title: 'Curriculum — Wyandanch Library',
  description:
    '38 readings across 8 progressive levels. From economic foundations through investing philosophy, valuation, quantitative methods, and advanced topics in market microstructure and machine learning.',
  openGraph: {
    title: 'Curriculum — Wyandanch Library',
    description: '38 readings across 8 progressive levels in investing and quantitative finance.',
    url: 'https://wyandanchlibrary.com/curriculum',
    siteName: 'Wyandanch Library',
  },
};

export default function CurriculumPage() {
  return <CurriculumPageClient />;
}
