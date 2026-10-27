'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Specialist {
  id: string;
  index: string;
  name: string;
  shortName: string;
  role: string;
  bio1: string;
  bio2: string;
  experience: string;
  certification: string;
  schedule: string;
  ratingBadge: string;
  image: string;
  leads: { title: string; meta: string; href: string }[];
  consultUrl: string;
  aboutHash: string;
}

const specialists: Specialist[] = [
  {
    id: 'azaiba',
    index: '01 / 02',
    name: 'Dr. Azaiba Salim Kara',
    shortName: 'Dr. Azaiba',
    role: 'Aesthetic Practitioner & Laser Specialist',
    bio1: 'Azaiba leads our laser and aesthetic device training, combining clinical tissue physics with strict safety protocols in Abu Dhabi.',
    bio2: 'Trained in Homeopathic Medicine with an NCLC qualification (USA), she directs workstation training with Alma, Fotona, and Candela protocols.',
    experience: '10+ years',
    certification: 'NCLC Certified, USA',
    schedule: 'Sun, Tue, Thu',
    ratingBadge: '10+ Years UAE Clinical Practice',
    image: '/founders/dr-azaiba-salim-kara.jpg',
    leads: [
      { title: 'Laser Physics & Clinical Safety', meta: 'Full Protocol · Abu Dhabi', href: '/courses#laser-therapies' },
      { title: 'Advanced Skin Rejuvenation', meta: 'Clinical Bays · Practical', href: '/courses#chemical-peels-science' }
    ],
    consultUrl: 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20consult%20with%20Dr.%20Azaiba%20Salim%20Kara.',
    aboutHash: '/about#azaiba'
  },
  {
    id: 'seeta',
    index: '02 / 02',
    name: 'Dr. Seeta Yadav',
    shortName: 'Dr. Seeta',
    role: 'Educational Director & Clinical Aesthetician',
    bio1: 'Seeta directs curriculum standards, CIBTAC qualification alignment, and workstation assessment criteria across our aesthetic programmes.',
    bio2: 'Her medical teaching background ensures every student masters facial electrotherapy, facial anatomy, and patient consultation ethics.',
    experience: '8+ years',
    certification: 'CIBTAC Lead Educator',
    schedule: 'Mon, Wed, Sat',
    ratingBadge: 'CIBTAC Lead Educator · Curriculum Director',
    image: '/founders/dr-seeta-yadav.jpg',
    leads: [
      { title: 'Anatomy, Physiology & Skin Science', meta: 'Foundational Science · Abu Dhabi', href: '/courses#facial-skin-care-treatments' },
      { title: 'Facial Electrotherapy & Technology', meta: 'Equipped Suites · Practical', href: '/courses#beauty-therapy' }
    ],
    consultUrl: 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20consult%20with%20Dr.%20Seeta%20Yadav.',
    aboutHash: '/about#seeta'
  }
];

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function FoundersSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const active = specialists[activeIndex];

  // Auto-switch between Dr. Azaiba and Dr. Seeta every 6.5s
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % specialists.length);
    }, 6500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const toggleNext = () => setActiveIndex((prev) => (prev + 1) % specialists.length);
  const togglePrev = () => setActiveIndex((prev) => (prev - 1 + specialists.length) % specialists.length);

  return (
    <section 
      className="scroll-reveal"
      style={{ 
        background: '#FAF6F0', 
        padding: '110px 24px', 
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="specialists"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
            CLINICAL SPECIALISTS
          </span>
        </div>

        {/* Header Block with Animated Rotation Tabs and Swipe Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '44px',
          textAlign: 'left'
        }}>
          <div>
            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: '-0.02em'
            }}>
              Clinical leadership, one academy
            </h2>
          </div>

          {/* Interactive Doctor Switcher Tabs + Swipe Arrows */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '8px', background: '#FFFFFF', padding: '4px', borderRadius: '100px', border: '1px solid rgba(197, 160, 89, 0.3)' }}>
              {specialists.map((s, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveIndex(idx)}
                    style={{
                      background: isSelected ? '#1D130C' : 'transparent',
                      color: isSelected ? '#FFFFFF' : '#633b2c',
                      border: 'none',
                      padding: '8px 18px',
                      borderRadius: '100px',
                      fontSize: '13px',
                      fontWeight: 600,
                      fontFamily: '"General Sans", sans-serif',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <span>{s.shortName}</span>
                    {/* Animated rotation progress bar under active button */}
                    {isSelected && !isPaused && (
                      <span className="tab-progress-line" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Manual Swipe Arrows */}
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={togglePrev}
                aria-label="Previous specialist"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  color: '#633b2c',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              </button>
              <button
                onClick={toggleNext}
                aria-label="Next specialist"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#1D130C',
                  color: '#FFFFFF',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background 0.2s ease'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Main Grid: Compact Portrait on Left, Structured Details on Right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(300px, 400px) 1fr',
          gap: '48px',
          alignItems: 'center',
          textAlign: 'left'
        }} className="specialist-main-grid">
          
          {/* Left: Compact Portrait Photo with Floating Pill */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 16px 45px rgba(99, 59, 44, 0.08)',
            border: '1px solid rgba(197, 160, 89, 0.32)',
            background: '#F5EFE6',
            height: '420px'
          }}>
            <img 
              key={active.id}
              src={active.image} 
              alt={active.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                animation: 'fadeInPhoto 0.4s ease'
              }}
            />

            {/* Bottom-Left Pill */}
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              padding: '7px 16px',
              borderRadius: '100px',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.08)'
            }}>
              <span style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '11.5px',
                fontWeight: 600,
                color: '#633b2c'
              }}>
                {active.ratingBadge}
              </span>
            </div>
          </div>

          {/* Right: Specialist Details, Metadata, Leads & Consult */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            
            <div>
              <span style={{
                display: 'block',
                fontFamily: '"General Sans", sans-serif',
                fontSize: '11.5px',
                color: '#986A3E',
                fontWeight: 700,
                letterSpacing: '1px',
                marginBottom: '4px'
              }}>
                {active.index}
              </span>
              <h3 style={{
                fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                fontSize: 'clamp(1.85rem, 2.7vw, 2.4rem)',
                color: '#633b2c',
                fontWeight: 400,
                lineHeight: 1.2,
                margin: '0 0 4px 0',
                letterSpacing: '-0.02em'
              }}>
                {active.name}
              </h3>
              <span style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '13.5px',
                color: '#8c776e',
                fontWeight: 500
              }}>
                {active.role}
              </span>
            </div>

            {/* Bios */}
            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '14px',
              color: '#7a6b63',
              lineHeight: 1.6,
              margin: 0
            }}>
              {active.bio1}
            </p>

            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '14px',
              color: '#7a6b63',
              lineHeight: 1.6,
              margin: 0
            }}>
              {active.bio2}
            </p>

            {/* Metadata Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
              paddingTop: '14px',
              paddingBottom: '14px',
              borderTop: '1px solid rgba(197, 160, 89, 0.22)',
              borderBottom: '1px solid rgba(197, 160, 89, 0.22)'
            }}>
              <div>
                <span style={{ display: 'block', fontSize: '10.5px', color: '#986A3E', fontFamily: '"General Sans", sans-serif', textTransform: 'uppercase', fontWeight: 600 }}>
                  Experience
                </span>
                <strong style={{ fontSize: '13px', color: '#633b2c', fontFamily: '"General Sans", sans-serif' }}>
                  {active.experience}
                </strong>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '10.5px', color: '#986A3E', fontFamily: '"General Sans", sans-serif', textTransform: 'uppercase', fontWeight: 600 }}>
                  Credentials
                </span>
                <strong style={{ fontSize: '13px', color: '#633b2c', fontFamily: '"General Sans", sans-serif' }}>
                  {active.certification}
                </strong>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '10.5px', color: '#986A3E', fontFamily: '"General Sans", sans-serif', textTransform: 'uppercase', fontWeight: 600 }}>
                  In Academy
                </span>
                <strong style={{ fontSize: '13px', color: '#633b2c', fontFamily: '"General Sans", sans-serif' }}>
                  {active.schedule}
                </strong>
              </div>
            </div>

            {/* Leads Courses List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '10.5px', color: '#986A3E', fontFamily: '"General Sans", sans-serif', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.8px' }}>
                Leads Curriculums
              </span>

              {active.leads.map((lead, idx) => (
                <Link
                  key={idx}
                  href={lead.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(197, 160, 89, 0.15)',
                    textDecoration: 'none',
                    color: '#633b2c'
                  }}
                >
                  <span style={{ fontFamily: '"General Sans", sans-serif', fontSize: '13.5px', fontWeight: 600 }}>
                    {lead.title}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#8c776e', fontFamily: '"General Sans", sans-serif' }}>
                      {lead.meta}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#986A3E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                  </div>
                </Link>
              ))}
            </div>

            {/* Actions: Signature Novelle Buttons with Spinning Icon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '10px' }}>
              <a
                href={active.consultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium"
              >
                <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
                <span>Consult with {active.shortName}</span>
              </a>

              <Link
                href={active.aboutHash}
                className="btn-premium-light"
              >
                <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
                <span>Know More on About Page</span>
              </Link>
            </div>

          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInPhoto {
          from { opacity: 0.6; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }
        .tab-progress-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: #c5a059;
          width: 100%;
          animation: tabProgress 6.5s linear infinite;
        }
        @keyframes tabProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        @media (max-width: 900px) {
          .specialist-main-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}} />
    </section>
  );
}
