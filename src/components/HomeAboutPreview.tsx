'use client';
import React from 'react';
import Link from 'next/link';

export default function HomeAboutPreview() {
  return (
    <section 
      style={{ 
        background: '#FAF6F0', 
        padding: '100px 24px', 
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="about-preview"
    >
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Split Grid Layout - Unified 1260px Width */}
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
              margin: '0 0 18px 0',
              letterSpacing: '-0.02em'
            }}>
              Why We Started Al Novelle
            </h2>

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '15.5px', 
              color: '#8c776e', 
              lineHeight: 1.75, 
              margin: '0 0 16px 0',
              fontWeight: 500
            }}>
              Aesthetic and beauty treatments are expanding rapidly across the UAE, yet training standards vary widely. Too often, learners enter the industry without essential grounding in skin anatomy, hygiene protocols, and clinical safety.
            </p>

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '15.5px', 
              color: '#8c776e', 
              lineHeight: 1.75, 
              margin: '0 0 28px 0',
              fontWeight: 400
            }}>
              We established Novelle to change that. As clinicians and educators, we built an academy where learners are taught rigorously, assessed fairly, and prepared for responsible real-world practice starting right here in Abu Dhabi.
            </p>

            {/* Clean Editorial Pointers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '34px' }}>
              {[
                { title: 'Evidence-Based Skin Science', detail: 'Anatomy, cellular biology, and product science before needle or device touches skin.' },
                { title: 'Supervised Clinical Workstations', detail: 'Hands-on practice under experienced clinical educators in Abu Dhabi.' },
                { title: 'Recognised UAE & Global Benchmarks', detail: 'Curriculum structured around CIBTAC and NCLC standards.' }
              ].map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(197, 160, 89, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#986A3E',
                    fontSize: '11px',
                    fontWeight: 700,
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>✓</div>
                  <div>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#633b2c', fontFamily: '"General Sans", sans-serif' }}>
                      {p.title}:{' '}
                    </span>
                    <span style={{ fontSize: '14px', color: '#8c776e', fontFamily: '"General Sans", sans-serif', lineHeight: 1.5 }}>
                      {p.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Clean Editorial Actions */}
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
              height: '460px'
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
