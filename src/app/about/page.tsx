'use client';
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

// ─── Inline Founders Component ───────────────────────────────
function FoundersSection() {
  return (
    <section style={{ background: '#FAF6F0', padding: '120px 24px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            background: '#FFFFFF', 
            padding: '8px 16px', 
            borderRadius: '100px',
            fontSize: '11px', 
            letterSpacing: '2px',
            fontWeight: 600,
            color: '#633b2c',
            textTransform: 'uppercase' as const,
            fontFamily: '"General Sans", sans-serif',
            marginBottom: '24px',
            border: '1px solid rgba(197, 160, 89, 0.3)',
            boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
            MEET OUR FOUNDERS
          </span>
          <h2 style={{ 
            fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', 
            color: '#633b2c',
            fontWeight: 400,
            lineHeight: 1.2,
            margin: '0 0 16px 0',
            letterSpacing: '-0.02em'
          }}>
            Expertise Behind Novelle
          </h2>
          <p style={{ 
            fontFamily: '"General Sans", sans-serif',
            fontSize: '18px',
            color: '#633b2c',
            fontWeight: 500,
            margin: '0 0 16px 0'
          }}>
            A Vision for Better Aesthetic Education
          </p>
          <p style={{ 
            fontFamily: '"General Sans", sans-serif',
            fontSize: '15px',
            color: '#8c776e',
            lineHeight: 1.7,
            maxWidth: '760px',
            margin: '0 auto 12px auto',
            fontWeight: 500
          }}>
            Al Novelle Advanced Aesthetic Training LLC was founded by Dr. Seeta Yadav and Dr. Azaiba Kara, two experienced professionals and educators united by a shared vision: to raise the standard of practical education in aesthetics, beauty, and laser technologies.
          </p>
          <p style={{ 
            fontFamily: '"General Sans", sans-serif',
            fontSize: '15px',
            color: '#8c776e',
            lineHeight: 1.7,
            maxWidth: '760px',
            margin: '0 auto 12px auto',
            fontWeight: 500
          }}>
            Having worked closely with healthcare professionals, aesthetic practitioners, and leading technologies in the UAE, they recognised the need for training that goes beyond theory — training that builds real skills, confidence, safety awareness, and professional competence.
          </p>
          <p style={{ 
            fontFamily: '"General Sans", sans-serif',
            fontSize: '15px',
            color: '#8c776e',
            lineHeight: 1.7,
            maxWidth: '760px',
            margin: '0 auto',
            fontWeight: 500
          }}>
            At Novelle, their philosophy is simple: education should prepare you for real practice.
          </p>
        </div>

        {/* Founder Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '64px' }}>
          
          {/* Founder 1 */}
          <div style={{ 
            background: '#FFFFFF',
            borderRadius: '32px',
            padding: '48px 40px',
            border: '1px solid rgba(197, 160, 89, 0.2)',
            boxShadow: '0 8px 30px rgba(74, 55, 40, 0.03)'
          }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #845e35, #c5a059)',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '24px',
              color: '#FFFFFF',
              fontSize: '28px',
              fontWeight: 400,
              fontFamily: '"Hedvig Letters Serif", Georgia, serif'
            }}>
              SY
            </div>
            <h3 style={{ 
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: '24px',
              color: '#633b2c',
              fontWeight: 400,
              margin: '0 0 4px 0',
              letterSpacing: '-0.01em'
            }}>
              Dr. Seeta Yadav
            </h3>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif',
              fontSize: '13px',
              color: '#c5a059',
              fontWeight: 600,
              margin: '0 0 24px 0',
              letterSpacing: '0.5px'
            }}>
              Founder & Academic Director
            </p>
            <div style={{ height: '1px', background: 'rgba(197, 160, 89, 0.2)', marginBottom: '24px' }} />
            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.7, margin: '0 0 16px 0', fontWeight: 500 }}>
              Dr. Seeta Yadav is an experienced aesthetics and laser educator with a strong background in clinical practice, aesthetic technologies, and professional training.
            </p>
            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.7, margin: '0 0 16px 0', fontWeight: 500 }}>
              As Academic Director of Novelle, she leads the development of training programmes with a focus on structured learning, evidence-informed practice, patient safety, and hands-on skill development.
            </p>
            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
              Her passion is helping healthcare and aesthetic professionals transform knowledge into confidence and practical capability.
            </p>
          </div>

          {/* Founder 2 */}
          <div style={{ 
            background: '#FFFFFF',
            borderRadius: '32px',
            padding: '48px 40px',
            border: '1px solid rgba(197, 160, 89, 0.2)',
            boxShadow: '0 8px 30px rgba(74, 55, 40, 0.03)'
          }}>
            <div style={{ 
              width: '80px', 
              height: '80px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, #4A3728, #845e35)',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '24px',
              color: '#FFFFFF',
              fontSize: '28px',
              fontWeight: 400,
              fontFamily: '"Hedvig Letters Serif", Georgia, serif'
            }}>
              AK
            </div>
            <h3 style={{ 
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: '24px',
              color: '#633b2c',
              fontWeight: 400,
              margin: '0 0 4px 0',
              letterSpacing: '-0.01em'
            }}>
              Dr. Azaiba Kara
            </h3>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif',
              fontSize: '13px',
              color: '#c5a059',
              fontWeight: 600,
              margin: '0 0 24px 0',
              letterSpacing: '0.5px'
            }}>
              Founder & Managing Director
            </p>
            <div style={{ height: '1px', background: 'rgba(197, 160, 89, 0.2)', marginBottom: '24px' }} />
            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.7, margin: '0 0 16px 0', fontWeight: 500 }}>
              Dr. Azaiba Kara is an experienced aesthetics and laser professional with more than a decade of experience in the UAE. She has extensive experience in aesthetic and laser technologies and has trained professionals in the safe and effective application of advanced aesthetic devices.
            </p>
            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#8c776e', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
              As Managing Director, she combines her clinical and training experience with Novelle's vision of creating a professional, practical, and learner-focused training environment.
            </p>
          </div>
        </div>

        {/* Shared Vision Block */}
        <div style={{ 
          background: '#1E140F',
          borderRadius: '32px',
          padding: '56px 48px',
          textAlign: 'center'
        }}>
          <p style={{ 
            fontFamily: '"Hedvig Letters Serif", Georgia, serif',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
            color: '#FFFFFF',
            fontWeight: 400,
            lineHeight: 1.5,
            margin: '0 auto 24px auto',
            maxWidth: '700px'
          }}>
            &ldquo;To make Novelle a trusted destination for advanced aesthetic education — where knowledge meets hands-on experience, safety meets innovation, and professionals gain the confidence to grow in their careers.&rdquo;
          </p>
          <p style={{ 
            fontFamily: '"General Sans", sans-serif',
            fontSize: '14px',
            color: '#c5a059',
            fontWeight: 600,
            letterSpacing: '1px',
            margin: 0
          }}>
            Elevating Skills. Empowering Futures.
          </p>
        </div>

      </div>
    </section>
  );
}

// ─── Main About Page ─────────────────────────────────────────
export default function AboutPage() {
  return (
    <main style={{ background: '#FAF6F0' }}>
      <Navigation />
      
      {/* ── HERO SECTION ──────────────────────── */}
      <section style={{ padding: '160px 24px 60px 24px', background: '#FAF6F0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            background: '#FFFFFF', 
            padding: '8px 16px', 
            borderRadius: '100px',
            fontSize: '11px', 
            letterSpacing: '2px',
            fontWeight: 600,
            color: '#633b2c',
            textTransform: 'uppercase' as const,
            fontFamily: '"General Sans", sans-serif',
            marginBottom: '24px',
            border: '1px solid rgba(197, 160, 89, 0.3)',
            boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
            ABOUT NOVELLE
          </span>
          <h1 style={{ 
            fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', 
            color: '#633b2c',
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: '20px',
            letterSpacing: '-0.02em'
          }}>
            Al Novelle Advanced Aesthetic Training LLC
          </h1>
          <p style={{ 
            fontFamily: '"General Sans", sans-serif',
            fontSize: 'clamp(15px, 2vw, 17px)', 
            color: '#8c776e', 
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto',
            fontWeight: 500
          }}>
            An aesthetic training academy in Abu Dhabi, specialising in structured education across beauty therapy, clinical aesthetics, laser technologies, and professional practice.
          </p>
        </div>
      </section>

      {/* ── OUR PHILOSOPHY SECTION ─────────────────────── */}
      <section style={{ padding: '80px 24px', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '64px', 
            alignItems: 'stretch' 
          }}>
            {/* Left: Academy Image */}
            <div style={{ 
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: '0 20px 48px rgba(99, 59, 44, 0.06)',
              height: '100%',
              minHeight: '560px',
              width: '100%'
            }}>
              {/* TODO: Replace with actual Novelle academy image provided by client. */}
              <img 
                src="/academy-images/academy-approach-session.png"
                alt="Novelle Academy Philosophy" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            
            {/* Right: Philosophy Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <span style={{ 
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                background: '#FAF6F0', 
                padding: '6px 14px', 
                borderRadius: '100px',
                fontSize: '11px', 
                letterSpacing: '1.5px',
                fontWeight: 600,
                color: '#633b2c',
                textTransform: 'uppercase' as const,
                fontFamily: '"General Sans", sans-serif',
                border: '1px solid rgba(197, 160, 89, 0.2)'
              }}>
                OUR PHILOSOPHY
              </span>
              <h2 style={{ 
                fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', 
                color: '#633b2c',
                fontWeight: 400,
                margin: 0,
                lineHeight: 1.2
              }}>
                Advancing Standards in Aesthetic Education
              </h2>
              <p style={{ 
                fontFamily: '"General Sans", sans-serif', 
                fontSize: '15px', 
                color: '#8c776e', 
                lineHeight: 1.6,
                margin: 0
              }}>
                At Al Novelle Advanced Aesthetic Training LLC, we are committed to delivering structured, evidence-based education that combines scientific knowledge with practical skills and professional standards.
              </p>
              <p style={{ 
                fontFamily: '"General Sans", sans-serif', 
                fontSize: '15px', 
                color: '#8c776e', 
                lineHeight: 1.6,
                margin: 0
              }}>
                Our training approach integrates foundational sciences, aesthetic and laser technologies, hands-on learning, and safety-focused practice to support the development of knowledgeable, competent, and confident professionals.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
                {[
                  "Building strong foundations in anatomy, physiology, and relevant pathology",
                  "Developing practical competency in aesthetic and laser technologies",
                  "Promoting evidence-based, safe, and ethical practice",
                  "Delivering structured, hands-on learning guided by experienced educators",
                  "Supporting continuous professional development and lifelong learning"
                ].map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      border: '1px solid rgba(197, 160, 89, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(255, 255, 255, 0.6)',
                      flexShrink: 0,
                      marginTop: '2px'
                    }}>
                      <svg width="8" height="6" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#c5a059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ 
                      fontFamily: '"General Sans", sans-serif', 
                      fontSize: '15px', 
                      fontWeight: 500, 
                      color: '#633b2c',
                      lineHeight: 1.4
                    }}>
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
              {/* "Explore Programmes" button removed per client request */}
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION SECTION ─────────────────── */}
      <section style={{ padding: '120px 24px', background: '#FAF6F0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Section tag */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF', 
              padding: '8px 16px', 
              borderRadius: '100px',
              fontSize: '11px', 
              letterSpacing: '2px',
              fontWeight: 600,
              color: '#633b2c',
              textTransform: 'uppercase' as const,
              fontFamily: '"General Sans", sans-serif',
              marginBottom: '24px',
              border: '1px solid rgba(197, 160, 89, 0.3)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              VISION & MISSION
            </span>
            <h2 style={{ 
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: '0 0 20px 0',
              letterSpacing: '-0.02em'
            }}>
              Shaping the Future of Aesthetic Education
            </h2>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif',
              fontSize: '16px',
              color: '#8c776e',
              lineHeight: 1.7,
              maxWidth: '760px',
              margin: '0 auto',
              fontWeight: 500
            }}>
              Novelle is built with a clear ambition: to raise the standard of professional aesthetic education through structured training, practical learning, and a culture of excellence rooted in the UAE.
            </p>
          </div>

          {/* Vision + Mission Two-Column */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '40px', marginBottom: '64px' }}>
            
            {/* Vision Card */}
            <div style={{ background: '#FFFFFF', borderRadius: '32px', padding: '48px 40px', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#FAF6F0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c5a059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '22px', color: '#633b2c', fontWeight: 400, margin: '0 0 16px 0' }}>
                Our Vision
              </h3>
              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '16px', color: '#633b2c', fontWeight: 500, lineHeight: 1.6, margin: '0 0 16px 0' }}>
                To shape exceptional practitioners, set new standards, and take UAE excellence to the world.
              </p>
              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14px', color: '#8c776e', lineHeight: 1.7, margin: '0 0 12px 0', fontWeight: 500 }}>
                Our vision is for Novelle to become a recognised centre of excellence where UAE ambition meets international standards, creating a new benchmark for professional education in aesthetics, beauty, and wellness.
              </p>
              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14px', color: '#8c776e', lineHeight: 1.7, margin: '0 0 12px 0', fontWeight: 500 }}>
                We aspire to contribute to a future where training standards developed in the UAE are recognised and respected internationally, standing alongside established global benchmarks and qualifications.
              </p>
              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14px', color: '#8c776e', lineHeight: 1.7, margin: '0 0 20px 0', fontWeight: 500 }}>
                At Novelle, excellence goes beyond mastering a technique. We develop every trainee as a practitioner and as a person — building knowledge, confidence, judgement, professionalism, communication, and compassion.
              </p>
              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14px', color: '#c5a059', fontWeight: 600, margin: 0, fontStyle: 'italic' }}>
                Learn with excellence. Grow with purpose. Lead from the UAE.
              </p>
            </div>

            {/* Mission Card */}
            <div style={{ background: '#FFFFFF', borderRadius: '32px', padding: '48px 40px', border: '1px solid rgba(197, 160, 89, 0.2)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#FAF6F0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c5a059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '22px', color: '#633b2c', fontWeight: 400, margin: '0 0 16px 0' }}>
                Our Mission
              </h3>
              <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14px', color: '#8c776e', lineHeight: 1.7, margin: '0 0 20px 0', fontWeight: 500 }}>
                Our mission is to transform education into competence, confidence, and responsible practice through internationally inspired learning rooted in the UAE's culture of excellence and innovation.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  "Delivering education aligned with UAE requirements, international standards, and evolving global best practices",
                  "Combining expert-led education with meaningful hands-on learning",
                  "Developing safe, skilled, ethical, and confident practitioners",
                  "Keeping patient safety, wellbeing, dignity, and satisfaction at the heart of professional practice",
                  "Developing the whole professional — technical ability, communication, confidence, ethics, leadership, and personal growth",
                  "Creating a culture of lifelong learning, innovation, and continuous professional development",
                  "Connecting internationally recognised approaches with the UAE's drive for quality, innovation, and excellence",
                  "Contributing to the development of a distinctive UAE standard of professional training with the ambition to earn international recognition"
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c5a059', flexShrink: 0, marginTop: '7px' }} />
                    <span style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14px', color: '#633b2c', lineHeight: 1.5, fontWeight: 500 }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Novelle Philosophy Closing Block */}
          <div style={{ 
            background: '#1E140F',
            borderRadius: '32px',
            padding: '56px 48px',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif',
              fontSize: '13px',
              color: '#c5a059',
              fontWeight: 600,
              letterSpacing: '2px',
              textTransform: 'uppercase' as const,
              margin: '0 0 32px 0'
            }}>
              The Novelle Philosophy
            </p>
            <div style={{ maxWidth: '600px', margin: '0 auto 32px auto' }}>
              {[
                'We do not simply teach treatments.',
                'We develop professionals.',
                'We elevate standards.',
                'We put patients first.',
                'And from the UAE, we aspire to influence how the world learns.'
              ].map((line, i) => (
                <p key={i} style={{ 
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  color: '#FFFFFF',
                  fontWeight: 400,
                  lineHeight: 1.4,
                  margin: '0 0 8px 0'
                }}>
                  {line}
                </p>
              ))}
            </div>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif',
              fontSize: '14px',
              color: '#c5a059',
              fontWeight: 600,
              letterSpacing: '0.5px',
              margin: 0
            }}>
              Global knowledge. UAE excellence. A new standard for the future.
            </p>
          </div>

        </div>
      </section>

      {/* ── FOUNDERS SECTION ─────────────────────── */}
      <FoundersSection />

      {/* ── STANDARDS SECTION ────────────────────── */}
      {/* Replaced CIBTAC/NCLC/DOH section with UAE-Focused Professional Standards */}
      <section style={{ padding: '100px 24px', background: '#1E140F', color: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.06)', 
            padding: '8px 16px', 
            borderRadius: '100px',
            fontSize: '11px', 
            letterSpacing: '2px',
            fontWeight: 600,
            color: '#c5a059',
            textTransform: 'uppercase' as const,
            fontFamily: '"General Sans", sans-serif',
            marginBottom: '24px',
            border: '1px solid rgba(197, 160, 89, 0.2)'
          }}>
            Our Approach to Standards
          </span>
          <h2 style={{ 
            fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
            fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', 
            color: '#FFFFFF', 
            fontWeight: 400,
            marginBottom: '48px',
            marginTop: 0
          }}>
            UAE-Focused Professional Standards
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '32px' 
          }}>
            {[
              { 
                title: 'UAE-Focused Excellence',
                body: 'Training content is designed with attention to safety, professionalism, ethical practice, and the UAE\'s culture of quality and excellence.'
              },
              { 
                title: 'Practical Learning',
                body: 'Our programmes combine expert-led instruction with structured, hands-on practical training to build real-world competence and confidence.'
              },
              { 
                title: 'Safety-Led Training',
                body: 'Patient safety, wellbeing, and ethical practice are placed at the centre of every training programme and learning outcome.'
              },
              {
                title: 'Professional Development',
                body: 'We support the continuous growth of practitioners through structured learning, professional guidance, and career-oriented education.'
              }
            ].map((card, i) => (
              <div key={i} style={{ 
                background: 'rgba(255,255,255,0.03)', 
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '40px 32px', 
                borderRadius: '24px',
                textAlign: 'left'
              }}>
                <h3 style={{ color: '#c5a059', fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '20px', fontWeight: 400, marginBottom: '16px', marginTop: 0 }}>
                  {card.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontFamily: '"General Sans", sans-serif', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ─────────────────────────── */}
      <section style={{ background: '#FAF6F0', padding: '100px 24px', borderTop: '1px solid rgba(99,59,44,0.08)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ 
            fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
            color: '#633b2c', 
            fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
            fontWeight: 400,
            margin: 0
          }}>
            Enquire About Our Programmes
          </h2>
          <p style={{ 
            fontFamily: '"General Sans", sans-serif',
            fontSize: '16px', 
            color: '#8c776e', 
            marginBottom: '32px', 
            lineHeight: 1.6,
            marginTop: '16px'
          }}>
            Speak to our admissions team and take the first step toward advanced aesthetic education.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://wa.me/971502348625?text=Hello%20Novelle%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium"
              style={{ textDecoration: 'none' }}
            >
              <div className="btn-icon-wrapper">
                <img src="/logos/gold-logomark.png" alt="Icon" />
              </div>
              Enquire on WhatsApp
            </a>
            <Link href="/contact" className="btn-premium" style={{ background: 'transparent', color: '#633b2c', border: '1px solid rgba(99, 59, 44, 0.2)', textDecoration: 'none' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
