'use client';
import React from 'react';
import Link from 'next/link';
import { COURSE_CATALOGUE } from '@/data/courses';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20enquire%20about%20your%20training%20programmes.';

export default function HomeCoursesStrip() {
  // Top 4 flagship courses representing our diverse curriculum
  const featured = [
    COURSE_CATALOGUE.find(c => c.id === 'beauty-therapy')!,
    COURSE_CATALOGUE.find(c => c.id === 'facial-skin-care-treatments')!,
    COURSE_CATALOGUE.find(c => c.id === 'electrical-facial-treatments')!,
    COURSE_CATALOGUE.find(c => c.id === 'dermaplaning')!,
  ].filter(Boolean);

  return (
    <section 
      style={{ 
        background: '#FAF6F0', 
        padding: '110px 24px 120px 24px', 
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="featured-programmes"
    >
      <div className="container" style={{ maxWidth: '1360px', margin: '0 auto' }}>
        
        {/* Header Row */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          flexWrap: 'wrap', 
          gap: '24px',
          marginBottom: '56px' 
        }}>
          <div style={{ maxWidth: '680px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF',
              padding: '8px 16px',
              borderRadius: '100px',
              fontSize: '11px',
              letterSpacing: '2px',
              fontWeight: 700,
              color: '#633b2c',
              textTransform: 'uppercase',
              fontFamily: '"General Sans", sans-serif',
              marginBottom: '16px',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              POPULAR CURRICULUM
            </span>

            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
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

        {/* 4 Cards Strip Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px', 
          marginBottom: '56px' 
        }}>
          {featured.map((course) => (
            <Link 
              key={course.id} 
              href={`/courses#${course.id}`}
              style={{ textDecoration: 'none', display: 'flex' }}
            >
              <div 
                className="featured-course-card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1px solid rgba(197, 160, 89, 0.22)',
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(99, 59, 44, 0.04)',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease'
                }}
              >
                {/* Course Image */}
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative', background: '#F5EFE6' }}>
                  <img 
                    src={course.image} 
                    alt={course.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                    className="featured-course-img"
                  />
                  <div style={{ position: 'absolute', top: '14px', left: '14px', display: 'flex', gap: '8px' }}>
                    <span style={{ 
                      background: 'rgba(99, 59, 44, 0.9)', 
                      backdropFilter: 'blur(8px)',
                      color: '#FFFFFF', 
                      fontSize: '10.5px', 
                      fontWeight: 700, 
                      letterSpacing: '0.04em', 
                      textTransform: 'uppercase', 
                      padding: '4px 10px', 
                      borderRadius: '100px' 
                    }}>
                      {course.badge}
                    </span>
                    <span style={{ 
                      background: 'rgba(255, 255, 255, 0.95)', 
                      backdropFilter: 'blur(8px)',
                      color: '#633b2c', 
                      fontSize: '10.5px', 
                      fontWeight: 700, 
                      letterSpacing: '0.04em', 
                      padding: '4px 10px', 
                      borderRadius: '100px' 
                    }}>
                      {course.duration}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{
                    fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                    fontSize: '19px',
                    color: '#633b2c',
                    fontWeight: 400,
                    lineHeight: 1.3,
                    margin: '0 0 10px 0',
                    letterSpacing: '-0.01em'
                  }}>
                    {course.title}
                  </h3>

                  <p style={{
                    fontFamily: '"General Sans", sans-serif',
                    fontSize: '13.5px',
                    color: '#8c776e',
                    lineHeight: 1.6,
                    margin: '0 0 18px 0',
                    flexGrow: 1
                  }}>
                    {course.description}
                  </p>

                  <div style={{
                    borderTop: '1px solid rgba(197, 160, 89, 0.15)',
                    paddingTop: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 'auto'
                  }}>
                    <span style={{ fontSize: '12px', color: '#7A6B63', fontFamily: '"General Sans", sans-serif' }}>
                      Trainer: <strong style={{ color: '#633b2c' }}>{course.trainer || 'Senior Faculty'}</strong>
                    </span>
                    <span style={{ 
                      color: '#986A3E', 
                      fontWeight: 600, 
                      fontSize: '13px', 
                      fontFamily: '"General Sans", sans-serif',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      View Course →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner with Dual Action */}
        <div style={{ 
          background: '#FFFFFF', 
          borderRadius: '24px', 
          border: '1px solid rgba(197, 160, 89, 0.25)', 
          padding: '32px 40px',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          boxShadow: '0 6px 24px rgba(99, 59, 44, 0.03)'
        }}>
          <div>
            <h4 style={{ 
              fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
              fontSize: '19px', 
              color: '#633b2c', 
              fontWeight: 400, 
              margin: '0 0 4px 0' 
            }}>
              Want to see our full catalogue of 17 courses?
            </h4>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '14px', 
              color: '#8c776e', 
              margin: 0 
            }}>
              From foundational skincare and massage therapy to specialized electrotherapy and dermaplaning.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link 
              href="/courses" 
              style={{
                background: '#845E35',
                color: '#FFFFFF',
                padding: '12px 28px',
                borderRadius: '100px',
                fontSize: '13.5px',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: '"General Sans", sans-serif',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#6E4D2B')}
              onMouseLeave={e => (e.currentTarget.style.background = '#845E35')}
            >
              Explore All 17 Courses →
            </Link>
            <a 
              href={WA_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#25D366',
                fontWeight: 600,
                fontSize: '13.5px',
                textDecoration: 'none',
                fontFamily: '"General Sans", sans-serif',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              Chat with Admissions on WhatsApp
            </a>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .featured-course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(99, 59, 44, 0.1) !important;
          border-color: rgba(197, 160, 89, 0.4) !important;
        }
        .featured-course-card:hover .featured-course-img {
          transform: scale(1.05);
        }
      `}} />
    </section>
  );
}
