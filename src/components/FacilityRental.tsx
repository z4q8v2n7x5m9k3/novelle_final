import React from 'react';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20enquire%20about%20your%20training%20facility%20and%20academy%20visits.';

export default function FacilityRental() {
  return (
    <section className="facility-section">
      <div className="container facility-card">
        <div className="facility-image scroll-reveal reveal-from-left">
          <img src="/academy-images/polished-aesthetic-training-centre-interior.png" alt="Al Novelle academy training suite in Abu Dhabi" />
          <div className="facility-image-note"><span>Academy visits</span><strong>By appointment</strong></div>
        </div>
        <div className="facility-copy scroll-reveal reveal-from-right reveal-delay-1">
          <span className="section-eyebrow">TRAINING SPACE</span>
          <h2>Training Space &amp;<br />Facility Enquiries</h2>
          <p>
            For academy walkthroughs, aesthetic workshop arrangements, clinical collaborations, or training room bookings,
            please connect with the Al Novelle team directly.
          </p>
          <div className="facility-details"><span>Academy tours</span><span>Workshops</span><span>Clinical collaborations</span></div>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn-premium">
            <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
            Contact Admissions
          </a>
        </div>
      </div>
    </section>
  );
}
