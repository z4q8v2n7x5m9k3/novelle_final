'use client';
import React, { useState } from 'react';

interface Review {
  id: string;
  index: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: '1',
    index: '01 / 03',
    quote: "The hands-on laser training and workstation supervision at Al Novelle gave me the technical confidence to practice safely in the UAE aesthetic sector. They explained every biological principle clearly before we touched a device, and I never once felt rushed.",
    author: "Dr. Sarah Ahmed",
    role: "Aesthetic Doctor, Abu Dhabi · 2025",
    avatar: "/about/professional-learning-session.jpeg"
  },
  {
    id: '2',
    index: '02 / 03',
    quote: "Al Novelle gave me clinical structure, manual confidence, and authentic practical exposure. Training in an equipped clinic environment with live demonstration models completely changes how prepared you feel for UAE clinic accreditation.",
    author: "Aisha Al Mansoori",
    role: "Advanced Beauty Therapy Graduate · 2025",
    avatar: "/founders/dr-seeta-yadav.jpeg"
  },
  {
    id: '3',
    index: '03 / 03',
    quote: "The facial electrotherapy and skin anatomy modules are taught with genuine medical rigor. As a practicing therapist, the depth of safety protocols, patch testing, and device management was exceptional.",
    author: "Mariam Al Zaabi",
    role: "Clinical Aesthetician, Dubai · 2025",
    avatar: "/academy-images/training-consultation.png"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex(i => (i - 1 + reviews.length) % reviews.length);
  const next = () => setCurrentIndex(i => (i + 1) % reviews.length);

  const current = reviews[currentIndex];

  return (
    <section 
      className="scroll-reveal"
      style={{ 
        background: '#FAF8F5', 
        padding: '110px 24px', 
        position: 'relative',
        overflow: 'hidden' 
      }} 
      id="reviews"
    >
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Unified Eyebrow Badge */}
        <div style={{ textAlign: 'left', marginBottom: '18px' }}>
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
            border: '1px solid rgba(197, 160, 89, 0.35)',
            boxShadow: '0 4px 12px rgba(99, 59, 44, 0.03)'
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
            GRADUATE REVIEWS
          </span>
        </div>

        {/* Split Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(220px, 280px) 1fr',
          gap: '64px',
          alignItems: 'flex-start',
          textAlign: 'left'
        }} className="reviews-split-grid">
          
          {/* Left Column: Title + Minimal Verified Feedback Badge */}
          <div>
            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em'
            }}>
              What our learners say
            </h2>

            {/* Minimal Clean Rating Badge (No Fake Numbers) */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '3px', color: '#c5a059' }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <span style={{
                fontSize: '11px',
                fontFamily: '"General Sans", sans-serif',
                color: '#845E35',
                background: '#FAF6F0',
                padding: '4px 10px',
                borderRadius: '100px',
                border: '1px solid rgba(197, 160, 89, 0.28)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Verified Feedback
              </span>
            </div>

            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '14px',
              color: '#8c776e',
              lineHeight: 1.65,
              margin: 0
            }}>
              Authentic feedback from healthcare practitioners and licensed therapists undergoing supervised clinical training at our Abu Dhabi academy.
            </p>
          </div>

          {/* Right Column: Quote + Author + Divider + Index / Nav */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            
            <p style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(1.25rem, 2.1vw, 1.65rem)',
              color: '#1D130C',
              fontWeight: 400,
              lineHeight: 1.55,
              margin: 0,
              letterSpacing: '-0.01em',
              minHeight: '110px'
            }}>
              &ldquo;{current.quote}&rdquo;
            </p>

            {/* Author Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                overflow: 'hidden',
                background: '#F5EFE6',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                flexShrink: 0
              }}>
                <img src={current.avatar} alt={current.author} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} />
              </div>
              <div>
                <strong style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: '14.5px',
                  color: '#1D130C',
                  display: 'block',
                  fontWeight: 600
                }}>
                  {current.author}
                </strong>
                <span style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: '12.5px',
                  color: '#8c776e'
                }}>
                  {current.role}
                </span>
              </div>
            </div>

            {/* Divider Line */}
            <div style={{ height: '1px', background: 'rgba(197, 160, 89, 0.22)', width: '100%' }} />

            {/* Bottom Row: 01 / 04 on Left, Nav Arrows on Right */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '12.5px',
                color: '#8c776e',
                fontWeight: 600,
                letterSpacing: '1px'
              }}>
                {current.index}
              </span>

              {/* Prev / Next Round Black Buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#1D130C',
                    color: '#FFFFFF',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.25s ease'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#845E35')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#1D130C')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </button>

                <button
                  onClick={next}
                  aria-label="Next review"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: '#1D130C',
                    color: '#FFFFFF',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.25s ease'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#845E35')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#1D130C')}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .reviews-split-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}} />
    </section>
  );
}
