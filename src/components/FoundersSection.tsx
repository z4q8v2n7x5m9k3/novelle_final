'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function FoundersSection() {
  const [activeFounder, setActiveFounder] = useState<'azaiba' | 'seeta'>('azaiba');

  const founders = [
    {
      id: 'azaiba' as const,
      name: 'Dr. Azaiba Salim Kara',
      role: 'Co-Founder & Managing Director',
      credentials: ['NCLC Certified, USA', '10+ Years UAE Experience'],
      image: '/about/professional-learning-session.jpeg',
      bio1: 'Aesthetic practitioner and laser specialist with over a decade of clinical experience in medical aesthetics and laser technology in the UAE. Trained in Homeopathic Medicine with an NCLC qualification from the United States.',
      bio2: 'Dr. Kara has directed clinical training collaborations involving Alma, Fotona, Candela/Calium, and VILAFORTUNY. Her focus at Al Novelle is marrying medical skin science with hands-on workstation proficiency and patient safety.',
      specialties: ['Laser Physics & Safety', 'Advanced Skin Rejuvenation', 'Clinical Consultation Protocols']
    },
    {
      id: 'seeta' as const,
      name: 'Dr. Seeta Yadav',
      role: 'Co-Founder & Educational Director',
      credentials: ['Medical Aesthetic Educator', 'Curriculum Lead'],
      image: '/about/laser-and-skin-training.png',
      bio1: 'Medical aesthetic educator with extensive clinical expertise across non-invasive aesthetics, facial electrotherapy, and advanced cosmetic skin therapies in the UAE.',
      bio2: 'She oversees curriculum development, CIBTAC qualification alignment, and clinical assessment standards at Al Novelle, ensuring every graduate attains the rigorous benchmarks required by leading clinics.',
      specialties: ['Anatomy & Physiology', 'Advanced Facial Electrotherapy', 'Assessment & UAE Accreditation']
    }
  ];

  return (
    <section 
      style={{ 
        background: '#FAF6F0', 
        padding: '96px 24px', 
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="founders"
    >
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header - Left Aligned */}
        <div style={{ textAlign: 'left', marginBottom: '48px', maxWidth: '820px' }}>
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
            CLINICAL LEADERSHIP
          </span>

          <h2 style={{
            fontFamily: '"Hedvig Letters Serif", Georgia, serif',
            fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
            color: '#633b2c',
            fontWeight: 400,
            lineHeight: 1.2,
            margin: '0 0 14px 0',
            letterSpacing: '-0.02em'
          }}>
            Experienced Clinicians. Dedicated Educators.
          </h2>

          <p style={{ 
            fontFamily: '"General Sans", sans-serif', 
            fontSize: '15.5px', 
            color: '#8c776e', 
            lineHeight: 1.65, 
            margin: 0, 
            fontWeight: 500 
          }}>
            Al Novelle was founded by practicing aesthetic clinicians and educators united by a shared vision: to raise the standard of practical education, hygiene, and patient safety across the UAE.
          </p>
        </div>

        {/* 2 Refined Corporate Founder Cards (Strictly Left-Aligned, Spacious, No Quote Clutter) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
          gap: '32px' 
        }}>
          {founders.map((f) => (
            <div 
              key={f.id}
              className="founder-clean-card"
              style={{ 
                background: '#FFFFFF', 
                borderRadius: '28px', 
                padding: '38px 34px', 
                border: '1px solid rgba(197, 160, 89, 0.32)', 
                boxShadow: '0 12px 40px rgba(99, 59, 44, 0.04)',
                display: 'flex', 
                flexDirection: 'column',
                textAlign: 'left',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease'
              }}
            >
              {/* Header with Photo & Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '22px' }}>
                <div style={{ 
                  width: '88px', 
                  height: '88px', 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  border: '2px solid #c5a059', 
                  flexShrink: 0, 
                  background: '#F5EFE6',
                  boxShadow: '0 6px 18px rgba(99, 59, 44, 0.08)'
                }}>
                  <img 
                    src={f.image} 
                    alt={f.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>

                <div>
                  <span style={{ 
                    display: 'block',
                    fontSize: '11px', 
                    fontFamily: '"General Sans", sans-serif', 
                    letterSpacing: '1px', 
                    textTransform: 'uppercase', 
                    color: '#986A3E', 
                    fontWeight: 700,
                    marginBottom: '4px' 
                  }}>
                    {f.role}
                  </span>
                  <h3 style={{ 
                    fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                    fontSize: '22px', 
                    color: '#633b2c', 
                    fontWeight: 400, 
                    margin: '0 0 6px 0' 
                  }}>
                    {f.name}
                  </h3>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                    {f.credentials.map((c, i) => (
                      <span key={i} style={{ 
                        fontSize: '11px', 
                        background: i === 0 ? 'rgba(197, 160, 89, 0.15)' : '#FAF6F0', 
                        color: i === 0 ? '#845E35' : '#8c776e', 
                        padding: '3px 9px', 
                        borderRadius: '100px', 
                        fontWeight: 600 
                      }}>
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <p style={{ 
                fontFamily: '"General Sans", sans-serif', 
                fontSize: '14.5px', 
                color: '#8c776e', 
                lineHeight: 1.7, 
                margin: '0 0 14px 0', 
                flexGrow: 1 
              }}>
                {f.bio1}
              </p>

              <p style={{ 
                fontFamily: '"General Sans", sans-serif', 
                fontSize: '14.5px', 
                color: '#8c776e', 
                lineHeight: 1.7, 
                margin: '0 0 20px 0' 
              }}>
                {f.bio2}
              </p>

              {/* Specialties Pills */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '22px' }}>
                {f.specialties.map((s, idx) => (
                  <span key={idx} style={{
                    fontSize: '11.5px',
                    fontFamily: '"General Sans", sans-serif',
                    color: '#633b2c',
                    background: '#FAF6F0',
                    border: '1px solid rgba(197, 160, 89, 0.22)',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    fontWeight: 500
                  }}>
                    {s}
                  </span>
                ))}
              </div>

              {/* Read Biography Link */}
              <div style={{ borderTop: '1px solid rgba(197, 160, 89, 0.2)', paddingTop: '16px', marginTop: 'auto' }}>
                <Link 
                  href={`/about#${f.id}`}
                  style={{ 
                    color: '#986A3E', 
                    fontWeight: 600, 
                    fontSize: '13.5px', 
                    textDecoration: 'none', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px',
                    fontFamily: '"General Sans", sans-serif'
                  }}
                >
                  Read full biography on About page <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .founder-clean-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(99, 59, 44, 0.08) !important;
          border-color: rgba(197, 160, 89, 0.55) !important;
        }
      `}} />
    </section>
  );
}
