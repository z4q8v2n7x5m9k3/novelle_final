'use client';
import React from 'react';
import Link from 'next/link';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20know%20more%20about%20your%20clinical%20training%20facilities.';

export default function VisionMission() {
  return (
    <section className="section-padding vision-mission-section" style={{ background: '#FAF6F0', padding: '100px 24px 110px 24px' }} id="clinical-training">
      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto' }}>
        <div className="vision-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1.05fr 0.95fr', 
          gap: '64px', 
          alignItems: 'center' 
        }}>
          {/* Left Column: Text & Features (Strictly Left Aligned) */}
          <div className="vision-content" style={{ textAlign: 'left' }}>
            <span className="scroll-reveal reveal-from-left" style={{ 
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
              marginBottom: '18px',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              PRACTICAL CLINICAL TRAINING
            </span>

            <h2 className="scroll-reveal reveal-from-left reveal-delay-1" style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: '20px',
              marginTop: 0,
              letterSpacing: '-0.02em'
            }}>
              Supervised Practice on Equipped Clinical Workstations
            </h2>

            <p className="scroll-reveal reveal-from-left reveal-delay-2" style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '16px',
              color: '#633b2c',
              fontWeight: 500,
              lineHeight: 1.65,
              marginBottom: '14px'
            }}>
              At Al Novelle, theoretical skin science translates directly into real clinical capability. Every learner practises with professional equipment, proper client consultation protocols, and rigorous hygiene routines in our Abu Dhabi academy suites.
            </p>

            <p className="scroll-reveal reveal-from-left reveal-delay-3" style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '15px',
              color: '#8c776e',
              lineHeight: 1.7,
              marginBottom: '32px',
              fontWeight: 400
            }}>
              Guided step-by-step by clinical educators, students gain hands-on competence in skin analysis, facial technologies, and treatment delivery — building authentic confidence for professional salon and medical aesthetic settings.
            </p>
            
            {/* Features 2x2 Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
              gap: '20px 24px',
              marginBottom: '36px'
            }}>
              {[
                "Dedicated Practical Workstations",
                "Supervised Demonstration Models",
                "Strict Hygiene & Sterilisation",
                "Pathway to UAE Accreditation"
              ].map((item, index) => (
                <div key={index} className={`scroll-reveal reveal-from-left reveal-delay-${Math.min(index + 3, 6)}`} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    border: '1px solid rgba(197, 160, 89, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#FFFFFF',
                    flexShrink: 0
                  }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#c5a059" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ 
                    fontFamily: '"General Sans", sans-serif', 
                    fontSize: '14px', 
                    fontWeight: 600, 
                    color: '#633b2c' 
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="vision-cta-row scroll-reveal reveal-from-left reveal-delay-6" style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <Link href="/courses" className="btn-premium">
                <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
                Explore Our Courses
              </Link>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="editorial-link"
              >
                Inquire on WhatsApp <span aria-hidden="true">&#8594;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual side with Floating Frosted Glass Card */}
          <div className="vision-image-col scroll-reveal reveal-from-right reveal-delay-1" style={{ 
            position: 'relative', 
            borderRadius: '32px', 
            overflow: 'visible',
            height: '100%',
            minHeight: '560px',
            boxShadow: 'none'
          }}>
            <img 
              src="/academy-images/student-support-admissions.png" 
              alt="Al Novelle practical training and student guidance in Abu Dhabi" 
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
              bottom: '28px',
              left: '28px',
              right: '28px',
              background: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '24px 28px',
              borderRadius: '22px',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 12px 40px rgba(99, 59, 44, 0.08)',
              maxWidth: '380px'
            }}>
              <div style={{ marginBottom: '12px' }}>
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
                Dedicated Training Suites
              </h4>
              <p style={{ 
                fontFamily: '"General Sans", sans-serif', 
                fontSize: '13px', 
                color: '#986A3E', 
                margin: 0,
                fontWeight: 600
              }}>
                Unit 1001, LAVG Building, Abu Dhabi
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
            padding: 18px !important;
            left: 18px !important;
            right: 18px !important;
            bottom: 18px !important;
          }
        }
      `}} />
    </section>
  );
}
