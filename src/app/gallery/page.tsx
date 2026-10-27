import type { Metadata } from 'next';
import React from 'react';
import Navigation from '@/components/Navigation';
import BookConsultation from '@/components/BookConsultation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Gallery | Al Novelle Aesthetic Training Academy Abu Dhabi',
  description: 'View Al Novelle\'s training facilities, practical clinical suites, and aesthetic education atmosphere in Abu Dhabi.',
  alternates: {
    canonical: 'https://novelle.ae/gallery',
  },
};

const GALLERY_IMAGES = [
  {
    src: '/academy-images/polished-al-novelle-training-centre-interior.png',
    title: 'Training Room Suite',
    desc: 'Equipped aesthetic training stations in Unit 1001'
  },
  {
    src: '/academy-images/al-novelle-training-centre-interior.png',
    title: 'Training Auditorium',
    desc: 'Auditorium space for classroom learning, lectures and training sessions.'
  },
  {
    src: '/academy-images/elegant-al-novelle-training-centre-1.png',
    title: 'Practical Workstations',
    desc: 'Supervised hands-on training setups'
  },
  {
    src: '/academy-images/refined-aesthetic-training-centre-interior.png',
    title: 'Reception & Welcome Area',
    desc: 'Reception and enquiry area for visitors and prospective students.'
  },
  {
    src: '/academy-images/polished-aesthetic-training-centre-interior.png',
    title: 'Clinical Practice Space',
    desc: 'Dedicated stations for facial and aesthetic procedures'
  },
  {
    src: '/academy-images/refined-al-novelle-training-centre-interior-1.png',
    title: 'Treatment Stations',
    desc: 'Ergonomic treatment bays for supervised learner practice'
  },
  {
    src: '/academy-images/refined-al-novelle-training-centre-interior-2.png',
    title: 'Skincare & Dermal Training Area',
    desc: 'Clinical hygiene and tool sanitation stations'
  },
  {
    src: '/academy-images/polished-al-novelle-training-center-interior-1.png',
    title: 'Aesthetic Skills Studio',
    desc: 'Focus on manual precision and supervised practice'
  },
  {
    src: '/academy-images/polished-al-novelle-training-center-interior.png',
    title: 'Academy Interior',
    desc: 'Educational facility and training interior at Unit 1001, LAVG Building, Abu Dhabi.'
  }
];

export default function GalleryPage() {
  return (
    <main style={{ background: '#FAF6F0' }}>
      <Navigation />
      
      {/* Inner Page Hero - Left Aligned, Faded Interior Background, Unified 1260px */}
      <section style={{ 
        position: 'relative',
        paddingTop: '140px', 
        paddingBottom: '60px',
        background: 'linear-gradient(180deg, rgba(250, 248, 245, 0.88) 0%, rgba(250, 248, 245, 0.98) 100%), url("/academy-images/polished-al-novelle-training-centre-interior.png") center/cover no-repeat',
        borderBottom: '1px solid rgba(197, 160, 89, 0.2)' 
      }}>
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '780px', textAlign: 'left' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF',
              padding: '7px 16px',
              borderRadius: '100px',
              fontSize: '11px',
              letterSpacing: '2px',
              fontWeight: 700,
              color: '#633b2c',
              textTransform: 'uppercase',
              fontFamily: '"General Sans", sans-serif',
              marginBottom: '16px',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              boxShadow: '0 4px 12px rgba(99, 59, 44, 0.03)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              THE VISUAL SUITE
            </span>

            <h1 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(1.9rem, 3.1vw, 2.65rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em'
            }}>
              Inside Al Novelle Academy
            </h1>

            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '15.5px',
              color: '#8c776e',
              lineHeight: 1.65,
              margin: 0,
              fontWeight: 500
            }}>
              Explore our training rooms, practical clinical workstations, consultation suites, and educational facilities located at Unit 1001, LAVG Building, Al Zahiyah, Abu Dhabi.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Unified 1260px Container */}
      <section style={{ padding: '64px 24px 120px 24px', background: '#FAF6F0' }}>
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '28px'
          }}>
            {GALLERY_IMAGES.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(197, 160, 89, 0.22)',
                  boxShadow: '0 4px 20px rgba(99, 59, 44, 0.04)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease'
                }}
                className="gallery-card"
              >
                <div style={{ height: '260px', overflow: 'hidden', background: '#F5EFE6' }}>
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    className="gallery-card-img"
                  />
                </div>
                <div style={{ padding: '24px', textAlign: 'left' }}>
                  <h3 style={{ 
                    fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                    fontSize: '19px', 
                    color: '#633b2c', 
                    margin: '0 0 6px 0', 
                    fontWeight: 400 
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    fontFamily: '"General Sans", sans-serif', 
                    fontSize: '13.5px', 
                    color: '#8c776e', 
                    margin: 0, 
                    lineHeight: 1.5 
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Your Visit Today — Embedded Interactive Booking Form & Academy Photo */}
      <BookConsultation />

      <Footer />
      <WhatsAppButton />

      <style dangerouslySetInnerHTML={{__html: `
        .gallery-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(99, 59, 44, 0.08) !important;
        }
        .gallery-card:hover .gallery-card-img {
          transform: scale(1.04);
        }
      `}} />
    </main>
  );
}
