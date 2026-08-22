'use client';

import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Novelle%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.';

const standards = [
  ['01', 'Practical Learning', 'Skills developed through guided, hands-on experience.'],
  ['02', 'Safety-Led Training', 'Professional habits built around responsible practice.'],
  ['03', 'Internationally Inspired', 'A wider view of modern aesthetic education.'],
  ['04', 'UAE-Focused Excellence', 'Learning shaped for ambition and growth in the UAE.'],
];

const founders = [
  {
    name: 'Dr. Seeta Yadav',
    role: 'Founder & Academic Director',
    image: '/founders/dr-seeta-yadav.jpeg',
    imageClass: 'founder-photo-seeta',
    bio: 'An experienced aesthetics and laser educator focused on structured learning, evidence-informed practice, safety, and practical skill development.',
  },
  {
    name: 'Dr. Azaiba Kara',
    role: 'Founder & Managing Director',
    image: '/about/professional-learning-session.jpeg',
    imageClass: 'founder-photo-azaiba',
    bio: 'An aesthetics and laser professional with extensive UAE experience, bringing clinical understanding and learner-focused leadership to Novelle.',
  },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <Navigation />

      <section className="about-hero">
        <div className="container about-hero-inner">
          <span className="section-eyebrow">ABOUT NOVELLE</span>
          <h1><span>A New Standard for</span><span>Aesthetic Education</span></h1>
          <p>Novelle brings science, practical learning, and professional ambition together in Abu Dhabi.</p>
          <div className="about-hero-actions">
            <Link href="/courses" className="btn-premium">
              <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
              Explore Courses
            </Link>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="editorial-link">Speak to Admissions <span aria-hidden="true">&#8594;</span></a>
          </div>
        </div>
      </section>

      <section className="about-approach-section">
        <div className="container about-split-card">
          <div className="about-split-image scroll-reveal reveal-from-left">
            <img src="/academy-images/academy-approach-session.png" alt="Novelle practical aesthetic training session" />
            <div className="about-image-note"><span>Professional education</span><strong>Designed for real practice</strong></div>
          </div>
          <div className="about-split-copy scroll-reveal reveal-from-right reveal-delay-1">
            <span className="section-eyebrow">OUR APPROACH</span>
            <h2>Learn the science.<br />Build the skill.</h2>
            <p>We combine clear theory, guided practice, and professional standards so learners can move forward with confidence.</p>
            <div className="about-approach-points">
              <span>Structured learning</span><span>Hands-on practice</span><span>Career guidance</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-vision-section">
        <div className="container">
          <div className="about-section-heading scroll-reveal reveal-from-left">
            <span className="section-eyebrow">VISION &amp; MISSION</span>
            <h2>Education that becomes capability.</h2>
          </div>
          <div className="about-vision-grid">
            <article className="about-vision-card light scroll-reveal reveal-from-left">
              <span>VISION</span>
              <h3>Raise the standard of aesthetic education.</h3>
              <p>To create a respected learning destination where ambitious professionals grow through quality, care, and modern practice.</p>
            </article>
            <article className="about-vision-card dark scroll-reveal reveal-from-right reveal-delay-1">
              <span>MISSION</span>
              <h3>Turn knowledge into confident practice.</h3>
              <p>To deliver structured, practical, safety-led learning that supports responsible professional development.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-founders-section">
        <div className="container">
          <div className="about-section-heading founders-heading scroll-reveal reveal-from-left">
            <span className="section-eyebrow">THE PEOPLE BEHIND NOVELLE</span>
            <h2>Two founders. One shared standard.</h2>
            <p>Experienced professionals united by a belief that education should prepare learners for real practice.</p>
          </div>
          <div className="founder-board-grid">
            {founders.map((founder, index) => (
              <article className={`founder-board-card scroll-reveal ${index === 0 ? 'reveal-from-left' : 'reveal-from-right reveal-delay-1'}`} key={founder.name}>
                <div className="founder-board-photo">
                  <img className={founder.imageClass} src={founder.image} alt={`${founder.name}, ${founder.role} at Novelle`} />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="founder-board-copy">
                  <p>{founder.role}</p>
                  <h3>{founder.name}</h3>
                  <div />
                  <span>{founder.bio}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
