'use client';
import React from 'react';
import Link from 'next/link';

export default function HomeAboutPreview() {
  const badges = [
    "Evidence-Based Skin Science",
    "Supervised Practical Hours",
    "Strict Clinical Hygiene",
    "CIBTAC & NCLC Pathway"
  ];

  return (
    <section 
      style={{ 
        background: '#FAF6F0', 
        padding: '96px 24px', 
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="about-preview"
    >
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Split Grid Layout - Same as Practical Clinical Training */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
          gap: '56px',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Story & Vision Copy (Strictly Left Aligned) */}
          <div style={{ textAlign: 'left' }}>
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
              THE NOVELLE PHILOSOPHY
            </span>

            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em'
            }}>
              Why We Started Al Novelle
            </h2>

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '15.5px', 
              color: '#8c776e', 
              lineHeight: 1.75, 
              margin: '0 0 28px 0',
              fontWeight: 500
            }}>
              We established Al Novelle to elevate aesthetic training standards in the UAE — bridging the gap between theoretical knowledge and real clinical capability through rigorous skin science, patient safety, and supervised practice in Abu Dhabi.
            </p>

            {/* 4 Clean Pointers / Badges in a 2x2 Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '14px 18px',
              marginBottom: '36px'
            }}>
              {badges.map((item, index) => (
                <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    border: '1px solid rgba(197, 160, 89, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#FFFFFF',
                    color: '#986A3E',
                    fontSize: '11px',
                    fontWeight: 700,
                    flexShrink: 0
                  }}>✓</div>
                  <span style={{ 
                    fontFamily: '"General Sans", sans-serif', 
                    fontSize: '13.5px', 
                    fontWeight: 600, 
                    color: '#633b2c' 
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Editorial Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
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
                View Programmes <span>→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Photo with Warm Accent Border */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(99, 59, 44, 0.1)',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              position: 'relative',
              background: '#F5EFE6',
              height: '440px'
            }}>
              <img 
                src="/academy-images/al-novelle-training-centre-interior.png" 
                alt="Al Novelle training space in Abu Dhabi"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(29, 19, 12, 0.72) 0%, transparent 55%)'
              }} />

              {/* Bottom Label */}
              <div style={{
                position: 'absolute',
                bottom: '22px',
                left: '22px',
                right: '22px',
                background: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(10px)',
                borderRadius: '18px',
                padding: '16px 20px',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                textAlign: 'left'
              }}>
                <span style={{ 
                  fontSize: '10px', 
                  fontFamily: '"General Sans", sans-serif', 
                  letterSpacing: '1.5px', 
                  textTransform: 'uppercase', 
                  color: '#986A3E', 
                  fontWeight: 700,
                  display: 'block',
                  marginBottom: '2px' 
                }}>
                  ABU DHABI ACADEMY
                </span>
                <h4 style={{ 
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                  fontSize: '17px', 
                  color: '#633b2c', 
                  margin: '0 0 2px 0', 
                  fontWeight: 400 
                }}>
                  Unit 1001, LAVG Building, Al Zahiyah
                </h4>
                <p style={{ 
                  fontFamily: '"General Sans", sans-serif', 
                  fontSize: '12.5px', 
                  color: '#8c776e', 
                  margin: 0 
                }}>
                  Clinical demonstration suites, practical training stations, and admissions lounge.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
