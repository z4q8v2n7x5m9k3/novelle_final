'use client';
import React from 'react';
import Link from 'next/link';

export default function BigStatement({ content }: { content?: any }) {
  const stats = [
    { value: '10+', label: 'Years UAE Clinical Experience' },
    { value: '17', label: 'Specialized Aesthetic Tracks' },
    { value: '100%', label: 'Supervised Workstation Practice' },
    { value: 'CIBTAC', label: 'Aligned Curriculum Standards' },
  ];

  return (
    <section 
      className="big-statement-section" 
      style={{ 
        background: '#FAF8F5', 
        position: 'relative', 
        padding: '96px 24px 80px 24px',
        overflow: 'hidden'
      }}
      id="academy-overview"
    >
      {/* Subtle luxury ambient radial glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '900px',
        height: '480px',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(197, 160, 89, 0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        
        {/* Top Split: Founders / About studio on Left, Editorial Headline on Right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(200px, 280px) 1fr',
          gap: '48px',
          alignItems: 'flex-start',
          marginBottom: '64px',
          textAlign: 'left'
        }} className="statement-top-grid">
          
          {/* Left: Founder Avatars & Academy Tag */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', position: 'relative' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #FFFFFF',
                  boxShadow: '0 4px 12px rgba(99, 59, 44, 0.12)',
                  background: '#F5EFE6'
                }}>
                  <img 
                    src="/about/professional-learning-session.jpeg" 
                    alt="Dr. Azaiba Salim Kara" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #FFFFFF',
                  marginLeft: '-14px',
                  boxShadow: '0 4px 12px rgba(99, 59, 44, 0.12)',
                  background: '#EAE1D5'
                }}>
                  <img 
                    src="/about/laser-and-skin-training.png" 
                    alt="Dr. Seeta Yadav" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>

              <div>
                <span style={{
                  display: 'block',
                  fontSize: '11px',
                  fontFamily: '"General Sans", sans-serif',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  color: '#986A3E',
                  textTransform: 'uppercase'
                }}>
                  Clinical Educators
                </span>
                <span style={{
                  display: 'block',
                  fontSize: '13px',
                  fontFamily: '"General Sans", sans-serif',
                  color: '#633b2c',
                  fontWeight: 600
                }}>
                  Abu Dhabi, UAE
                </span>
              </div>
            </div>

            <Link 
              href="/about" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13.5px',
                color: '#845E35',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: '"General Sans", sans-serif'
              }}
            >
              About the Academy <span>→</span>
            </Link>
          </div>

          {/* Right: Large Editorial Serif Statement */}
          <div>
            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(1.85rem, 3.2vw, 2.65rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.3,
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              We combine foundational skin science with modern aesthetic technology and supervised practical training, so every practitioner graduates with genuine clinical confidence.
            </h2>
          </div>
        </div>

        {/* Bottom Split: Numbers on Left, Media/Photography Card on Right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr minmax(320px, 460px)',
          gap: '56px',
          alignItems: 'center',
          textAlign: 'left'
        }} className="statement-bottom-grid">
          
          {/* Left: 4 Institutional Numbers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '36px 32px'
          }}>
            {stats.map((s, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                  fontSize: 'clamp(2.4rem, 4.2vw, 3.4rem)',
                  color: '#633b2c',
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: '-0.03em'
                }}>
                  {s.value}
                </span>
                <span style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: '13.5px',
                  color: '#8c776e',
                  lineHeight: 1.5,
                  fontWeight: 500,
                  maxWidth: '220px'
                }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Proportional Media Card with Frosted Badge */}
          <div style={{
            position: 'relative',
            borderRadius: '26px',
            overflow: 'hidden',
            boxShadow: '0 18px 48px rgba(99, 59, 44, 0.09)',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            background: '#F5EFE6',
            height: '310px'
          }}>
            <img 
              src={content?.image2 || "/academy-images/laser-device-training.png"} 
              alt="Al Novelle practical clinical laser training in Abu Dhabi"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(29, 19, 12, 0.65) 0%, transparent 55%)'
            }} />

            {/* Floating Frosted Pill at Bottom */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              background: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(12px)',
              borderRadius: '16px',
              padding: '12px 18px',
              border: '1px solid rgba(197, 160, 89, 0.32)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{
                  fontSize: '9.5px',
                  letterSpacing: '1.4px',
                  textTransform: 'uppercase',
                  color: '#986A3E',
                  fontWeight: 700,
                  display: 'block',
                  fontFamily: '"General Sans", sans-serif'
                }}>
                  PRACTICAL CLINICAL SUITES
                </span>
                <strong style={{
                  fontSize: '13px',
                  color: '#633b2c',
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                  fontWeight: 400
                }}>
                  Supervised Laser &amp; Device Training
                </strong>
              </div>

              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#633b2c',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <img src="/logos/gold-logomark.png" alt="" style={{ width: '14px', height: '14px' }} />
              </div>
            </div>
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .statement-top-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .statement-bottom-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}} />
    </section>
  );
}
