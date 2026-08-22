import React from 'react';
import Link from 'next/link';

export default function FacultyPreview() {
  return (
    <section className="section-padding faculty-preview-section" style={{ background: '#FFFFFF', padding: '120px 24px' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
          <span className="scroll-reveal reveal-from-left" style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            background: '#FFFFFF', 
            padding: '8px 16px', 
            borderRadius: '100px',
            fontSize: '13px', 
            letterSpacing: '1px',
            fontWeight: 600,
            color: '#633b2c',
            textTransform: 'uppercase',
            fontFamily: '"General Sans", sans-serif',
            marginBottom: '24px',
            border: '1px solid rgba(197, 160, 89, 0.3)',
            boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
            Our Founders & Faculty
          </span>

          <h2 className="scroll-reveal reveal-from-right reveal-delay-1" style={{
            fontFamily: '"Hedvig Letters Serif", Georgia, serif',
            fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
            color: '#633b2c',
            fontWeight: 400,
            lineHeight: 1.2,
            marginBottom: '24px',
            marginTop: 0,
            letterSpacing: '-0.02em'
          }}>
            Learn With Experienced Educators
          </h2>
          
          <p className="scroll-reveal reveal-from-left reveal-delay-2" style={{
            fontFamily: '"General Sans", sans-serif',
            fontSize: '17px',
            color: '#8c776e',
            lineHeight: 1.7,
            fontWeight: '500',
            margin: 0
          }}>
            Guided by experienced aesthetic and clinical educators committed to raising the standard of professional beauty and laser education in the UAE.
          </p>
        </div>

        {/* Key Credentials Row */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '32px', 
          marginBottom: '64px' 
        }}>
          {/* Card 1 */}
          <div className="scroll-reveal reveal-from-left" style={{ 
            background: '#FAF6F0', 
            padding: '48px 40px', 
            borderRadius: '32px', 
            border: '1px solid rgba(197, 160, 89, 0.1)',
            textAlign: 'left',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '50%', 
              background: '#FFFFFF', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '24px',
              border: '1px solid rgba(197, 160, 89, 0.15)'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22L19 20V12C19 12 19 4 12 4C5 4 5 12 5 12V20L12 22Z" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ 
              fontFamily: '"General Sans", sans-serif',
              fontSize: '20px', 
              fontWeight: 600,
              color: '#633b2c', 
              marginBottom: '16px' 
            }}>
              Professionally Experienced
            </h3>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif',
              color: '#8c776e', 
              lineHeight: 1.6, 
              fontSize: '15px',
              margin: 0,
              fontWeight: 500
            }}>
              Our educators bring practical experience, safety awareness, and internationally inspired teaching to aesthetic education.
            </p>
          </div>

          {/* Card 2 */}
          <div className="scroll-reveal reveal-from-right reveal-delay-1" style={{ 
            background: '#FAF6F0', 
            padding: '48px 40px', 
            borderRadius: '32px', 
            border: '1px solid rgba(197, 160, 89, 0.1)',
            textAlign: 'left',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '50%', 
              background: '#FFFFFF', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '24px',
              border: '1px solid rgba(197, 160, 89, 0.15)'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ 
              fontFamily: '"General Sans", sans-serif',
              fontSize: '20px', 
              fontWeight: 600,
              color: '#633b2c', 
              marginBottom: '16px' 
            }}>
              Clinical Expertise
            </h3>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif',
              color: '#8c776e', 
              lineHeight: 1.6, 
              fontSize: '15px',
              margin: 0,
              fontWeight: 500
            }}>
              Educators with hands-on clinical backgrounds in laser technologies, aesthetics, and advanced skin science.
            </p>
          </div>

          {/* Card 3 */}
          <div className="scroll-reveal reveal-from-left reveal-delay-2" style={{ 
            background: '#FAF6F0', 
            padding: '48px 40px', 
            borderRadius: '32px', 
            border: '1px solid rgba(197, 160, 89, 0.1)',
            textAlign: 'left',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '50%', 
              background: '#FFFFFF', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              marginBottom: '24px',
              border: '1px solid rgba(197, 160, 89, 0.15)'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="#c5a059" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ 
              fontFamily: '"General Sans", sans-serif',
              fontSize: '20px', 
              fontWeight: 600,
              color: '#633b2c', 
              marginBottom: '16px' 
            }}>
              UAE-Focused Practice
            </h3>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif',
              color: '#8c776e', 
              lineHeight: 1.6, 
              fontSize: '15px',
              margin: 0,
              fontWeight: 500
            }}>
              All programmes are delivered in full compliance with UAE Department of Health standards and aesthetic regulations.
            </p>
          </div>
        </div>

        {/* Call to action button */}
        <div className="scroll-reveal reveal-from-right reveal-delay-3" style={{ textAlign: 'center' }}>
          <Link href="/about" className="btn-premium">
            <div className="btn-icon-wrapper">
              <img src="/logos/gold-logomark.png" alt="Icon" />
            </div>
            Learn More About Novelle
          </Link>
        </div>
        
      </div>
    </section>
  );
}
