import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#FAF8F5', paddingTop: '80px', paddingBottom: '24px', color: '#4A3728' }}>
      <div className="container">
        
        

        <style dangerouslySetInnerHTML={{__html: `
          .footer-cta-container {
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          @media (max-width: 768px) {
            .footer-cta-container {
              flex-direction: column !important;
              height: auto !important;
              min-height: auto !important;
              margin-bottom: 48px !important;
            }
            .footer-cta-text-side {
              padding: 40px 24px !important;
              order: 1;
            }
            .footer-cta-image-side {
              height: 240px !important;
              flex: none !important;
              order: 2;
            }
            .footer-cta-image-side div {
              background: linear-gradient(to bottom, rgba(235, 226, 213, 0.4) 0%, transparent 40%) !important;
            }
            .footer-bottom-bar {
              justify-content: center !important;
              text-align: center !important;
              gap: 18px !important;
            }
            .footer-credit {
              width: 100%;
            }
          }
        `}} />

        {/* 4-Column Footer Grid matching reference */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          {/* Column 1: Brand & Badges */}
          <div className="scroll-reveal reveal-from-left" style={{ paddingRight: '20px' }}>
             <div style={{ marginBottom: '24px' }}>
               <img src="/logos/wordmark_%20gold1.svg" alt="NOVELLE" style={{ height: '32px' }} />
             </div>
             <p style={{ color: '#887B73', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px' }}>
               Professional aesthetic education focused on results, safety, and modern clinical training solutions.
             </p>
             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', color: '#6B5446', fontSize: '13px', fontWeight: 500 }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9A7052" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                 UAE-Focused Excellence
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9A7052" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                 Professional Development
               </div>
             </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="scroll-reveal reveal-from-left reveal-delay-1">
             <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#4A3728', fontSize: '20px', marginBottom: '24px', fontWeight: 400 }}>Quick links</h4>
             <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
               <li><Link href="/" style={{ color: '#4A3728', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>Home</Link></li>
               <li><Link href="/about" style={{ color: '#4A3728', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>About Us</Link></li>
               <li><Link href="/courses" style={{ color: '#4A3728', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>Courses</Link></li>
               <li><Link href="/blog" style={{ color: '#4A3728', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>Blog</Link></li>
               <li><Link href="/contact" style={{ color: '#4A3728', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>Contact</Link></li>
             </ul>
          </div>
          
          {/* Column 3: Get in touch */}
          <div className="scroll-reveal reveal-from-right reveal-delay-2">
             <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#4A3728', fontSize: '20px', marginBottom: '24px', fontWeight: 400 }}>Get in touch</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F5EFE6', color: '#9A7052', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <span style={{ color: '#6B5446', fontSize: '14px', lineHeight: 1.5 }}>
                    Mon – Sat: 9:00 AM – 6:00 PM<br/>Sunday: Closed
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F5EFE6', color: '#9A7052', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <span style={{ color: '#6B5446', fontSize: '14px', lineHeight: 1.5 }}>
                    1001, LAVG Building,<br/>
                    Al Zahiyah (16), Abu Dhabi, UAE
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F5EFE6', color: '#9A7052', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <a href="tel:0502348625" style={{ color: '#6B5446', fontSize: '14px', textDecoration: 'none' }}>+971 50 234 8625</a>
                    <a href="tel:0507629543" style={{ color: '#6B5446', fontSize: '14px', textDecoration: 'none' }}>+971 50 762 9543</a>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F5EFE6', color: '#9A7052', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <a href="mailto:contact@novelle.ae" style={{ color: '#6B5446', fontSize: '14px', textDecoration: 'none' }}>contact@novelle.ae</a>
                </li>
              </ul>
          </div>

        </div>
        
        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar scroll-reveal reveal-from-right reveal-delay-3" style={{ 
          borderTop: '1px solid rgba(74,55,40,0.1)', 
          paddingTop: '32px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          color: '#887B73',
          fontSize: '13px',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
           <div className="footer-credit" style={{ color: '#887B73' }}>Design &amp; Developed by <a href="https://repixelx.com" target="_blank" rel="noopener noreferrer" style={{ color: '#4A3728', fontWeight: 700, textDecoration: 'none' }}>RepixelX Studio</a></div>
           <div style={{ display: 'flex', gap: '12px' }}>
             {/* TODO: Add official Instagram link */}
             {/* TODO: Add official Facebook link */}
             {/* TODO: Add official LinkedIn link */}
             {/* Social icons hidden until official links are provided */}
           </div>
           <div>© 2026 Novelle. All rights reserved.</div>
        </div>

      </div>
    </footer>
  );
}
