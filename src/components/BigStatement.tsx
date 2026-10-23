'use client';
import React from 'react';
import Link from 'next/link';

export default function BigStatement({ content }: { content?: any }) {
  const stats = [
    { value: '98%', label: 'Satisfaction rate' },
    { value: '100%', label: 'Supervised practice' },
    { value: '4.9', label: 'Graduate rating' },
    { value: '10+', label: 'Years in practice' },
  ];

  return (
    <section 
      className="big-statement-section" 
      style={{ 
        background: '#FAF8F5', 
        position: 'relative', 
        padding: '100px 24px 90px 24px',
        overflow: 'hidden'
      }} 
      id="about-academy"
    >
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Top Split: Founders / About studio on Left, Editorial Headline on Right (Exact Image 2) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(200px, 260px) 1fr',
          gap: '56px',
          alignItems: 'flex-start',
          marginBottom: '64px',
          textAlign: 'left'
        }} className="statement-top-grid">
          
          {/* Left Column: Eyebrow + Two Square Photos + Meet the Team Link */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '13px',
              color: '#8c776e',
              fontWeight: 500
            }}>
              About the academy /
            </span>

            {/* Two Side-by-Side Square/Rounded Founder Photos (Image 2 style) */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(197, 160, 89, 0.35)',
                boxShadow: '0 4px 14px rgba(99, 59, 44, 0.08)',
                background: '#F5EFE6',
                flexShrink: 0
              }}>
                <img 
                  src="/about/professional-learning-session.jpeg" 
                  alt="Dr. Azaiba Salim Kara" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(197, 160, 89, 0.35)',
                boxShadow: '0 4px 14px rgba(99, 59, 44, 0.08)',
                background: '#EAE1D5',
                flexShrink: 0
              }}>
                <img 
                  src="/about/laser-and-skin-training.png" 
                  alt="Dr. Seeta Yadav" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            <Link 
              href="#specialists" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13.5px',
                color: '#633b2c',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: '"General Sans", sans-serif',
                marginTop: '4px'
              }}
            >
              Meet the team <span>&gt;</span>
            </Link>
          </div>

          {/* Right Column: Statement Typography (Exact Image 2) */}
          <div>
            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(1.9rem, 3.2vw, 2.75rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              We deliver structured aesthetic education with modern clinical technology and supervised hands-on training, so every practitioner graduates with genuine clinical confidence and a clear pathway for professional excellence.
            </h2>
          </div>
        </div>

        {/* Bottom Split: Numbers on Left, Media Card on Right (Exact Image 2) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr minmax(320px, 440px)',
          gap: '56px',
          alignItems: 'flex-end',
          textAlign: 'left'
        }} className="statement-bottom-grid">
          
          {/* Left: Section Label + 4 Numbers with Vertical Dividers */}
          <div>
            <span style={{
              display: 'block',
              fontFamily: '"General Sans", sans-serif',
              fontSize: '12.5px',
              color: '#8c776e',
              marginBottom: '20px',
              fontWeight: 500
            }}>
              Numbers from our Abu Dhabi academy
            </span>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              alignItems: 'flex-start'
            }} className="stats-row-grid">
              {stats.map((s, i) => (
                <div 
                  key={i} 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: '6px',
                    paddingRight: '12px',
                    borderRight: i < stats.length - 1 ? '1px solid rgba(197, 160, 89, 0.25)' : 'none'
                  }}
                  className="stat-col-cell"
                >
                  <span style={{
                    fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                    fontSize: 'clamp(2.3rem, 3.6vw, 3.1rem)',
                    color: '#633b2c',
                    fontWeight: 400,
                    lineHeight: 1,
                    letterSpacing: '-0.03em'
                  }}>
                    {s.value}
                  </span>
                  <span style={{
                    fontFamily: '"General Sans", sans-serif',
                    fontSize: '12px',
                    color: '#8c776e',
                    lineHeight: 1.45,
                    fontWeight: 500
                  }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Media Card with Bottom-Left Floating Pill (Exact Image 2) */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 16px 45px rgba(99, 59, 44, 0.08)',
            border: '1px solid rgba(197, 160, 89, 0.32)',
            background: '#F5EFE6',
            height: '280px'
          }}>
            <img 
              src={content?.image2 || "/academy-images/laser-device-training.png"} 
              alt="Al Novelle practical clinical laser training in Abu Dhabi"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {/* Bottom-Left Floating Pill with Dot (Exact Image 2) */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              background: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderRadius: '100px',
              padding: '7px 16px',
              border: '1px solid rgba(197, 160, 89, 0.28)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#25D366',
                display: 'inline-block'
              }} />
              <span style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                color: '#633b2c'
              }}>
                Supervised clinical training in Abu Dhabi
              </span>
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
          .stats-row-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          .stat-col-cell {
            border-right: none !important;
            padding-right: 0 !important;
          }
        }
      `}} />
    </section>
  );
}
