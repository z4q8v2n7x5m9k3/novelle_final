import React from 'react';
import Link from 'next/link';

export default function Signature1() {
  return (
    <section className="section signature-medical">
      <div className="container medical-grid">
        <div className="medical-content">
          <h2 className="section-title">Medical Dermatology</h2>
          <p className="section-text">
            Our medical dermatology services provide comprehensive diagnosis and treatment for a wide range of skin, hair, and nail conditions. From routine skin checks to complex medical therapies, our board-certified dermatologists are here to help.
          </p>
          
          <ul className="medical-checklist">
             <li>
               <span className="check-icon">✓</span>
               <div>
                 <strong>Skin Cancer Screenings</strong>
                 <p>Early detection and comprehensive body mapping.</p>
               </div>
             </li>
             <li>
               <span className="check-icon">✓</span>
               <div>
                 <strong>Acne & Rosacea</strong>
                 <p>Targeted therapies for inflammation and scarring.</p>
               </div>
             </li>
             <li>
               <span className="check-icon">✓</span>
               <div>
                 <strong>Eczema & Psoriasis</strong>
                 <p>Advanced biologics and topical management.</p>
               </div>
             </li>
          </ul>
          
          <Link href="#book" className="btn-primary" style={{marginTop: '20px'}}>Schedule a consultation</Link>
        </div>
        
        <div className="medical-image">
           <div className="image-placeholder" style={{backgroundImage: "url('https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800')"}}></div>
           <div className="medical-badge glass-panel">
              <div className="badge-icon">⚕</div>
              <div>Certified Medical Care</div>
           </div>
        </div>
      </div>
    </section>
  );
}
