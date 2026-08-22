import React from 'react';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Novelle%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.';

export default function FacilityRental() {
  return (
    <section className="facility-section">
      <div className="container facility-card">
        <div className="facility-image scroll-reveal reveal-from-left">
          <img src="/academy-images/academy-lounge-classroom.png" alt="Novelle academy training space in Abu Dhabi" />
          <div className="facility-image-note"><span>Academy visits</span><strong>By appointment</strong></div>
        </div>
        <div className="facility-copy scroll-reveal reveal-from-right reveal-delay-1">
          <span className="section-eyebrow">TRAINING SPACE</span>
          <h2>Training Space &amp;<br />Facility Enquiries</h2>
          <p>
            For academy visits, workshop enquiries, training collaborations, or facility-related requests,
            please contact the Novelle team directly.
          </p>
          <div className="facility-details"><span>Academy tours</span><span>Workshops</span><span>Collaborations</span></div>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-premium">
            <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
            Contact Novelle
          </a>
        </div>
      </div>
    </section>
  );
}
