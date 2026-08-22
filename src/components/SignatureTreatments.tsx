import React from 'react';
import Link from 'next/link';

export default function SignatureTreatments() {
  return (
    <section className="treatments-section section-padding" id="treatments" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div className="split-grid">
          <div className="split-content">
            <span className="badge">Safety-Led Care</span>
            <h2 className="title-section">Refined Aesthetic Treatments</h2>
            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.6 }}>
              For clients, Novelle offers consultation-led aesthetic care designed to support radiant, refined, and natural-looking results through careful assessment and professional standards.
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '48px' }}>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--deep-gold)' }}></div>
                <span style={{ fontSize: '18px', fontWeight: 500 }}>Laser and skin rejuvenation consultations.</span>
              </li>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--deep-gold)' }}></div>
                <span style={{ fontSize: '18px', fontWeight: 500 }}>Advanced skincare and resurfacing guidance.</span>
              </li>
              <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--deep-gold)' }}></div>
                <span style={{ fontSize: '18px', fontWeight: 500 }}>Pigmentation, texture and glow-focused plans.</span>
              </li>
            </ul>
            
            <Link href="#book" className="btn-premium">
              <div className="btn-icon-wrapper">
                <img src="/logos/gold-logomark.png" alt="Icon" />
              </div>
              Book Consultation
            </Link>
          </div>
          
          <div className="split-image">
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200" 
              alt="Aesthetic Treatment Consultation" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
