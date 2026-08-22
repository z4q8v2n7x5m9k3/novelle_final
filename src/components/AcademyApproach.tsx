import React from 'react';
import Link from 'next/link';

export default function AcademyApproach({ content }: { content?: any }) {
  return (
    <section className="section-padding academy-approach-section" style={{ background: '#FAF6F0', padding: '80px 20px' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div className="academy-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '64px', 
          alignItems: 'center' 
        }}>
          {/* Left Column: Image (Desktop Left, Mobile Bottom) */}
          <div className="academy-image-col scroll-reveal reveal-from-left" style={{ 
            position: 'relative', 
            borderRadius: '32px', 
            overflow: 'visible',
            height: '100%',
            minHeight: '540px',
            boxShadow: 'none'
          }}>
            <img 
              src={content?.image || "/academy-images/academy-approach-session.png"} 
              alt="Novelle academy admissions and practical training session" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '32px',
                boxShadow: '0 20px 48px rgba(99, 59, 44, 0.08)',
                display: 'block'
              }}
            />
            
            {/* Floating Glassmorphic Chat Bubble Overlay */}
            <div className="academy-glass-card scroll-reveal reveal-from-left reveal-delay-2" style={{
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              background: 'linear-gradient(180deg, rgba(162, 137, 122, 0.5), rgba(162, 137, 122, 0.95))',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '24px',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
            }}>
              <div style={{ marginBottom: '16px' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 11.5C21 16.1944 16.9706 20 12 20C10.7483 20 9.55627 19.7617 8.47167 19.3331C8.24354 19.2431 7.99462 19.2245 7.75614 19.281L4.85303 19.9587C4.16106 20.1202 3.52843 19.4883 3.68962 18.7967L4.36855 15.8864C4.42588 15.6406 4.40722 15.383 4.31498 15.1451C3.8824 14.0305 3 12.8091 3 11.5C3 6.80558 7.02944 3 12 3C16.9706 3 21 6.80558 21 11.5Z" stroke="#FFFFFF" strokeWidth="1.5"/>
                  <path d="M8 11.5H8.01M12 11.5H12.01M16 11.5H16.01" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              
              <h4 style={{ 
                fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                fontSize: '22px', 
                color: '#FFFFFF', 
                fontWeight: 400,
                margin: '0',
                lineHeight: 1.2
              }}>
                Admissions and<br/>career guidance
              </h4>
            </div>
          </div>

          {/* Right Column: Text & Features (Desktop Right, Mobile Top) */}
          <div className="academy-content-col" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
            <span className="scroll-reveal reveal-from-right" style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              background: '#FFFFFF', 
              padding: '6px 14px', 
              borderRadius: '100px',
              fontSize: '11px', 
              letterSpacing: '0.5px',
              fontWeight: 700,
              color: '#845E35',
              textTransform: 'uppercase',
              fontFamily: '"General Sans", sans-serif',
              marginBottom: '20px',
              border: '1px solid rgba(197, 160, 89, 0.2)',
            }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#845E35', marginRight: '6px' }}></span>
              ACADEMY APPROACH
            </span>

            <h2 className="scroll-reveal reveal-from-right reveal-delay-1" style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.15,
              marginBottom: '24px',
              marginTop: 0,
              letterSpacing: '-0.01em'
            }}>
              Our Academy Approach
            </h2>

            <p className="scroll-reveal reveal-from-right reveal-delay-2" style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '15px',
              color: '#7A6B63',
              lineHeight: 1.6,
              marginBottom: '40px',
              fontWeight: '500'
            }}>
              Al Novelle blends clinical knowledge, aesthetic artistry, and supervised practical training to help learners progress from interest to professional-level confidence in beauty therapy, laser technologies, and advanced aesthetics.
            </p>
            
            {/* Features 2x2 Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '20px 16px',
              marginBottom: '0'
            }}>
              {[
                "Experienced Educators",
                "Hands-on Practical Training",
                "Safety-Led Learning",
                "UAE-Focused Professional Standards"
              ].map((item, i) => (
                <div key={i} className={`scroll-reveal reveal-from-right reveal-delay-${Math.min(i + 3, 6)}`} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <path d="M12 21.5173C11.5303 21.5173 11.0827 21.3262 10.7554 20.9881L8.52097 18.6816C8.25735 18.4095 7.88604 18.2555 7.4988 18.2555H4.80164C3.80775 18.2555 3 17.419 3 16.3897V13.5954C3 13.1939 2.85145 12.8093 2.58913 12.5372L0.435773 10.3068C-0.145258 9.7047 -0.145258 8.74088 0.435773 8.13876L2.58913 5.90835C2.85145 5.63625 3 5.25164 3 4.85011V2.05581C3 1.02649 3.80775 0.190002 4.80164 0.190002H7.4988C7.88604 0.190002 8.25735 0.0360636 8.52097 -0.236034L10.7554 -2.54256C11.4116 -3.22026 12.5884 -3.22026 13.2446 -2.54256L15.479 -0.236034C15.7426 0.0360636 16.114 0.190002 16.5012 0.190002H19.1984C20.1923 0.190002 21 1.02649 21 2.05581V4.85011C21 5.25164 21.1486 5.63625 21.4109 5.90835L23.5642 8.13876C24.1453 8.74088 24.1453 9.7047 23.5642 10.3068L21.4109 12.5372C21.1486 12.8093 21 13.1939 21 13.5954V16.3897C21 17.419 20.1923 18.2555 19.1984 18.2555H16.5012C16.114 18.2555 15.7426 18.4095 15.479 18.6816L13.2446 20.9881C12.9173 21.3262 12.4697 21.5173 12 21.5173ZM7.4988 16.7555C8.30798 16.7555 9.08373 17.0766 9.63372 17.6444L12 20.0911L14.3663 17.6444C14.9163 17.0766 15.692 16.7555 16.5012 16.7555H19.1984C19.3879 16.7555 19.5 16.5951 19.5 16.3897V13.5954C19.5 12.7589 19.81 11.9558 20.3582 11.3881L22.4285 9.24278L20.3582 7.09752C19.81 6.52973 19.5 5.72661 19.5 4.89011V2.09581C19.5 1.89045 19.3879 1.73004 19.1984 1.73004H16.5012C15.692 1.73004 14.9163 1.40898 14.3663 0.841193L12 -1.60555L9.63372 0.841193C9.08373 1.40898 8.30798 1.73004 7.4988 1.73004H4.80164C4.61211 1.73004 4.5 1.89045 4.5 2.09581V4.89011C4.5 5.72661 4.19001 6.52973 3.64183 7.09752L1.57155 9.24278L3.64183 11.3881C4.19001 11.9558 4.5 12.7589 4.5 13.5954V16.3897C4.5 16.5951 4.61211 16.7555 4.80164 16.7555H7.4988Z" fill="#633b2c"/>
                    <path d="M10.126 13.3888C9.93644 13.3888 9.74688 13.3155 9.60228 13.1652L7.36214 10.8436C7.07284 10.5438 7.07284 10.0577 7.36214 9.75787C7.65144 9.45803 8.12048 9.45803 8.40978 9.75787L10.126 11.5365L15.5902 5.87329C15.8795 5.57345 16.3486 5.57345 16.6379 5.87329C16.9272 6.17313 16.9272 6.65922 16.6379 6.95906L10.6497 13.1652C10.5051 13.3155 10.3155 13.3888 10.126 13.3888Z" fill="#633b2c"/>
                  </svg>
                  <span style={{ 
                    fontFamily: '"General Sans", sans-serif', 
                    fontSize: '14px', 
                    lineHeight: 1.4,
                    fontWeight: 600, 
                    color: '#633b2c' 
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="academy-cta-row scroll-reveal reveal-from-right reveal-delay-6">
              <a
                href="https://wa.me/971502348625?text=Hello%20Novelle%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium"
              >
                <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
                Speak to Admissions
              </a>
              <Link href="/courses" className="editorial-link">View Courses <span aria-hidden="true">&#8594;</span></Link>
            </div>

          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .academy-grid {
            display: flex !important;
            flex-direction: column-reverse;
            gap: 40px !important;
          }
          .academy-image-col {
            min-height: 440px !important;
            width: 100%;
          }
          .academy-glass-card {
            padding: 16px !important;
            left: 16px !important;
            right: 16px !important;
            bottom: 16px !important;
          }
          .academy-glass-card h4 {
            font-size: 18px !important;
          }
          .academy-cta-row { align-items: stretch; }
        }
      `}} />
    </section>
  );
}
