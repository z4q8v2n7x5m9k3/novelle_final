import React from 'react';

export default function AccreditationTrust() {
  return (
    <section 
      style={{ 
        background: '#FAF6F0', 
        borderTop: '1px solid rgba(197, 160, 89, 0.18)',
        borderBottom: '1px solid rgba(197, 160, 89, 0.18)',
        padding: '36px 24px',
        position: 'relative'
      }}
      aria-label="Accreditations and Certifications"
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '32px 64px' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#c5a059',
              display: 'inline-block'
            }} />
            <span style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#8c776e'
            }}>
              ACCREDITATION &amp; CERTIFICATION
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* CIBTAC */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                background: '#FFFFFF',
                padding: '10px 22px',
                borderRadius: '100px',
                border: '1px solid rgba(197, 160, 89, 0.25)',
                boxShadow: '0 2px 10px rgba(99, 59, 44, 0.03)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#986A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span style={{ 
                fontFamily: '"General Sans", sans-serif', 
                fontSize: '13px', 
                fontWeight: 600, 
                color: '#633b2c',
                letterSpacing: '0.5px'
              }}>
                CIBTAC Accredited Centre
              </span>
            </div>

            {/* NCLC */}
            <div 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                background: '#FFFFFF',
                padding: '10px 22px',
                borderRadius: '100px',
                border: '1px solid rgba(197, 160, 89, 0.25)',
                boxShadow: '0 2px 10px rgba(99, 59, 44, 0.03)'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#986A3E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span style={{ 
                fontFamily: '"General Sans", sans-serif', 
                fontSize: '13px', 
                fontWeight: 600, 
                color: '#633b2c',
                letterSpacing: '0.5px'
              }}>
                NCLC Certified, USA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
