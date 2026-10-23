'use client';
import React from 'react';
import Link from 'next/link';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20know%20more%20about%20your%20clinical%20training%20facilities.';

export default function VisionMission() {
  return (
    <section 
      className="scroll-reveal"
      style={{ 
        background: '#FAF8F5', 
        padding: '110px 24px',
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="clinical-training"
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
            PRACTICAL WORKSTATIONS
          </span>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
          gap: '56px', 
          alignItems: 'center' 
        }}>
          {/* Left Column: Text & Features */}
          <div style={{ textAlign: 'left' }}>
            <h2 className="supervised-single-line-title" style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.25,
              marginBottom: '18px',
              marginTop: 0,
              letterSpacing: '-0.02em'
            }}>
              Supervised Clinical Practice
            </h2>

            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '15px',
              color: '#7a6b63',
              lineHeight: 1.7,
              marginBottom: '28px',
              fontWeight: 450
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

            {/* Action CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a 
                href={WA_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#1D130C',
                  color: '#FFFFFF',
                  padding: '12px 24px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontFamily: '"General Sans", sans-serif',
                  boxShadow: '0 4px 14px rgba(29, 19, 12, 0.18)',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#845E35')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1D130C')}
              >
                <span>Enquire About Training Suites</span>
                <span>&gt;</span>
              </a>

              <Link 
                href="/gallery" 
                style={{
                  fontSize: '13.5px',
                  fontFamily: '"General Sans", sans-serif',
                  fontWeight: 600,
                  color: '#845E35',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                View Academy Spaces <span>&gt;</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Workstation Photography with Stats Overlay */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(99, 59, 44, 0.1)',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              position: 'relative',
              background: '#F5EFE6',
              height: '420px'
            }}>
              <img 
                src="/academy-images/al-novelle-training-centre-interior.png" 
                alt="Al Novelle practical training facility in Abu Dhabi"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(29, 19, 12, 0.72) 0%, transparent 60%)'
              }} />

              {/* Floating Bottom Card */}
              <div style={{
                position: 'absolute',
                bottom: '18px',
                left: '18px',
                right: '18px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '18px',
                padding: '16px 20px',
                border: '1px solid rgba(197, 160, 89, 0.32)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <div>
                  <span style={{ 
                    fontSize: '9.5px', 
                    letterSpacing: '1.4px', 
                    textTransform: 'uppercase', 
                    color: '#986A3E', 
                    fontWeight: 700,
                    display: 'block',
                    fontFamily: '"General Sans", sans-serif',
                    marginBottom: '2px'
                  }}>
                    ABU DHABI CAMPUS
                  </span>
                  <strong style={{ 
                    fontSize: '14px', 
                    color: '#633b2c', 
                    fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                    fontWeight: 400 
                  }}>
                    Equipped Clinical Workstations
                  </strong>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontFamily: '"General Sans", sans-serif',
                    fontWeight: 600,
                    background: '#FAF6F0',
                    color: '#633b2c',
                    padding: '4px 10px',
                    borderRadius: '100px',
                    border: '1px solid rgba(197, 160, 89, 0.25)'
                  }}>
                    1:1 Supervision
                  </span>
                  <span style={{
                    fontSize: '11px',
                    fontFamily: '"General Sans", sans-serif',
                    fontWeight: 600,
                    background: 'rgba(197, 160, 89, 0.15)',
                    color: '#845E35',
                    padding: '4px 10px',
                    borderRadius: '100px'
                  }}>
                    Live Models
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 900px) {
          .supervised-single-line-title {
            white-space: nowrap !important;
          }
        }
      `}} />
    </section>
  );
}
