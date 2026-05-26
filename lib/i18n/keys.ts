/** Translation key builders — stable names for curriculum metadata. */

export function trackKey(slug: string, field: 'title' | 'subtitle' | 'desc') {
  return `track.${slug}.${field === 'desc' ? 'desc' : field}`;
}

export function topicKey(slug: string, field: 'title' | 'desc') {
  return `topic.${slug}.${field}`;
}

export function levelKey(n: number, field: 'title' | 'desc') {
  return `level.${n}.${field}`;
}

export function readingKey(slug: string, field: 'title' | 'desc' | 'author') {
  return `reading.${slug}.${field}`;
}

export function readingConceptKey(slug: string, index: number) {
  return `reading.${slug}.concept.${index}`;
}

export function queueKey(index: number, field: 'title' | 'author') {
  return `queue.${index}.${field}`;
}
