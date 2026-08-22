'use client';
import React from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

export default function ProgrammesGrid() {
  const programmes = [
    {
      title: "Semi Permanent Makeup",
      desc: "Now enrolling: specialist training in brows, lips, eyeliner, pigment science, skin healing, and supervised SPMU practice.",
      link: "/courses#spmu",
      cta: "Certified Course",
      status: "available",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#8C7662" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
          <circle cx="7" cy="15" r="1.5" />
          <circle cx="12" cy="15" r="1.5" />
          <circle cx="17" cy="15" r="1.5" />
        </svg>
      )
    },
    {
      title: <>Beauty Therapy<br/>Training</>,
      desc: "A structured pathway in skin science, facial practice, client care, and aesthetic foundations.",
      link: "/courses#beauty",
      cta: "Coming Soon",
      status: "soon",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#8C7662" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" strokeDasharray="3 3" opacity="0.6" />
          <path d="M12 6c-2.21 0-4 1.79-4 4 0 .88.29 1.68.78 2.34L7 16l1 .5 1.5-1.5c.34.22.73.38 1.16.45L11 20h2l.34-4.55c.43-.07.82-.23 1.16-.45l1.5 1.5 1-.5-1.78-3.66c.49-.66.78-1.46.78-2.34 0-2.21-1.79-4-4-4z" />
          <path d="M10 10.5c.5-.5 1-.5 1.5 0M14 10.5c-.5-.5-1-.5-1.5 0" />
        </svg>
      )
    },
    {
      title: "Professional Pathways",
      desc: "Structured, internationally inspired learning for aesthetics and beauty professionals.",
      link: "/courses#cibtac",
      cta: "Coming Soon",
      status: "soon",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#8C7662" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    },
    {
      title: "Laser Courses",
      desc: "Laser hair reduction, laser aesthetics, physics, device handling, and clinical safety modules.",
      link: "/courses#laser",
      cta: "Coming Soon",
      status: "soon",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#8C7662" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 16c.3 1.2.9 2.4 2 3.2v.8c0 .5.4 1 1 1s1-.5 1-1v-.8c1.1-.8 1.7-2 2-3.2l.5-1c.5-1 .5-2.5.5-4a4 4 0 0 0-8 0c0 1.5 0 3 .5 4l.5 1z" />
          <path d="M5 11h14M12 4v4" />
        </svg>
      )
    },
    {
      title: "Short Courses",
      desc: "Focused certificates in Hydra Facial, chemical peels, micro-needling, and electrolysis.",
      link: "/courses#short",
      cta: "Coming Soon",
      status: "soon",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#8C7662" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      )
    },
    {
      title: "Slimming Body Treatment",
      desc: "Body technology modules covering LPG Endermologie, EMS, lymphatic drainage, and aesthetic anatomy.",
      link: "/courses#slimming",
      cta: "Coming Soon",
      status: "soon",
      icon: (
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#8C7662" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4.5a3.5 3.5 0 0 0-6.8 1C8.2 6.5 7 8 7 9.8c0 .8.2 1.6.6 2.2L6.5 16l3 1v5" />
        </svg>
      )
    }
  ];

  return (
    <section className="section-padding" style={{ background: '#FAF6F0', padding: '70px 0 110px 0' }}>
      {/* Container class matches standard global layout with 1400px maxWidth and 5% padding */}
      <div className="container">
        
        {/* Section Head matching Hero and Statement layout */}
        <FadeIn direction="up">
          <div style={{ textAlign: 'center', marginBottom: '90px' }}>
          
          {/* Top Pill Badge */}
          <div style={{ marginBottom: '24px' }}>
            <span style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF', 
              padding: '8px 16px', 
              borderRadius: '100px',
              fontSize: '13px', 
              letterSpacing: '1px',
              fontWeight: 600,
              color: '#633b2c',
              textTransform: 'uppercase',
              fontFamily: '"General Sans", sans-serif',
              marginBottom: '24px',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              COURSES
            </span>
          </div>

          <h2 style={{ 
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', 
            color: '#4A3728', 
            fontWeight: 400,
            margin: 0
          }}>
            Our Programmes
          </h2>
        </div>
        </FadeIn>

        {/* Accordion List - Custom Soft Ivory Cards with FDF7EF Background */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {programmes.map((prog, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.1}>
              <Link href={prog.link} style={{ textDecoration: 'none', display: 'block' }}>
                <div 
                  className="programme-accordion-card"
                  style={{ 
                    background: '#FDF7EF', 
                    border: '1px solid rgba(140, 118, 98, 0.15)',
                    borderRadius: '24px', 
                    padding: '32px 48px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: '0 8px 30px rgba(74, 55, 40, 0.01)',
                    cursor: 'pointer'
                  }}
                >
                  {/* Left Column: Icon and Title */}
                  <div className="card-left-section" style={{ display: 'flex', alignItems: 'center', gap: '28px', flex: '0 0 42%' }}>
                    {/* Custom Line Icon Container - contrasts perfectly against FDF7EF background */}
                    <div style={{ 
                      width: '60px', 
                      height: '60px', 
                      borderRadius: '50%', 
                      background: '#F3EFEA', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      boxShadow: 'inset 0 2px 8px rgba(140, 118, 98, 0.04)',
                      flexShrink: 0
                    }}>
                      {prog.icon}
                    </div>
                    {/* Title */}
                    <h3 style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)', 
                      color: '#4A3728', 
                      fontWeight: 400,
                      margin: 0
                    }}>
                      {prog.title}
                    </h3>
                  </div>

                  {/* Middle Column: Description and Explore Pill Button */}
                  <div className="card-middle-section" style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: '1 1 48%', paddingRight: '32px' }}>
                    <p style={{ 
                      fontFamily: 'system-ui, sans-serif',
                      fontSize: '16px', // Bada and more spacious text
                      color: '#8C7662', 
                      lineHeight: 1.7, // Higher line-height for luxury readability
                      margin: 0
                    }}>
                      {prog.desc}
                    </p>
                    <div style={{ width: 'fit-content' }}>
                      <span className="btn-explore-course" style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #8C7662', 
                        borderRadius: '100px', 
                        padding: '10px 32px', // Expanded explore button padding
                        color: '#8C7662', 
                        fontSize: '11px', 
                        fontWeight: 600, 
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        background: 'transparent'
                      }}>
                        {prog.cta}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Sleek Link Arrow indicator */}
                  <div className="card-right-section" style={{ flex: '0 0 5%', display: 'flex', justifyContent: 'flex-end' }}>
                    <div className="arrow-btn-circle" style={{ 
                      width: '38px', 
                      height: '38px', 
                      borderRadius: '50%', 
                      border: '1px solid rgba(140, 118, 98, 0.25)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#8C7662', 
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s ease' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </div>
                  </div>

                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>

      {/* Styled JSX/Standard CSS rules for buttery interactions and responsiveness */}
      <style dangerouslySetInnerHTML={{__html: `
        .programme-accordion-card:hover {
          background: #FDF7EF !important;
          border-color: rgba(197, 160, 89, 0.4) !important;
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(152, 106, 62, 0.08) !important;
        }
        .programme-accordion-card:hover .arrow-btn-circle {
          background: #986A3E;
          border-color: #986A3E !important;
          color: #FFFFFF !important;
        }
        .programme-accordion-card:hover .arrow-btn-circle svg {
          transform: translateX(3px);
        }
        .programme-accordion-card:hover .btn-explore-course {
          background: #986A3E !important;
          color: #FFFFFF !important;
          border-color: #986A3E !important;
          box-shadow: 0 4px 12px rgba(152, 106, 62, 0.15);
        }
        @media (max-width: 900px) {
          .programme-accordion-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 24px 24px !important;
            gap: 16px !important;
            borderRadius: 20px !important;
          }
          .card-left-section {
            flex: none !important;
            width: 100% !important;
            gap: 20px !important;
          }
          .card-middle-section {
            flex: none !important;
            width: 100% !important;
            padding-right: 0 !important;
          }
          .card-right-section {
            display: none !important; /* Hide expand button on stacked mobile view */
          }
        }
      `}} />
    </section>
  );
}
