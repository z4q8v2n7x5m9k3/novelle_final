'use client';
import React from 'react';
import Link from 'next/link';

export default function FoundersSection() {
  return (
    <section style={{ background: '#FAF6F0', padding: '100px 24px', position: 'relative' }} id="founders">
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header - Left Aligned */}
        <div style={{ textAlign: 'left', marginBottom: '48px', maxWidth: '820px' }}>
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
            marginBottom: '16px',
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
            fontSize: '15.5px', 
            color: '#8c776e', 
            lineHeight: 1.65, 
            margin: 0, 
            fontWeight: 500 
          }}>
            Al Novelle was founded by experienced aesthetic clinicians and educators united by a shared vision: to raise the standard of practical education in aesthetics, beauty, and laser technologies across the UAE.
          </p>
        </div>

        {/* 2 Refined Corporate Founder Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', 
          gap: '32px' 
        }}>

          {/* Dr. Azaiba Salim Kara */}
          <div 
            className="founder-clean-card"
            style={{ 
              background: '#FFFFFF', 
              borderRadius: '28px', 
              padding: '38px 34px', 
              border: '1px solid rgba(197, 160, 89, 0.35)', 
              boxShadow: '0 12px 40px rgba(99, 59, 44, 0.04)',
              display: 'flex', 
              flexDirection: 'column',
              textAlign: 'left',
              transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <div style={{ 
                width: '88px', 
                height: '88px', 
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

            <div style={{ height: '1px', background: 'rgba(197, 160, 89, 0.2)', marginBottom: '18px' }} />

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '14.5px', 
              color: '#8c776e', 
              lineHeight: 1.7, 
              margin: '0 0 14px 0', 
              flexGrow: 1 
            }}>
              Aesthetic practitioner and laser specialist with over a decade of clinical experience in medical aesthetics and laser technology in the UAE. Trained in Homeopathic Medicine with an NCLC qualification from the United States, she has directed clinical training collaborations involving Alma, Fotona, Candela/Calium and VILAFORTUNY.
            </p>

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '14.5px', 
              color: '#8c776e', 
              lineHeight: 1.7, 
              margin: '0 0 20px 0' 
            }}>
              At Al Novelle, her vision focuses on combining scientific knowledge, patient safety, technical understanding, and practical clinical skills in aesthetic education.
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
              borderRadius: '28px', 
              padding: '38px 34px', 
              border: '1px solid rgba(197, 160, 89, 0.35)', 
              boxShadow: '0 12px 40px rgba(99, 59, 44, 0.04)',
              display: 'flex', 
              flexDirection: 'column',
              textAlign: 'left',
              transition: 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
              <div style={{ 
                width: '88px', 
                height: '88px', 
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

            <div style={{ height: '1px', background: 'rgba(197, 160, 89, 0.2)', marginBottom: '18px' }} />

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '14.5px', 
              color: '#8c776e', 
              lineHeight: 1.7, 
              margin: '0 0 14px 0', 
              flexGrow: 1 
            }}>
              Beauty, laser and aesthetics educator holding a Bachelor of Ayurvedic Medicine and Surgery (BAMS), postgraduate training in Emergency Medical Services, and CIBTAC certification. Her career spans clinical practice and regional laser training across the GCC.
            </p>

            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '14.5px', 
              color: '#8c776e', 
              lineHeight: 1.7, 
              margin: '0 0 20px 0' 
            }}>
              As Academic Director of Al Novelle, her vision is to provide structured, responsible, and science-based aesthetic education that develops confident, industry-ready practitioners.
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

        {/* EXECUTIVE LUXURY STATEMENT BAR WITH BACKGROUND IMAGE */}
        <div style={{ 
          position: 'relative',
          borderRadius: '28px', 
          overflow: 'hidden',
          padding: '48px 36px', 
          textAlign: 'center',
          border: '1px solid rgba(197, 160, 89, 0.38)',
          boxShadow: '0 20px 50px rgba(30, 20, 15, 0.12)',
          marginTop: '40px'
        }}>
          {/* Subtle Authentic Interior Photography Background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/academy-images/polished-al-novelle-training-centre-interior.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }} />
          {/* Warm Dark Luxury Bronze Gradient Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(28, 17, 11, 0.92) 0%, rgba(42, 24, 16, 0.94) 100%)',
            backdropFilter: 'blur(2px)',
            zIndex: 1
          }} />

          {/* Clean Editorial Content Over Background */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(197, 160, 89, 0.18)',
              border: '1px solid rgba(197, 160, 89, 0.4)',
              marginBottom: '16px'
            }}>
              <img src="/logos/gold-logomark.png" alt="" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
            </div>

            <p style={{ 
              fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
              fontSize: 'clamp(1.05rem, 1.7vw, 1.3rem)', 
              color: '#FFFFFF', 
              fontWeight: 400, 
              lineHeight: 1.68, 
              margin: '0 auto 16px auto', 
              maxWidth: '680px',
              fontStyle: 'italic',
              opacity: 0.96
            }}>
              &ldquo;To make Novelle a trusted destination for advanced aesthetic education — where knowledge meets hands-on experience, safety meets innovation, and professionals gain the confidence to grow in their careers.&rdquo;
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px' }}>
              <span style={{ width: '36px', height: '1px', background: 'rgba(197, 160, 89, 0.45)' }}></span>
              <span style={{ 
                fontFamily: '"General Sans", sans-serif', 
                fontSize: '11px', 
                color: '#c5a059', 
                fontWeight: 700, 
                letterSpacing: '1.6px', 
                textTransform: 'uppercase'
              }}>
                Elevating Skills · Empowering Futures
              </span>
              <span style={{ width: '36px', height: '1px', background: 'rgba(197, 160, 89, 0.45)' }}></span>
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .founder-clean-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(99, 59, 44, 0.08) !important;
          border-color: rgba(197, 160, 89, 0.55) !important;
        }
      `}} />
    </section>
  );
}
