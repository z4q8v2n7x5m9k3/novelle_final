import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Novelle Gallery | Aesthetic Training Academy Abu Dhabi',
  description: 'View Novelle\'s academy environment, training spaces and aesthetic education atmosphere in Abu Dhabi.',
  alternates: {
    canonical: 'https://novelle.ae/gallery',
  },
  openGraph: {
    title: 'Novelle Gallery | Aesthetic Training Academy Abu Dhabi',
    description: 'View Novelle\'s academy environment, training spaces and aesthetic education atmosphere in Abu Dhabi.',
    url: 'https://novelle.ae/gallery',
    siteName: 'Novelle Academy',
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
