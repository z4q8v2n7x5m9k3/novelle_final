import React from 'react';
import Link from 'next/link';

export default function VisionMission() {
  return (
    <section className="section-padding vision-mission-section" style={{ background: '#FAF6F0', padding: '120px 24px' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="vision-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '64px', 
          alignItems: 'center' 
        }}>
          {/* Left Column: Text & Features (Desktop Left, Mobile Top) */}
          <div className="vision-content" style={{ paddingRight: '0px' }}>
            <span className="scroll-reveal reveal-from-left" style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF', 
              padding: '8px 16px', 
              borderRadius: '100px',
              fontSize: '13px', 
              letterSpacing: '1px',
              fontWeight: 600,
              color: '#633b2c',
              textTransform: 'uppercase',
              fontFamily: '"General Sans", sans-serif',
              marginBottom: '24px',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              Vision & Mission
            </span>

            <h2 className="scroll-reveal reveal-from-left reveal-delay-1" style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: '28px',
              marginTop: 0,
              letterSpacing: '-0.02em'
            }}>
              Shaping the Future of Aesthetic Education
            </h2>

            <p className="scroll-reveal reveal-from-left reveal-delay-2" style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '18px',
              color: '#633b2c',
              fontWeight: 500,
              lineHeight: 1.5,
              marginBottom: '16px'
            }}>
              Novelle is built with a clear ambition: to raise the standard of professional aesthetic education through structured training, practical learning, and a culture of excellence rooted in the UAE.
            </p>

            <p className="scroll-reveal reveal-from-left reveal-delay-3" style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '15px',
              color: '#8c776e',
              lineHeight: 1.7,
              marginBottom: '40px',
              fontWeight: '500'
            }}>
              Our mission is to transform education into competence, confidence, and responsible practice through internationally inspired learning rooted in the UAE's culture of excellence and innovation.
            </p>
            
            {/* Features 2x2 Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '24px 32px',
              marginTop: '32px'
            }}>
              {[
                "UAE-Focused Excellence",
                "Practical Learning",
                "Safety-Led Training",
                "Professional Development"
              ].map((item, index) => (
                <div key={index} className={`scroll-reveal reveal-from-left reveal-delay-${Math.min(index + 3, 6)}`} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: '1px solid rgba(197, 160, 89, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(245, 239, 230, 0.4)',
                    flexShrink: 0
                  }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#c5a059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ 
                    fontFamily: '"General Sans", sans-serif', 
                    fontSize: '15px', 
                    fontWeight: 600, 
                    color: '#633b2c' 
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="vision-cta-row scroll-reveal reveal-from-left reveal-delay-6">
              <Link href="/contact" className="btn-premium">
                <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
                Begin Your Learning Journey
              </Link>
              <a
                href="https://wa.me/971502348625?text=Hello%20Novelle%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link"
              >Contact Novelle <span aria-hidden="true">&#8594;</span></a>
            </div>
          </div>

          {/* Right Column: Image and Frosted glass card (Desktop Right, Mobile Bottom) */}
          <div className="vision-image-col scroll-reveal reveal-from-right reveal-delay-1" style={{ 
            position: 'relative', 
            borderRadius: '32px', 
            overflow: 'visible',
            height: '100%',
            minHeight: '600px',
            boxShadow: 'none'
          }}>
            <img 
              src="/academy-images/student-support-admissions.png" 
              alt="Novelle academy student support and admissions guidance" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '32px',
                boxShadow: '0 20px 48px rgba(99, 59, 44, 0.08)',
                display: 'block',
                position: 'absolute'
              }}
            />
            
            {/* Floating Frosted Glass Card */}
            <div className="vision-glass-card scroll-reveal reveal-from-right reveal-delay-3" style={{
              position: 'absolute',
              bottom: '32px',
              left: '32px',
              right: '32px',
              background: 'rgba(255, 255, 255, 0.75)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '24px 32px',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              boxShadow: '0 12px 40px rgba(99, 59, 44, 0.06)',
              maxWidth: '360px'
            }}>
              {/* Speech bubble icon with three dots */}
              <div style={{ marginBottom: '14px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#633b2c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="8" cy="11" r="1" fill="#633b2c" />
                  <circle cx="12" cy="11" r="1" fill="#633b2c" />
                  <circle cx="16" cy="11" r="1" fill="#633b2c" />
                </svg>
              </div>
              
              <h4 style={{ 
                fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                fontSize: '18px', 
                color: '#633b2c', 
                fontWeight: 400,
                margin: '0 0 4px 0',
                letterSpacing: '-0.01em'
              }}>
                Student Support Services
              </h4>
              <p style={{ 
                fontFamily: '"General Sans", sans-serif', 
                fontSize: '13px', 
                color: '#c5a059', 
                margin: 0,
                fontWeight: 600
              }}>
                Guidance from enrolment to professional growth
              </p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .vision-grid {
            display: flex !important;
            flex-direction: column;
            gap: 40px !important;
          }
          .vision-image-col {
            min-height: 480px !important;
            width: 100%;
          }
          .vision-glass-card {
            padding: 16px !important;
            left: 16px !important;
            right: 16px !important;
            bottom: 16px !important;
          }
        }
      `}} />
    </section>
  );
}
