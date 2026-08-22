import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aesthetic Training Courses in Abu Dhabi | Novelle',
  description: 'Explore Novelle\'s aesthetic, beauty, laser and professional training programmes in Abu Dhabi.',
  alternates: {
    canonical: 'https://novelle.ae/courses',
  },
  openGraph: {
    title: 'Aesthetic Training Courses in Abu Dhabi | Novelle',
    description: 'Explore Novelle\'s aesthetic, beauty, laser and professional training programmes in Abu Dhabi.',
    url: 'https://novelle.ae/courses',
    siteName: 'Novelle Academy',
  },
};

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
