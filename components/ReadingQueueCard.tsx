'use client';

import { useI18n } from '@/lib/i18n/context';

interface ReadingQueueCardProps {
  title: string;
  author: string;
  index: number;
}

export function ReadingQueueCard({ title, author, index }: ReadingQueueCardProps) {
  const { t } = useI18n();

  return (
    <div className="reading-queue-card">
      <div className="reading-queue-card-index">{String(index + 1).padStart(2, '0')}</div>
      <div className="reading-queue-card-info">
        <div className="reading-queue-card-title">{title}</div>
        <div className="reading-queue-card-author">{author}</div>
      </div>
      <div className="reading-queue-card-badge">{t('queue.badge')}</div>
    </div>
  );
}
