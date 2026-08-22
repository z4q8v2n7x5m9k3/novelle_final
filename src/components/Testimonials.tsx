'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
  subtitle: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "The hands-on laser training was outstanding. The educators explained every concept clearly, supervised each practical step, and gave me the confidence to work with professional aesthetic protocols.",
    author: "Dr. Sarah Ahmed",
    subtitle: "Laser & Aesthetic Training Graduate",
    avatar: "/academy-images/training-consultation.png"
  },
  {
    id: 2,
    text: "Novelle gave me structure, confidence, and real practical exposure. The academy environment feels premium, but the teaching is still personal, focused, and easy to follow.",
    author: "Aisha Khan",
    subtitle: "Beauty Therapy Student",
    avatar: "/academy-images/student-support-admissions.png"
  },
  {
    id: 3,
    text: "The course helped me understand not just techniques, but safety, learner assessment, and professional standards. I would recommend Al Novelle to anyone serious about building a career in aesthetics.",
    author: "Mariam Ali",
    subtitle: "Aesthetic Training Learner",
    avatar: "/academy-images/practical-class-mannequin.png"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide transition
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Reset auto-play timer on manual navigation click to avoid jumpy transitions
  const resetTimer = () => {
    if (autoPlayTimer.current) {
      clearInterval(autoPlayTimer.current);
    }
    autoPlayTimer.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const handleNextClick = () => {
    nextSlide();
    resetTimer();
  };

  const handlePrevClick = () => {
    prevSlide();
    resetTimer();
  };

  // Start auto-play cycle on mount
  useEffect(() => {
    autoPlayTimer.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    };
  }, []);

  return (
    <section 
      id="testimonials" 
      className="testimonials-section"
      style={{ 
        backgroundColor: '#fdf7ef', 
        width: '100%', 
        overflow: 'hidden', 
        position: 'relative',
        boxSizing: 'border-box'
      }}
    >
      <div className="container testimonials-grid" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Left Column: Heading & Review Slider (8 cols) */}
        <div className="testimonials-left-col scroll-reveal reveal-from-left">
          
          {/* Header Row: Title & Slider Navigation Buttons */}
          <div className="testimonials-header-row">
            <h2 
              className="text-charcoal" 
              style={{ 
                fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                fontSize: 'clamp(2.1rem, 4vw, 2.8rem)',
                fontWeight: '400',
                lineHeight: '1.1',
                letterSpacing: '-0.01em',
                margin: '0'
              }}
            >
              What our students say
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              
              {/* Chevron Arrow Left Button */}
              <button 
                onClick={handlePrevClick} 
                aria-label="Previous review" 
                style={{ border: 'none', background: 'transparent', padding: '0', cursor: 'pointer', outline: 'none' }}
              >
                <div 
                  className="carousel-arrow-btn"
                  style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '50%', 
                    backgroundColor: '#FFFFFF', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', transition: 'stroke 0.3s ease' }}>
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </div>
              </button>

              {/* Chevron Arrow Right Button */}
              <button 
                onClick={handleNextClick} 
                aria-label="Next review" 
                style={{ border: 'none', background: 'transparent', padding: '0', cursor: 'pointer', outline: 'none' }}
              >
                <div 
                  className="carousel-arrow-btn"
                  style={{ 
                    width: '46px', 
                    height: '46px', 
                    borderRadius: '50%', 
                    backgroundColor: '#FFFFFF', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px', transition: 'stroke 0.3s ease' }}>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Testimonial Slider Track Container */}
          <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
            <div 
              className="testimonials-track"
              style={{ transform: `translateX(calc(-${activeIndex} * (var(--card-width) + var(--card-gap))))` }}
            >
              {testimonials.concat(testimonials).map((item, idx) => (
                <div 
                  key={`${item.id}-${idx}`}
                  className="testimonials-card"
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '24px',
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 8px 30px rgba(99,59,44,0.03)',
                    border: '1px solid #f3ebe0',
                    minHeight: '240px',
                    boxSizing: 'border-box'
                  }}
                >
                  {/* Rating Stars */}
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        style={{ width: '16px', height: '16px', color: '#c5a059', flexShrink: 0 }} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p 
                    style={{ 
                      color: '#633b2c', 
                      fontSize: '15px', 
                      lineHeight: '1.6', 
                      marginBottom: '24px', 
                      fontWeight: '500', 
                      fontFamily: '"General Sans", "Inter", sans-serif',
                      margin: '0 0 24px 0'
                    }}
                  >
                    "{item.text}"
                  </p>

                  {/* User Profile Info */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
                    <img 
                      src={item.avatar} 
                      alt={item.author} 
                      style={{ 
                        width: '42px', 
                        height: '42px', 
                        borderRadius: '50%', 
                        objectFit: 'cover', 
                        border: '1px solid #f3ebe0',
                        flexShrink: 0
                      }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <h4 
                        style={{ 
                          color: '#633b2c', 
                          fontFamily: '"General Sans", sans-serif', 
                          fontWeight: '600', 
                          fontSize: '14px', 
                          lineHeight: '1.2',
                          margin: '0'
                        }}
                      >
                        {item.author}
                      </h4>
                      <p 
                        style={{ 
                          color: '#c5a059', 
                          fontFamily: '"General Sans", sans-serif', 
                          fontSize: '12px', 
                          marginTop: '4px', 
                          fontWeight: '500',
                          margin: '4px 0 0 0',
                          lineHeight: '1'
                        }}
                      >
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Skincare Setting Image & Rating Summary Panel (4 cols) */}
        <div className="testimonials-right-col scroll-reveal reveal-from-right reveal-delay-2">
          
          {/* Backdrop Image - Replaced broken Unsplash with high-fidelity Framer clinical setting asset */}
          <img 
            src="/academy-images/academy-lounge-classroom.png" 
            alt="Novelle academy learning environment"
            style={{ 
              position: 'absolute', 
              inset: '0', 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover', 
              zIndex: '1',
              border: 'none'
            }}
          />
          {/* Subtle Dark Overlap */}
          <div 
            style={{ 
              position: 'absolute', 
              inset: '0', 
              backgroundColor: 'rgba(0,0,0,0.06)', 
              zIndex: '2' 
            }} 
          />

          {/* Glassmorphic Overlapping Rating Card */}
          <div 
            style={{
              position: 'absolute',
              bottom: '24px',
              zIndex: '3',
              width: 'calc(100% - 48px)',
              padding: '28px 20px',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              background: 'linear-gradient(180deg, rgba(74, 55, 40, 0.4), rgba(74, 55, 40, 0.9))',
              boxSizing: 'border-box'
            }}
          >
            {/* Rating Number */}
            <span 
              style={{ 
                color: '#FFFFFF', 
                fontSize: '56px', 
                fontWeight: '600', 
                fontFamily: '"General Sans", sans-serif', 
                lineHeight: '1', 
                marginBottom: '8px', 
                letterSpacing: '-0.02em' 
              }}
            >
              4.9
            </span>

            {/* Stars Row */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  style={{ width: '18px', height: '18px', color: '#FFFFFF', flexShrink: 0 }} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Subtitle */}
            <span 
              style={{ 
                color: 'rgba(255,255,255,0.85)', 
                fontSize: '11px', 
                fontWeight: '700', 
                fontFamily: '"General Sans", sans-serif', 
                letterSpacing: '0.12em', 
                textTransform: 'uppercase', 
                marginBottom: '28px',
                display: 'block'
              }}
            >
              student rating
            </span>

            {/* Row of overlapping avatar icons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src="/academy-images/training-consultation.png" 
                alt="Student 1"
                style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '50%', 
                  border: '2.5px solid rgba(255,255,255,0.95)', 
                  objectFit: 'cover', 
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  zIndex: 4,
                  flexShrink: 0
                }}
              />
              <img 
                src="/academy-images/student-support-admissions.png" 
                alt="Student 2"
                style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '50%', 
                  border: '2.5px solid rgba(255,255,255,0.95)', 
                  objectFit: 'cover', 
                  marginLeft: '-12px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  zIndex: 3,
                  flexShrink: 0
                }}
              />
              <img 
                src="/academy-images/practical-class-mannequin.png" 
                alt="Student 3"
                style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '50%', 
                  border: '2.5px solid rgba(255,255,255,0.95)', 
                  objectFit: 'cover', 
                  marginLeft: '-12px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  zIndex: 2,
                  flexShrink: 0
                }}
              />
              <img 
                src="/academy-images/laser-device-training.png" 
                alt="Student 4"
                style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '50%', 
                  border: '2.5px solid rgba(255,255,255,0.95)', 
                  objectFit: 'cover', 
                  marginLeft: '-12px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  zIndex: 1,
                  flexShrink: 0
                }}
              />
            </div>
          </div>
        </div>

      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 991px) {
          .testimonials-left-col {
            grid-column: 1 / -1 !important;
          }
          .testimonials-right-col {
            grid-column: 1 / -1 !important;
          }
        }
        @media (max-width: 576px) {
          .testimonials-header-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          .testimonials-header-row h2 {
            max-width: 100% !important;
          }
        }
      `}} />
    </section>
  );
}
