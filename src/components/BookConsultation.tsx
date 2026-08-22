'use client';
import React, { useState } from 'react';

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    therapy: '',
    message: '',
    agree: false
  });
  
  const [isPending, setIsPending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    try {
      // Build WhatsApp message from form data
      const waMessage = encodeURIComponent(
        `Hello Novelle Academy, I would like to enquire about your courses.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProgramme of Interest: ${formData.therapy}\nMessage: ${formData.message}`
      );
      // Try API first, then fallback to WhatsApp
      try {
        const res = await fetch('/api/inquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ source: 'Homepage admissions form', ...formData }),
        });
        if (!res.ok) throw new Error('API unavailable');
        const result = await res.json();
        if (!result.delivered) window.open(`https://wa.me/971502348625?text=${waMessage}`, '_blank');
      } catch {
        // If API fails, open WhatsApp
        window.open(`https://wa.me/971502348625?text=${waMessage}`, '_blank');
      }
    } finally {
      setIsPending(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section className="section-padding" style={{ background: '#FAF6F0', padding: '100px 24px 120px 24px' }} id="book-consultation">
      {/* Outer container aligning perfectly with the global layout */}
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Grand 2-Column Appointment Card */}
        <div className="appointment-grand-card" style={{ 
          background: '#eae0d5', // Exact warm light peach-beige background from port 3001
          borderRadius: '32px',
          overflow: 'hidden',
          display: 'flex',
          boxShadow: '0 10px 40px rgba(74, 55, 40, 0.02)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          
          {/* LEFT SIDE: The Request Form or Success State */}
          <div className="appointment-form-side scroll-reveal reveal-from-left" style={{ 
            width: '54%', 
            padding: '64px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div style={{ marginBottom: '32px' }}>
                  <h2 style={{ 
                    fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                    fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', 
                    color: '#633b2c', // Main text, primary brand brown
                    fontWeight: 400,
                    margin: '0 0 12px 0',
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em'
                  }}>
                    Speak With Our Admissions Team
                  </h2>
                  <p style={{ 
                    fontFamily: '"General Sans", "Inter", sans-serif',
                    fontSize: '15px', 
                    color: '#60554a', // Soft luxury charcoal-brown
                    margin: 0,
                    lineHeight: 1.5
                  }}>
                    Choose the programme that matches your goals in beauty therapy, laser technologies, clinical aesthetics, or advanced skin education.
                  </p>
                </div>

                {/* The Actual Form */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* Row 1: Name and Email */}
                  <div className="form-double-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#60554a', fontFamily: '"General Sans", sans-serif' }}>Name*</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        placeholder="Your name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="admissions-input"
                        style={{ 
                          padding: '14px 20px', 
                          borderRadius: '12px', 
                          border: '1px solid rgba(132, 94, 53, 0.1)', 
                          background: '#f3ebe0',
                          fontSize: '14px',
                          color: '#2a2118',
                          outline: 'none',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          fontFamily: '"General Sans", sans-serif'
                        }} 
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#60554a', fontFamily: '"General Sans", sans-serif' }}>Email*</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        placeholder="Email address" 
                        value={formData.email}
                        onChange={handleChange}
                        className="admissions-input"
                        style={{ 
                          padding: '14px 20px', 
                          borderRadius: '12px', 
                          border: '1px solid rgba(132, 94, 53, 0.1)', 
                          background: '#f3ebe0',
                          fontSize: '14px',
                          color: '#2a2118',
                          outline: 'none',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          fontFamily: '"General Sans", sans-serif'
                        }} 
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone and Programme selection */}
                  <div className="form-double-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#60554a', fontFamily: '"General Sans", sans-serif' }}>Phone*</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="Phone number" 
                        value={formData.phone}
                        onChange={handleChange}
                        className="admissions-input"
                        style={{ 
                          padding: '14px 20px', 
                          borderRadius: '12px', 
                          border: '1px solid rgba(132, 94, 53, 0.1)', 
                          background: '#f3ebe0',
                          fontSize: '14px',
                          color: '#2a2118',
                          outline: 'none',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          fontFamily: '"General Sans", sans-serif'
                        }} 
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#60554a', fontFamily: '"General Sans", sans-serif' }}>Programme of Interest*</label>
                      <div style={{ position: 'relative', width: '100%' }}>
                        <select 
                          name="therapy"
                          required
                          value={formData.therapy}
                          onChange={handleChange}
                          className="admissions-input select-arrow"
                          style={{ 
                            width: '100%',
                            padding: '14px 20px', 
                            borderRadius: '12px', 
                            border: '1px solid rgba(132, 94, 53, 0.1)', 
                            background: '#f3ebe0',
                            fontSize: '14px',
                            color: '#2a2118',
                            outline: 'none',
                            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                            appearance: 'none',
                            cursor: 'pointer',
                            fontFamily: '"General Sans", sans-serif'
                          }}
                        >
                          <option value="" disabled>Select</option>
                          <option value="Beauty Therapy">Beauty Therapy</option>
                          <option value="Body Treatments">Body Treatments</option>
                          <option value="Laser Treatment">Laser Treatment</option>
                          <option value="Laser & Aesthetics">Laser & Aesthetics</option>
                          <option value="Semi-Permanent Makeup">Semi-Permanent Makeup</option>
                        </select>
                        {/* Custom Down Arrow Chevron */}
                        <div style={{ 
                          position: 'absolute', 
                          right: '18px', 
                          top: '50%', 
                          transform: 'translateY(-50%)', 
                          color: '#60554a', 
                          fontSize: '10px', 
                          pointerEvents: 'none',
                          opacity: 0.8
                        }}>
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Textarea */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#60554a', fontFamily: '"General Sans", sans-serif' }}>How we can help?</label>
                    <textarea 
                      name="message"
                      rows={4}
                      placeholder="Type here" 
                      value={formData.message}
                      onChange={handleChange}
                      className="admissions-input"
                      style={{ 
                        padding: '16px 20px', 
                        borderRadius: '12px', 
                        border: '1px solid rgba(132, 94, 53, 0.1)', 
                        background: '#f3ebe0',
                        fontSize: '14px',
                        color: '#2a2118',
                        outline: 'none',
                        resize: 'none',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        fontFamily: '"General Sans", sans-serif'
                      }}
                    />
                  </div>

                  {/* Agree Checkbox */}
                  <label className="checkbox-container" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', marginTop: '4px' }}>
                    <input 
                      type="checkbox" 
                      name="agree"
                      required
                      checked={formData.agree}
                      onChange={handleChange}
                      style={{ 
                        width: '18px', 
                        height: '18px', 
                        accentColor: '#845e35', 
                        cursor: 'pointer',
                        borderRadius: '4px',
                        border: '1px solid rgba(132, 94, 53, 0.3)'
                      }} 
                    />
                    <span style={{ fontSize: '13px', color: '#60554a', userSelect: 'none', lineHeight: 1.4, fontFamily: '"General Sans", sans-serif' }}>
                      I agree to allow the academy to contact me regarding enrolment.
                    </span>
                  </label>

                  {/* Form Button & Reply Time */}
                  <div className="form-submit-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px' }}>
                    <button 
                      type="submit" 
                      disabled={isPending}
                      className="btn-book-appointment" 
                      style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        background: '#845e35', // Exact bronze color
                        color: '#FFFFFF', 
                        padding: '6px 32px 6px 6px', 
                        borderRadius: '100px', 
                        border: 'none',
                        fontSize: '14px', 
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        fontFamily: '"General Sans", sans-serif',
                        boxShadow: '0 4px 12px rgba(132, 94, 53, 0.15)'
                      }}
                    >
                      {/* Circle flower/logomark badge on left */}
                      <span style={{ 
                        width: '32px', 
                        height: '32px', 
                        borderRadius: '50%', 
                        background: '#FFFFFF', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        marginRight: '16px',
                        fontSize: '14px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
                      }}>
                        <img 
                          src="/logos/gold-logomark.png" 
                          alt="Novelle Logo Badge" 
                          style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                        />
                      </span>
                      {isPending ? 'Requesting...' : 'Book an appointment'}
                    </button>
                    
                    <span style={{ fontSize: '13px', color: '#60554a', fontWeight: 500, fontFamily: '"General Sans", sans-serif' }}>
                      We’ll reply within 24–48h.
                    </span>
                  </div>

                </form>
              </>
            ) : (
              /* GORGEOUS SUCCESS STATE */
              <div style={{ textAlign: 'center', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: '#FFFFFF', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  boxShadow: '0 10px 30px rgba(132, 94, 53, 0.1)'
                }}>
                  <img 
                    src="/logos/gold-logomark.png" 
                    alt="Success Logo Badge" 
                    style={{ width: '42px', height: '42px', objectFit: 'contain' }}
                  />
                </div>
                
                <div>
                  <h3 style={{ 
                    fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                    fontSize: '32px', 
                    color: '#633b2c', 
                    fontWeight: 400, 
                    margin: '0 0 12px 0' 
                  }}>
                    Request Received
                  </h3>
                  <p style={{ 
                    fontFamily: '"General Sans", sans-serif', 
                    fontSize: '16px', 
                    color: '#60554a', 
                    maxWidth: '420px', 
                    margin: '0 auto', 
                    lineHeight: 1.6 
                  }}>
                    Thank you, <strong>{formData.name}</strong>. Our admissions team has received your enquiry for <strong>{formData.therapy}</strong> and will contact you at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong> within the next 24 to 48 hours.
                  </p>
                </div>
                
                <button 
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      therapy: '',
                      message: '',
                      agree: false
                    });
                  }}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(132, 94, 53, 0.3)',
                    color: '#845e35',
                    padding: '10px 24px',
                    borderRadius: '100px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    fontFamily: '"General Sans", sans-serif',
                    marginTop: '12px'
                  }}
                  className="btn-success-reset"
                >
                  Submit another request
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDE: Gorgeous Portrait Image & Glassmorphic Contact Details */}
          <div className="appointment-image-side scroll-reveal reveal-from-right reveal-delay-2" style={{ 
            width: '46%', 
            position: 'relative',
            minHeight: '620px'
          }}>
            {/* Moisty hydrated aesthetic face skin picture from Port 3001 */}
            <img 
              src="/academy-images/academy-approach-session.png" 
              alt="Novelle academy admissions and course guidance" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            
            {/* Elegant glassmorphic general inquiries card overlay */}
            <div className="glass-inquiries-card" style={{ 
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              background: 'rgba(132, 94, 53, 0.35)', // Warm luxury brown translucent glass
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '24px',
              padding: '32px',
              color: '#FFFFFF',
              textAlign: 'center',
              boxShadow: '0 8px 32px 0 rgba(74, 55, 40, 0.12)'
            }}>
              {/* White badge enclosing the gold logomark */}
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: '#FFFFFF', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
              }}>
                <img 
                  src="/logos/gold-logomark.png" 
                  alt="Inquiry Badge Logo" 
                  style={{ width: '20px', height: '20px', objectFit: 'contain' }}
                />
              </div>
              
              {/* Title */}
              <h3 style={{ 
                fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                fontSize: '22px', 
                color: '#FFFFFF', 
                fontWeight: 400, 
                margin: '0 0 16px 0',
                letterSpacing: '-0.01em'
              }}>
                General inquiries
              </h3>

              {/* Contacts */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', fontWeight: 500, fontFamily: '"General Sans", sans-serif' }}>
                <a href="tel:0502348625" className="inquiry-link" style={{ color: '#FFFFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <span>📞</span> 050 234 8625 / 050 762 9543
                </a>
                <a href="mailto:hello@novelle.ae" className="inquiry-link" style={{ color: '#FFFFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="m3 7 9 6 9-6"></path>
                  </svg>
                  hello@novelle.ae
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Styled JSX for Responsive Mobile-First adjustments */}
      <style dangerouslySetInnerHTML={{__html: `
        .admissions-input:focus {
          border-color: #845e35 !important;
          background-color: #ffffff !important;
          box-shadow: 0 4px 12px rgba(132, 94, 53, 0.05);
        }
        .btn-book-appointment:hover {
          background: #6d4d2b !important;
          box-shadow: 0 4px 15px rgba(109, 77, 43, 0.25);
        }
        .btn-success-reset:hover {
          background: rgba(132, 94, 53, 0.05) !important;
          border-color: #845e35 !important;
        }
        .inquiry-link:hover {
          text-decoration: underline !important;
          opacity: 0.9;
        }
        @media (max-width: 950px) {
          .appointment-grand-card {
            flex-direction: column !important;
            border-radius: 24px !important;
          }
          .appointment-form-side {
            width: 100% !important;
            padding: 40px 24px !important;
          }
          .appointment-image-side {
            width: 100% !important;
            height: 480px !important;
            min-height: auto !important;
          }
          .form-double-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .form-submit-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
          }
        }
      `}} />
    </section>
  );
}
