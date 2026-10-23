'use client';
import React, { useState } from 'react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  subtitle: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The hands-on laser training and workstation supervision at Al Novelle gave me the technical confidence and hygiene disciplines to practice safely in the UAE aesthetic sector. The educators explain every biological principle clearly before you touch a device.",
    author: "Dr. Sarah Ahmed",
    subtitle: "Aesthetic Doctor · Abu Dhabi",
    avatar: "/about/professional-learning-session.jpeg"
  },
  {
    id: 2,
    text: "Novelle gave me structure, clinical confidence, and real practical exposure. Training in an authentic clinical environment with live models completely changes how prepared you feel for UAE clinic accreditation.",
    author: "Aisha Al Mansoori",
    subtitle: "Advanced Beauty Therapy Graduate",
    avatar: "/about/laser-and-skin-training.png"
  },
  {
    id: 3,
    text: "The facial electrotherapy and skin anatomy modules are taught with genuine medical rigor. As a practicing therapist, the depth of safety protocols and device management was exceptional.",
    author: "Mariam Al Zaabi",
    subtitle: "Clinical Aesthetician · Dubai",
    avatar: "/academy-images/training-consultation.png"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrentIndex(i => (i + 1) % testimonials.length);

  const active = testimonials[currentIndex];

  return (
    <section 
      style={{ 
        background: '#FAF6F0', 
        padding: '96px 24px', 
        position: 'relative',
        overflow: 'hidden' 
      }} 
      id="reviews"
    >
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Split Grid matching Reference "What our patients say" */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(220px, 300px) 1fr',
          gap: '64px',
          alignItems: 'flex-start',
          textAlign: 'left'
        }} className="testimonials-split-grid">
          
          {/* Left Column: Heading + 4.9 Rating */}
          <div>
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
              PRACTITIONER VOICES
            </span>

            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: '0 0 24px 0',
              letterSpacing: '-0.02em'
            }}>
              What our learners say
            </h2>

            {/* 4.9 Score Block */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '8px' }}>
              <span style={{
                fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                fontSize: '44px',
                color: '#633b2c',
                fontWeight: 400,
                lineHeight: 1
              }}>
                4.9
              </span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '3px', color: '#c5a059', fontSize: '15px' }}>
                  ★ ★ ★ ★ ★
                </div>
                <span style={{
                  fontSize: '11px',
                  fontFamily: '"General Sans", sans-serif',
                  color: '#8c776e',
                  fontWeight: 600,
                  marginTop: '2px'
                }}>
                  UAE Graduate Community
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Quote + Author + Prev/Next Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.55,
              margin: 0,
              letterSpacing: '-0.01em',
              minHeight: '120px'
            }}>
              &ldquo;{active.text}&rdquo;
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '20px',
              borderTop: '1px solid rgba(197, 160, 89, 0.22)',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '1.5px solid #c5a059',
                  background: '#F5EFE6',
                  flexShrink: 0
                }}>
                  <img src={active.avatar} alt={active.author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <strong style={{
                    fontFamily: '"General Sans", sans-serif',
                    fontSize: '15px',
                    color: '#633b2c',
                    display: 'block',
                    fontWeight: 600
                  }}>
                    {active.author}
                  </strong>
                  <span style={{
                    fontFamily: '"General Sans", sans-serif',
                    fontSize: '12.5px',
                    color: '#8c776e'
                  }}>
                    {active.subtitle}
                  </span>
                </div>
              </div>

              {/* Prev / Next Buttons matching Reference */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '1px solid rgba(197, 160, 89, 0.35)',
                    background: '#FFFFFF',
                    color: '#633b2c',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#633b2c';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#633b2c';
                  }}
                >
                  ←
                </button>
                <button
                  onClick={next}
                  aria-label="Next review"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    border: '1px solid rgba(197, 160, 89, 0.35)',
                    background: '#633b2c',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#845E35';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#633b2c';
                  }}
                >
                  →
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .testimonials-split-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}} />
    </section>
  );
}
