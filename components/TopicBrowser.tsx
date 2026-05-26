'use client';

import Link from 'next/link';
import { getItemsByTopic } from '@/lib/curriculum';
import { useI18n } from '@/lib/i18n/context';
import { useLocalizedCurriculum } from '@/lib/i18n/use-localized-curriculum';

export function TopicBrowser() {
  const { t } = useI18n();
  const { topics, localizeItem } = useLocalizedCurriculum();

  return (
    <div className="topic-browser">
      {topics.map((topic) => {
        const items = getItemsByTopic(topic.slug).map((item) => localizeItem(item));
        return (
          <div key={topic.slug} className="topic-card">
            <div className="topic-card-title">{topic.title}</div>
            <div className="topic-card-desc">{topic.description}</div>
            <div className="topic-card-items">
              {items.map((item) => (
                <Link key={item.slug} href={`/read/${item.slug}`} className="topic-card-item">
                  <span className="prompt">&gt;</span> {item.title}
                </Link>
              ))}
            </div>
            <div className="topic-card-count">
              {items.length} {items.length === 1 ? t('topic.text') : t('topic.texts')}
            </div>
          </div>
        );
      })}
    </div>
  );
}
