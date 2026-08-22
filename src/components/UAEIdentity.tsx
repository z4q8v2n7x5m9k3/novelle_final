import React from 'react';

export default function UAEIdentity() {
  const badges = [
    'UAE-Based Academy',
    'Practical Aesthetic Education',
    'Safety-Led Learning',
    'Professional Excellence'
  ];

  return (
    <section style={{ background: '#1E140F', padding: '100px 24px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '64px', alignItems: 'center' }}>
          
          {/* Left: Text content + The Emirates supporting badge */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {/* Subtle The Emirates Logo Badge */}
              <div style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '6px 14px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                height: '42px',
                boxSizing: 'border-box'
              }}>
                <img 
                  src="/logos/the-emirates.jpg" 
                  alt="The Emirates" 
                  style={{ 
                    height: '30px', 
                    width: 'auto', 
                    objectFit: 'contain',
                    display: 'block' 
                  }} 
                />
              </div>

              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                background: 'rgba(255,255,255,0.06)',
                padding: '8px 16px',
                borderRadius: '100px',
                fontSize: '11px',
                letterSpacing: '2px',
                fontWeight: 600,
                color: '#c5a059',
                textTransform: 'uppercase' as const,
                fontFamily: '"General Sans", sans-serif',
                border: '1px solid rgba(197, 160, 89, 0.2)'
              }}>
                BORN IN ABU DHABI
              </span>
            </div>

            <h2 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#FFFFFF', fontWeight: 400, lineHeight: 1.2, margin: '0 0 24px 0', letterSpacing: '-0.02em' }}>
              Born in Abu Dhabi.<br/>Built for Excellence.
            </h2>
            <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
              Novelle is rooted in the UAE&apos;s culture of ambition, innovation, and quality. From Abu Dhabi, we aim to develop confident professionals through structured aesthetic education, practical learning, and a commitment to higher standards.
            </p>
          </div>

          {/* Right: Badge cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {badges.map((badge, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(197, 160, 89, 0.2)', borderRadius: '20px', padding: '28px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '4px', height: '36px', borderRadius: '2px', background: 'linear-gradient(to bottom, #00732F, #FFFFFF, #FF0000)', flexShrink: 0 }} />
                <span style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14px', color: '#FFFFFF', fontWeight: 600, lineHeight: 1.3 }}>
                  {badge}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
