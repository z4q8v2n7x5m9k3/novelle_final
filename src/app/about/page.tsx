'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.';

const standards = [
  ['01', 'Practical Learning', 'Supervised skills developed through guided clinical and salon experience in our Abu Dhabi academy.'],
  ['02', 'Safety-Led Training', 'Strict habits built around hygiene, contraindication awareness, and responsible client care.'],
  ['03', 'Internationally Inspired', 'Curriculum benchmarked to CIBTAC and NCLC standards.'],
  ['04', 'UAE-Focused Excellence', 'Professional education shaped for regulatory awareness and long-term career growth in the UAE.'],
];

export default function AboutPage() {
  return (
    <main style={{ background: '#FAF8F5' }}>
      <Navigation />

      {/* Hero — Left-Aligned, Faded Interior Background, Sized Properly */}
      <section style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '80px',
        background: 'linear-gradient(180deg, rgba(250, 248, 245, 0.88) 0%, rgba(250, 248, 245, 0.98) 100%), url("/academy-images/al-novelle-training-centre-interior.png") center/cover no-repeat',
        borderBottom: '1px solid rgba(197, 160, 89, 0.2)'
      }}>
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '780px', textAlign: 'left' }}>
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
              ABOUT AL NOVELLE
            </span>

            <h1 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2.1rem, 3.5vw, 3rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.18,
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em'
            }}>
              A New Standard for Aesthetic Education
            </h1>

            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '16px',
              color: '#8c776e',
              lineHeight: 1.65,
              margin: '0 0 28px 0',
              fontWeight: 500
            }}>
              Al Novelle brings clinical science, hands-on practical skill, and professional ambition together in Abu Dhabi.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <Link href="/courses" className="btn-premium">
                <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
                Explore Courses
              </Link>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="editorial-link">
                Speak to Admissions <span aria-hidden="true">&#8594;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story — Why We Started Novelle */}
      <section style={{ background: '#FAF6F0', padding: '96px 24px' }} id="story">
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '56px',
            alignItems: 'center'
          }}>
            <div style={{
              borderRadius: '28px',
              overflow: 'hidden',
              height: '460px',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 16px 48px rgba(99, 59, 44, 0.08)',
              position: 'relative',
              background: '#F5EFE6'
            }}>
              <img 
                src="/academy-images/al-novelle-training-centre-interior.png" 
                alt="Al Novelle training space in Abu Dhabi"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                background: 'rgba(255, 255, 255, 0.92)',
                backdropFilter: 'blur(16px)',
                borderRadius: '18px',
                padding: '18px 22px',
                border: '1px solid rgba(197, 160, 89, 0.3)'
              }}>
                <span style={{ fontSize: '10.5px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#986A3E', fontWeight: 700, display: 'block' }}>
                  OUR FOUNDING COMMITMENT
                </span>
                <strong style={{ fontSize: '15px', color: '#633b2c', fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontWeight: 400 }}>
                  A Higher Standard for the UAE
                </strong>
              </div>
            </div>

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
                border: '1px solid rgba(197, 160, 89, 0.35)'
              }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
                OUR STORY
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
                Why We Started Novelle
              </h2>

              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15.5px', color: '#8c776e', lineHeight: 1.75, margin: '0 0 16px 0', fontWeight: 500 }}>
                Aesthetic and beauty treatments are growing fast in the UAE, but training quality varies widely. Too often, people begin to practise without a firm grounding in skin science, safety and professional standards.
              </p>

              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15.5px', color: '#8c776e', lineHeight: 1.75, margin: '0 0 28px 0', fontWeight: 400 }}>
                We started Novelle to change that. As clinicians and educators who value science, quality and patient safety, we built an academy where learners are taught properly, assessed fairly and prepared to practise responsibly. Our aim is simple: to help set a higher, consistent standard for beauty and aesthetic education, starting in Abu Dhabi.
              </p>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ background: '#FFFFFF', border: '1px solid rgba(197, 160, 89, 0.25)', padding: '6px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 600, color: '#633b2c' }}>
                  Skin Science
                </span>
                <span style={{ background: '#FFFFFF', border: '1px solid rgba(197, 160, 89, 0.25)', padding: '6px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 600, color: '#633b2c' }}>
                  Patient Safety
                </span>
                <span style={{ background: '#FFFFFF', border: '1px solid rgba(197, 160, 89, 0.25)', padding: '6px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 600, color: '#633b2c' }}>
                  Supervised Practice
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission — Clean, Refined Cards */}
      <section style={{ background: '#FAF8F5', padding: '96px 24px' }} id="vision-mission">
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
          
          <div style={{ textAlign: 'left', marginBottom: '48px', maxWidth: '780px' }}>
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
              padding: '40px 36px',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              boxShadow: '0 12px 40px rgba(99, 59, 44, 0.04)',
              textAlign: 'left'
            }}>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#986A3E', textTransform: 'uppercase', fontFamily: '"General Sans", sans-serif', display: 'block', marginBottom: '14px' }}>
                OUR VISION
              </span>
              <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '23px', color: '#633b2c', fontWeight: 400, lineHeight: 1.25, margin: '0 0 14px 0' }}>
                A Recognised Benchmark for Aesthetic Education
              </h3>
              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.75, margin: 0 }}>
                To help build a recognised, internationally benchmarked standard for beauty and aesthetic education in the UAE, where every practitioner is trained in science, safety and skill.
              </p>
            </div>

            {/* Mission Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              padding: '40px 36px',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              boxShadow: '0 12px 40px rgba(99, 59, 44, 0.04)',
              textAlign: 'left'
            }}>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', color: '#845E35', textTransform: 'uppercase', fontFamily: '"General Sans", sans-serif', display: 'block', marginBottom: '14px' }}>
                OUR MISSION (PROPOSED)
              </span>
              <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '23px', color: '#633b2c', fontWeight: 400, lineHeight: 1.25, margin: '0 0 14px 0' }}>
                Turn Scientific Knowledge into Confident Practice
              </h3>
              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.75, margin: 0 }}>
                To deliver structured, practical, science-based and safety-led training that equips aspiring practitioners with verified competence, patient safety discipline, and professional confidence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Founders Section — Beautiful Light Luxury Matching Homepage */}
      <section style={{ background: '#FAF6F0', padding: '96px 24px' }} id="founders">
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
          
          <div style={{ textAlign: 'left', marginBottom: '48px', maxWidth: '780px' }}>
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
              border: '1px solid rgba(197, 160, 89, 0.35)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              THE PEOPLE BEHIND NOVELLE
            </span>

            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(1.45rem, 2.2vw, 1.95rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.25,
              margin: '0 0 10px 0',
              letterSpacing: '-0.015em'
            }}>
              Two Founders. One Shared Clinical Standard.
            </h2>
            <p style={{ maxWidth: '680px', margin: 0, color: '#8c776e', fontSize: '15.5px', lineHeight: 1.65, fontWeight: 500 }}>
              Experienced aesthetic clinicians and clinical educators united by a commitment to responsible, science-backed learning in Abu Dhabi.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
            gap: '32px' 
          }}>
            
            {/* Founder 1: Dr. Azaiba Salim Kara */}
            <article id="azaiba" style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              padding: '40px 36px',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              boxShadow: '0 12px 40px rgba(99, 59, 44, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '22px', marginBottom: '22px' }}>
                <div style={{
                  width: '92px',
                  height: '92px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #c5a059',
                  flexShrink: 0,
                  background: '#F5EFE6',
                  boxShadow: '0 6px 18px rgba(99, 59, 44, 0.08)'
                }}>
                  <img 
                    src="/about/professional-learning-session.jpeg" 
                    alt="Dr. Azaiba Salim Kara" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>

                <div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontFamily: '"General Sans", sans-serif',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#986A3E',
                    fontWeight: 700,
                    marginBottom: '4px'
                  }}>
                    Co-Founder &amp; Managing Director
                  </span>
                  <h3 style={{
                    fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                    fontSize: '23px',
                    color: '#633b2c',
                    fontWeight: 400,
                    margin: '0 0 6px 0'
                  }}>
                    Dr. Azaiba Salim Kara
                  </h3>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '11px', background: 'rgba(197, 160, 89, 0.15)', color: '#845E35', padding: '3px 9px', borderRadius: '100px', fontWeight: 600 }}>
                      NCLC Certified, USA
                    </span>
                    <span style={{ fontSize: '11px', background: '#FAF6F0', color: '#8c776e', padding: '3px 9px', borderRadius: '100px', fontWeight: 600 }}>
                      10+ Years UAE Experience
                    </span>
                  </div>
                </div>
              </div>

              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14.5px', color: '#79675e', lineHeight: 1.72, margin: '0 0 14px 0' }}>
                Dr. Azaiba Salim Kara is an aesthetic practitioner, laser specialist, clinical trainer, educator and international speaker with over a decade of clinical experience in medical aesthetics and laser technology in the UAE.
              </p>

              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14.5px', color: '#79675e', lineHeight: 1.72, margin: '0 0 14px 0' }}>
                Originally from Mumbai with a background in Homeopathic Medicine, she holds an NCLC qualification from the United States and has directed clinical training collaborations involving Alma, Fotona, Candela/Calium and VILAFORTUNY.
              </p>

              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14.5px', color: '#79675e', lineHeight: 1.72, margin: 0 }}>
                At Al Novelle, her vision focuses on combining scientific knowledge, patient safety, technical understanding, and practical clinical skills in aesthetic education.
              </p>
            </article>

            {/* Founder 2: Dr. Seeta Yadav */}
            <article id="seeta" style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              padding: '40px 36px',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              boxShadow: '0 12px 40px rgba(99, 59, 44, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '22px', marginBottom: '22px' }}>
                <div style={{
                  width: '92px',
                  height: '92px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #c5a059',
                  flexShrink: 0,
                  background: '#F5EFE6',
                  boxShadow: '0 6px 18px rgba(99, 59, 44, 0.08)'
                }}>
                  <img 
                    src="/founders/dr-seeta-yadav.jpeg" 
                    alt="Dr. Seeta Yadav" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>

                <div>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '11px',
                    fontFamily: '"General Sans", sans-serif',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#986A3E',
                    fontWeight: 700,
                    marginBottom: '4px'
                  }}>
                    Founder &amp; Academic Director
                  </span>
                  <h3 style={{
                    fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                    fontSize: '23px',
                    color: '#633b2c',
                    fontWeight: 400,
                    margin: '0 0 6px 0'
                  }}>
                    Dr. Seeta Yadav
                  </h3>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '11px', background: 'rgba(197, 160, 89, 0.15)', color: '#845E35', padding: '3px 9px', borderRadius: '100px', fontWeight: 600 }}>
                      BAMS &amp; EMS Postgraduate
                    </span>
                    <span style={{ fontSize: '11px', background: '#FAF6F0', color: '#8c776e', padding: '3px 9px', borderRadius: '100px', fontWeight: 600 }}>
                      CIBTAC Beauty Therapy
                    </span>
                  </div>
                </div>
              </div>

              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14.5px', color: '#79675e', lineHeight: 1.72, margin: '0 0 14px 0' }}>
                Dr. Seeta Yadav is a beauty, laser and aesthetics educator with a medical and clinical background. She holds a Bachelor of Ayurvedic Medicine and Surgery (BAMS), postgraduate training in Emergency Medical Services, and CIBTAC certification in Beauty Therapy.
              </p>

              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14.5px', color: '#79675e', lineHeight: 1.72, margin: '0 0 14px 0' }}>
                Her extensive career includes clinical practice and serving as a regional laser trainer across the GCC, specializing in skin science, laser safety protocols, treatment planning, and practical demonstrations.
              </p>

              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14.5px', color: '#79675e', lineHeight: 1.72, margin: 0 }}>
                As Founder and Academic Director of Al Novelle, her vision is to provide responsible, science-based aesthetic education that develops confident and knowledgeable practitioners.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* The Novelle Standard */}
      <section style={{ background: '#FAF8F5', padding: '96px 24px' }} className="about-standards-section">
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'left', marginBottom: '48px', maxWidth: '780px' }}>
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
              border: '1px solid rgba(197, 160, 89, 0.35)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              THE NOVELLE STANDARD
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
              Built Around Better Learning
            </h2>
            <p style={{ color: '#8c776e', fontSize: '15.5px', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
              Four cornerstones that guide every qualification and clinical workstation session at Al Novelle.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            {standards.map(([number, title, body]) => (
              <article key={number} style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '32px 28px',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                boxShadow: '0 8px 24px rgba(99, 59, 44, 0.03)',
                textAlign: 'left'
              }}>
                <span style={{ color: '#c5a059', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', display: 'block', marginBottom: '14px' }}>
                  {number}
                </span>
                <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '20px', color: '#633b2c', fontWeight: 400, margin: '0 0 10px 0' }}>
                  {title}
                </h3>
                <p style={{ color: '#8c776e', fontSize: '14px', lineHeight: 1.65, margin: 0 }}>
                  {body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Your Next Step */}
      <section style={{ background: '#FAF6F0', padding: '96px 24px' }}>
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF6F0 100%)',
            borderRadius: '28px',
            padding: '56px 44px',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            boxShadow: '0 12px 40px rgba(99, 59, 44, 0.05)',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '28px'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <span style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#986A3E', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                YOUR NEXT STEP
              </span>
              <h2 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#633b2c', fontWeight: 400, margin: '0 0 10px 0' }}>
                Find the Programme That Fits Your Goals
              </h2>
              <p style={{ color: '#8c776e', fontSize: '15px', lineHeight: 1.65, margin: 0 }}>
                Explore our accredited course catalogue in beauty therapy, facial aesthetics, and laser technologies, or speak directly with our Abu Dhabi admissions team.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/courses" className="btn-premium">
                <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
                Explore All 17 Courses
              </Link>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="editorial-link">
                Speak to Admissions <span aria-hidden="true">&#8594;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
