import React from 'react';

export default function DoctorProfile() {
  return (
    <section className="section doctor-profile">
      <div className="container profile-grid">
        <div className="profile-image-col">
          <div className="profile-image-wrapper">
             <div className="image-placeholder" style={{backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800')"}}></div>
             
             <div className="doctor-badge glass-panel">
               <h4>Dr. Sarah Mitchell</h4>
               <p>Lead Dermatologist & Founder</p>
             </div>
          </div>
        </div>
        
        <div className="profile-content-col">
          <h2 className="section-title">A clinic committed to healthy, beautiful results</h2>
          <p className="section-text">
            For over a decade, we have been at the forefront of dermatological care, providing our patients with the highest standard of medical and aesthetic treatments. Our philosophy is simple: healthy skin is beautiful skin.
          </p>
          <p className="section-text">
            We understand that every skin journey is unique. That's why we take a personalized approach, combining cutting-edge technology with deep medical expertise to help you achieve your skincare goals confidently and safely.
          </p>
          
          <div className="doctor-signature">
            <h3 className="signature-font">Sarah Mitchell</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
