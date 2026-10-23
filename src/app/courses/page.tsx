'use client';
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import BookConsultation from '@/components/BookConsultation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AccreditationTrust from '@/components/AccreditationTrust';
import { COURSE_CATALOGUE, Course } from '@/data/courses';

const WA_BASE_URL = 'https://wa.me/971502348625';

function useInView() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.06 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

const CATEGORIES = [
  'All Programmes',
  'Facial & Skin Aesthetics',
  'Body & Massage Therapy',
  'Foundations & Science',
  'Beauty, Nails & Grooming',
];

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

function CourseCard({ course, index }: { course: Course; index: number }) {
  const { ref, visible } = useInView();

  const isDohPending = course.status === 'Coming Soon (Pending DOH)';
  const isSpmu = course.id === 'semi-permanent-makeup';

  const ctaLabel = isDohPending 
    ? 'Register Your Interest' 
    : isSpmu 
    ? 'Enquire for Schedule' 
    : 'Enquire for Intake & Details';

  const waMessage = encodeURIComponent(
    `Hello Al Novelle, I would like to enquire about the ${course.title} programme.`
  );
  const waUrl = `${WA_BASE_URL}?text=${waMessage}`;

  return (
    <div
      id={course.id}
      ref={ref}
      className="course-catalogue-card"
      style={{
        background: '#FFFFFF',
        borderRadius: '24px',
        border: '1px solid rgba(197, 160, 89, 0.18)',
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(99, 59, 44, 0.04)',
        transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease, border-color 0.4s ease, opacity 0.5s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${index * 0.04}s`,
        scrollMarginTop: '140px'
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(-6px)';
        el.style.boxShadow = '0 20px 60px rgba(99, 59, 44, 0.1)';
        el.style.borderColor = 'rgba(197, 160, 89, 0.35)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = '0 4px 24px rgba(99, 59, 44, 0.04)';
        el.style.borderColor = 'rgba(197, 160, 89, 0.18)';
      }}
    >
      {/* Course Image */}
      <div style={{ height: '210px', overflow: 'hidden', position: 'relative', background: '#F5EFE6' }}>
        <img 
          src={course.image} 
          alt={course.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ 
            background: 'rgba(99, 59, 44, 0.88)', 
            backdropFilter: 'blur(8px)',
            color: '#FFFFFF', 
            fontSize: '11px', 
            fontWeight: 600, 
            letterSpacing: '0.06em', 
            textTransform: 'uppercase', 
            padding: '5px 12px', 
            borderRadius: '100px' 
          }}>
            {course.badge}
          </span>
          <span style={{ 
            background: 'rgba(255, 255, 255, 0.92)', 
            backdropFilter: 'blur(8px)',
            color: '#633b2c', 
            fontSize: '11px', 
            fontWeight: 700, 
            letterSpacing: '0.04em', 
            padding: '5px 12px', 
            borderRadius: '100px' 
          }}>
            {course.duration}
          </span>
        </div>

        {isDohPending && (
          <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px' }}>
            <span style={{ 
              display: 'block',
              textAlign: 'center',
              background: 'rgba(197, 160, 89, 0.95)', 
              color: '#FFFFFF', 
              fontSize: '10.5px', 
              fontWeight: 700, 
              letterSpacing: '0.06em',
              textTransform: 'uppercase', 
              padding: '4px 10px', 
              borderRadius: '6px' 
            }}>
              Coming Soon · DOH Approval Pending
            </span>
          </div>
        )}
      </div>

      <div style={{ padding: '28px 24px 20px', display: 'flex', flexDirection: 'column', textAlign: 'left', flexGrow: 1 }}>
        <div style={{ marginBottom: '8px' }}>
          <span style={{ fontSize: '13px', color: '#c5a059', fontFamily: '"General Sans", sans-serif', fontWeight: 600, display: 'block', direction: 'rtl', textAlign: 'left' }}>
            {course.arabicTitle}
          </span>
          <h3 style={{
            fontFamily: '"Hedvig Letters Serif", Georgia, serif',
            fontSize: '20px',
            color: '#633b2c',
            fontWeight: 400,
            lineHeight: 1.3,
            margin: '4px 0 10px 0',
            letterSpacing: '-0.01em',
          }}>
            {course.title}
          </h3>
        </div>

        <p style={{
          fontFamily: '"General Sans", sans-serif',
          fontSize: '14px',
          color: '#8c776e',
          lineHeight: 1.6,
          margin: '0 0 16px 0',
          flexGrow: 1,
        }}>
          {course.description}
        </p>

        {/* Trainer & Eligibility metadata */}
        <div style={{ borderTop: '1px solid rgba(197, 160, 89, 0.15)', paddingTop: '14px', marginTop: 'auto', marginBottom: '18px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px', color: '#7A6B63', fontFamily: '"General Sans", sans-serif' }}>
          {course.trainer && (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Faculty:</span>
              <strong style={{ color: '#633b2c' }}>{course.trainer}</strong>
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Target:</span>
            <span style={{ color: '#8c776e' }}>{course.audience}</span>
          </div>
        </div>

        {/* Action Button: Brown button with Green WhatsApp Icon */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            background: '#845E35',
            color: '#FFFFFF',
            padding: '12px 20px',
            borderRadius: '100px',
            fontSize: '13px',
            fontWeight: 600,
            textDecoration: 'none',
            fontFamily: '"General Sans", sans-serif',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 14px rgba(132, 94, 53, 0.2)',
            textAlign: 'center'
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.background = '#6E4D2B';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.background = '#845E35';
            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span>{ctaLabel}</span>
        </a>
      </div>
    </div>
  );
}

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('All Programmes');

  // Handle direct hash navigation from hero pills (e.g. /courses#facial-skin-care-treatments)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      const found = COURSE_CATALOGUE.find(c => c.id === hash);
      if (found) {
        setActiveCategory('All Programmes');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 250);
      }
    }
  }, []);

  const filteredCourses = activeCategory === 'All Programmes'
    ? COURSE_CATALOGUE
    : COURSE_CATALOGUE.filter(c => c.category === activeCategory);

  return (
    <main style={{ background: '#FAF6F0' }}>
      <Navigation />

      {/* ── HERO — Left Aligned, Faded Interior Background, Unified 1260px ─────── */}
      <section style={{ 
        position: 'relative',
        paddingTop: '140px', 
        paddingBottom: '60px', 
        background: 'linear-gradient(180deg, rgba(250, 248, 245, 0.88) 0%, rgba(250, 248, 245, 0.98) 100%), url("/academy-images/al-novelle-training-centre-interior.png") center/cover no-repeat', 
        borderBottom: '1px solid rgba(197, 160, 89, 0.2)' 
      }}>
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '780px', textAlign: 'left' }}>
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
              COURSE CATALOGUE · ABU DHABI
            </span>

            <h1 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(1.9rem, 3.1vw, 2.65rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em'
            }}>
              Aesthetic &amp; Beauty Training Programmes
            </h1>

            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '15.5px',
              color: '#8c776e',
              lineHeight: 1.65,
              margin: 0,
              fontWeight: 500
            }}>
              Explore Al Novelle&apos;s structured training catalogue in skin aesthetics, facial technologies, body treatments, and clinical safety in Abu Dhabi.
            </p>
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER TABS ─────────────── */}
      <section style={{ padding: '40px 24px 32px 24px' }}>
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
          {/* Desktop Filter Pills */}
          <div className="courses-desktop-pills" style={{ 
            display: 'flex', 
            gap: '10px', 
            justifyContent: 'center', 
            flexWrap: 'wrap' 
          }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? '#633b2c' : '#FFFFFF',
                  color: activeCategory === cat ? '#FFFFFF' : '#633b2c',
                  border: activeCategory === cat ? '1px solid #633b2c' : '1px solid rgba(197, 160, 89, 0.25)',
                  padding: '10px 22px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontFamily: '"General Sans", sans-serif',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeCategory === cat ? '0 4px 14px rgba(99, 59, 44, 0.15)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile Category Dropdown */}
          <div className="courses-mobile-select" style={{ display: 'none' }}>
            <div style={{ position: 'relative', width: '100%' }}>
              <select
                value={activeCategory}
                onChange={e => setActiveCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  borderRadius: '100px',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  background: '#FFFFFF',
                  fontSize: '14px',
                  color: '#633b2c',
                  fontFamily: '"General Sans", sans-serif',
                  fontWeight: 600,
                  appearance: 'none',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <div style={{ 
                position: 'absolute', right: '16px', top: '50%', 
                transform: 'translateY(-50%)', 
                pointerEvents: 'none', color: '#633b2c', fontSize: '10px' 
              }}>▼</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSES GRID ─────────────────────── */}
      <section style={{ background: '#FAF6F0', padding: '0 24px 100px 24px' }}>
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '28px' 
          }}>
            {filteredCourses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Book Your Visit Today — Embedded Interactive Booking Form & Campus Photo */}
      <BookConsultation />

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        :target {
          scroll-margin-top: 140px;
          border-color: #c5a059 !important;
          box-shadow: 0 0 0 3px rgba(197, 160, 89, 0.4), 0 20px 60px rgba(99, 59, 44, 0.15) !important;
          animation: target-pulse 1.8s ease;
        }
        @keyframes target-pulse {
          0% { transform: scale(1); }
          25% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        @media (max-width: 768px) {
          .courses-desktop-pills {
            display: none !important;
          }
          .courses-mobile-select {
            display: block !important;
          }
        }
      `}} />
    </main>
  );
}
