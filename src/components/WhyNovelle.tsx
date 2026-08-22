'use client';
import React from 'react';
import Link from 'next/link';

export default function WhyNovelle() {
  const cardStyle = {
    borderRadius: '32px',
    padding: '36px',
    position: 'relative' as const,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
    border: '1px solid rgba(152, 106, 62, 0.15)',
    boxShadow: '0 8px 30px rgba(74, 55, 40, 0.01)',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 400,
    color: '#4A3728', // Luxury dark brown
    lineHeight: 1.3,
    marginBottom: '16px',
    fontFamily: "'Playfair Display', Georgia, serif"
  };

  const textStyle = {
    color: '#986A3E', // Official brand gold-brown
    fontSize: '16px',
    lineHeight: 1.6,
  };

  return (
    <section className="section-padding why-novelle-section" style={{ background: '#FAF6F0', padding: '120px 24px 130px 24px' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div className="section-head scroll-reveal reveal-from-left" style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ marginBottom: '24px' }}>
            <span style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF', 
              padding: '8px 16px', 
              borderRadius: '100px',
              fontSize: '13px', 
              letterSpacing: '1px',
              fontWeight: 600,
              color: '#633b2c',
              textTransform: 'uppercase',
              fontFamily: '"General Sans", sans-serif',
              marginBottom: '24px',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              THE NOVELLE LEARNING EXPERIENCE
            </span>
          </div>
          <h2 style={{ 
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', 
            color: '#4A3728', 
            fontWeight: 400,
            margin: 0
          }}>
            Learn With Purpose. Practise With Confidence.
          </h2>
        </div>

        {/* Bento Grid Layout - Original Design but styled with Screenshot Peach & Sand Colors */}
        <div className="bento-grid-stack" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '24px',
          alignItems: 'stretch'
        }}>

          {/* COLUMN 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Tall Image Card */}
            <div className="why-bento-card scroll-reveal reveal-from-left reveal-delay-1" style={{ ...cardStyle, padding: 0, flexGrow: 2, minHeight: '480px' }}>
              <img 
                src="/academy-images/academy-lounge-classroom.png" 
                alt="Novelle academy lounge and classroom environment" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '36px', background: 'linear-gradient(to top, rgba(74, 55, 40, 0.9), transparent)' }}>
                <h3 style={{ ...titleStyle, color: '#FFFFFF', marginBottom: '8px' }}>Step Inside The Novelle Experience</h3>
                <p style={{ ...textStyle, color: 'rgba(255,255,255,0.8)' }}>Abu Dhabi Academy · Est. 2026</p>
              </div>
            </div>
            
            {/* CTA Card (Bottom Left) - Color: #F4ECE1 */}
            <div className="why-bento-card scroll-reveal reveal-from-left reveal-delay-3" style={{ ...cardStyle, background: '#F4ECE1', flexGrow: 1, alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '220px' }}>
              <div style={{ background: '#FFFFFF', padding: '6px 16px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, color: '#986A3E', marginBottom: '20px', letterSpacing: '1px', boxShadow: '0 2px 8px rgba(152,106,62,0.04)' }}>
                ADMISSIONS
              </div>
              <h3 style={{ ...titleStyle, fontSize: '22px', marginBottom: '12px' }}>Speak With Our Team</h3>
              <p style={{ ...textStyle, marginBottom: '24px', fontSize: '15px' }}>Choose the programme that matches your goals.</p>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <span className="btn-premium-action" style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#986A3E',
                  color: '#FFFFFF',
                  padding: '12px 32px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontWeight: 600,
                  transition: 'all 0.3s'
                }}>
                  Join Novelle
                </span>
              </Link>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Top Middle Card - Color: #F4EDE4 */}
            <div className="why-bento-card scroll-reveal reveal-from-right reveal-delay-2" style={{ ...cardStyle, background: '#F4EDE4', flexGrow: 1 }}>
              <h3 style={titleStyle}>International Standards</h3>
              <p style={{ ...textStyle, position: 'relative', zIndex: 2 }}>Programmes are designed around recognised training pathways, safety-led education, and professional development.</p>
              <img 
                src="/academy-images/laser-device-training.png" 
                style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '160px', height: '160px', borderRadius: '50%', opacity: 0.08, zIndex: 1 }} 
                alt="Decorative" 
              />
            </div>

            {/* Middle Center Card - Color: #F4EDE4 */}
            <div className="why-bento-card scroll-reveal reveal-from-right reveal-delay-3" style={{ ...cardStyle, background: '#F4EDE4', flexGrow: 1.5, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
               <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                 <img src="/academy-images/training-consultation.png" style={{ width: '80px', height: '80px', borderRadius: '50%', border: '4px solid #FFFFFF', zIndex: 3, objectFit: 'cover', boxShadow: '0 8px 16px rgba(152,106,62,0.1)' }} alt="Academy consultation training" />
                 <img src="/academy-images/student-support-admissions.png" style={{ width: '80px', height: '80px', borderRadius: '50%', border: '4px solid #FFFFFF', marginLeft: '-20px', zIndex: 2, objectFit: 'cover', boxShadow: '0 8px 16px rgba(152,106,62,0.1)' }} alt="Student support session" />
                 <img src="/academy-images/practical-class-mannequin.png" style={{ width: '80px', height: '80px', borderRadius: '50%', border: '4px solid #FFFFFF', marginLeft: '-20px', zIndex: 1, objectFit: 'cover', boxShadow: '0 8px 16px rgba(152,106,62,0.1)' }} alt="Practical class session" />
               </div>
               <h3 style={titleStyle}>Career-Focused Learning</h3>
               <p style={{ ...textStyle, fontSize: '15px' }}>Students are supported through practical training, CPD awareness, and industry-ready skill development.</p>
            </div>

            {/* Bottom Middle Image Card */}
            <div className="why-bento-card scroll-reveal reveal-from-right reveal-delay-4" style={{ ...cardStyle, padding: 0, flexGrow: 1, minHeight: '220px' }}>
              <img 
                src="/academy-images/practical-class-mannequin.png" 
                alt="Novelle academy practical class" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px', background: 'linear-gradient(to top, rgba(74, 55, 40, 0.85), transparent)' }}>
                <span style={{ fontWeight: 600, color: '#FFFFFF', fontSize: '18px' }}>Scientific Mastery Leads To Excellence</span>
              </div>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Top Right Stats Card - Color: #F3EAE0 */}
            <div className="why-bento-card scroll-reveal reveal-from-left reveal-delay-3" style={{ ...cardStyle, background: '#F3EAE0', flexGrow: 1.2 }}>
               
               {/* Massive Background Watermark */}
               <div style={{ 
                 position: 'absolute', 
                 bottom: '-15px', 
                 right: '-10px', 
                 fontSize: '140px', 
                 fontWeight: 600, 
                 color: 'rgba(152, 106, 62, 0.08)', 
                 lineHeight: 0.8, 
                 letterSpacing: '-0.05em', 
                 zIndex: 0,
                 pointerEvents: 'none',
                 userSelect: 'none'
               }}>
                 2026
               </div>

               <div style={{ marginBottom: '40px', position: 'relative', zIndex: 1 }}>
                 <div style={{ fontSize: '64px', fontWeight: 400, color: '#4A3728', lineHeight: 1, marginBottom: '16px', fontFamily: "'Playfair Display', Georgia, serif" }}>14+</div>
                 <h3 style={{ fontSize: '20px', fontWeight: 400, color: '#4A3728', marginBottom: '8px', fontFamily: "'Playfair Display', Georgia, serif" }}>Professional Programmes</h3>
                 <p style={{ ...textStyle, fontSize: '15px' }}>Across beauty therapy, laser aesthetics, semi-permanent makeup, and body aesthetics education.</p>
                 
                 <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
                   <div style={{ background: '#FFFFFF', padding: '6px 14px', borderRadius: '100px', fontSize: '13px', color: '#986A3E', boxShadow: '0 2px 6px rgba(152,106,62,0.04)' }}>Laser</div>
                   <div style={{ background: '#FFFFFF', padding: '6px 14px', borderRadius: '100px', fontSize: '13px', color: '#986A3E', boxShadow: '0 2px 6px rgba(152,106,62,0.04)' }}>Beauty</div>
                 </div>
               </div>

               <div style={{ borderTop: '1px solid rgba(152, 106, 62, 0.15)', paddingTop: '40px', position: 'relative', zIndex: 1 }}>
                 <div style={{ fontSize: '64px', fontWeight: 400, color: '#4A3728', lineHeight: 1, marginBottom: '16px', fontFamily: "'Playfair Display', Georgia, serif" }}>2</div>
                 <h3 style={{ fontSize: '20px', fontWeight: 400, color: '#4A3728', marginBottom: '8px', fontFamily: "'Playfair Display', Georgia, serif" }}>International Accreditations</h3>
                 <p style={{ ...textStyle, fontSize: '15px' }}>Internationally Inspired · Safety-Led Learning</p>
               </div>
            </div>

            {/* Bottom Right Review/Expert Card - Color: #F2EAE1 */}
            <div className="why-bento-card scroll-reveal reveal-from-right reveal-delay-5" style={{ ...cardStyle, flexGrow: 1, background: '#F2EAE1' }}>
               <div style={{ display: 'flex', color: '#C5A880', gap: '4px', marginBottom: '20px', fontSize: '16px' }}>★★★★★</div>
               <div style={{ fontSize: '48px', fontWeight: 400, color: '#4A3728', lineHeight: 1, marginBottom: '24px', fontFamily: "'Playfair Display', Georgia, serif" }}>100%</div>
               <p style={{ fontSize: '16px', color: '#986A3E', lineHeight: 1.6, marginBottom: '24px', fontWeight: 500 }}>
                 "Learn through structured guidance from experienced aesthetic and laser educators who bring clinical knowledge, safety protocols, and professional training into every programme."
               </p>
               
               <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto' }}>
                 <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#4A3728', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontWeight: 600 }}>
                   N
                 </div>
                 <div>
                   <div style={{ fontSize: '15px', fontWeight: 600, color: '#4A3728' }}>Guided by Expert Faculty</div>
                   <div style={{ fontSize: '13px', color: '#986A3E' }}>Novelle Academy Standard</div>
                 </div>
               </div>
            </div>

          </div>

        </div>
      </div>

      {/* Styled JSX for Premium Bento Hover Interactions */}
      <style dangerouslySetInnerHTML={{__html: `
        .why-bento-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .why-bento-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(74, 55, 40, 0.05) !important;
          border-color: rgba(152, 106, 62, 0.3) !important;
        }
        .why-bento-card img {
          transition: transform 1s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .why-bento-card:hover img {
          transform: scale(1.035);
          filter: saturate(1.04) contrast(1.02);
        }
        .btn-premium-action:hover {
          background: #4A3728 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(74, 55, 40, 0.15);
        }
        @media (prefers-reduced-motion: reduce) {
          .why-bento-card,
          .why-novelle-section .section-head {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            animation: none !important;
          }
        }
        @media (max-width: 950px) {
          .bento-grid-stack {
            grid-template-columns: 1fr !important;
          }
          .why-bento-card {
            min-height: auto !important;
            height: auto !important;
          }
        }
      `}} />
    </section>
  );
}
