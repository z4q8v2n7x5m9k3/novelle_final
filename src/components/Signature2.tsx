import React from 'react';

export default function Signature2() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div className="contact-image-col">
           <div className="contact-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800')"}}></div>
        </div>
        
        <div className="contact-form-col">
          <h2 className="section-title">Ready for radiant skin?</h2>
          <p className="section-text">
            Book your consultation today. Our specialists will evaluate your skin and discuss the best treatment options for you.
          </p>
          
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service of Interest</label>
              <select id="service" required>
                <option value="">Select a service</option>
                <option value="acne">Acne Treatment</option>
                <option value="botox">Botox & Fillers</option>
                <option value="laser">Laser Therapy</option>
                <option value="consultation">General Consultation</option>
              </select>
            </div>
            
            <button type="submit" className="btn-primary form-submit">Book Appointment</button>
          </form>
        </div>
      </div>
    </section>
  );
}
