'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

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
  <span style={{ 
    display: 'inline-flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    margin: '0 6px', 
    verticalAlign: 'middle', 
    background: 'rgba(197, 160, 89, 0.14)', 
    borderRadius: '50%', 
    padding: '7px', 
    color: '#c5a059', 
    transform: 'translateY(-2px)',
    border: '1px solid rgba(197, 160, 89, 0.28)'
  }}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  </span>
);

const ClinicalIcon = () => (
  <span style={{ 
    display: 'inline-flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    margin: '0 6px', 
    verticalAlign: 'middle', 
    background: 'rgba(140, 106, 72, 0.14)', 
    borderRadius: '50%', 
    padding: '7px', 
    color: '#8C6A48', 
    transform: 'translateY(-2px)',
    border: '1px solid rgba(140, 106, 72, 0.28)'
  }}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
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
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      setDistanceFromCenter(elementCenter - viewportCenter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax glide calculations
  const transY1 = distanceFromCenter * 0.13;  // Left image
  const transY2 = distanceFromCenter * 0.09;  // Right image

  return (
    <section 
      ref={sectionRef} 
      className="big-statement-section" 
      style={{ 
        background: '#FAF8F5', 
        position: 'relative', 
        overflow: 'hidden', 
        padding: '160px 24px 140px 24px', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '720px'
      }}
      id="academy-standards"
    >
      {/* Subtle luxury ambient radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '480px',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(197, 160, 89, 0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Decorative luxury hairline background details */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '4%',
        right: '4%',
        height: '1px',
        background: 'linear-gradient(90deg, rgba(220,205,185,0) 0%, rgba(197,160,89,0.38) 50%, rgba(220,205,185,0) 100%)'
      }} />

      {/* Floating Image 1 (Left) — Parallax Slide-up on Scroll */}
      <div className="floating-img-left" style={{
        position: 'absolute',
        left: '3%',
        bottom: '36px',
        width: '280px',
        height: '380px',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 24px 60px rgba(74, 55, 40, 0.11)',
        border: '1px solid rgba(197, 160, 89, 0.35)',
        zIndex: 1,
        opacity: inView ? 1 : 0,
        transform: `translate3d(0, ${transY1}px, 0) scale(${inView ? 1 : 0.96})`,
        transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.1, 0.8, 0.2, 1)',
        willChange: 'transform',
        background: '#F5EFE6'
      }}>
        <img 
          src={content?.image1 || "/academy-images/training-consultation.png"} 
          alt="Al Novelle practical clinical workstations" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          right: '16px',
          background: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(14px)',
          borderRadius: '16px',
          padding: '12px 16px',
          border: '1px solid rgba(197, 160, 89, 0.32)',
          textAlign: 'left',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
        }}>
          <span style={{ 
            fontSize: '9.5px', 
            letterSpacing: '1.5px', 
            textTransform: 'uppercase', 
            color: '#986A3E', 
            fontWeight: 700,
            display: 'block',
            fontFamily: '"General Sans", sans-serif',
            marginBottom: '2px'
          }}>
            SUPERVISED WORKSTATIONS
          </span>
          <strong style={{ fontSize: '13.5px', color: '#633b2c', fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontWeight: 400 }}>
            Practical Demonstration Suites
          </strong>
        </div>
      </div>

      {/* Floating Image 2 (Right) — Parallax Slide-up on Scroll */}
      <div className="floating-img-right" style={{
        position: 'absolute',
        right: '3%',
        bottom: '48px',
        width: '270px',
        height: '350px',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 24px 60px rgba(74, 55, 40, 0.11)',
        border: '1px solid rgba(197, 160, 89, 0.35)',
        zIndex: 1,
        opacity: inView ? 1 : 0,
        transform: `translate3d(0, ${transY2}px, 0) scale(${inView ? 1 : 0.96})`,
        transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.1, 0.8, 0.2, 1)',
        willChange: 'transform',
        background: '#F5EFE6'
      }}>
        <img 
          src={content?.image2 || "/academy-images/laser-device-training.png"} 
          alt="Al Novelle aesthetic laser device training demonstration" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          right: '16px',
          background: 'rgba(255, 255, 255, 0.94)',
          backdropFilter: 'blur(14px)',
          borderRadius: '16px',
          padding: '12px 16px',
          border: '1px solid rgba(197, 160, 89, 0.32)',
          textAlign: 'left',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)'
        }}>
          <span style={{ 
            fontSize: '9.5px', 
            letterSpacing: '1.5px', 
            textTransform: 'uppercase', 
            color: '#986A3E', 
            fontWeight: 700,
            display: 'block',
            fontFamily: '"General Sans", sans-serif',
            marginBottom: '2px'
          }}>
            DEVICE &amp; LASER SUITE
          </span>
          <strong style={{ fontSize: '13.5px', color: '#633b2c', fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontWeight: 400 }}>
            Precision Clinical Protocols
          </strong>
        </div>
      </div>

      {/* Main Center Editorial Content */}
      <div className="container" ref={ref} style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '1260px' }}>
        <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
          
          {/* Top Pill Badge */}
          <div style={{ 
            marginBottom: '28px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}>
            <span style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF', 
              borderRadius: '100px',
              padding: '8px 22px',
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '2px',
              color: '#633b2c',
              textTransform: 'uppercase',
              fontFamily: '"General Sans", sans-serif',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              boxShadow: '0 4px 14px rgba(99, 59, 44, 0.04)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px', flexShrink: 0 }}></span>
              PROFESSIONAL TRAINING FOR EVERY CAREER STAGE
            </span>
          </div>
          
          {/* Grand Headline with Embedded Icons */}
          <h2 style={{ 
            fontFamily: '"Hedvig Letters Serif", Georgia, serif',
            fontSize: 'clamp(1.55rem, 2.6vw, 2.3rem)', 
            lineHeight: 1.36, 
            color: '#4A3728',
            marginBottom: '32px',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
          }}>
            We combine scientific experience with advanced aesthetic <AestheticIcon /> education to build confident professionals in beauty therapy, laser technologies, and modern clinical <ClinicalIcon /> aesthetics.
          </h2>

          {/* 3 Creative Editorial Badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '38px',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.18s'
          }}>
            {[
              'Evidence-Based Skin Science',
              'Supervised Practical Workstations',
              'Benchmarked to CIBTAC & NCLC'
            ].map((badge, idx) => (
              <span 
                key={idx}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#FFFFFF',
                  padding: '7px 16px',
                  borderRadius: '100px',
                  border: '1px solid rgba(197, 160, 89, 0.28)',
                  fontSize: '12.5px',
                  color: '#633b2c',
                  fontWeight: 600,
                  fontFamily: '"General Sans", sans-serif',
                  boxShadow: '0 2px 8px rgba(99, 59, 44, 0.03)'
                }}
              >
                <span style={{ color: '#c5a059', fontSize: '10px' }}>✦</span>
                {badge}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            flexWrap: 'wrap',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.25s'
          }}>
            <Link href="/courses" className="btn-premium">
              <div className="btn-icon-wrapper">
                <img src="/logos/gold-logomark.png" alt="" />
              </div>
              Explore Curriculum &amp; Courses
            </Link>

            <Link 
              href="/about" 
              className="editorial-link"
              style={{ fontSize: '14px', fontWeight: 600 }}
            >
              Discover Our Story &amp; Standards <span>→</span>
            </Link>
          </div>

        </div>
      </div>
      
      {/* Decorative luxury hairline background details */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '4%',
        right: '4%',
        height: '1px',
        background: 'linear-gradient(90deg, rgba(220,205,185,0) 0%, rgba(197,160,89,0.38) 50%, rgba(220,205,185,0) 100%)'
      }} />

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 1200px) {
          .floating-img-left, 
          .floating-img-right {
            display: none !important;
          }
          .big-statement-section {
            padding: 100px 24px !important;
            min-height: auto !important;
          }
        }
      `}} />
    </section>
  );
}
