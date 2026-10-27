'use client';
import React from 'react';

const highlights = [
  {
    num: '01',
    title: 'Abu Dhabi Academy',
    description: 'Purpose-built aesthetic academy located in the heart of Abu Dhabi, UAE.'
  },
  {
    num: '02',
    title: 'Supervised Workstations',
    description: 'Dedicated clinical bays with live model demonstrations and 1:1 guidance.'
  },
  {
    num: '03',
    title: 'Recognized Benchmarks',
    description: 'Curriculum aligned with CIBTAC examination criteria and UAE standards.'
  },
  {
    num: '04',
    title: 'Clinical Faculty',
    description: 'Directed by experienced medical doctors and licensed aesthetic specialists.'
  }
];

export default function HomeKickerBar() {
  return (
    <section 
      style={{ 
        background: '#FAF8F5', 
        padding: '48px 24px 36px 24px',
        position: 'relative',
        borderBottom: '1px solid rgba(197, 160, 89, 0.18)'
      }}
      aria-label="Academy Highlights"
    >
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '32px',
          textAlign: 'left'
        }}>
          {highlights.map((item, idx) => (
            <div 
              key={item.num}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                paddingRight: '16px',
                borderRight: idx < highlights.length - 1 ? '1px solid rgba(197, 160, 89, 0.18)' : 'none'
              }}
              className="kicker-pillar"
            >
              <span style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                color: '#c5a059',
                textTransform: 'uppercase'
              }}>
                {item.num} / {item.title}
              </span>
              <p style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '13.5px',
                color: '#7a6b63',
                lineHeight: 1.55,
                margin: 0,
                fontWeight: 450
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .kicker-pillar {
            border-right: none !important;
            padding-right: 0 !important;
            border-bottom: 1px solid rgba(197, 160, 89, 0.15);
            padding-bottom: 20px;
          }
          .kicker-pillar:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `}} />
    </section>
  );
}
