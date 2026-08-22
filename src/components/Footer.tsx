import React from 'react';
import Link from 'next/link';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Novelle%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <section className="footer-journey-cta">
          <div className="footer-journey-copy">
            <span className="section-eyebrow">YOUR NEXT STEP</span>
            <h2>Begin Your Learning Journey</h2>
            <p>Talk with our admissions team about the programme path that best matches your goals.</p>
            <div className="footer-journey-actions">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-premium">
                <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
                Speak to Admissions
              </a>
              <Link href="/courses" className="editorial-link">View Courses <span aria-hidden="true">&#8594;</span></Link>
            </div>
          </div>
          <div className="footer-journey-image">
            <img src="/academy-images/training-consultation.png" alt="Novelle practical learning and student guidance" />
          </div>
        </section>

        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logos/wordmark_%20gold1.svg" alt="Novelle" />
            <p>Premium aesthetic education shaped by practical learning, safety, and professional development.</p>
            <div className="footer-values"><span>UAE-Focused Excellence</span><span>Safety-Led Training</span></div>
          </div>
          <nav aria-label="Footer navigation">
            <h3>Explore</h3>
            <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/courses">Courses</Link>
            <Link href="/gallery">Gallery</Link><Link href="/blog">Academy Insights</Link><Link href="/contact">Contact</Link>
          </nav>
          <div className="footer-contact">
            <h3>Get in touch</h3>
            <p>1001, LAVG Building,<br />Al Zahiyah (16), Abu Dhabi, UAE</p>
            <a href="tel:+971502348625">+971 50 234 8625</a>
            <a href="tel:+971507629543">+971 50 762 9543</a>
            <a href="mailto:hello@novelle.ae">hello@novelle.ae</a>
          </div>
          <div className="footer-hours">
            <h3>Academy hours</h3>
            <p>Monday – Saturday<br /><strong>9:00 AM – 6:00 PM</strong></p>
            <p>Sunday<br /><strong>Closed</strong></p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Novelle. All rights reserved.</span>
          <span>Design &amp; Developed by <a href="https://repixelx.com" target="_blank" rel="noopener noreferrer">RepixelX Studio</a></span>
        </div>
      </div>
    </footer>
  );
}
