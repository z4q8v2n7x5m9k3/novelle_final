'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AccreditationTrust from '@/components/AccreditationTrust';

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
          <h1><span>A New Standard for</span><span>Aesthetic Education</span></h1>
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

      {/* Accreditation Trust */}
      <AccreditationTrust />

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

      {/* Vision & Mission — Warm Luxury Clean Cards */}
      <section className="about-vision-section" id="vision-mission">
        <div className="container">
          <div className="about-section-heading scroll-reveal reveal-from-left">
            <span className="section-eyebrow">VISION &amp; MISSION</span>
            <h2>Education that becomes capability.</h2>
          </div>
          <div className="about-vision-grid">
            <article 
              className="about-vision-card light scroll-reveal reveal-from-left"
              style={{
                background: '#FAF6F0',
                border: '1px solid rgba(197, 160, 89, 0.25)',
                boxShadow: '0 12px 40px rgba(99, 59, 44, 0.04)'
              }}
            >
              <span>OUR VISION</span>
              <h3 style={{ color: '#633b2c' }}>Internationally benchmarked standard.</h3>
              <p style={{ color: '#8c776e', opacity: 1 }}>
                To help build a recognised, internationally benchmarked standard for beauty and aesthetic education in the UAE, where every practitioner is trained in science, safety and skill.
              </p>
            </article>

            <article 
              className="about-vision-card scroll-reveal reveal-from-right reveal-delay-1"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                boxShadow: '0 12px 40px rgba(99, 59, 44, 0.05)'
              }}
            >
              <span>OUR MISSION (PROPOSED)</span>
              <h3 style={{ color: '#633b2c' }}>Turn scientific knowledge into confident practice.</h3>
              <p style={{ color: '#8c776e', opacity: 1 }}>
                To deliver structured, practical, science-based and safety-led training that equips aspiring practitioners with verified competence, patient safety discipline, and professional confidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="about-founders-section" id="founders">
        <div className="container">
          <div className="about-section-heading founders-heading scroll-reveal reveal-from-left">
            <span className="section-eyebrow">THE PEOPLE BEHIND NOVELLE</span>
            <h2>Two founders. One shared standard.</h2>
            <p>Experienced aesthetic clinicians and clinical educators united by a commitment to responsible, science-led education.</p>
          </div>

          <div className="founder-board-grid">
            {/* Founder 1: Dr. Azaiba Salim Kara */}
            <article className="founder-board-card scroll-reveal reveal-from-left" id="azaiba">
              <div className="founder-board-photo">
                <img 
                  className="founder-photo-azaiba" 
                  src="/about/professional-learning-session.jpeg" 
                  alt="Dr. Azaiba Salim Kara, Co-Founder at Al Novelle" 
                />
                <span>01</span>
              </div>
              <div className="founder-board-copy">
                <p>Co-Founder &amp; Managing Director</p>
                <h3>Dr. Azaiba Salim Kara</h3>
                <div />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p style={{ color: '#79675e', fontSize: '14px', lineHeight: 1.72, margin: 0, textTransform: 'none', letterSpacing: 'normal', fontWeight: 400 }}>
                    Dr. Azaiba Salim Kara is an aesthetic practitioner, laser specialist, clinical trainer, educator and international speaker with over a decade of experience in medical aesthetics and laser technology in the UAE.
                  </p>
                  <p style={{ color: '#79675e', fontSize: '14px', lineHeight: 1.72, margin: 0, textTransform: 'none', letterSpacing: 'normal', fontWeight: 400 }}>
                    Originally from Mumbai with a background in Homeopathic Medicine, she holds an NCLC qualification from the United States and has directed clinical training collaborations involving Alma, Fotona, Candela/Calium and VILAFORTUNY.
                  </p>
                  <p style={{ color: '#79675e', fontSize: '14px', lineHeight: 1.72, margin: 0, textTransform: 'none', letterSpacing: 'normal', fontWeight: 400 }}>
                    At Al Novelle, her vision focuses on combining scientific knowledge, patient safety, technical understanding, and practical clinical skills in aesthetic education.
                  </p>
                </div>
              </div>
            </article>

            {/* Founder 2: Dr. Seeta Yadav */}
            <article className="founder-board-card scroll-reveal reveal-from-right reveal-delay-1" id="seeta">
              <div className="founder-board-photo">
                <img 
                  className="founder-photo-seeta" 
                  src="/founders/dr-seeta-yadav.jpeg" 
                  alt="Dr. Seeta Yadav, Founder & Academic Director at Al Novelle" 
                />
                <span>02</span>
              </div>
              <div className="founder-board-copy">
                <p>Founder &amp; Academic Director</p>
                <h3>Dr. Seeta Yadav</h3>
                <div />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p style={{ color: '#79675e', fontSize: '14px', lineHeight: 1.72, margin: 0, textTransform: 'none', letterSpacing: 'normal', fontWeight: 400 }}>
                    Dr. Seeta Yadav is a beauty, laser and aesthetics educator with a medical and clinical background. She holds a Bachelor of Ayurvedic Medicine and Surgery (BAMS), postgraduate training in Emergency Medical Services, and CIBTAC certification in Beauty Therapy.
                  </p>
                  <p style={{ color: '#79675e', fontSize: '14px', lineHeight: 1.72, margin: 0, textTransform: 'none', letterSpacing: 'normal', fontWeight: 400 }}>
                    Her extensive career includes clinical practice and serving as a regional laser trainer across the GCC, specializing in skin science, laser safety protocols, treatment planning, and practical demonstrations.
                  </p>
                  <p style={{ color: '#79675e', fontSize: '14px', lineHeight: 1.72, margin: 0, textTransform: 'none', letterSpacing: 'normal', fontWeight: 400 }}>
                    As Founder and Academic Director of Al Novelle, her vision is to provide responsible, science-based aesthetic education that develops confident and knowledgeable practitioners.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="about-standards-section">
        <div className="container">
          <div className="about-section-heading standards-heading scroll-reveal reveal-from-left">
            <span className="section-eyebrow">THE NOVELLE STANDARD</span>
            <h2>Built around better learning.</h2>
          </div>
          <div className="about-standards-grid">
            {standards.map(([number, title, body], index) => (
              <article className={`scroll-reveal ${index % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right'} reveal-delay-${index + 1}`} key={number}>
                <span>{number}</span><h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="about-final-cta">
        <div className="container about-final-cta-inner scroll-reveal reveal-from-left">
          <span className="section-eyebrow">YOUR NEXT STEP</span>
          <h2>Find the programme that fits your goals.</h2>
          <div>
            <Link href="/courses" className="btn-premium">
              <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
              Explore All 17 Courses
            </Link>
            <Link href="/contact" className="editorial-link">Contact Novelle <span aria-hidden="true">&#8594;</span></Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
