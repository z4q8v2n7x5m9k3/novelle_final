import React from 'react';
import fs from 'fs';
import path from 'path';
import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BigStatement from '@/components/BigStatement';
import AcademyApproach from '@/components/AcademyApproach';
import VisionMission from '@/components/VisionMission';
import GalleryPreview from '@/components/GalleryPreview';
import FAQs from '@/components/FAQs';
import BookConsultation from '@/components/BookConsultation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import UAEIdentity from '@/components/UAEIdentity';
import FacilityRental from '@/components/FacilityRental';
import BlogPreview from '@/components/BlogPreview';

// Removed sections per client request:
// - ProgrammesGrid (Our Programmes section - client marked remove)
// - WhyNovelle (Aesthetic Leaders Start Here / Why Students Choose Novelle - client marked remove)
// - FacultyPreview (replaced by Founders section on About page)
// - Testimonials (fake testimonials - client marked remove)

export const metadata: Metadata = {
  title: 'Novelle | Aesthetic Training Academy in Abu Dhabi',
  description: 'Novelle is an aesthetic training academy in Abu Dhabi offering structured education in beauty, aesthetics, laser and professional practice.',
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
      description: "Abu Dhabi's premium training academy for beauty therapy, clinical aesthetics, and laser technologies.",
      backgroundImage: "/academy-images/academy-approach-session.png"
    },
    bigStatement: {
      image1: "/academy-images/training-consultation.png",
      image2: "/academy-images/laser-device-training.png"
    },
    academyApproach: {
      image: "/academy-images/academy-approach-session.png"
    }
  };

  return (
    <main>
      <Navigation />
      
      {/* Hero — heading spacing fixed: "Build Your Future in Aesthetic Education" */}
      <Hero content={homepageContent.hero} />
      
      {/* Big Statement — fake rating widget removed */}
      <BigStatement content={homepageContent.bigStatement} />
      
      {/* Academy Approach — CIBTAC/NCLC removed, Explore Courses btn removed */}
      <AcademyApproach content={homepageContent.academyApproach} />
      
      {/* Vision & Mission — badges updated, no CIBTAC/NCLC */}
      <VisionMission />

      {/* Born in Abu Dhabi — UAE identity section */}
      <UAEIdentity />

      {/* Gallery Preview — updated subtitle, TODO image comments */}
      <GalleryPreview />

      {/* Academy Insights — retained as requested, using approved article content */}
      <BlogPreview />

      {/* FAQs — replaced with client-provided FAQs */}
      <FAQs />

      {/* Facility Rental / Training Space Enquiries section */}
      <FacilityRental />

      {/* Contact Form — email fixed, WhatsApp fallback on submit */}
      <BookConsultation />

      <Footer />

      {/* Floating WhatsApp button — site-wide */}
      <WhatsAppButton />
    </main>
  );
}
