'use client';
import React from 'react';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20enquire%20about%20your%20training%20facility%20and%20academy%20visits.';

export default function FacilityRental() {
  return (
    <section style={{ background: '#FAF6F0', padding: '0 24px 80px 24px' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF6F0 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(197, 160, 89, 0.25)',
          padding: '36px 44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          boxShadow: '0 8px 30px rgba(99, 59, 44, 0.03)'
        }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#986A3E',
                fontFamily: '"General Sans", sans-serif'
              }}>
                ACADEMY WALKTHROUGHS &amp; TRAINING SUITES
              </span>
            </div>
            <h3 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
              color: '#633b2c',
              fontWeight: 400,
              margin: '0 0 6px 0'
            }}>
              Training Space &amp; Facility Visits
            </h3>
            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '14.5px',
              color: '#8c776e',
              margin: 0,
              lineHeight: 1.6
            }}>
              Explore our clinical demonstration rooms and equipped practical workstations in Unit 1001, LAVG Building, Abu Dhabi. Visits and workshop arrangements are hosted by prior appointment.
            </p>
          </div>

          <div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#845E35',
                color: '#FFFFFF',
                padding: '13px 28px',
                borderRadius: '100px',
                fontSize: '13.5px',
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: '"General Sans", sans-serif',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(132, 94, 53, 0.18)'
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#6E4D2B')}
              onMouseLeave={e => (e.currentTarget.style.background = '#845E35')}
            >
              <span>Schedule an Academy Visit</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
