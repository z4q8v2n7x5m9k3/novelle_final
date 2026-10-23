import React from 'react';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BigStatement from '@/components/BigStatement';
import HomeCoursesStrip from '@/components/HomeCoursesStrip';
import HomeAboutPreview from '@/components/HomeAboutPreview';
import FoundersSection from '@/components/FoundersSection';
import VisionMission from '@/components/VisionMission';
import GalleryPreview from '@/components/GalleryPreview';
import FAQs from '@/components/FAQs';
import BookConsultation from '@/components/BookConsultation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import UAEIdentity from '@/components/UAEIdentity';
import BlogPreview from '@/components/BlogPreview';

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
      
      {/* 1. Hero — 16 approved courses in orbital carousel with direct hash links */}
      <Hero content={homepageContent.hero} />
      
      {/* 2. Big Statement — Grand, commanding editorial serif statement with creative highlights */}
      <BigStatement content={homepageContent.bigStatement} />

      {/* 3. Featured Courses Strip — Placed UP FIRST per user request */}
      <HomeCoursesStrip />

      {/* 4. Why We Started Al Novelle — Clean, reduced text with 3 institutional badges */}
      <HomeAboutPreview />
      
      {/* 5. Founders Section — Dr. Azaiba & Dr. Seeta + Background Image Executive Quote Banner */}
      <FoundersSection />

      {/* 6. Vision & Mission — Authentic 2-column layout with student support card */}
      <VisionMission />

      {/* 7. UAE Identity — Born in Abu Dhabi, Built for Real Practice */}
      <UAEIdentity />

      {/* 8. Gallery Preview — A Glimpse Inside Al Novelle (Authentic interior photography) */}
      <GalleryPreview />

      {/* 9. Academy Insights — Blog preview */}
      <BlogPreview />

      {/* 10. FAQs — Verified contact & academy details */}
      <FAQs />

      {/* 11. Contact & Enquiry Form */}
      <BookConsultation />

      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </main>
  );
}
