'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface Specialist {
  id: string;
  index: string;
  name: string;
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
}

const specialists: Specialist[] = [
  {
    id: 'azaiba',
    index: '01 / 02',
    name: 'Dr. Azaiba Salim Kara',
    role: 'Aesthetic Practitioner & Laser Specialist',
    bio1: 'Azaiba leads our laser and advanced aesthetic training, from foundational skin typing to complex clinical device protocols. She plans every practical module scientifically, so practitioners understand tissue response before any device touches skin.',
    bio2: 'Her approach prioritizes patient safety and clinical ethics: she emphasizes strict contraindication management, patch testing, and supervised demonstration models on equipped workstations in Abu Dhabi.',
    experience: '10+ years',
    certification: 'NCLC Certified, USA',
    schedule: 'Sun, Tue, Thu',
    ratingBadge: '★ 4.9 · 10+ years experience',
    image: '/about/professional-learning-session.jpeg',
    leads: [
      { title: 'Laser Physics & Clinical Safety', meta: 'Full Protocol · Abu Dhabi', href: '/courses#laser-therapies' },
      { title: 'Advanced Skin Rejuvenation', meta: 'Clinical Bays · Practical', href: '/courses#chemical-peels-science' }
    ],
    consultUrl: 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20consult%20with%20Dr.%20Azaiba%20Salim%20Kara%20about%20laser%20training.'
  },
  {
    id: 'seeta',
    index: '02 / 02',
    name: 'Dr. Seeta Yadav',
    role: 'Educational Director & Clinical Aesthetician',
    bio1: 'Seeta oversees academic quality, CIBTAC curriculum alignment, and clinical assessment standards across our facial, beauty therapy, and skincare science programmes in Abu Dhabi.',
    bio2: 'Drawing from deep expertise in medical aesthetics and electrotherapy, she ensures every learner builds disciplined consultation protocols, anatomical mastery, and manual precision.',
    experience: '8+ years',
    certification: 'CIBTAC Lead Educator',
    schedule: 'Mon, Wed, Sat',
    ratingBadge: '★ 4.9 · 8+ years experience',
    image: '/about/laser-and-skin-training.png',
    leads: [
      { title: 'Anatomy, Physiology & Skin Science', meta: 'Foundational Science · Abu Dhabi', href: '/courses#facial-skin-care-treatments' },
      { title: 'Facial Electrotherapy & Technology', meta: 'Equipped Suites · Practical', href: '/courses#beauty-therapy' }
    ],
    consultUrl: 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20consult%20with%20Dr.%20Seeta%20Yadav%20about%20curriculum%20enrolment.'
  }
];

export default function FoundersSection() {
  const [selectedId, setSelectedId] = useState<'azaiba' | 'seeta'>('azaiba');
  const active = specialists.find(s => s.id === selectedId) || specialists[0];

  return (
    <section 
      style={{ 
        background: '#FAF6F0', 
        padding: '96px 24px 100px 24px', 
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="specialists"
    >
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Block with Specialist Switcher Pills (Exact Image 5) */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '48px',
          textAlign: 'left'
        }}>
          <div>
            <span style={{
              display: 'block',
              fontFamily: '"General Sans", sans-serif',
              fontSize: '13px',
              color: '#8c776e',
              fontWeight: 500,
              marginBottom: '8px'
            }}>
              Specialists /
            </span>
            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2.1rem, 3.4vw, 2.9rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: 0,
              letterSpacing: '-0.02em'
            }}>
              Clinical leadership, one academy
            </h2>
          </div>

          {/* Switcher Pills (Exact Image 5) */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {specialists.map(s => {
              const isSelected = s.id === selectedId;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedId(s.id as 'azaiba' | 'seeta')}
                  style={{
                    background: isSelected ? '#1D130C' : 'rgba(255, 255, 255, 0.9)',
                    color: isSelected ? '#FFFFFF' : '#633b2c',
                    border: isSelected ? '1px solid #1D130C' : '1px solid rgba(197, 160, 89, 0.35)',
                    padding: '8px 18px',
                    borderRadius: '100px',
                    fontSize: '13px',
                    fontWeight: 600,
                    fontFamily: '"General Sans", sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {s.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Grid: Portrait on Left, Details on Right (Exact Image 5) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(320px, 460px) 1fr',
          gap: '56px',
          alignItems: 'center',
          textAlign: 'left'
        }} className="specialist-main-grid">
          
          {/* Left: Large Portrait Photo with Floating Pill */}
          <div style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(99, 59, 44, 0.1)',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            background: '#F5EFE6',
            height: '520px'
          }}>
            <img 
              src={active.image} 
              alt={active.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'opacity 0.4s ease'
              }}
            />

            {/* Bottom-Left Pill (Exact Image 5) */}
            <div style={{
              position: 'absolute',
              bottom: '18px',
              left: '18px',
              background: 'rgba(255, 255, 255, 0.94)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              padding: '7px 16px',
              borderRadius: '100px',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 4px 14px rgba(0,0,0,0.08)'
            }}>
              <span style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                color: '#633b2c'
              }}>
                {active.ratingBadge}
              </span>
            </div>
          </div>

          {/* Right: Specialist Details, Metadata & Leads (Exact Image 5) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            
            <div>
              <span style={{
                display: 'block',
                fontFamily: '"General Sans", sans-serif',
                fontSize: '12px',
                color: '#986A3E',
                fontWeight: 700,
                letterSpacing: '1px',
                marginBottom: '4px'
              }}>
                {active.index}
              </span>
              <h3 style={{
                fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
                color: '#633b2c',
                fontWeight: 400,
                lineHeight: 1.2,
                margin: '0 0 6px 0',
                letterSpacing: '-0.02em'
              }}>
                {active.name}
              </h3>
              <span style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '14px',
                color: '#8c776e',
                fontWeight: 500
              }}>
                {active.role}
              </span>
            </div>

            {/* Bios */}
            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '14.5px',
              color: '#7a6b63',
              lineHeight: 1.65,
              margin: 0
            }}>
              {active.bio1}
            </p>

            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '14.5px',
              color: '#7a6b63',
              lineHeight: 1.65,
              margin: 0
            }}>
              {active.bio2}
            </p>

            {/* Metadata Row (Exact Image 5) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              paddingTop: '18px',
              paddingBottom: '18px',
              borderTop: '1px solid rgba(197, 160, 89, 0.22)',
              borderBottom: '1px solid rgba(197, 160, 89, 0.22)'
            }}>
              <div>
                <span style={{ display: 'block', fontSize: '11px', color: '#986A3E', fontFamily: '"General Sans", sans-serif', textTransform: 'uppercase', fontWeight: 600 }}>
                  Experience
                </span>
                <strong style={{ fontSize: '13.5px', color: '#633b2c', fontFamily: '"General Sans", sans-serif' }}>
                  {active.experience}
                </strong>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '11px', color: '#986A3E', fontFamily: '"General Sans", sans-serif', textTransform: 'uppercase', fontWeight: 600 }}>
                  Credentials
                </span>
                <strong style={{ fontSize: '13.5px', color: '#633b2c', fontFamily: '"General Sans", sans-serif' }}>
                  {active.certification}
                </strong>
              </div>

              <div>
                <span style={{ display: 'block', fontSize: '11px', color: '#986A3E', fontFamily: '"General Sans", sans-serif', textTransform: 'uppercase', fontWeight: 600 }}>
                  In Academy
                </span>
                <strong style={{ fontSize: '13.5px', color: '#633b2c', fontFamily: '"General Sans", sans-serif' }}>
                  {active.schedule}
                </strong>
              </div>
            </div>

            {/* Leads Courses List (Exact Image 5) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ fontSize: '11px', color: '#986A3E', fontFamily: '"General Sans", sans-serif', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.8px' }}>
                Leads
              </span>

              {active.leads.map((lead, idx) => (
                <Link
                  key={idx}
                  href={lead.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(197, 160, 89, 0.16)',
                    textDecoration: 'none',
                    color: '#633b2c',
                    transition: 'color 0.2s ease'
                  }}
                >
                  <span style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14.5px', fontWeight: 600 }}>
                    {lead.title}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12.5px', color: '#8c776e', fontFamily: '"General Sans", sans-serif' }}>
                      {lead.meta}
                    </span>
                    <span style={{ color: '#986A3E', fontSize: '14px', fontWeight: 700 }}>&gt;</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Consult Action Button (Exact Image 5) */}
            <div style={{ marginTop: '8px' }}>
              <a
                href={active.consultUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#1D130C',
                  color: '#FFFFFF',
                  padding: '12px 26px',
                  borderRadius: '100px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontFamily: '"General Sans", sans-serif',
                  boxShadow: '0 4px 14px rgba(29, 19, 12, 0.18)',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#845E35')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1D130C')}
              >
                <span>Consult with {active.name.split(' ')[1]}</span>
                <span>&gt;</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .specialist-main-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}} />
    </section>
  );
}
