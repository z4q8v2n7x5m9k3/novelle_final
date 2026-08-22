import React from 'react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section style={{ 
      position: 'relative', 
      backgroundImage: 'url("https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '160px 24px',
      color: 'var(--white)',
      overflow: 'hidden'
    }}>
      {/* Premium Dark Bronze Glassmorphic Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, rgba(30, 21, 18, 0.85) 0%, rgba(15, 11, 9, 0.9) 100%)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        zIndex: 1
      }}></div>

      {/* Content Container */}
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 2, 
        textAlign: 'center', 
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          fontFamily: '"Hedvig Letters Serif", Georgia, serif',
          fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
          color: '#FFFFFF', 
          fontWeight: 400,
          lineHeight: 1.15,
          marginBottom: '24px',
          marginTop: 0,
          letterSpacing: '-0.02em'
        }}>
          Begin Your Journey With Novelle
        </h2>
        
        <p style={{ 
          fontFamily: '"General Sans", sans-serif',
          fontSize: 'clamp(15px, 2vw, 17px)', 
          color: 'rgba(255, 255, 255, 0.85)', 
          fontWeight: 500,
          lineHeight: 1.6,
          marginBottom: '48px', 
          maxWidth: '680px',
          margin: '0 auto 48px auto'
        }}>
          Train with a premium Abu Dhabi academy built for scientific excellence, aesthetic artistry, international recognition, and professional growth.
        </p>
        
        {/* Buttons */}
        <div style={{ display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-premium">
            <div className="btn-icon-wrapper">
              <img src="/logos/gold-logomark.png" alt="Icon" />
            </div>
            Apply Today
          </Link>
          
          <Link href="/courses" style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 36px',
            background: '#8C6A48',
            color: '#FFFFFF',
            fontSize: '16px',
            fontWeight: 500,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            borderRadius: '100px',
            textDecoration: 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(140, 106, 72, 0.25)'
          }}>
            Certified Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
