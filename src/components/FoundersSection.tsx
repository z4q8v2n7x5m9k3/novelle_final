'use client';
import React from 'react';
import Link from 'next/link';

export default function FoundersSection() {
  return (
    <section style={{ background: '#FAF8F5', padding: '92px 24px 100px 24px', position: 'relative' }} id="founders">
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto' }}>
        
        {/* Header - Left Aligned */}
        <div style={{ textAlign: 'left', marginBottom: '48px' }}>
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
            border: '1px solid rgba(197, 160, 89, 0.35)',
            boxShadow: '0 4px 12px rgba(99, 59, 44, 0.03)'
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
            MEET OUR FOUNDERS
          </span>

          <h2 style={{
            fontFamily: '"Hedvig Letters Serif", Georgia, serif',
            fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
            color: '#633b2c',
            fontWeight: 400,
            lineHeight: 1.2,
            margin: '0 0 12px 0',
            letterSpacing: '-0.02em'
          }}>
            Clinical Leadership Behind Al Novelle
          </h2>

          <p style={{ 
            fontFamily: '"General Sans", sans-serif', 
            fontSize: '15px', 
            color: '#8c776e', 
            lineHeight: 1.65, 
            maxWidth: '680px', 
            margin: '0', 
            fontWeight: 500 
          }}>
            Founded by experienced aesthetic clinicians and educators dedicated to responsible, science-backed training and supervised practice in the UAE.
          </p>
        </div>

        {/* 2 Refined Luxury Founder Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '32px' 
        }}>

          {/* Dr. Azaiba Salim Kara */}
          <div 
            className="founder-clean-card"
            style={{ 
              background: '#FFFFFF', 
              borderRadius: '30px', 
              padding: '40px 36px', 
              border: '1px solid rgba(197, 160, 89, 0.45)', 
              boxShadow: '0 16px 48px rgba(99, 59, 44, 0.05), inset 0 0 0 1px rgba(197, 160, 89, 0.12)',
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '22px', marginBottom: '22px' }}>
              <div style={{ 
                width: '92px', 
                height: '92px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                border: '2px solid #c5a059', 
                flexShrink: 0, 
                background: '#F5EFE6',
                boxShadow: '0 6px 18px rgba(99, 59, 44, 0.08)'
              }}>
                <img 
                  src="/about/professional-learning-session.jpeg" 
                  alt="Dr. Azaiba Salim Kara" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              <div>
                <span style={{ 
                  display: 'inline-block',
                  fontSize: '11px', 
                  fontFamily: '"General Sans", sans-serif', 
                  letterSpacing: '1px', 
                  textTransform: 'uppercase', 
                  color: '#986A3E', 
                  fontWeight: 700,
                  marginBottom: '4px' 
                }}>
                  Co-Founder &amp; Managing Director
                </span>
                <h3 style={{ 
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                  fontSize: '22px', 
                  color: '#633b2c', 
                  fontWeight: 400, 
                  margin: '0 0 6px 0' 
                }}>
                  Dr. Azaiba Salim Kara
                </h3>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '11px', background: 'rgba(197, 160, 89, 0.15)', color: '#845E35', padding: '3px 9px', borderRadius: '100px', fontWeight: 600 }}>
                    NCLC Certified, USA
                  </span>
                  <span style={{ fontSize: '11px', background: '#FAF6F0', color: '#8c776e', padding: '3px 9px', borderRadius: '100px', fontWeight: 600 }}>
                    10+ Years UAE Experience
                  </span>
                </div>
              </div>
            </div>

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '14.5px', 
              color: '#8c776e', 
              lineHeight: 1.7, 
              margin: '0 0 16px 0', 
              flexGrow: 1 
            }}>
              Aesthetic practitioner and laser specialist with over a decade of clinical experience in the UAE. Trained in Homeopathic Medicine with an NCLC qualification from the United States, she has led clinical training collaborations involving Alma, Fotona, Candela/Calium and VILAFORTUNY.
            </p>

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '14.5px', 
              color: '#8c776e', 
              lineHeight: 1.7, 
              margin: '0 0 24px 0' 
            }}>
              Her vision for Al Novelle is to unite rigorous clinical science, contraindication management, and supervised practical skill in aesthetic education.
            </p>

            <div style={{ borderTop: '1px solid rgba(197, 160, 89, 0.2)', paddingTop: '16px', marginTop: 'auto' }}>
              <Link 
                href="/about#azaiba" 
                style={{ 
                  color: '#986A3E', 
                  fontWeight: 600, 
                  fontSize: '13.5px', 
                  textDecoration: 'none', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px',
                  fontFamily: '"General Sans", sans-serif'
                }}
              >
                Read full biography on About page <span>→</span>
              </Link>
            </div>
          </div>

          {/* Dr. Seeta Yadav */}
          <div 
            className="founder-clean-card"
            style={{ 
              background: '#FFFFFF', 
              borderRadius: '30px', 
              padding: '40px 36px', 
              border: '1px solid rgba(197, 160, 89, 0.45)', 
              boxShadow: '0 16px 48px rgba(99, 59, 44, 0.05), inset 0 0 0 1px rgba(197, 160, 89, 0.12)',
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '22px', marginBottom: '22px' }}>
              <div style={{ 
                width: '92px', 
                height: '92px', 
                borderRadius: '50%', 
                overflow: 'hidden', 
                border: '2px solid #c5a059', 
                flexShrink: 0, 
                background: '#F5EFE6',
                boxShadow: '0 6px 18px rgba(99, 59, 44, 0.08)'
              }}>
                <img 
                  src="/founders/dr-seeta-yadav.jpeg" 
                  alt="Dr. Seeta Yadav" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              <div>
                <span style={{ 
                  display: 'inline-block',
                  fontSize: '11px', 
                  fontFamily: '"General Sans", sans-serif', 
                  letterSpacing: '1px', 
                  textTransform: 'uppercase', 
                  color: '#986A3E', 
                  fontWeight: 700,
                  marginBottom: '4px' 
                }}>
                  Founder &amp; Academic Director
                </span>
                <h3 style={{ 
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                  fontSize: '22px', 
                  color: '#633b2c', 
                  fontWeight: 400, 
                  margin: '0 0 6px 0' 
                }}>
                  Dr. Seeta Yadav
                </h3>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '11px', background: 'rgba(197, 160, 89, 0.15)', color: '#845E35', padding: '3px 9px', borderRadius: '100px', fontWeight: 600 }}>
                    BAMS &amp; EMS Postgraduate
                  </span>
                  <span style={{ fontSize: '11px', background: '#FAF6F0', color: '#8c776e', padding: '3px 9px', borderRadius: '100px', fontWeight: 600 }}>
                    CIBTAC Beauty Therapy
                  </span>
                </div>
              </div>
            </div>

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '14.5px', 
              color: '#8c776e', 
              lineHeight: 1.7, 
              margin: '0 0 16px 0', 
              flexGrow: 1 
            }}>
              Beauty, laser and aesthetics educator holding a BAMS degree, EMS postgraduate training, and CIBTAC qualification. As a former regional GCC laser trainer, she directs Al Novelle’s academic standards across treatment planning, contraindication management, and supervised demonstrations.
            </p>

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '14.5px', 
              color: '#8c776e', 
              lineHeight: 1.7, 
              margin: '0 0 24px 0' 
            }}>
              Her vision is to deliver science-based aesthetic education that builds confident, knowledgeable practitioners prepared for real-world salon and clinic environments.
            </p>

            <div style={{ borderTop: '1px solid rgba(197, 160, 89, 0.2)', paddingTop: '16px', marginTop: 'auto' }}>
              <Link 
                href="/about#seeta" 
                style={{ 
                  color: '#986A3E', 
                  fontWeight: 600, 
                  fontSize: '13.5px', 
                  textDecoration: 'none', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '6px',
                  fontFamily: '"General Sans", sans-serif'
                }}
              >
                Read full biography on About page <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .founder-clean-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 50px rgba(99, 59, 44, 0.1) !important;
          border-color: rgba(197, 160, 89, 0.6) !important;
        }
      `}} />
    </section>
  );
}
