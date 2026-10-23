'use client';
import React from 'react';
import Link from 'next/link';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20book%20a%20campus%20visit%20and%20enquire%20about%20admissions.';

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function BookConsultation() {
  return (
    <section 
      style={{ 
        background: '#FAF6F0', 
        padding: '96px 24px 110px 24px',
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="book-consultation"
    >
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Split Card matching Reference "Book your visit today" */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          borderRadius: '32px',
          overflow: 'hidden',
          background: '#EAE1D5',
          border: '1px solid rgba(197, 160, 89, 0.35)',
          boxShadow: '0 16px 45px rgba(99, 59, 44, 0.06)'
        }} className="visit-split-card">
          
          {/* Left: Text & Actions */}
          <div style={{
            padding: '56px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left'
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF',
              padding: '6px 14px',
              borderRadius: '100px',
              fontSize: '11px',
              letterSpacing: '1.8px',
              fontWeight: 700,
              color: '#633b2c',
              textTransform: 'uppercase',
              fontFamily: '"General Sans", sans-serif',
              marginBottom: '16px',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              width: 'fit-content'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              ACADEMY ENROLMENT &amp; TOURS
            </span>

            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2.1rem, 3.4vw, 2.9rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em'
            }}>
              Book your visit today
            </h2>

            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '15.5px',
              color: '#60554a',
              lineHeight: 1.65,
              margin: '0 0 32px 0',
              fontWeight: 450,
              maxWidth: '480px'
            }}>
              Tour our Abu Dhabi clinical suites, consult with our admissions team, and discover the right aesthetic qualification path for your professional career.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#633b2c',
                  color: '#FFFFFF',
                  padding: '13px 24px',
                  borderRadius: '100px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontFamily: '"General Sans", sans-serif',
                  boxShadow: '0 4px 16px rgba(99, 59, 44, 0.2)',
                  transition: 'background 0.3s ease'
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#845E35')}
                onMouseLeave={e => (e.currentTarget.style.background = '#633b2c')}
              >
                <WhatsAppIcon />
                <span>Enquire on WhatsApp</span>
              </a>

              <Link
                href="/courses"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#FFFFFF',
                  color: '#633b2c',
                  padding: '13px 22px',
                  borderRadius: '100px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontFamily: '"General Sans", sans-serif',
                  border: '1px solid rgba(197, 160, 89, 0.4)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#FAF6F0';
                  e.currentTarget.style.borderColor = '#c5a059';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#FFFFFF';
                  e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.4)';
                }}
              >
                View Programmes <span>→</span>
              </Link>
            </div>

            {/* Contact Micro Info */}
            <div style={{
              display: 'flex',
              gap: '20px',
              fontFamily: '"General Sans", sans-serif',
              fontSize: '12.5px',
              color: '#7a6b63',
              flexWrap: 'wrap'
            }}>
              <span>📍 Al Zahiyah (16), Abu Dhabi</span>
              <span>📞 +971 50 234 8625</span>
              <span>✉️ hello@novelle.ae</span>
            </div>
          </div>

          {/* Right: Authentic Academy Interior Photo */}
          <div style={{
            position: 'relative',
            minHeight: '380px',
            background: '#D9CDBF'
          }}>
            <img
              src="/academy-images/al-novelle-training-centre-interior.png"
              alt="Al Novelle training centre reception in Abu Dhabi"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .visit-split-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}
