import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer" style={{ borderTop: '1px solid rgba(197, 160, 89, 0.2)' }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logos/wordmark_%20gold1.svg" alt="Al Novelle" />
            <p>Practical aesthetic education shaped by clinical science, safety standards, and supervised training in Abu Dhabi.</p>
            <div className="footer-values">
              <span>CIBTAC Accredited Centre</span>
              <span>NCLC Certified, USA</span>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3>Explore</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/courses">Course Catalogue</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/blog">Academy Insights</Link>
            <Link href="/contact">Contact &amp; Admissions</Link>
          </nav>

          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <p>Unit 1001, LAVG Building,<br />Al Zahiyah (16), Abu Dhabi, UAE</p>
            <a href="tel:+971502348625">+971 50 234 8625</a>
            <a href="tel:+971507629543">+971 50 762 9543</a>
            <a href="mailto:hello@novelle.ae">hello@novelle.ae</a>
          </div>

          <div className="footer-hours">
            <h3>Academy Hours</h3>
            <p>Monday – Saturday<br /><strong>9:00 AM – 6:00 PM</strong></p>
            <p>Sunday<br /><strong>Closed</strong></p>
            <span style={{ fontSize: '11.5px', color: '#8c776e', marginTop: '4px', display: 'block' }}>*Schedule to be confirmed</span>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <span>© 2026 Al Novelle Advanced Aesthetic Training LLC. Licence No. CN-6573432. All rights reserved.</span>
          <span>Designed &amp; Developed by <a href="https://repixelx.com" target="_blank" rel="noopener noreferrer">RepixelX Studio</a></span>
        </div>
      </div>
    </footer>
  );
}
