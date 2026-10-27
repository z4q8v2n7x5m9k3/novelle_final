import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Al Novelle Gallery | Aesthetic Training Academy Abu Dhabi',
  description: 'View Al Novelle\'s academy environment, training spaces and aesthetic education atmosphere in Abu Dhabi.',
  alternates: {
    canonical: 'https://novelle.ae/gallery',
  },
  openGraph: {
    title: 'Al Novelle Gallery | Aesthetic Training Academy Abu Dhabi',
    description: 'View Al Novelle\'s academy environment, training spaces and aesthetic education atmosphere in Abu Dhabi.',
    url: 'https://novelle.ae/gallery',
    siteName: 'Al Novelle Academy',
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
