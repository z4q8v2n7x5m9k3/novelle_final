'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Novelle%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.';

const standards = [
  ['01', 'Practical Learning', 'Supervised skills developed through guided clinical and salon experience in our Abu Dhabi academy.'],
  ['02', 'Safety-Led Training', 'Strict habits built around hygiene, contraindication awareness, and responsible client care.'],
  ['03', 'Internationally Inspired', 'Curriculum benchmarked to CIBTAC and NCLC standards.'],
  ['04', 'UAE-Focused Excellence', 'Professional education shaped for regulatory awareness and long-term career growth in the UAE.'],
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <Navigation />

      {/* Hero */}
      <section className="about-hero">
        <div className="container about-hero-inner">
          <span className="section-eyebrow">ABOUT AL NOVELLE</span>
          <h1 style={{ fontSize: 'clamp(2.1rem, 3.4vw, 3.2rem)', lineHeight: 1.15 }}>
            <span>A New Standard for</span><span>Aesthetic Education</span>
          </h1>
          <p>Al Novelle brings science, practical skill, and professional ambition together in Abu Dhabi.</p>
          <div className="about-hero-actions">
            <Link href="/courses" className="btn-premium">
              <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
              Explore Courses
            </Link>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="editorial-link">
              Speak to Admissions <span aria-hidden="true">&#8594;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why We Started Novelle Section */}
      <section className="about-approach-section" id="story">
        <div className="container about-split-card">
          <div className="about-split-image scroll-reveal reveal-from-left">
            <img src="/academy-images/al-novelle-training-centre-interior.png" alt="Al Novelle training space in Abu Dhabi" />
            <div className="about-image-note">
              <span>Why We Started</span>
              <strong>A Higher Standard for the UAE</strong>
            </div>
          </div>
          <div className="about-split-copy scroll-reveal reveal-from-right reveal-delay-1">
            <span className="section-eyebrow">OUR STORY</span>
            <h2>Why We Started Novelle</h2>
            <p style={{ marginBottom: '16px', lineHeight: 1.75 }}>
              Aesthetic and beauty treatments are growing fast in the UAE, but training quality varies widely. Too often, people begin to practise without a firm grounding in skin science, safety and professional standards.
            </p>
            <p style={{ marginBottom: '24px', lineHeight: 1.75 }}>
              We started Novelle to change that. As clinicians and educators who value science, quality and patient safety, we built an academy where learners are taught properly, assessed fairly and prepared to practise responsibly. Our aim is simple: to help set a higher, consistent standard for beauty and aesthetic education, starting in Abu Dhabi.
            </p>
            <div className="about-approach-points">
              <span>Skin Science</span>
              <span>Patient Safety</span>
              <span>Supervised Practice</span>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Vision & Mission — Modern Architectural Split Layout */}
      <section style={{ background: '#FAF8F5', padding: '96px 24px 104px 24px' }} id="vision-mission">
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'left', marginBottom: '48px' }}>
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
              marginBottom: '14px',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              boxShadow: '0 4px 12px rgba(99, 59, 44, 0.03)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              VISION &amp; PURPOSE
            </span>

            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: '0 0 12px 0',
              letterSpacing: '-0.02em'
            }}>
              Education That Translates into Clinical Capability
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
            
            {/* Vision Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              padding: '44px 38px',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              boxShadow: '0 12px 40px rgba(99, 59, 44, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: '#c5a059'
              }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  color: '#986A3E',
                  textTransform: 'uppercase',
                  fontFamily: '"General Sans", sans-serif'
                }}>
                  OUR VISION
                </span>
                <span style={{
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                  fontSize: '24px',
                  color: 'rgba(197, 160, 89, 0.4)',
                  fontWeight: 400
                }}>01</span>
              </div>
              <h3 style={{
                fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                fontSize: '24px',
                color: '#633b2c',
                fontWeight: 400,
                lineHeight: 1.25,
                margin: '0 0 16px 0'
              }}>
                A Recognised Benchmark for Aesthetic Education
              </h3>
              <p style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '15px',
                color: '#8c776e',
                lineHeight: 1.75,
                margin: 0
              }}>
                To help build a recognised, internationally benchmarked standard for beauty and aesthetic education in the UAE, where every practitioner is thoroughly grounded in science, patient safety, and supervised skill.
              </p>
            </div>

            {/* Mission Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              padding: '44px 38px',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              boxShadow: '0 12px 40px rgba(99, 59, 44, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: '#845E35'
              }} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  color: '#845E35',
                  textTransform: 'uppercase',
                  fontFamily: '"General Sans", sans-serif'
                }}>
                  OUR MISSION (PROPOSED)
                </span>
                <span style={{
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                  fontSize: '24px',
                  color: 'rgba(197, 160, 89, 0.4)',
                  fontWeight: 400
                }}>02</span>
              </div>
              <h3 style={{
                fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                fontSize: '24px',
                color: '#633b2c',
                fontWeight: 400,
                lineHeight: 1.25,
                margin: '0 0 16px 0'
              }}>
                Transform Scientific Knowledge into Confident Practice
              </h3>
              <p style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '15px',
                color: '#8c776e',
                lineHeight: 1.75,
                margin: 0
              }}>
                To deliver structured, practical, science-based and safety-led training that equips aspiring practitioners with verified competence, patient safety discipline, and professional confidence for long-term career growth.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Redesigned Founders Section — Embedded Portrait with Deep Green-Black Luxury Panel */}
      <section style={{ background: '#FFFFFF', padding: '104px 24px 112px 24px' }} id="founders">
        <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'left', marginBottom: '52px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FAF6F0',
              padding: '7px 16px',
              borderRadius: '100px',
              fontSize: '11px',
              letterSpacing: '2px',
              fontWeight: 700,
              color: '#633b2c',
              textTransform: 'uppercase',
              fontFamily: '"General Sans", sans-serif',
              marginBottom: '14px',
              border: '1px solid rgba(197, 160, 89, 0.35)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              THE PEOPLE BEHIND NOVELLE
            </span>

            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: '0 0 12px 0',
              letterSpacing: '-0.02em'
            }}>
              Two Founders. One Shared Clinical Standard.
            </h2>
            <p style={{ maxWidth: '680px', margin: 0, color: '#8c776e', fontSize: '15px', lineHeight: 1.65 }}>
              Experienced aesthetic clinicians and educators united by a commitment to responsible, science-backed learning in Abu Dhabi.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
            gap: '36px' 
          }}>
            
            {/* Founder 1: Dr. Azaiba Salim Kara */}
            <article style={{
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(10, 20, 14, 0.12)',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              background: '#0d1812'
            }}>
              {/* Photo Area */}
              <div style={{ height: '360px', overflow: 'hidden', position: 'relative', background: '#1c2820' }}>
                <img 
                  src="/about/professional-learning-session.jpeg" 
                  alt="Dr. Azaiba Salim Kara, Co-Founder at Al Novelle"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(13, 24, 18, 0.95) 100%)'
                }} />
                <span style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(13, 24, 18, 0.85)',
                  backdropFilter: 'blur(10px)',
                  color: '#c5a059',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  border: '1px solid rgba(197, 160, 89, 0.3)'
                }}>
                  01 · LEADERSHIP
                </span>
              </div>

              {/* Deep Green-Black Luxury Panel */}
              <div style={{
                padding: '36px 36px 42px 36px',
                background: 'linear-gradient(180deg, #0d1812 0%, #080f0b 100%)',
                borderTop: '1px solid rgba(197, 160, 89, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}>
                <span style={{
                  color: '#c5a059',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: '"General Sans", sans-serif',
                  marginBottom: '6px',
                  display: 'block'
                }}>
                  Co-Founder &amp; Managing Director
                </span>

                <h3 style={{
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                  fontSize: '26px',
                  color: '#FFFFFF',
                  fontWeight: 400,
                  margin: '0 0 14px 0'
                }}>
                  Dr. Azaiba Salim Kara
                </h3>

                {/* Badges */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  <span style={{
                    background: 'rgba(197, 160, 89, 0.18)',
                    color: '#e4c489',
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: '100px',
                    border: '1px solid rgba(197, 160, 89, 0.3)'
                  }}>
                    NCLC Certified, USA
                  </span>
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#c0c9c3',
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: '100px'
                  }}>
                    10+ Years UAE Experience
                  </span>
                </div>

                {/* Bio text */}
                <p style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: '14.5px',
                  color: '#b8c4bc',
                  lineHeight: 1.72,
                  margin: '0 0 14px 0'
                }}>
                  Dr. Azaiba Salim Kara is an aesthetic practitioner, laser specialist, clinical trainer, educator and international speaker with over a decade of clinical experience in medical aesthetics and laser technology in the UAE.
                </p>

                <p style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: '14.5px',
                  color: '#b8c4bc',
                  lineHeight: 1.72,
                  margin: '0 0 14px 0'
                }}>
                  Originally from Mumbai with a background in Homeopathic Medicine, she holds an NCLC qualification from the United States and has directed clinical training collaborations involving Alma, Fotona, Candela/Calium and VILAFORTUNY.
                </p>

                <p style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: '14.5px',
                  color: '#b8c4bc',
                  lineHeight: 1.72,
                  margin: 0
                }}>
                  At Al Novelle, her vision focuses on combining scientific knowledge, patient safety, technical understanding, and practical clinical skills in aesthetic education.
                </p>
              </div>
            </article>

            {/* Founder 2: Dr. Seeta Yadav */}
            <article style={{
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(10, 20, 14, 0.12)',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              background: '#0d1812'
            }}>
              {/* Photo Area */}
              <div style={{ height: '360px', overflow: 'hidden', position: 'relative', background: '#1c2820' }}>
                <img 
                  src="/founders/dr-seeta-yadav.jpeg" 
                  alt="Dr. Seeta Yadav, Founder & Academic Director at Al Novelle"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(13, 24, 18, 0.95) 100%)'
                }} />
                <span style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(13, 24, 18, 0.85)',
                  backdropFilter: 'blur(10px)',
                  color: '#c5a059',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  border: '1px solid rgba(197, 160, 89, 0.3)'
                }}>
                  02 · ACADEMIC DIRECTOR
                </span>
              </div>

              {/* Deep Green-Black Luxury Panel */}
              <div style={{
                padding: '36px 36px 42px 36px',
                background: 'linear-gradient(180deg, #0d1812 0%, #080f0b 100%)',
                borderTop: '1px solid rgba(197, 160, 89, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}>
                <span style={{
                  color: '#c5a059',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: '"General Sans", sans-serif',
                  marginBottom: '6px',
                  display: 'block'
                }}>
                  Founder &amp; Academic Director
                </span>

                <h3 style={{
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                  fontSize: '26px',
                  color: '#FFFFFF',
                  fontWeight: 400,
                  margin: '0 0 14px 0'
                }}>
                  Dr. Seeta Yadav
                </h3>

                {/* Badges */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  <span style={{
                    background: 'rgba(197, 160, 89, 0.18)',
                    color: '#e4c489',
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: '100px',
                    border: '1px solid rgba(197, 160, 89, 0.3)'
                  }}>
                    BAMS &amp; EMS Postgraduate
                  </span>
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#c0c9c3',
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: '100px'
                  }}>
                    CIBTAC Beauty Therapy
                  </span>
                </div>

                {/* Bio text */}
                <p style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: '14.5px',
                  color: '#b8c4bc',
                  lineHeight: 1.72,
                  margin: '0 0 14px 0'
                }}>
                  Dr. Seeta Yadav is a beauty, laser and aesthetics educator with a medical and clinical background. She holds a Bachelor of Ayurvedic Medicine and Surgery (BAMS), postgraduate training in Emergency Medical Services, and CIBTAC certification in Beauty Therapy.
                </p>

                <p style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: '14.5px',
                  color: '#b8c4bc',
                  lineHeight: 1.72,
                  margin: '0 0 14px 0'
                }}>
                  Her extensive career includes clinical practice and serving as a regional laser trainer across the GCC, specializing in skin science, laser safety protocols, treatment planning, and practical demonstrations.
                </p>

                <p style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: '14.5px',
                  color: '#b8c4bc',
                  lineHeight: 1.72,
                  margin: 0
                }}>
                  As Founder and Academic Director of Al Novelle, her vision is to provide responsible, science-based aesthetic education that develops confident and knowledgeable practitioners.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* The Novelle Standard */}
      <section className="about-standards-section">
        <div className="container">
          <div className="about-section-heading standards-heading scroll-reveal reveal-from-left">
            <span className="section-eyebrow">THE NOVELLE STANDARD</span>
            <h2>Built around better learning.</h2>
            <p>Four cornerstones that guide every qualification and clinical workstation session at Al Novelle.</p>
          </div>
          <div className="about-standards-grid">
            {standards.map(([number, title, body], index) => (
              <article className={`scroll-reveal ${index % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right'} reveal-delay-${index + 1}`} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Your Next Step */}
      <section className="about-final-cta">
        <div className="container about-final-cta-inner scroll-reveal reveal-from-left">
          <span className="section-eyebrow">YOUR NEXT STEP</span>
          <h2>Find the programme that fits your goals.</h2>
          <p style={{ maxWidth: '640px', margin: '0 auto 28px auto', color: '#8c776e', fontSize: '15px', lineHeight: 1.65 }}>
            Explore our accredited course catalogue in beauty therapy, facial aesthetics, and laser technologies, or speak directly with our Abu Dhabi admissions team.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/courses" className="btn-premium">
              <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
              Explore All 17 Courses
            </Link>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="editorial-link">
              Speak to Admissions <span aria-hidden="true">&#8594;</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
