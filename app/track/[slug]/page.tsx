import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { tracks, getTrackBySlug } from '@/lib/curriculum';
import type { TrackSlug } from '@/lib/curriculum';
import { TrackPageClient } from '@/components/TrackPageClient';

export function generateStaticParams() {
  return tracks.map((track) => ({ slug: track.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const track = getTrackBySlug(params.slug);
  if (!track) return {};
  const title = `${track.title} — Wyandanch Library`;
  const description = track.description;
  return {
    title,
    description,
    openGraph: {
      title: track.title,
      description,
      url: `https://wyandanchlibrary.com/track/${track.slug}`,
      siteName: 'Wyandanch Library',
      type: 'website',
    },
  };
}

export default function TrackPage({ params }: { params: { slug: string } }) {
  const track = getTrackBySlug(params.slug);
  if (!track) return notFound();
  return <TrackPageClient slug={params.slug as TrackSlug} />;
}
