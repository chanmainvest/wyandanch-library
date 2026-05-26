'use client';

import { ReadingQueueCard } from '@/components/ReadingQueueCard';
import { Panel } from '@/components/Panel';
import { PanelHeader } from '@/components/PanelHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useI18n } from '@/lib/i18n/context';
import { useLocalizedCurriculum } from '@/lib/i18n/use-localized-curriculum';

export function ReadingQueuePageClient() {
  const { t } = useI18n();
  const { readingQueue } = useLocalizedCurriculum();

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">{t('queue.title')}</h1>
        <p className="page-subtitle">{t('queue.subtitle')}</p>
      </div>

      <div className="section-container">
        <ScrollReveal>
          <Panel>
            <PanelHeader
              title={t('queue.panel.title')}
              description={t('queue.panel.desc')}
            />
            <div className="reading-queue-grid">
              {readingQueue.map((item, i) => (
                <ReadingQueueCard
                  key={`${item.title}-${i}`}
                  title={item.title}
                  author={item.author}
                  index={i}
                />
              ))}
            </div>
          </Panel>
        </ScrollReveal>
      </div>
    </>
  );
}
