'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero({ content }: { content?: any }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const categories = [
    { label: "Aesthetic Training", img: "/academy-images/training-consultation.png" },
    { label: "Beauty Education", img: "/academy-images/practical-class-mannequin.png" },
    { label: "Laser Awareness", img: "/academy-images/academy-approach-session.png" },
    { label: "SPMU Training", img: "/academy-images/laser-device-training.png" },
    { label: "Practical Learning", img: "/academy-images/academy-lounge-classroom.png" },
    { label: "Career Guidance", img: "/academy-images/training-consultation.png" },
    { label: "Academy Tour", img: "/academy-images/practical-class-mannequin.png" },
    { label: "Skin Science", img: "/academy-images/laser-device-training.png" },
    { label: "Safety Training", img: "/academy-images/academy-approach-session.png" },
    { label: "Professional Growth", img: "/academy-images/student-support-admissions.png" },
    { label: "Beauty Therapy", img: "/academy-images/training-consultation.png" },
    { label: "Laser Therapy", img: "/academy-images/laser-device-training.png" },
    { label: "Device Training", img: "/academy-images/practical-class-mannequin.png" },
    { label: "Practical Class", img: "/academy-images/academy-lounge-classroom.png" },
    { label: "Skin Science", img: "/academy-images/student-support-admissions.png" }
  ];

  return (
    <section className="framer-1bf1z5p-wrapper" style={{
      backgroundColor: '#FAF8F5',
      padding: '120px 5% 0 5%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* INJECT RADIAL CAROUSEL MATH & GLASSMORPHIC STYLING */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes hero-bg-kenburns {
          from { transform: scale(1.08) translate3d(0, 10px, 0); }
          to { transform: scale(1) translate3d(0, 0, 0); }
        }
        @keyframes hero-rise-in {
          from {
            opacity: 0;
            transform: translate3d(0, 44px, 0) scale(0.975);
            filter: blur(12px);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes hero-orbit-pop {
          from {
            opacity: 0;
            transform: translateX(-50%) translate3d(0, 70px, 0) scale(0.88);
            filter: blur(12px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }
        .hero-main-card {
          width: 100%;
          max-width: 1820px;
          border-radius: 40px;
          position: relative;
          padding: 80px 24px 340px 24px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(99, 59, 44, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .hero-bg-parallax {
          position: absolute;
          top: -10%;
          left: 0;
          width: 100%;
          height: 120%;
          background-image: url('${content?.backgroundImage || "/academy-images/academy-approach-session.png"}');
          background-size: cover;
          background-position: center;
          z-index: 0;
          will-change: transform;
          pointer-events: none;
          animation: hero-bg-kenburns 1.55s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at center 26%, rgba(28, 16, 10, 0.72) 0%, rgba(49, 27, 17, 0.58) 36%, rgba(49, 27, 17, 0.34) 66%, rgba(49, 27, 17, 0.18) 100%),
            linear-gradient(to bottom, rgba(18, 12, 9, 0.86) 0%, rgba(49, 27, 17, 0.58) 46%, rgba(49, 27, 17, 0.30) 100%);
          z-index: 1;
        }
        .hero-content-top {
          position: relative;
          z-index: 10;
          max-width: 800px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          margin-top: 40px;
        }
        .hero-tagline,
        .hero-title,
        .hero-description,
        .hero-btn-container {
          opacity: 0;
          animation: hero-rise-in 0.95s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .hero-tagline { animation-delay: 0.25s; }
        .hero-title { animation-delay: 0.42s; }
        .hero-description { animation-delay: 0.58s; }
        .hero-btn-container { animation-delay: 0.76s; }
        .hero-tagline {
          font-size: 13px;
          font-weight: 600;
          color: var(--deep-gold) !important;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
          .hero-title {
          font-family: var(--font-heading), Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 4rem);
          color: #ffffff !important;
          line-height: 1.15;
          font-weight: 400;
          letter-spacing: -0.02em;
        }
        .hero-description {
          font-size: clamp(15px, 2.5vw, 17px);
          color: rgba(255, 253, 249, 0.9);
          line-height: 1.6;
          max-width: 620px;
          margin-bottom: 20px;
        }
        .hero-btn-container {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .hero-btn-primary {
          background-color: var(--deep-gold);
          color: var(--white);
          padding: 12px 24px;
          min-width: 160px;
          text-align: center;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          border: 1px solid var(--deep-gold);
        }
        .hero-btn-primary:hover {
          background-color: #a87848;
          color: var(--white);
          border-color: #a87848;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(152, 106, 62, 0.3);
        }
        .hero-btn-secondary {
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--white);
          padding: 12px 24px;
          min-width: 160px;
          text-align: center;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.5px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .hero-btn-secondary:hover {
          background-color: var(--white);
          color: var(--charcoal);
          transform: translateY(-2px);
        }
        .hero-carousel-wrapper {
          position: absolute;
          bottom: -270px;
          left: 50%;
          transform: translateX(-50%);
          width: 580px;
          height: 580px;
          z-index: 3;
          opacity: 0;
          animation: hero-orbit-pop 1.15s cubic-bezier(0.16, 1, 0.3, 1) 0.92s both;
        }
        .hero-carousel-spin {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          animation: spin 80s linear infinite;
        }
        .hero-orbit-item {
          position: absolute;
          height: 100%;
          width: 48px;
          left: calc(50% - 24px);
          top: 0;
          transform-origin: center center;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          pointer-events: none;
        }
         .hero-treatment-pill {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 9999px;
          padding: 5px 5px 14px 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          width: 46px;
          height: 180px;
          margin-top: 15px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: auto;
          cursor: default;
        }
        .hero-treatment-pill:hover {
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.4);
          transform: scale(1.08);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1);
        }
        .hero-pill-img {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          object-fit: cover;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .hero-pill-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          font-size: 13px;
          font-weight: 500;
          color: #ffffff;
          white-space: nowrap;
          letter-spacing: 0.3px;
        }
        .hero-center-curve-svg {
          position: absolute;
          bottom: -3px;
          left: 50%;
          transform: translateX(-50%);
          width: 310px;
          height: 90px;
          z-index: 4;
          fill: #FAF8F5;
          pointer-events: none;
        }
        .hero-center-badge {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 90px;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 15px;
          cursor: pointer;
          text-decoration: none;
          background: transparent;
          border-radius: 0;
          box-shadow: none;
          transition: all 0.3s ease;
        }
        .hero-center-badge:hover {
          transform: translateX(-50%) scale(1.02);
        }
        .hero-badge-logo-container {
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .hero-center-badge:hover .hero-badge-logo-container {
          transform: scale(1.1);
        }
        .hero-center-badge:hover .hero-badge-cta {
          color: var(--gold-dark);
        }
        /* Seamless single SVG path replaces absolute flanking shapes */
        .hero-badge-logo {
          width: 32px;
          height: 32px;
          object-fit: contain;
          animation: spin-slow 20s linear infinite;
        }
        .hero-badge-cta {
          font-size: 13px;
          font-weight: 500;
          color: var(--charcoal);
          letter-spacing: 0.2px;
          text-align: center;
        }

        /* Responsive spacing rules */
        @media (min-width: 1200px) {
          .hero-main-card {
            padding: 88px 40px 350px 40px;
          }
          .hero-carousel-wrapper {
            width: 700px;
            height: 700px;
            bottom: -330px;
          }
          .hero-orbit-item {
            width: 50px;
            left: calc(50% - 25px);
          }
          .hero-treatment-pill {
            width: 50px;
            height: 186px;
            padding: 5px 5px 14px 5px;
            margin-top: 25px;
            transform: none;
            transform-origin: center center;
            gap: 14px;
          }
          .hero-treatment-pill:hover {
            transform: scale(1.08) !important;
          }
          .hero-pill-img {
            width: 42px;
            height: 42px;
          }
          .hero-pill-text {
            font-size: 12.5px;
          }
          .hero-center-curve-svg {
            width: 380px;
            height: 110px;
            bottom: -3px !important;
          }
          .hero-center-badge {
            width: 220px;
            height: 110px;
            padding-top: 20px;
          }
          .hero-badge-logo-container {
            margin-bottom: 14px !important;
          }
          .hero-badge-logo {
            width: 38px;
            height: 38px;
          }
          .hero-badge-cta {
            font-size: 14px;
          }
        }
        @media (max-width: 640px) {
          .hero-btn-container {
            flex-direction: column;
            width: 100%;
            gap: 12px;
            padding: 0 20px;
          }
          .hero-btn-primary, .hero-btn-secondary {
            width: 100%;
            text-align: center;
            padding: 12px 20px;
            font-size: 13px;
          }
          .framer-1bf1z5p-wrapper {
            padding-top: 94px !important;
          }
          .hero-main-card {
            border-radius: 20px;
            padding: 60px 16px 260px 16px;
          }
          .hero-carousel-wrapper {
            width: 460px;
            height: 460px;
            bottom: -225px;
          }
          .hero-orbit-item {
            width: 40px;
            left: calc(50% - 20px);
          }
          .hero-treatment-pill {
            width: 36px;
            height: 140px;
            padding: 4px 4px 12px 4px;
            margin-top: 10px;
            transform: none;
            transform-origin: center center;
            gap: 10px;
          }
          .hero-treatment-pill:hover {
            transform: scale(1.08) !important;
          }
          .hero-pill-img {
            width: 30px;
            height: 30px;
          }
          .hero-pill-text {
            font-size: 9.5px;
          }
          .hero-center-curve-svg {
            width: 260px;
            height: 75px;
          }
          .hero-center-badge {
            width: 150px;
            height: 75px;
            padding-top: 10px;
          }
          /* Seamless mobile SVG centering scales path automatically */
          .hero-badge-logo {
            width: 28px;
            height: 28px;
            margin-bottom: 8px;
          }
          .hero-badge-cta {
            font-size: 11px;
          }
        }
      `}} />

      {/* CORE HERO WRAPPER CARD */}
      <div className="hero-main-card">
        {/* HARDWARE-ACCELERATED DYNAMIC PARALLAX BACKGROUND */}
        <div 
          className="hero-bg-parallax" 
          style={{
            transform: `translate3d(0, ${scrollY * 0.2}px, 0)`
          }}
        />
        <div className="hero-overlay" />

        {/* CENTERED HEADER CONTENT */}
        <div className="hero-content-top">
          <span className="hero-tagline">ABU DHABI · UAE · EST. 2026</span>
          <h1 className="hero-title">
            Build Your Future in Aesthetic Education
          </h1>
          <p className="hero-description" style={{ marginBottom: '36px' }}>
            Abu Dhabi’s premium training academy for beauty therapy, clinical aesthetics, and laser technologies, helping learners gain recognised skills, supervised practical experience, and the confidence to grow professionally.
          </p>

        </div>

        {/* RADIAL SPINNING TREATMENT PILLS CAROUSEL */}
        <div className="hero-carousel-wrapper">
          <div className="hero-carousel-spin">
            {categories.map((cat, idx) => {
              const angle = idx * 24; // 15 items placed at 24 degree increments
              return (
                <div 
                  key={idx} 
                  className="hero-orbit-item"
                  style={{ transform: `rotate(${angle}deg)` } as React.CSSProperties}
                >
                  <div className="hero-treatment-pill">
                    <img src={cat.img} alt={cat.label} className="hero-pill-img" />
                    <span className="hero-pill-text">{cat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SEAMLESS LUXURY ORGANIC DOME SVG */}
        <svg className="hero-center-curve-svg" viewBox="0 0 310 90" preserveAspectRatio="none">
          <path d="M 0 90 L 16 90 C 41 90, 53 78, 65 65 C 78 53, 98 0, 155 0 C 212 0, 232 53, 245 65 C 257 78, 269 90, 294 90 L 310 90 Z" />
        </svg>

        {/* INNER PREMIUM CENTER BUTTON */}
        <Link href="/courses" className="hero-center-badge">
          <div className="hero-badge-logo-container">
            <img src="/logos/gold-logomark.png" alt="NOVELLE" className="hero-badge-logo" />
          </div>
          <span className="hero-badge-cta">Explore our programmes</span>
        </Link>
      </div>
    </section>
  );
}
