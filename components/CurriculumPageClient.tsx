'use client';

import { LevelCard } from '@/components/LevelCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useI18n } from '@/lib/i18n/context';
import { useLocalizedCurriculum } from '@/lib/i18n/use-localized-curriculum';

export function CurriculumPageClient() {
  const { t } = useI18n();
  const { levels } = useLocalizedCurriculum();

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">{t('curriculum.title')}</h1>
        <p className="page-subtitle">{t('curriculum.subtitle')}</p>
      </div>

      <div className="section-container">
        {levels.map((level, i) => (
          <ScrollReveal key={level.number} delay={i * 0.05}>
            <LevelCard level={level} />
          </ScrollReveal>
        ))}
      </div>
    </>
  );
}
