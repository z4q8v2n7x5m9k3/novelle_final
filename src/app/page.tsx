import React from 'react';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BigStatement from '@/components/BigStatement';
import HomeAboutPreview from '@/components/HomeAboutPreview';
import HomeCoursesStrip from '@/components/HomeCoursesStrip';
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
      
      {/* Hero — 16 approved courses in orbital carousel with direct hash links & functional CTAs */}
      <Hero content={homepageContent.hero} />
      
      {/* Big Statement — editorial serif statement with aesthetic icons */}
      <BigStatement content={homepageContent.bigStatement} />

      {/* Featured Courses Strip — flagship courses immediately visible after intro */}
      <HomeCoursesStrip />

      {/* Why We Started Novelle — concise, badge-driven, clean editorial layout */}
      <HomeAboutPreview />
      
      {/* Completely Redesigned Luxury Founders Section — Dr. Azaiba Salim Kara & Dr. Seeta Yadav */}
      <FoundersSection />

      {/* Vision & Mission — Authentic 2-column layout with student support card */}
      <VisionMission />

      {/* UAE Identity — Born in Abu Dhabi, Built for Real Practice */}
      <UAEIdentity />

      {/* Gallery Preview — Authentic Al Novelle interior photography */}
      <GalleryPreview />

      {/* Academy Insights — Retained blog preview */}
      <BlogPreview />

      {/* FAQs — Accurate location and verified contact details */}
      <FAQs />

      {/* Contact & Enquiry Form — hello@novelle.ae and approved course list */}
      <BookConsultation />

      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </main>
  );
}
