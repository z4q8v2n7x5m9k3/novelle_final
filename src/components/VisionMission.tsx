'use client';
import React from 'react';
import Link from 'next/link';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20know%20more%20about%20your%20clinical%20training%20facilities.';

export default function VisionMission() {
  return (
    <section className="section-padding vision-mission-section" style={{ background: '#FAF8F5', padding: '96px 24px' }} id="clinical-training">
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        <div className="vision-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
          gap: '56px', 
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
              marginBottom: '16px',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              boxShadow: '0 4px 12px rgba(99, 59, 44, 0.03)'
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
              marginBottom: '18px',
              marginTop: 0,
              letterSpacing: '-0.02em'
            }}>
              Supervised Practice on Equipped Clinical Workstations
            </h2>

            <p className="scroll-reveal reveal-from-left reveal-delay-2" style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '15.5px',
              color: '#8c776e',
              lineHeight: 1.75,
              marginBottom: '28px',
              fontWeight: 500
            }}>
              At Al Novelle, skin science translates directly into real clinical capability. Every learner trains on professional workstations with guided consultation protocols, hygiene disciplines, and supervised demonstration models in Abu Dhabi.
            </p>
            
            {/* Features 2x2 Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '16px 20px',
              marginBottom: '36px'
            }}>
              {[
                "Dedicated Practical Workstations",
                "Supervised Demonstration Models",
                "Strict Hygiene & Sterilisation",
                "Pathway to UAE Accreditation"
              ].map((item, index) => (
                <div key={index} className={`scroll-reveal reveal-from-left reveal-delay-${Math.min(index + 3, 6)}`} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
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
            borderRadius: '28px', 
            overflow: 'hidden',
            height: '460px',
            border: '1px solid rgba(197, 160, 89, 0.3)',
            boxShadow: '0 16px 48px rgba(99, 59, 44, 0.08)',
            background: '#F5EFE6'
          }}>
            <img 
              src="/academy-images/student-support-admissions.png" 
              alt="Al Novelle practical training and student guidance in Abu Dhabi" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            
            {/* Floating Frosted Glass Card */}
            <div className="vision-glass-card scroll-reveal reveal-from-right reveal-delay-3" style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              background: 'rgba(255, 255, 255, 0.92)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              padding: '20px 24px',
              borderRadius: '18px',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 10px 30px rgba(99, 59, 44, 0.08)'
            }}>
              <span style={{ 
                fontSize: '10.5px', 
                letterSpacing: '1.5px', 
                textTransform: 'uppercase', 
                color: '#986A3E', 
                fontWeight: 700, 
                display: 'block', 
                marginBottom: '2px',
                fontFamily: '"General Sans", sans-serif'
              }}>
                ACADEMY TRAINING SUITES
              </span>
              <h4 style={{ 
                fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                fontSize: '17px', 
                color: '#633b2c', 
                fontWeight: 400, 
                margin: '0 0 2px 0'
              }}>
                Unit 1001, LAVG Building, Abu Dhabi
              </h4>
              <p style={{ 
                fontFamily: '"General Sans", sans-serif', 
                fontSize: '12.5px', 
                color: '#8c776e', 
                margin: 0
              }}>
                Equipped clinical stations for facial aesthetics, massage, and laser demos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
