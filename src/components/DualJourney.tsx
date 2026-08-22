import React from 'react';
import Link from 'next/link';

export default function DualJourney() {
  return (
    <section className="journey-section section-padding" id="dual-journey">
      <div className="container">
        <div className="section-head">
          <span className="badge">Two Distinct Pathways</span>
          <h2 className="title-section">Choose Your Novelle Experience</h2>
          <p>Whether you are seeking professional mastery or refined treatment results, Novelle offers dedicated pathways built on clinical excellence.</p>
        </div>
        
        <div className="journey-grid">
          {/* For Students Card */}
          <div className="journey-card">
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=1200" 
              alt="Medical Training" 
            />
            <div className="journey-overlay"></div>
            <div className="journey-content">
              <span className="badge badge-gold">For Students</span>
              <h2 className="journey-title">Learn Aesthetic Science</h2>
              <p className="journey-desc">
                Master aesthetic and laser science through structured education, expert guidance, and practical training.
              </p>
              <Link href="#courses" className="btn btn-primary-gold">Certified Courses</Link>
            </div>
          </div>

          {/* For Clients Card */}
          <div className="journey-card">
            <img 
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=1200" 
              alt="Aesthetic Treatment" 
            />
            <div className="journey-overlay"></div>
            <div className="journey-content">
              <span className="badge">For Clients</span>
              <h2 className="journey-title">Safety-Led Treatments</h2>
              <p className="journey-desc">
                Experience consultation-led aesthetic treatments built on safety, precision, and refined natural radiance.
              </p>
              <Link href="#treatments" className="btn btn-outline">View Treatments</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
