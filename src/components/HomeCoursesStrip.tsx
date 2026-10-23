'use client';
import React from 'react';
import Link from 'next/link';
import { COURSE_CATALOGUE } from '@/data/courses';

const WA_BASE_URL = 'https://wa.me/971502348625';

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function HomeCoursesStrip() {
  const featured = [
    {
      course: COURSE_CATALOGUE.find(c => c.id === 'beauty-therapy')!,
      badge: 'DIPLOMA FLAGSHIP',
      highlights: ['Face, Body & Massage', 'CIBTAC Examination Prep', 'Supervised Practical']
    },
    {
      course: COURSE_CATALOGUE.find(c => c.id === 'facial-skin-care-treatments')!,
      badge: 'CLINICAL CORE',
      highlights: ['Anatomy & Skin Analysis', 'Extraction & Massage Protocol', 'Clinical Hygiene']
    },
    {
      course: COURSE_CATALOGUE.find(c => c.id === 'electrical-facial-treatments')!,
      badge: 'DEVICE & ELECTROTHERAPY',
      highlights: ['Galvanic, Microcurrent & High Frequency', 'Contraindication Management', 'Equipped Suites']
    },
  ].filter(item => Boolean(item.course));

  return (
    <section 
      style={{ 
        background: '#FAF8F5', 
        padding: '100px 24px', 
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="featured-programmes"
    >
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header - Left Aligned */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          flexWrap: 'wrap', 
          gap: '24px',
          marginBottom: '48px',
          textAlign: 'left'
        }}>
          <div style={{ maxWidth: '780px' }}>
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
              CURRICULUM HIGHLIGHTS
            </span>

            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: '0 0 12px 0',
              letterSpacing: '-0.02em'
            }}>
              Featured Training Programmes
            </h2>

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '15.5px', 
              color: '#8c776e', 
              lineHeight: 1.65, 
              margin: 0,
              fontWeight: 500 
            }}>
              Supervised clinical training, foundational skin science, and accredited qualifications taught in our Abu Dhabi academy.
            </p>
          </div>

          <div>
            <Link 
              href="/courses" 
              className="btn-premium"
              style={{ display: 'inline-flex' }}
            >
              <div className="btn-icon-wrapper">
                <img src="/logos/gold-logomark.png" alt="" />
              </div>
              View All 17 Courses
            </Link>
          </div>
        </div>

        {/* Exactly 3 Cards in a Sleek Strip */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '28px' 
        }}>
          {featured.map(({ course, badge, highlights }, idx) => (
            <div 
              key={course.id}
              style={{
                background: '#FFFFFF',
                borderRadius: '26px',
                overflow: 'hidden',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                boxShadow: '0 10px 32px rgba(99, 59, 44, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
                textAlign: 'left'
              }}
              className="course-strip-card"
            >
              {/* Image with Tag Overlay */}
              <div style={{ position: 'relative', height: '210px', background: '#F5EFE6', overflow: 'hidden' }}>
                <img 
                  src={course.image} 
                  alt={course.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(29, 19, 12, 0.6) 0%, transparent 60%)'
                }} />
                
                {/* Category Pill */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  padding: '5px 12px',
                  borderRadius: '100px',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}>
                  <span style={{ 
                    fontSize: '10px', 
                    fontFamily: '"General Sans", sans-serif', 
                    letterSpacing: '1px', 
                    textTransform: 'uppercase', 
                    color: '#986A3E', 
                    fontWeight: 700 
                  }}>
                    {badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '26px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ 
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                  fontSize: '20px', 
                  color: '#633b2c', 
                  fontWeight: 400,
                  lineHeight: 1.3,
                  margin: '0 0 10px 0'
                }}>
                  {course.title}
                </h3>

                <p style={{ 
                  fontFamily: '"General Sans", sans-serif', 
                  fontSize: '14px', 
                  color: '#8c776e', 
                  lineHeight: 1.6, 
                  margin: '0 0 18px 0',
                  flexGrow: 1
                }}>
                  {course.description}
                </p>

                {/* Micro Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '22px' }}>
                  {highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#986A3E', fontSize: '11px', fontWeight: 700 }}>✓</span>
                      <span style={{ fontSize: '12.5px', color: '#633b2c', fontFamily: '"General Sans", sans-serif', fontWeight: 500 }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Card Actions */}
                <div style={{ 
                  borderTop: '1px solid rgba(197, 160, 89, 0.2)', 
                  paddingTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}>
                  <Link 
                    href={`/courses#${course.id}`}
                    style={{
                      fontFamily: '"General Sans", sans-serif',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#633b2c',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    Details <span>→</span>
                  </Link>

                  <a
                    href={`${WA_BASE_URL}?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20enquire%20about%20the%20${encodeURIComponent(course.title)}%20course.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '7px',
                      background: '#845E35',
                      color: '#FFFFFF',
                      padding: '8px 16px',
                      borderRadius: '100px',
                      fontSize: '12px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontFamily: '"General Sans", sans-serif',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 10px rgba(132, 94, 53, 0.18)'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#6E4D2B')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#845E35')}
                  >
                    <WhatsAppIcon />
                    <span>Enquire</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .course-strip-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 45px rgba(99, 59, 44, 0.08) !important;
          border-color: rgba(197, 160, 89, 0.5) !important;
        }
      `}} />
    </section>
  );
}
