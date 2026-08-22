import type { Metadata } from 'next';
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GalleryPreview from '@/components/GalleryPreview';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Novelle Gallery | Aesthetic Training Academy Abu Dhabi',
  description: 'View Novelle\'s academy environment, training spaces and aesthetic education atmosphere in Abu Dhabi.',
  alternates: {
    canonical: 'https://novelle.ae/gallery',
  },
};

export default function GalleryPage() {
  return (
    <main>
      <Navigation />
      
      {/* Inner Page Hero */}
      <section style={{ background: 'var(--bg-primary)', paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <span className="badge badge-gold" style={{ marginBottom: '20px' }}>The Visual Suite</span>
          <h1 className="title-massive" style={{ marginBottom: '24px', fontSize: 'clamp(2.4rem, 4vw, 3.2rem)' }}>
            A Glimpse Inside Novelle
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '680px', margin: '0 auto' }}>
            Explore Novelle&apos;s academy environment, training spaces, practical learning moments, clinical equipment, and refined aesthetic education atmosphere.
          </p>
          {/* Images will be replaced with actual Novelle academy photos from client. */}
        </div>
      </section>

      {/* Gallery Component
          TODO: Replace all images with actual Novelle academy photos provided by client.
          Use different images for: Reception, Training room, Practical learning, Equipment, Webinar/training session, Academy interior.
      */}
      <GalleryPreview hideHeader />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
