'use client';
import React from 'react';
import Link from 'next/link';
import { COURSE_CATALOGUE } from '@/data/courses';

export default function HomeCoursesStrip() {
  // Exactly 3 flagship approved courses in a clean compact strip
  const featured = [
    COURSE_CATALOGUE.find(c => c.id === 'beauty-therapy')!,
    COURSE_CATALOGUE.find(c => c.id === 'facial-skin-care-treatments')!,
    COURSE_CATALOGUE.find(c => c.id === 'electrical-facial-treatments')!,
  ].filter(Boolean);

  return (
    <section 
      style={{ 
        background: '#FAF6F0', 
        padding: '96px 24px 104px 24px', 
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="featured-programmes"
    >
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end', 
          flexWrap: 'wrap', 
          gap: '24px',
          marginBottom: '48px' 
        }}>
          <div style={{ maxWidth: '640px' }}>
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
              marginBottom: '14px',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              CURRICULUM HIGHLIGHTS
            </span>

            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2.1rem, 3.6vw, 3rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: '0 0 10px 0',
              letterSpacing: '-0.02em'
            }}>
              Featured Training Programmes
            </h2>

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '15px', 
              color: '#8c776e', 
              lineHeight: 1.6, 
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
          gap: '28px', 
          marginBottom: '40px' 
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
                <div style={{ height: '210px', overflow: 'hidden', position: 'relative', background: '#F5EFE6' }}>
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
                      Faculty: <strong style={{ color: '#633b2c' }}>{course.trainer || 'Senior Faculty'}</strong>
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
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
