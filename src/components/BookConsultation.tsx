'use client';
import React, { useState } from 'react';
import { COURSE_CATALOGUE } from '@/data/courses';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.';

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    therapy: '',
    message: '',
    agree: false,
    marketing: false
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
      const waMessage = encodeURIComponent(
        `Hello Al Novelle, I would like to enquire about your courses.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProgramme of Interest: ${formData.therapy}\nMessage: ${formData.message}`
      );
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
        window.open(`https://wa.me/971502348625?text=${waMessage}`, '_blank');
      }
    } finally {
      setIsPending(false);
      setIsSubmitted(true);
    }
  };

  return (
    <section className="section-padding" style={{ background: '#FAF6F0', padding: '100px 24px 120px 24px' }} id="book-consultation">
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Grand 2-Column Appointment Card */}
        <div className="appointment-grand-card" style={{ 
          background: '#eae0d5',
          borderRadius: '32px',
          overflow: 'hidden',
          display: 'flex',
          boxShadow: '0 10px 40px rgba(74, 55, 40, 0.02)',
          border: '1px solid rgba(197, 160, 89, 0.2)',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          
          {/* LEFT SIDE: The Request Form or Success State */}
          <div className="appointment-form-side scroll-reveal reveal-from-left" style={{ 
            width: '54%', 
            padding: '56px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div style={{ marginBottom: '28px' }}>
                  <h2 style={{ 
                    fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                    fontSize: 'clamp(2rem, 3.5vw, 2.7rem)', 
                    color: '#633b2c',
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
                    color: '#60554a',
                    margin: 0,
                    lineHeight: 1.5
                  }}>
                    Connect with Al Novelle educators to discuss entry requirements, course curriculums, and upcoming intakes in Abu Dhabi.
                  </p>
                </div>

                {/* The Actual Form */}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  
                  {/* Row 1: Name and Email */}
                  <div className="form-double-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#60554a', fontFamily: '"General Sans", sans-serif' }}>Full Name*</label>
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
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#60554a', fontFamily: '"General Sans", sans-serif' }}>Email Address*</label>
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
                  <div className="form-double-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 600, color: '#60554a', fontFamily: '"General Sans", sans-serif' }}>Phone Number*</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="e.g. +971 50 000 0000" 
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
                          <option value="" disabled>Select a course</option>
                          {COURSE_CATALOGUE.map(c => (
                            <option key={c.id} value={c.title}>{c.title}</option>
                          ))}
                          <option value="General Admissions Enquiry">General Admissions Enquiry</option>
                        </select>
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
                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#60554a', fontFamily: '"General Sans", sans-serif' }}>How can we help?</label>
                    <textarea 
                      name="message"
                      rows={3}
                      placeholder="Ask about schedule, syllabus, or entry requirements..." 
                      value={formData.message}
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
                        resize: 'none',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        fontFamily: '"General Sans", sans-serif'
                      }}
                    />
                  </div>

                  {/* Admissions Consent */}
                  <label className="checkbox-container" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', marginTop: '4px' }}>
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
                        border: '1px solid rgba(132, 94, 53, 0.3)',
                        marginTop: '2px'
                      }} 
                    />
                    <span style={{ fontSize: '13px', color: '#60554a', userSelect: 'none', lineHeight: 1.4, fontFamily: '"General Sans", sans-serif' }}>
                      I agree to allow Al Novelle to contact me regarding course admissions.*
                    </span>
                  </label>

                  {/* Marketing Consent (Separate, Unchecked by default) */}
                  <label className="checkbox-container" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                    <input 
                      type="checkbox" 
                      name="marketing"
                      checked={formData.marketing}
                      onChange={handleChange}
                      style={{ 
                        width: '18px', 
                        height: '18px', 
                        accentColor: '#845e35', 
                        cursor: 'pointer',
                        borderRadius: '4px',
                        border: '1px solid rgba(132, 94, 53, 0.3)',
                        marginTop: '2px'
                      }} 
                    />
                    <span style={{ fontSize: '13px', color: '#60554a', userSelect: 'none', lineHeight: 1.4, fontFamily: '"General Sans", sans-serif' }}>
                      Keep me informed about future workshops and academy updates. (Optional)
                    </span>
                  </label>

                  {/* Form Button & Reply Time */}
                  <div className="form-submit-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', gap: '16px', flexWrap: 'wrap' }}>
                    <button 
                      type="submit" 
                      disabled={isPending}
                      className="btn-book-appointment" 
                      style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        background: '#845e35',
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
                          alt="Al Novelle Logo Badge" 
                          style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                        />
                      </span>
                      {isPending ? 'Submitting...' : 'Send Enquiry'}
                    </button>
                    
                    <span style={{ fontSize: '13px', color: '#60554a', fontWeight: 500, fontFamily: '"General Sans", sans-serif' }}>
                      We’ll reply within 24–48h.
                    </span>
                  </div>

                </form>
              </>
            ) : (
              /* SUCCESS STATE */
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
                    fontSize: '30px', 
                    color: '#633b2c', 
                    fontWeight: 400, 
                    margin: '0 0 12px 0' 
                  }}>
                    Enquiry Received
                  </h3>
                  <p style={{ 
                    fontFamily: '"General Sans", sans-serif', 
                    fontSize: '15px', 
                    color: '#60554a', 
                    maxWidth: '420px', 
                    margin: '0 auto', 
                    lineHeight: 1.6 
                  }}>
                    Thank you, <strong>{formData.name}</strong>. Our admissions team has received your enquiry regarding <strong>{formData.therapy}</strong> and will contact you at <strong>{formData.email}</strong> within 24–48 hours.
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
                      agree: false,
                      marketing: false
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
                    fontFamily: '"General Sans", sans-serif'
                  }}
                >
                  Submit another enquiry
                </button>
              </div>
            )}

          </div>

          {/* RIGHT SIDE: Authentic Al Novelle interior photograph */}
          <div className="appointment-image-side scroll-reveal reveal-from-right reveal-delay-1" style={{ 
            width: '46%', 
            position: 'relative',
            minHeight: '560px',
            background: '#F5EFE6'
          }}>
            <img 
              src="/academy-images/polished-al-novelle-training-centre-interior.png" 
              alt="Al Novelle training space in Abu Dhabi" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            
            {/* Elegant glassmorphic general inquiries card overlay */}
            <div className="glass-inquiries-card" style={{ 
              position: 'absolute',
              bottom: '24px',
              left: '24px',
              right: '24px',
              background: 'rgba(132, 94, 53, 0.45)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '24px',
              padding: '28px',
              color: '#FFFFFF',
              textAlign: 'center',
              boxShadow: '0 8px 32px 0 rgba(74, 55, 40, 0.12)'
            }}>
              <div style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                background: '#FFFFFF', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 12px auto',
                boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
              }}>
                <img 
                  src="/logos/gold-logomark.png" 
                  alt="Al Novelle" 
                  style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                />
              </div>
              
              <h3 style={{ 
                fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
                fontSize: '20px', 
                color: '#FFFFFF', 
                fontWeight: 400, 
                margin: '0 0 12px 0',
                letterSpacing: '-0.01em'
              }}>
                General Enquiries
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13.5px', fontWeight: 500, fontFamily: '"General Sans", sans-serif' }}>
                <a href="tel:+971502348625" className="inquiry-link" style={{ color: '#FFFFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <span>📞</span> +971 50 234 8625
                </a>
                <a href="tel:+971507629543" className="inquiry-link" style={{ color: '#FFFFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <span>📞</span> +971 50 762 9543
                </a>
                <a href="mailto:hello@novelle.ae" className="inquiry-link" style={{ color: '#FFFFFF', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                    <path d="m3 7 9 6 9-6"></path>
                  </svg>
                  hello@novelle.ae
                </a>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 700, marginTop: '6px' }}>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

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
            height: 380px !important;
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
