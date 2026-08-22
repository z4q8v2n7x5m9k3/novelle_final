import React from 'react';
import Link from 'next/link';

export default function AboutIntro() {
  return (
    <section className="section about-intro">
      <div className="container about-grid">
        <div className="about-content">
          <h2 className="section-title">Expert care for every skin journey</h2>
          <p className="section-text">
            Our clinic combines medical expertise with a passion for aesthetics. We believe in enhancing your natural beauty through science-backed treatments and personalized care plans.
          </p>
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Board-certified dermatologists</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>State-of-the-art technology</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>Personalized treatment plans</span>
            </div>
          </div>
          <Link href="#about" className="btn-secondary">More about us</Link>
        </div>
        
        <div className="about-images">
          <div className="about-image-main">
             <div className="image-placeholder" style={{backgroundImage: "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000')"}}></div>
          </div>
          <div className="about-image-secondary">
             <div className="image-placeholder" style={{backgroundImage: "url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800')"}}></div>
          </div>
          <div className="rating-widget glass-panel">
            <div className="rating-score">5.0</div>
            <div className="rating-stars">★★★★★</div>
            <div className="rating-text">Based on 500+ reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}
