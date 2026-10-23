import React from 'react';
import Link from 'next/link';

export default function FoundersSection() {
  return (
    <section style={{ background: '#FAF6F0', padding: '100px 24px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
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
            textTransform: 'uppercase',
            fontFamily: '"General Sans", sans-serif',
            marginBottom: '20px',
            border: '1px solid rgba(197, 160, 89, 0.3)',
            boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
            MEET OUR FOUNDERS
          </span>
          <h2 style={{
            fontFamily: '"Hedvig Letters Serif", Georgia, serif',
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: '#633b2c',
            fontWeight: 400,
            lineHeight: 1.2,
            margin: '0 0 16px 0',
            letterSpacing: '-0.02em'
          }}>
            Clinical Leadership Behind Al Novelle
          </h2>
          <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '16px', color: '#8c776e', lineHeight: 1.7, maxWidth: '720px', margin: '0 auto', fontWeight: 500 }}>
            Founded by Dr. Azaiba Salim Kara and Dr. Seeta Yadav — two experienced aesthetic practitioners and educators committed to raising training quality and clinical standards in the UAE.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', marginBottom: '52px' }}>
          {/* Founder 1: Dr. Azaiba Salim Kara */}
          <div style={{ background: '#FFFFFF', borderRadius: '28px', padding: '40px 36px', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: '0 8px 30px rgba(74, 55, 40, 0.03)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
              <div style={{ width: '74px', height: '74px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(197, 160, 89, 0.3)', flexShrink: 0, background: '#F5EFE6' }}>
                <img 
                  src="/about/professional-learning-session.jpeg" 
                  alt="Dr. Azaiba Salim Kara" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div>
                <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '22px', color: '#633b2c', fontWeight: 400, margin: '0 0 4px 0' }}>
                  Dr. Azaiba Salim Kara
                </h3>
                <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '13px', color: '#c5a059', fontWeight: 600, margin: 0 }}>
                  Founder &amp; Aesthetic Specialist
                </p>
              </div>
            </div>

            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14.5px', color: '#8c776e', lineHeight: 1.65, margin: '0 0 16px 0', flexGrow: 1 }}>
              Aesthetic practitioner, laser specialist, clinical trainer and educator with over a decade of experience in medical aesthetics and laser technology. Holding an NCLC qualification from the US, she focuses on uniting scientific knowledge with practical clinical skill.
            </p>

            <Link href="/about#azaiba" style={{ color: '#986A3E', fontWeight: 600, fontSize: '13.5px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Read full biography <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>

          {/* Founder 2: Dr. Seeta Yadav */}
          <div style={{ background: '#FFFFFF', borderRadius: '28px', padding: '40px 36px', border: '1px solid rgba(197, 160, 89, 0.2)', boxShadow: '0 8px 30px rgba(74, 55, 40, 0.03)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
              <div style={{ width: '74px', height: '74px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(197, 160, 89, 0.3)', flexShrink: 0, background: '#F5EFE6' }}>
                <img 
                  src="/founders/dr-seeta-yadav.jpeg" 
                  alt="Dr. Seeta Yadav" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <div>
                <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '22px', color: '#633b2c', fontWeight: 400, margin: '0 0 4px 0' }}>
                  Dr. Seeta Yadav
                </h3>
                <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '13px', color: '#c5a059', fontWeight: 600, margin: 0 }}>
                  Founder &amp; Academic Director
                </p>
              </div>
            </div>

            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14.5px', color: '#8c776e', lineHeight: 1.65, margin: '0 0 16px 0', flexGrow: 1 }}>
              Medical and clinical educator holding a BAMS degree, EMS postgraduate training, and CIBTAC qualification. A former regional GCC laser trainer, her vision is to deliver science-based aesthetic education that builds confident, safety-conscious practitioners.
            </p>

            <Link href="/about#seeta" style={{ color: '#986A3E', fontWeight: 600, fontSize: '13.5px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              Read full biography <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/about" className="btn-premium" style={{ display: 'inline-flex' }}>
            <div className="btn-icon-wrapper">
              <img src="/logos/gold-logomark.png" alt="" />
            </div>
            Learn More About Our Academy &amp; Vision
          </Link>
        </div>
      </div>
    </section>
  );
}
