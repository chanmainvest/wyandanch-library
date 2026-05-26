import type { CurriculumItem, Level, Topic, Track } from '@/lib/curriculum';
import {
  levelKey,
  queueKey,
  readingConceptKey,
  readingKey,
  topicKey,
  trackKey,
} from './keys';

export type TranslateFn = (key: string) => string;

/** Return translation when present, otherwise the English fallback from curriculum. */
export function lt(t: TranslateFn, key: string, fallback: string): string {
  const value = t(key);
  return value !== key ? value : fallback;
}

export function localizeTrack(t: TranslateFn, track: Track): Track {
  return {
    ...track,
    title: lt(t, trackKey(track.slug, 'title'), track.title),
    subtitle: lt(t, trackKey(track.slug, 'subtitle'), track.subtitle),
    description: lt(t, trackKey(track.slug, 'desc'), track.description),
  };
}

export function localizeTopic(t: TranslateFn, topic: Topic): Topic {
  return {
    ...topic,
    title: lt(t, topicKey(topic.slug, 'title'), topic.title),
    description: lt(t, topicKey(topic.slug, 'desc'), topic.description),
  };
}

export function localizeLevel(t: TranslateFn, level: Level): Level {
  return {
    ...level,
    title: lt(t, levelKey(level.number, 'title'), level.title),
    description: lt(t, levelKey(level.number, 'desc'), level.description),
    items: level.items.map((item) => localizeItem(t, item)),
  };
}

export function localizeItem(t: TranslateFn, item: CurriculumItem): CurriculumItem {
  const keyConcepts = item.keyConcepts.map((concept, i) =>
    lt(t, readingConceptKey(item.slug, i), concept)
  );
  return {
    ...item,
    title: lt(t, readingKey(item.slug, 'title'), item.title),
    author: lt(t, readingKey(item.slug, 'author'), item.author),
    description: lt(t, readingKey(item.slug, 'desc'), item.description),
    keyConcepts,
  };
}

export function localizeQueueItem(
  t: TranslateFn,
  index: number,
  item: { title: string; author: string }
) {
  return {
    title: lt(t, queueKey(index, 'title'), item.title),
    author: lt(t, queueKey(index, 'author'), item.author),
  };
}
