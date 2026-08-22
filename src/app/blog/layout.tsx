import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Novelle Blog | Aesthetic Education & Insights Abu Dhabi',
  description: 'Expert-led insights on aesthetic education, safety protocols, and beauty training in the UAE.',
  alternates: {
    canonical: 'https://novelle.ae/blog',
  },
  openGraph: {
    title: 'Novelle Blog | Aesthetic Education & Insights Abu Dhabi',
    description: 'Expert-led insights on aesthetic education, safety protocols, and beauty training in the UAE.',
    url: 'https://novelle.ae/blog',
    siteName: 'Novelle Academy',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
