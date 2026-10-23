'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AccreditationTrust from '@/components/AccreditationTrust';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Novelle%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.';

const standards = [
  ['01', 'Practical Learning', 'Supervised skills developed through guided clinical and salon experience.'],
  ['02', 'Safety-Led Training', 'Strict habits built around hygiene, contraindication awareness, and responsible practice.'],
  ['03', 'Internationally Inspired', 'Curriculum benchmarked to CIBTAC and NCLC standards.'],
  ['04', 'UAE-Focused Excellence', 'Professional education shaped for regulatory awareness and career growth in the UAE.'],
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
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="editorial-link">Speak to Admissions <span aria-hidden="true">&#8594;</span></a>
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
              We started Novelle to change that. As a team that values science, quality and patient safety, we wanted to build an academy where learners are taught properly, assessed fairly and prepared to practise responsibly. Our aim is simple: to help set a higher, consistent standard for beauty and aesthetic education, starting in Abu Dhabi.
            </p>
            <div className="about-approach-points">
              <span>Skin Science</span>
              <span>Patient Safety</span>
              <span>Supervised Practice</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-vision-section" id="vision-mission">
        <div className="container">
          <div className="about-section-heading scroll-reveal reveal-from-left">
            <span className="section-eyebrow">VISION &amp; MISSION</span>
            <h2>Education that becomes capability.</h2>
          </div>
          <div className="about-vision-grid">
            <article className="about-vision-card light scroll-reveal reveal-from-left">
              <span>OUR VISION</span>
              <h3>Internationally benchmarked standard.</h3>
              <p>
                To help build a recognised, internationally benchmarked standard for beauty and aesthetic education in the UAE, where every practitioner is trained in science, safety and skill.
              </p>
            </article>
            <article className="about-vision-card dark scroll-reveal reveal-from-right reveal-delay-1">
              <span>OUR MISSION (PROPOSED)</span>
              <h3>Turn scientific knowledge into confident practice.</h3>
              <p>
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
            <p>Experienced aesthetic practitioners and clinical educators united by a commitment to responsible, science-led education.</p>
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
                <p>Co-Founder &amp; Aesthetic Specialist</p>
                <h3>Dr. Azaiba Salim Kara</h3>
                <div />
                <span style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span>
                    Dr. Azaiba Salim Kara is an aesthetic practitioner, laser specialist, clinical trainer, educator and international speaker with more than a decade of experience in medical aesthetics and laser technology.
                  </span>
                  <span>
                    Originally from Mumbai, India, she has a background in Homeopathic Medicine and developed her clinical experience in aesthetics before moving to Dubai in 2013. She holds an NCLC qualification from the United States and has conducted training collaborations involving leading technologies such as Alma, Fotona, Candela/Calium and VILAFORTUNY.
                  </span>
                  <span>
                    As a founder of Al Novelle, her vision focuses on combining scientific knowledge, patient safety, technical understanding and practical skills in aesthetic education.
                  </span>
                </span>
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
                <span style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <span>
                    Dr. Seeta Yadav is a beauty, laser and aesthetics educator with a medical and clinical background. She holds a Bachelor of Ayurvedic Medicine and Surgery (BAMS), postgraduate training in Emergency Medical Services, and additional certifications in cosmetology, laser treatments, skin aesthetics and CIBTAC Beauty Therapy.
                  </span>
                  <span>
                    Her background includes clinical practice, professional education, and serving as a regional laser trainer across the GCC, specializing in skin science, laser technology, clinical safety protocols, treatment planning, and practical demonstrations.
                  </span>
                  <span>
                    As Founder and Academic Director of Al Novelle, her vision is to provide responsible, science-based aesthetic education that develops confident and knowledgeable practitioners.
                  </span>
                </span>
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
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-premium">
              <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
              Speak to Admissions
            </a>
            <Link href="/contact" className="editorial-link">Contact Novelle <span aria-hidden="true">&#8594;</span></Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
