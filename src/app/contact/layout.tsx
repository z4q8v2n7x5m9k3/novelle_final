import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Al Novelle | Aesthetic Training Academy Abu Dhabi',
  description: 'Contact Al Novelle for course enquiries, admissions, training information and academy visits in Abu Dhabi.',
  alternates: {
    canonical: 'https://novelle.ae/contact',
  },
  openGraph: {
    title: 'Contact Al Novelle | Aesthetic Training Academy Abu Dhabi',
    description: 'Contact Al Novelle for course enquiries, admissions, training information and academy visits in Abu Dhabi.',
    url: 'https://novelle.ae/contact',
    siteName: 'Al Novelle Academy',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
