import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Al Novelle | Advanced Aesthetic Training in Abu Dhabi',
  description: 'Learn about Al Novelle\'s vision, mission, founders and commitment to professional aesthetic education in Abu Dhabi.',
  alternates: {
    canonical: 'https://novelle.ae/about',
  },
  openGraph: {
    title: 'About Al Novelle | Advanced Aesthetic Training in Abu Dhabi',
    description: 'Learn about Al Novelle\'s vision, mission, founders and commitment to professional aesthetic education in Abu Dhabi.',
    url: 'https://novelle.ae/about',
    siteName: 'Al Novelle Academy',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
