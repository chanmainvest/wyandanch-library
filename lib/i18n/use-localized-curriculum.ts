'use client';

import { useMemo } from 'react';
import {
  allItems,
  levels,
  readingQueue,
  tracks,
  topics,
} from '@/lib/curriculum';
import { useI18n } from './context';
import {
  localizeItem,
  localizeLevel,
  localizeQueueItem,
  localizeTopic,
  localizeTrack,
} from './localize';

export function useLocalizedCurriculum() {
  const { t, locale } = useI18n();

  return useMemo(
    () => ({
      locale,
      tracks: tracks.map((track) => localizeTrack(t, track)),
      topics: topics.map((topic) => localizeTopic(t, topic)),
      levels: levels.map((level) => localizeLevel(t, level)),
      items: allItems.map((item) => localizeItem(t, item)),
      readingQueue: readingQueue.map((item, i) => localizeQueueItem(t, i, item)),
      localizeItem: (item: Parameters<typeof localizeItem>[1]) => localizeItem(t, item),
      localizeTrack: (track: Parameters<typeof localizeTrack>[1]) => localizeTrack(t, track),
    }),
    [t, locale]
  );
}
