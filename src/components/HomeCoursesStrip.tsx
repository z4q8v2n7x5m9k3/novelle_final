'use client';
import React, { useRef } from 'react';
import Link from 'next/link';

interface CourseTrack {
  id: string;
  badge: string;
  title: string;
  meta: string;
  image: string;
}

const tracks: CourseTrack[] = [
  {
    id: 'facial-skin-care-treatments',
    badge: 'CIBTAC Core · Abu Dhabi',
    title: 'Facial Skin Care & Clinical Analysis',
    meta: 'Supervised Workstations',
    image: '/academy-images/training-consultation.png'
  },
  {
    id: 'laser-therapies',
    badge: 'Device Track · Abu Dhabi',
    title: 'Laser & Aesthetic Light Therapies',
    meta: 'Hands-on Device Suites',
    image: '/academy-images/laser-device-training.png'
  },
  {
    id: 'chemical-peels-science',
    badge: 'Clinical Science · Abu Dhabi',
    title: 'Chemical Peels & Barrier Repair',
    meta: 'Dermatological Protocols',
    image: '/academy-images/academy-approach-session.png'
  },
  {
    id: 'beauty-therapy',
    badge: 'Flagship Diploma · Abu Dhabi',
    title: 'Diploma in Beauty Therapy (CIBTAC)',
    meta: 'Face, Body & Massage',
    image: '/about/professional-learning-session.jpeg'
  }
];

export default function HomeCoursesStrip() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="scroll-reveal"
      style={{ 
        background: '#FAF8F5', 
        padding: '110px 24px', 
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="featured-programmes"
    >
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Unified Starting Eyebrow Badge */}
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
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
            CURRICULUM TRACKS
          </span>
        </div>

        {/* Header Block */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '40px',
          alignItems: 'flex-start',
          marginBottom: '48px',
          textAlign: 'left'
        }} className="tracks-header-grid">
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
              Discover our signature aesthetic tracks
            </h2>
          </div>

          <div>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '15px', 
              color: '#7a6b63', 
              lineHeight: 1.65, 
              margin: 0,
              fontWeight: 450 
            }}>
              Every programme starts with foundational skin science, hygiene disciplines, and supervised workstation practice in our Abu Dhabi academy suites.
            </p>
          </div>
        </div>

        {/* Content Row: Sidebar on Left, Horizontal Cards Track on Right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(200px, 260px) 1fr',
          gap: '40px',
          alignItems: 'center',
          textAlign: 'left'
        }} className="tracks-body-grid">
          
          {/* Left Sidebar: Social Proof with Verified Images & Nav Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', position: 'relative' }}>
                {[
                  '/about/professional-learning-session.jpeg',
                  '/founders/dr-seeta-yadav.jpeg',
                  '/academy-images/training-consultation.png'
                ].map((img, i) => (
                  <div key={i} style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid #FAF8F5',
                    marginLeft: i > 0 ? '-10px' : 0,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    background: '#F5EFE6'
                  }}>
                    <img 
                      src={img} 
                      alt="Al Novelle Learner" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }} 
                    />
                  </div>
                ))}
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: '13px', color: '#633b2c', fontFamily: '"General Sans", sans-serif', lineHeight: 1.2 }}>
                  Doctor-Led Training
                </strong>
                <span style={{ fontSize: '11px', color: '#8c776e', fontFamily: '"General Sans", sans-serif' }}>
                  Supervised clinical workstations
                </span>
              </div>
            </div>

            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '13.5px',
              color: '#7a6b63',
              lineHeight: 1.55,
              margin: 0
            }}>
              Practitioners describe their training as rigorous and clearly explained. Explore what we teach most often.
            </p>

            {/* Nav Arrows */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
              <button 
                onClick={scrollLeft}
                aria-label="Previous tracks"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#633b2c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#633b2c';
                  e.currentTarget.style.color = '#FFFFFF';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.color = '#633b2c';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              </button>

              <button 
                onClick={scrollRight}
                aria-label="Next tracks"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  border: 'none',
                  background: '#1D130C',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#845E35')}
                onMouseLeave={e => (e.currentTarget.style.background = '#1D130C')}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>

          {/* Right Cards Track */}
          <div 
            ref={scrollContainerRef}
            style={{
              display: 'flex',
              gap: '20px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              paddingBottom: '8px'
            }}
            className="tracks-scroll-wrapper"
          >
            {tracks.map((t) => (
              <Link
                key={t.id}
                href={`/courses#${t.id}`}
                style={{
                  flex: '0 0 250px',
                  height: '370px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  textDecoration: 'none',
                  scrollSnapAlign: 'start',
                  boxShadow: '0 12px 36px rgba(99, 59, 44, 0.08)',
                  border: '1px solid rgba(197, 160, 89, 0.28)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '20px',
                  transition: 'transform 0.35s ease, box-shadow 0.35s ease'
                }}
                className="track-card-item"
              >
                <img 
                  src={t.image} 
                  alt={t.title} 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                  }}
                />
                
                {/* Dark Gradient Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(20, 12, 8, 0.88) 0%, rgba(20, 12, 8, 0.25) 55%, transparent 100%)',
                  zIndex: 1
                }} />

                {/* Top Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  zIndex: 2,
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  padding: '4px 10px',
                  borderRadius: '100px',
                  border: '1px solid rgba(197, 160, 89, 0.25)'
                }}>
                  <span style={{
                    fontSize: '9.5px',
                    fontFamily: '"General Sans", sans-serif',
                    letterSpacing: '0.8px',
                    textTransform: 'uppercase',
                    color: '#986A3E',
                    fontWeight: 700
                  }}>
                    {t.badge}
                  </span>
                </div>

                {/* Bottom Content with ↗ Button */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  gap: '12px'
                }}>
                  <div>
                    <span style={{
                      display: 'block',
                      fontSize: '11px',
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontFamily: '"General Sans", sans-serif',
                      marginBottom: '4px'
                    }}>
                      {t.meta}
                    </span>
                    <h3 style={{
                      fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                      fontSize: '18px',
                      color: '#FFFFFF',
                      fontWeight: 400,
                      lineHeight: 1.25,
                      margin: 0
                    }}>
                      {t.title}
                    </h3>
                  </div>

                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '14px',
                    fontWeight: 600,
                    transition: 'all 0.3s ease'
                  }} className="track-card-arrow">
                    ↗
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .tracks-scroll-wrapper::-webkit-scrollbar {
          display: none;
        }
        .track-card-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 48px rgba(99, 59, 44, 0.16) !important;
        }
        .track-card-item:hover .track-card-arrow {
          background: #c5a059 !important;
          border-color: #c5a059 !important;
          color: #1D130C !important;
        }
        @media (max-width: 900px) {
          .tracks-header-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .tracks-body-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}} />
    </section>
  );
}
