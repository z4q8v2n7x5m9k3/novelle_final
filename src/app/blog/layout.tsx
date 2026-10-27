import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Al Novelle Blog | Aesthetic Education & Insights Abu Dhabi',
  description: 'Expert-led insights on aesthetic education, safety protocols, and beauty training in the UAE from Al Novelle Academy.',
  alternates: {
    canonical: 'https://novelle.ae/blog',
  },
  openGraph: {
    title: 'Al Novelle Blog | Aesthetic Education & Insights Abu Dhabi',
    description: 'Expert-led insights on aesthetic education, safety protocols, and beauty training in the UAE from Al Novelle Academy.',
    url: 'https://novelle.ae/blog',
    siteName: 'Al Novelle Academy',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
