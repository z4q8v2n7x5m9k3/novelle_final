'use client';
import React, { useEffect, useRef, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// WhatsApp enquiry URL
const WA_COURSES_URL = 'https://wa.me/971502348625?text=Hello%20Novelle%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.';

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

/* ─── Category-based placeholder courses ───────────────── */
/* NOTE: Final course list to be provided by client. These are safe placeholder cards. */

const CATEGORIES = [
  'All Programmes',
  'Aesthetic Training',
  'Beauty Therapy',
  'Laser & Device Training',
  'Semi-Permanent Makeup',
  'Skin & Facial Treatments',
  'Professional Workshops',
];

const placeholderCourses = [
  {
    title: 'Semi-Permanent Makeup Training',
    category: 'Semi-Permanent Makeup',
    badge: 'SPMU',
    type: 'Practical Training',
    desc: 'Course details will be updated soon. Please contact admissions for current availability, schedule, and enrolment guidance.',
  },
  {
    title: 'Laser & Aesthetic Device Training',
    category: 'Laser & Device Training',
    badge: 'Laser',
    type: 'Practical Learning',
    desc: 'Course details will be updated soon. Please contact admissions for current availability, schedule, and enrolment guidance.',
  },
  {
    title: 'Beauty Therapy Training',
    category: 'Beauty Therapy',
    badge: 'Beauty',
    type: 'Structured Programme',
    desc: 'Course details will be updated soon. Please contact admissions for current availability, schedule, and enrolment guidance.',
  },
  {
    title: 'Skin & Facial Treatment Training',
    category: 'Skin & Facial Treatments',
    badge: 'Skin',
    type: 'Practical Learning',
    desc: 'Course details will be updated soon. Please contact admissions for current availability, schedule, and enrolment guidance.',
  },
  {
    title: 'Professional Aesthetic Workshops',
    category: 'Professional Workshops',
    badge: 'Workshop',
    type: 'Professional Growth',
    desc: 'Course details will be updated soon. Please contact admissions for current availability, schedule, and enrolment guidance.',
  },
  {
    title: 'Aesthetic Training Programme',
    category: 'Aesthetic Training',
    badge: 'Aesthetics',
    type: 'Structured Programme',
    desc: 'Course details will be updated soon. Please contact admissions for current availability, schedule, and enrolment guidance.',
  },
];

/* ─── Course Card Component ──────────────────────────── */
function CourseCard({ course, index }: { course: typeof placeholderCourses[0]; index: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      style={{
        background: '#FFFFFF',
        borderRadius: '24px',
        border: '1px solid rgba(197, 160, 89, 0.15)',
        display: 'flex', flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(99, 59, 44, 0.03)',
        transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease, border-color 0.4s ease, opacity 0.5s ease',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${index * 0.06}s`,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(-6px)';
        el.style.boxShadow = '0 20px 60px rgba(99, 59, 44, 0.1)';
        el.style.borderColor = 'rgba(197, 160, 89, 0.3)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = '0 4px 24px rgba(99, 59, 44, 0.04)';
        el.style.borderColor = 'rgba(197, 160, 89, 0.15)';
      }}
    >
      <div style={{ padding: '32px 28px 20px', display: 'flex', flexDirection: 'column', textAlign: 'left', flexGrow: 1 }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' as const, marginBottom: '16px' }}>
          <span style={{ background: '#986A3E', color: '#FFFFFF', fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const, padding: '5px 12px', borderRadius: '100px' }}>
            {course.badge}
          </span>
          <span style={{ background: '#FFFFFF', border: '1px solid rgba(152,106,62,0.3)', color: '#633b2c', fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' as const, padding: '5px 12px', borderRadius: '100px' }}>
            {course.type}
          </span>
        </div>
        
        <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontWeight: 400, fontSize: '22px', lineHeight: 1.25, color: '#633b2c', marginBottom: '12px', marginTop: 0 }}>
          {course.title}
        </h3>
        <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#8c776e', margin: '0 0 20px 0', fontWeight: 500 }}>
          {course.desc}
        </p>
      </div>

      <div style={{ padding: '0 28px 28px' }}>
        <a
          href={WA_COURSES_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            width: '100%',
            background: '#25D366',
            color: '#FFFFFF',
            padding: '12px 24px',
            borderRadius: '100px',
            fontSize: '13px',
            fontWeight: 600,
            textDecoration: 'none',
            fontFamily: '"General Sans", sans-serif',
            transition: 'background 0.3s ease',
            boxSizing: 'border-box' as const
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#1da851'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#25D366'; }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}

/* ─── Courses Page ────────────────────────────────────── */
export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Programmes');

  const filteredCourses = selectedCategory === 'All Programmes'
    ? placeholderCourses
    : placeholderCourses.filter(c => c.category === selectedCategory);

  return (
    <main style={{ background: '#FAF6F0' }}>
      <Navigation />

      {/* ── HERO ─────────────────────────────── */}
      <section style={{ paddingTop: '160px', paddingBottom: '60px', textAlign: 'center', background: '#FAF6F0', padding: '160px 24px 60px 24px' }}>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            background: '#FFFFFF', 
            padding: '8px 16px', 
            borderRadius: '100px',
            fontSize: '11px', 
            letterSpacing: '2px',
            fontWeight: 600,
            color: '#633b2c',
            textTransform: 'uppercase' as const,
            fontFamily: '"General Sans", sans-serif',
            marginBottom: '24px',
            border: '1px solid rgba(197, 160, 89, 0.3)',
            boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
            OUR PROGRAMMES
          </span>
          <h1 style={{ 
            fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
            fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', 
            color: '#633b2c',
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: '20px',
            letterSpacing: '-0.02em'
          }}>
            Aesthetic Training Courses
          </h1>
          <p style={{ 
            fontFamily: '"General Sans", sans-serif',
            fontSize: 'clamp(15px, 2vw, 17px)', 
            color: '#8c776e', 
            lineHeight: 1.6,
            maxWidth: '700px',
            margin: '0 auto',
            fontWeight: 500
          }}>
            Novelle offers structured, practical aesthetic and beauty training programmes in Abu Dhabi. Our updated course list will be published soon — contact admissions for current availability and programme guidance.
          </p>
        </div>
      </section>

      {/* ── FILTER DROPDOWN ──────────────────── */}
      <section style={{ background: '#FAF6F0', padding: '0 24px 60px 24px' }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' as const }}>
            <label style={{ 
              fontFamily: '"General Sans", sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              color: '#633b2c'
            }}>
              Choose a Programme Category:
            </label>
            <div style={{ position: 'relative' }}>
              <select
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                style={{
                  padding: '12px 44px 12px 20px',
                  borderRadius: '100px',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  background: '#FFFFFF',
                  fontSize: '14px',
                  color: '#633b2c',
                  fontFamily: '"General Sans", sans-serif',
                  fontWeight: 600,
                  cursor: 'pointer',
                  outline: 'none',
                  appearance: 'none',
                  boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
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
      {/* NOTE: Placeholder courses shown. Final course list will be provided by client. */}
      <section style={{ background: '#FAF6F0', padding: '0 24px 100px 24px' }}>
        <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>

          {filteredCourses.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#8c776e', fontFamily: '"General Sans", sans-serif' }}>
              <p style={{ fontSize: '18px', marginBottom: '16px' }}>No programmes found in this category yet.</p>
              <a href={WA_COURSES_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#986A3E', fontWeight: 600, textDecoration: 'none' }}>
                Enquire on WhatsApp for availability →
              </a>
            </div>
          ) : (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
              gap: '28px' 
            }}>
              {filteredCourses.map((course, i) => (
                <CourseCard key={course.title} course={course} index={i} />
              ))}
            </div>
          )}

          {/* WhatsApp CTA below grid */}
          <div style={{ textAlign: 'center', marginTop: '64px', padding: '48px', background: '#FFFFFF', borderRadius: '32px', border: '1px solid rgba(197, 160, 89, 0.15)' }}>
            <p style={{ 
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
              color: '#633b2c',
              fontWeight: 400,
              margin: '0 0 12px 0'
            }}>
              Looking for a specific programme?
            </p>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif',
              fontSize: '15px',
              color: '#8c776e',
              margin: '0 0 28px 0',
              lineHeight: 1.6
            }}>
              Our full course list is being updated. Contact our admissions team for programme details, schedules, and enrolment guidance.
            </p>
            <a
              href={WA_COURSES_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#25D366',
                color: '#FFFFFF',
                padding: '14px 36px',
                borderRadius: '100px',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: '"General Sans", sans-serif',
                boxShadow: '0 4px 16px rgba(37, 211, 102, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 640px) {
          .admissions-steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </main>
  );
}
