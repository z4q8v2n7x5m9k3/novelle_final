'use client';
import React from 'react';
import Link from 'next/link';

export default function HomeAboutPreview() {
  return (
    <section 
      style={{ 
        background: '#FAF8F5', 
        padding: '110px 24px', 
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="about-preview"
    >
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Split Grid Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
          gap: '64px',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Story & Vision Copy */}
          <div>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF',
              padding: '8px 18px',
              borderRadius: '100px',
              fontSize: '11px',
              letterSpacing: '2px',
              fontWeight: 700,
              color: '#633b2c',
              textTransform: 'uppercase',
              fontFamily: '"General Sans", sans-serif',
              marginBottom: '20px',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              THE NOVELLE PHILOSOPHY
            </span>

            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2.3rem, 4vw, 3.4rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: '0 0 20px 0',
              letterSpacing: '-0.02em'
            }}>
              Why We Started Al Novelle
            </h2>

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '16px', 
              color: '#8c776e', 
              lineHeight: 1.7, 
              margin: '0 0 16px 0',
              fontWeight: 500
            }}>
              Aesthetic and beauty treatments are growing rapidly across the UAE, but training quality varies widely. Too often, people begin to practise without a firm grounding in skin science, safety, and professional standards.
            </p>

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '16px', 
              color: '#8c776e', 
              lineHeight: 1.7, 
              margin: '0 0 32px 0',
              fontWeight: 500
            }}>
              We started Novelle to change that. As clinicians and educators who value patient safety, we built an academy where learners are taught properly, assessed fairly, and prepared to practise responsibly. Our aim is simple: to help set a higher, consistent standard for beauty and aesthetic education, starting in Abu Dhabi.
            </p>

            {/* 3 Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <span style={{ 
                  width: '28px', 
                  height: '28px', 
                  borderRadius: '50%', 
                  background: 'rgba(197, 160, 89, 0.15)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#986A3E',
                  fontWeight: 700,
                  fontSize: '12px',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>✓</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '15px', color: '#633b2c', fontFamily: '"General Sans", sans-serif', marginBottom: '2px' }}>
                    Evidence-Based Science
                  </strong>
                  <span style={{ fontSize: '13.5px', color: '#8c776e', lineHeight: 1.5, display: 'block' }}>
                    Skin anatomy, product chemistry, and safety protocols taught by medical aesthetic clinicians.
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <span style={{ 
                  width: '28px', 
                  height: '28px', 
                  borderRadius: '50%', 
                  background: 'rgba(197, 160, 89, 0.15)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#986A3E',
                  fontWeight: 700,
                  fontSize: '12px',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>✓</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '15px', color: '#633b2c', fontFamily: '"General Sans", sans-serif', marginBottom: '2px' }}>
                    Supervised Practical Workstations
                  </strong>
                  <span style={{ fontSize: '13.5px', color: '#8c776e', lineHeight: 1.5, display: 'block' }}>
                    Real hands-on training with professional equipment inside Unit 1001, LAVG Building, Abu Dhabi.
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <span style={{ 
                  width: '28px', 
                  height: '28px', 
                  borderRadius: '50%', 
                  background: 'rgba(197, 160, 89, 0.15)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#986A3E',
                  fontWeight: 700,
                  fontSize: '12px',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>✓</span>
                <div>
                  <strong style={{ display: 'block', fontSize: '15px', color: '#633b2c', fontFamily: '"General Sans", sans-serif', marginBottom: '2px' }}>
                    Internationally Benchmarked Standard
                  </strong>
                  <span style={{ fontSize: '13.5px', color: '#8c776e', lineHeight: 1.5, display: 'block' }}>
                    CIBTAC Accredited Centre and NCLC Certified (USA) educational rigor.
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/about" className="btn-premium">
                <div className="btn-icon-wrapper">
                  <img src="/logos/gold-logomark.png" alt="" />
                </div>
                Read Our Story &amp; Vision
              </Link>

              <Link 
                href="/courses" 
                style={{
                  color: '#845E35',
                  fontWeight: 600,
                  fontSize: '14px',
                  textDecoration: 'none',
                  fontFamily: '"General Sans", sans-serif',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                Explore Courses Instead <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Layered Editorial Visuals */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(99, 59, 44, 0.12)',
              border: '1px solid rgba(197, 160, 89, 0.25)',
              position: 'relative',
              background: '#F5EFE6',
              height: '520px'
            }}>
              <img 
                src="/academy-images/al-novelle-training-centre-interior.png" 
                alt="Al Novelle training room in Abu Dhabi"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(29, 19, 12, 0.75) 0%, transparent 50%)'
              }} />

              {/* Floating Glassmorphic Badge */}
              <div style={{
                position: 'absolute',
                bottom: '28px',
                left: '28px',
                right: '28px',
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(12px)',
                borderRadius: '20px',
                padding: '20px 24px',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}>
                <span style={{ 
                  fontSize: '11px', 
                  fontFamily: '"General Sans", sans-serif', 
                  letterSpacing: '1.5px', 
                  textTransform: 'uppercase', 
                  color: '#986A3E', 
                  fontWeight: 700,
                  display: 'block',
                  marginBottom: '4px' 
                }}>
                  ABU DHABI ACADEMY
                </span>
                <h4 style={{ 
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                  fontSize: '18px', 
                  color: '#633b2c', 
                  margin: '0 0 4px 0', 
                  fontWeight: 400 
                }}>
                  Unit 1001, LAVG Building, Al Zahiyah
                </h4>
                <p style={{ 
                  fontFamily: '"General Sans", sans-serif', 
                  fontSize: '13px', 
                  color: '#8c776e', 
                  margin: 0 
                }}>
                  Purpose-built aesthetic demonstration rooms, practical suites, and admissions lounge.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
