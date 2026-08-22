'use client';
import React, { useEffect, useRef, useState } from 'react';

function useInView(options = { threshold: 0.1, triggerOnce: true }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      } else if (!options.triggerOnce) {
        setInView(false);
      }
    }, { threshold: options.threshold });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [options.threshold, options.triggerOnce]);

  return { ref, inView };
}

const AestheticIcon = () => (
  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 6px', verticalAlign: 'middle', background: 'rgba(197, 160, 89, 0.1)', borderRadius: '50%', padding: '6px', color: '#c5a059', transform: 'translateY(-2px)' }}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  </span>
);

const ClinicalIcon = () => (
  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 6px', verticalAlign: 'middle', background: 'rgba(140, 106, 72, 0.1)', borderRadius: '50%', padding: '6px', color: '#8C6A48', transform: 'translateY(-2px)' }}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/>
    </svg>
  </span>
);

export default function BigStatement({ content }: { content?: any }) {
  const { ref, inView } = useInView();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [distanceFromCenter, setDistanceFromCenter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate the center of the section element and the center of the viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      
      // Distance is positive when element is below center, negative when above center
      setDistanceFromCenter(elementCenter - viewportCenter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger initially
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Positive multipliers for continuous upward slide-up on scroll:
  // When distanceFromCenter is positive (below viewport center), they start shifted downwards, 
  // and as you scroll down, they glide beautifully UPWARDS.
  const transY1 = distanceFromCenter * 0.12;  // Left Image (Brush Mask)
  const transY2 = distanceFromCenter * 0.08;  // Right Image (Device Facial)

  return (
    <section 
      ref={sectionRef} 
      className="big-statement-section" 
      style={{ 
        background: '#FAF8F5', 
        position: 'relative', 
        overflow: 'hidden', 
        padding: '160px 24px 130px 24px', // Reduced bottom padding to fix the huge gap
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '680px'
      }}
    >
      
      {/* Decorative luxury hairline background details */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '5%',
        right: '5%',
        height: '1px',
        background: 'linear-gradient(90deg, rgba(220,205,185,0) 0%, rgba(220,205,185,0.4) 50%, rgba(220,205,185,0) 100%)'
      }} />

      {/* ========================================================
          IMAGE 1: LEFT IMAGE (Esthetician Brush Mask) - Positioned below the headline text
          ======================================================== */}
      <div className="floating-img-left" style={{
        position: 'absolute',
        left: '4%',
        bottom: '26px',
        width: '250px',
        height: '330px',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 15px 40px rgba(74, 55, 40, 0.08)',
        zIndex: 1,
        opacity: inView ? 1 : 0,
        transform: `translate3d(0, ${transY1}px, 0) scale(${inView ? 1 : 0.95})`,
        transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.1, 0.8, 0.2, 1)',
        willChange: 'transform'
      }}>
        <img 
          src={content?.image1 || "/academy-images/training-consultation.png"} 
          alt="Novelle academy skincare consultation training" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* ========================================================
          IMAGE 2: RIGHT IMAGE (Medical Probe Cheek Treatment) - Positioned below the headline text
          ======================================================== */}
      <div className="floating-img-right" style={{
        position: 'absolute',
        right: '4%',
        bottom: '42px',
        width: '238px',
        height: '292px',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 15px 40px rgba(74, 55, 40, 0.08)',
        zIndex: 1,
        opacity: inView ? 1 : 0,
        transform: `translate3d(0, ${transY2}px, 0) scale(${inView ? 1 : 0.95})`,
        transition: 'opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.1, 0.8, 0.2, 1)',
        willChange: 'transform'
      }}>
        <img 
          src={content?.image2 || "/academy-images/laser-device-training.png"} 
          alt="Novelle academy laser device training demonstration" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1200px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Top Pill Badge matching image */}
          <div style={{ 
            marginBottom: '36px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <span className="big-statement-pill" style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF', 
              borderRadius: '100px',
              fontWeight: 600,
              color: '#633b2c',
              textTransform: 'uppercase',
              fontFamily: '"General Sans", sans-serif',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#986A3E', marginRight: '8px', flexShrink: 0 }}></span>
              PROFESSIONAL TRAINING FOR EVERY CAREER STAGE
            </span>
          </div>
          
          {/* Huge Serif Headline with Embedded Icons */}
          <h2 className="big-statement-heading" style={{ 
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.65rem, 2.95vw, 2.45rem)', 
            lineHeight: 1.34, 
            color: '#4A3728', // Dark elegant brown
            marginBottom: '44px',
            fontWeight: 400,
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
          }}>
            <span className="desktop-statement">
              We combine scientific experience with advanced aesthetic <AestheticIcon /> education to build confident professionals in beauty therapy, laser technologies, and modern clinical <ClinicalIcon /> aesthetics.
            </span>
            <span className="mobile-statement">
              We combine skin science with advanced aesthetic <AestheticIcon /> training so learners build confident, practical and industry-ready skills.
            </span>
          </h2>

        </div>
      </div>
      
      {/* Decorative luxury hairline background details */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '5%',
        right: '5%',
        height: '1px',
        background: 'linear-gradient(90deg, rgba(220,205,185,0) 0%, rgba(220,205,185,0.4) 50%, rgba(220,205,185,0) 100%)'
      }} />

      <style dangerouslySetInnerHTML={{__html: `
        .mobile-statement { display: none; }
        .desktop-statement { display: inline; }
        
        .big-statement-pill {
          padding: 8px 16px;
          font-size: 13px;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }
        @media (max-width: 640px) {
          .desktop-statement { display: none; }
          .mobile-statement { display: inline; }
          .big-statement-heading {
            font-size: 24px !important;
            line-height: 1.35 !important;
            margin-bottom: 32px !important;
          }
          .big-statement-pill {
            padding: 6px 12px;
            font-size: 10px;
            letter-spacing: 0.5px;
            margin-bottom: 20px;
          }
        }
        @media (max-width: 1150px) {
          .floating-img-left, 
          .floating-img-right {
            display: none !important;
          }
          .big-statement-section {
            padding: 120px 24px !important;
            min-height: auto !important;
          }
        }
      `}} />
    </section>
  );
}
