import React from 'react';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BigStatement from '@/components/BigStatement';
import HomeCoursesStrip from '@/components/HomeCoursesStrip';
import FoundersSection from '@/components/FoundersSection';
import VisionMission from '@/components/VisionMission';
import Testimonials from '@/components/Testimonials';
import GalleryPreview from '@/components/GalleryPreview';
import BlogPreview from '@/components/BlogPreview';
import FAQs from '@/components/FAQs';
import BookConsultation from '@/components/BookConsultation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Al Novelle | Aesthetic Training Academy in Abu Dhabi',
  description: 'Al Novelle is an aesthetic training academy in Abu Dhabi offering structured education in beauty therapy, clinical aesthetics, and laser technologies.',
  alternates: {
    canonical: 'https://novelle.ae/',
  },
};

export default function Home() {
  const contentPath = path.join(process.cwd(), 'src', 'content.json');
  let content = { homepage: null };
  try {
    content = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
  } catch (e) {
    console.error('Error reading content.json', e);
  }

  const homepageContent = (content.homepage as any) || {
    hero: {
      title: "Build Your Future in Aesthetic Education",
      subtitle: "Abu Dhabi · UAE · Est. 2026",
      description: "Abu Dhabi's training academy for beauty therapy, clinical aesthetics, and laser technologies.",
      backgroundImage: "/academy-images/al-novelle-training-centre-interior.png"
    },
    bigStatement: {
      image1: "/academy-images/training-consultation.png",
      image2: "/academy-images/laser-device-training.png"
    }
  };

  return (
    <main>
      <Navigation />
      
      {/* Hero — 16 approved courses in orbital carousel with direct hash links & functional CTAs */}
      <Hero content={homepageContent.hero} />

      {/* About the Academy / We deliver... + Numbers + Media Card (Image 2 Inspiration) */}
      <BigStatement content={homepageContent.bigStatement} />

      {/* Discover Our Signature Aesthetic Tracks (Image 3 Inspiration) */}
      <HomeCoursesStrip />

      {/* Clinical Leadership, One Academy — Specialists Switcher (Image 5 Inspiration) */}
      <FoundersSection />

      {/* Supervised Clinical Practice — Concise 1-line title & authentic workstation photography */}
      <VisionMission />

      {/* What Our Learners Say — 4.9 rating and graduate practitioner feedback (Image 4 Inspiration) */}
      <Testimonials />

      {/* Gallery Preview — Authentic Al Novelle interior photography */}
      <GalleryPreview />

      {/* Academy Insights — 3-card grid matching Inspiration notes */}
      <BlogPreview />

      {/* FAQs — Questions, answered accordion */}
      <FAQs />

      {/* Book Your Visit Today — Embedded Interactive Booking Form & Campus Photo */}
      <BookConsultation />

      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </main>
  );
}
