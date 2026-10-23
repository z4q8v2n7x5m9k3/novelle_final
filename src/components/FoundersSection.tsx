'use client';
import React from 'react';
import Link from 'next/link';

export default function FoundersSection() {
  return (
    <section 
      style={{ 
        background: '#19110B',
        backgroundBlendMode: 'normal',
        backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(197, 160, 89, 0.18) 0%, transparent 65%), linear-gradient(180deg, #1D130C 0%, #140C07 100%)',
        padding: '120px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}
      id="founders"
    >
      {/* Subtle luxury ambient lines */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '10%',
        right: '10%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(197, 160, 89, 0.3), transparent)'
      }} />

      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.06)',
            padding: '8px 20px',
            borderRadius: '100px',
            fontSize: '11px',
            letterSpacing: '2px',
            fontWeight: 700,
            color: '#D4AF37',
            textTransform: 'uppercase',
            fontFamily: '"General Sans", sans-serif',
            marginBottom: '20px',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D4AF37', marginRight: '10px', boxShadow: '0 0 8px #D4AF37' }}></span>
            ACADEMIC &amp; CLINICAL LEADERSHIP
          </span>

          <h2 style={{
            fontFamily: '"Hedvig Letters Serif", Georgia, serif',
            fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)',
            color: '#FFFFFF',
            fontWeight: 400,
            lineHeight: 1.15,
            margin: '0 0 18px 0',
            letterSpacing: '-0.02em'
          }}>
            The Clinicians Behind Al Novelle
          </h2>

          <p style={{ 
            fontFamily: '"General Sans", sans-serif', 
            fontSize: '16px', 
            color: '#C7B9AC', 
            lineHeight: 1.7, 
            maxWidth: '720px', 
            margin: '0 auto', 
            fontWeight: 400 
          }}>
            Founded by seasoned aesthetic practitioners and clinical educators with a shared commitment to raising standards, science-led education, and practical competence in the UAE.
          </p>
        </div>

        {/* 2 Grand Redesigned Founder Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '36px', 
          marginBottom: '56px' 
        }}>

          {/* ── FOUNDER 1: Dr. Azaiba Salim Kara ── */}
          <div 
            className="founder-card-redesign"
            style={{ 
              background: 'rgba(255, 255, 255, 0.035)', 
              borderRadius: '32px', 
              padding: '48px 40px', 
              border: '1px solid rgba(197, 160, 89, 0.22)', 
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
              display: 'flex', 
              flexDirection: 'column',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease'
            }}
          >
            {/* Top Row: Portrait + Titles */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '28px' }}>
              <div style={{ 
                width: '96px', 
                height: '96px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                border: '2px solid #C5A059', 
                boxShadow: '0 8px 24px rgba(197, 160, 89, 0.25)',
                flexShrink: 0, 
                background: '#2A1B14' 
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
                  letterSpacing: '1.5px', 
                  textTransform: 'uppercase', 
                  color: '#C5A059', 
                  fontWeight: 700,
                  marginBottom: '4px' 
                }}>
                  Co-Founder &amp; Managing Director
                </span>
                <h3 style={{ 
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                  fontSize: '26px', 
                  color: '#FFFFFF', 
                  fontWeight: 400, 
                  margin: '0 0 6px 0',
                  letterSpacing: '-0.01em' 
                }}>
                  Dr. Azaiba Salim Kara
                </h3>
                <p style={{ 
                  fontFamily: '"General Sans", sans-serif', 
                  fontSize: '13px', 
                  color: '#A99B8E', 
                  margin: 0 
                }}>
                  Aesthetic Practitioner &amp; Laser Specialist
                </p>
              </div>
            </div>

            {/* Credential Tags */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <span style={{ 
                background: 'rgba(197, 160, 89, 0.12)', 
                border: '1px solid rgba(197, 160, 89, 0.3)', 
                color: '#E0C58A', 
                fontSize: '11px', 
                fontWeight: 600, 
                padding: '4px 12px', 
                borderRadius: '100px',
                fontFamily: '"General Sans", sans-serif'
              }}>
                NCLC Certified (USA)
              </span>
              <span style={{ 
                background: 'rgba(255, 255, 255, 0.05)', 
                border: '1px solid rgba(255, 255, 255, 0.12)', 
                color: '#C7B9AC', 
                fontSize: '11px', 
                fontWeight: 600, 
                padding: '4px 12px', 
                borderRadius: '100px',
                fontFamily: '"General Sans", sans-serif'
              }}>
                10+ Years UAE Experience
              </span>
              <span style={{ 
                background: 'rgba(255, 255, 255, 0.05)', 
                border: '1px solid rgba(255, 255, 255, 0.12)', 
                color: '#C7B9AC', 
                fontSize: '11px', 
                fontWeight: 600, 
                padding: '4px 12px', 
                borderRadius: '100px',
                fontFamily: '"General Sans", sans-serif'
              }}>
                International Speaker
              </span>
            </div>

            {/* Bio Body */}
            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '14.5px', 
              color: '#D1C4B8', 
              lineHeight: 1.7, 
              margin: '0 0 16px 0', 
              flexGrow: 1 
            }}>
              Dr. Azaiba brings more than a decade of medical aesthetics and laser technology leadership in the UAE. Originally from Mumbai with a background in Homeopathic Medicine, she moved to Dubai in 2013 and holds an NCLC qualification from the United States.
            </p>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '14.5px', 
              color: '#B5A597', 
              lineHeight: 1.7, 
              margin: '0 0 24px 0' 
            }}>
              Her clinical educational background includes collaborations with Alma, Fotona, Candela/Calium and VILAFORTUNY, focusing on technical laser precision, contraindication management, and supervised practical mastery.
            </p>

            {/* Quote Box */}
            <div style={{ 
              background: 'rgba(0, 0, 0, 0.25)', 
              borderLeft: '3px solid #C5A059', 
              padding: '16px 20px', 
              borderRadius: '0 16px 16px 0',
              marginBottom: '28px'
            }}>
              <p style={{ 
                fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                fontSize: '14.5px', 
                color: '#F0E6D8', 
                fontStyle: 'italic', 
                margin: 0, 
                lineHeight: 1.6 
              }}>
                &ldquo;Our vision focuses on combining scientific knowledge, patient safety, technical understanding, and practical skills in aesthetic education.&rdquo;
              </p>
            </div>

            {/* Link CTA */}
            <Link 
              href="/about#azaiba" 
              style={{ 
                color: '#D4AF37', 
                fontWeight: 600, 
                fontSize: '14px', 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                fontFamily: '"General Sans", sans-serif',
                transition: 'gap 0.3s ease'
              }}
              className="founder-link-arrow"
            >
              Read Full Biography &amp; Background <span>→</span>
            </Link>
          </div>

          {/* ── FOUNDER 2: Dr. Seeta Yadav ── */}
          <div 
            className="founder-card-redesign"
            style={{ 
              background: 'rgba(255, 255, 255, 0.035)', 
              borderRadius: '32px', 
              padding: '48px 40px', 
              border: '1px solid rgba(197, 160, 89, 0.22)', 
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.35)',
              display: 'flex', 
              flexDirection: 'column',
              backdropFilter: 'blur(10px)',
              transition: 'transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease'
            }}
          >
            {/* Top Row: Portrait + Titles */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '28px' }}>
              <div style={{ 
                width: '96px', 
                height: '96px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                border: '2px solid #C5A059', 
                boxShadow: '0 8px 24px rgba(197, 160, 89, 0.25)',
                flexShrink: 0, 
                background: '#2A1B14' 
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
                  letterSpacing: '1.5px', 
                  textTransform: 'uppercase', 
                  color: '#C5A059', 
                  fontWeight: 700,
                  marginBottom: '4px' 
                }}>
                  Founder &amp; Academic Director
                </span>
                <h3 style={{ 
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                  fontSize: '26px', 
                  color: '#FFFFFF', 
                  fontWeight: 400, 
                  margin: '0 0 6px 0',
                  letterSpacing: '-0.01em' 
                }}>
                  Dr. Seeta Yadav
                </h3>
                <p style={{ 
                  fontFamily: '"General Sans", sans-serif', 
                  fontSize: '13px', 
                  color: '#A99B8E', 
                  margin: 0 
                }}>
                  Clinical Aesthetic Educator
                </p>
              </div>
            </div>

            {/* Credential Tags */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <span style={{ 
                background: 'rgba(197, 160, 89, 0.12)', 
                border: '1px solid rgba(197, 160, 89, 0.3)', 
                color: '#E0C58A', 
                fontSize: '11px', 
                fontWeight: 600, 
                padding: '4px 12px', 
                borderRadius: '100px',
                fontFamily: '"General Sans", sans-serif'
              }}>
                BAMS &amp; EMS Postgraduate
              </span>
              <span style={{ 
                background: 'rgba(255, 255, 255, 0.05)', 
                border: '1px solid rgba(255, 255, 255, 0.12)', 
                color: '#C7B9AC', 
                fontSize: '11px', 
                fontWeight: 600, 
                padding: '4px 12px', 
                borderRadius: '100px',
                fontFamily: '"General Sans", sans-serif'
              }}>
                CIBTAC Beauty Therapy
              </span>
              <span style={{ 
                background: 'rgba(255, 255, 255, 0.05)', 
                border: '1px solid rgba(255, 255, 255, 0.12)', 
                color: '#C7B9AC', 
                fontSize: '11px', 
                fontWeight: 600, 
                padding: '4px 12px', 
                borderRadius: '100px',
                fontFamily: '"General Sans", sans-serif'
              }}>
                Former GCC Regional Trainer
              </span>
            </div>

            {/* Bio Body */}
            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '14.5px', 
              color: '#D1C4B8', 
              lineHeight: 1.7, 
              margin: '0 0 16px 0', 
              flexGrow: 1 
            }}>
              Dr. Seeta holds a Bachelor of Ayurvedic Medicine and Surgery (BAMS), postgraduate training in Emergency Medical Services, and advanced certifications in cosmetology, laser treatments, and CIBTAC Beauty Therapy.
            </p>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '14.5px', 
              color: '#B5A597', 
              lineHeight: 1.7, 
              margin: '0 0 24px 0' 
            }}>
              As former regional GCC laser trainer, she directs Al Novelle’s academic curriculums across skin science, laser safety, treatment protocols, and practical demonstrations to prepare confident, knowledgeable professionals.
            </p>

            {/* Quote Box */}
            <div style={{ 
              background: 'rgba(0, 0, 0, 0.25)', 
              borderLeft: '3px solid #C5A059', 
              padding: '16px 20px', 
              borderRadius: '0 16px 16px 0',
              marginBottom: '28px'
            }}>
              <p style={{ 
                fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                fontSize: '14.5px', 
                color: '#F0E6D8', 
                fontStyle: 'italic', 
                margin: 0, 
                lineHeight: 1.6 
              }}>
                &ldquo;Our vision is to provide responsible, science-based aesthetic education that develops confident and knowledgeable practitioners.&rdquo;
              </p>
            </div>

            {/* Link CTA */}
            <Link 
              href="/about#seeta" 
              style={{ 
                color: '#D4AF37', 
                fontWeight: 600, 
                fontSize: '14px', 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                fontFamily: '"General Sans", sans-serif',
                transition: 'gap 0.3s ease'
              }}
              className="founder-link-arrow"
            >
              Read Full Biography &amp; Background <span>→</span>
            </Link>
          </div>

        </div>

        {/* Bottom Editorial Callout */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(197, 160, 89, 0.12) 0%, rgba(255, 255, 255, 0.03) 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(197, 160, 89, 0.25)',
          padding: '32px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <h4 style={{ 
              fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
              fontSize: '20px', 
              color: '#FFFFFF', 
              fontWeight: 400, 
              margin: '0 0 6px 0' 
            }}>
              Discover the Novelle Educational Standard
            </h4>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '14px', 
              color: '#C7B9AC', 
              margin: 0, 
              lineHeight: 1.6 
            }}>
              Learn how our founders’ combined clinical background shapes every course, workshop, and hands-on session.
            </p>
          </div>

          <Link 
            href="/about" 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '12px',
              background: '#C5A059', 
              color: '#1A110B', 
              padding: '14px 28px', 
              borderRadius: '100px', 
              fontSize: '13.5px', 
              fontWeight: 700, 
              textDecoration: 'none',
              fontFamily: '"General Sans", sans-serif',
              boxShadow: '0 8px 24px rgba(197, 160, 89, 0.25)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = '#DFB86C';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = '#C5A059';
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            <span>Learn More on About Page</span>
            <span>→</span>
          </Link>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .founder-card-redesign:hover {
          transform: translateY(-6px);
          border-color: rgba(197, 160, 89, 0.45) !important;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5) !important;
        }
        .founder-card-redesign:hover .founder-link-arrow {
          gap: 12px;
          color: #DFB86C;
        }
      `}} />
    </section>
  );
}
