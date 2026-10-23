import React from 'react';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AccreditationTrust from '@/components/AccreditationTrust';
import BigStatement from '@/components/BigStatement';
import FoundersSection from '@/components/FoundersSection';
import GalleryPreview from '@/components/GalleryPreview';
import FAQs from '@/components/FAQs';
import BookConsultation from '@/components/BookConsultation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import UAEIdentity from '@/components/UAEIdentity';
import FacilityRental from '@/components/FacilityRental';
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
      
      {/* Hero — 16 approved courses in orbital carousel with functional CTAs */}
      <Hero content={homepageContent.hero} />
      
      {/* Accreditation Trust Strip — CIBTAC Accredited Centre & NCLC Certified, USA */}
      <AccreditationTrust />

      {/* Big Statement — clean refined headline */}
      <BigStatement content={homepageContent.bigStatement} />
      
      {/* Founders Introduction — Dr. Azaiba Salim Kara & Dr. Seeta Yadav */}
      <FoundersSection />

      {/* UAE Identity — Born in Abu Dhabi */}
      <UAEIdentity />

      {/* Gallery Preview — Authentic Al Novelle interior photography */}
      <GalleryPreview />

      {/* Academy Insights — Retained blog preview */}
      <BlogPreview />

      {/* FAQs — Accurate location and verified contact details */}
      <FAQs />

      {/* Facility Rental / Training Space Enquiries */}
      <FacilityRental />

      {/* Contact & Enquiry Form — hello@novelle.ae and approved course list */}
      <BookConsultation />

      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppButton />
    </main>
  );
}
