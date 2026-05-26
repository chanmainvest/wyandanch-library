'use client';

import { Panel } from '@/components/Panel';
import { PanelHeader } from '@/components/PanelHeader';
import { ScrollReveal } from '@/components/ScrollReveal';
import { TrackPicker } from '@/components/TrackPicker';
import { TopicBrowser } from '@/components/TopicBrowser';
import { useI18n } from '@/lib/i18n/context';

export function HomeSections() {
  const { t } = useI18n();

  return (
    <>
      <section className="section-container">
        <ScrollReveal>
          <Panel glow>
            <PanelHeader title={t('home.track.title')} description={t('home.track.desc')} />
            <TrackPicker />
          </Panel>
        </ScrollReveal>
      </section>

      <section className="section-container">
        <ScrollReveal delay={0.1}>
          <Panel>
            <PanelHeader title={t('home.topic.title')} description={t('home.topic.desc')} />
            <TopicBrowser />
          </Panel>
        </ScrollReveal>
      </section>
    </>
  );
}
