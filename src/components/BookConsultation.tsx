'use client';
import React, { useState } from 'react';
import { COURSE_CATALOGUE } from '@/data/courses';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20book%20an%20academy%20visit.';

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#633b2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#633b2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#633b2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    date: ''
  });
  const [isPending, setIsPending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPending(true);
    try {
      const waMsg = encodeURIComponent(
        `Hello Al Novelle, I would like to book an academy visit.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nProgramme: ${formData.course || 'General Enquiry'}\nPreferred Date: ${formData.date || 'Earliest available'}`
      );
      try {
        await fetch('/api/inquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ source: 'Book Your Visit Form', ...formData })
        });
      } catch {}
      window.open(`https://wa.me/971502348625?text=${waMsg}`, '_blank');
      setIsSubmitted(true);
    } finally {
      setIsPending(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    padding: '13px 16px',
    borderRadius: '12px',
    border: '1px solid rgba(197, 160, 89, 0.35)',
    background: '#FFFFFF',
    fontSize: '13.5px',
    color: '#1D130C',
    outline: 'none',
    fontFamily: '"General Sans", sans-serif',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.25s ease'
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '11.5px',
    fontWeight: 600,
    color: '#633b2c',
    fontFamily: '"General Sans", sans-serif'
  };

  return (
    <section 
      className="scroll-reveal"
      style={{ 
        background: '#FAF8F5', 
        padding: '110px 24px',
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="book-visit"
    >
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Unified Eyebrow Badge */}
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#FFFFFF',
            padding: '7px 16px',
            borderRadius: '100px',
            fontSize: '11px',
            letterSpacing: '2px',
            fontWeight: 700,
            color: '#633b2c',
            textTransform: 'uppercase',
            fontFamily: '"General Sans", sans-serif',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            boxShadow: '0 4px 12px rgba(99, 59, 44, 0.03)'
          }}>
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
            ACADEMY ENROLMENT &amp; TOURS
          </span>
        </div>

        {/* Grand Split Card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 1fr',
          borderRadius: '32px',
          overflow: 'hidden',
          background: '#EAE1D5',
          border: '1px solid rgba(197, 160, 89, 0.35)',
          boxShadow: '0 16px 45px rgba(99, 59, 44, 0.08)'
        }} className="visit-split-card">
          
          {/* Left: Heading + Interactive Booking Form */}
          <div style={{
            padding: '48px 44px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left'
          }}>
            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: '0 0 10px 0',
              letterSpacing: '-0.02em'
            }}>
              Book your visit today
            </h2>

            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '14.5px',
              color: '#60554a',
              lineHeight: 1.6,
              margin: '0 0 24px 0'
            }}>
              Tour our Abu Dhabi clinical suites, meet our educators, and explore the right aesthetic qualification path for your career.
            </p>

            {/* Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="form-double-col">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={labelStyle}>Full Name*</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      placeholder="e.g. Dr. Sara" 
                      value={formData.name} 
                      onChange={handleChange} 
                      style={inputStyle} 
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={labelStyle}>Phone Number*</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      placeholder="+971 50 000 0000" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      style={inputStyle} 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="form-double-col">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={labelStyle}>Email Address*</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      placeholder="name@example.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      style={inputStyle} 
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <label style={labelStyle}>Programme of Interest</label>
                    <select 
                      name="course" 
                      value={formData.course} 
                      onChange={handleChange} 
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="">Select a programme</option>
                      {COURSE_CATALOGUE.map(c => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <label style={labelStyle}>Preferred Visit Date (Optional)</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange} 
                    style={inputStyle} 
                  />
                </div>

                {/* Form Buttons with Icons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginTop: '6px' }}>
                  <button
                    type="submit"
                    disabled={isPending}
                    className="btn-premium-dark"
                  >
                    <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
                    <span>{isPending ? 'Booking...' : 'Book a Visit'}</span>
                  </button>

                  <a
                    href={WA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#FFFFFF',
                      border: '1px solid rgba(37, 211, 102, 0.45)',
                      padding: '12px 22px',
                      borderRadius: '100px',
                      color: '#1D130C',
                      fontSize: '13px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontFamily: '"General Sans", sans-serif',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                      transition: 'all 0.25s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = '#25D366';
                      e.currentTarget.style.background = '#F6FFF9';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(37, 211, 102, 0.45)';
                      e.currentTarget.style.background = '#FFFFFF';
                    }}
                  >
                    <WhatsAppIcon />
                    <span>WhatsApp Admissions</span>
                  </a>
                </div>
              </form>
            ) : (
              <div style={{
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '20px',
                padding: '28px',
                border: '1px solid rgba(197, 160, 89, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <span style={{ fontSize: '24px', color: '#845E35' }}>✓</span>
                <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '20px', color: '#633b2c', margin: 0 }}>
                  Visit Request Received
                </h3>
                <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14px', color: '#60554a', margin: 0 }}>
                  Thank you, <strong>{formData.name}</strong>. Our admissions desk has received your request and will confirm your academy visit schedule shortly.
                </p>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#25D366',
                    color: '#FFFFFF',
                    padding: '10px 20px',
                    borderRadius: '100px',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    width: 'fit-content',
                    marginTop: '4px'
                  }}
                >
                  <WhatsAppIcon />
                  <span>Open WhatsApp Admissions</span>
                </a>
              </div>
            )}

            {/* Quick Contact Micro Info with Icons */}
            <div style={{
              display: 'flex',
              gap: '20px',
              fontFamily: '"General Sans", sans-serif',
              fontSize: '12.5px',
              color: '#633b2c',
              flexWrap: 'wrap',
              marginTop: '22px'
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <MapPinIcon />
                <span>Unit 1001, LAVG Bldg, Abu Dhabi</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <PhoneIcon />
                <span>+971 50 234 8625</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <MailIcon />
                <span>hello@novelle.ae</span>
              </span>
            </div>
          </div>

          {/* Right: Authentic Academy Interior Photo */}
          <div style={{
            position: 'relative',
            minHeight: '440px',
            background: '#D9CDBF'
          }}>
            <img
              src="/academy-images/al-novelle-training-centre-interior.png"
              alt="Al Novelle training centre reception in Abu Dhabi"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .visit-split-card {
            grid-template-columns: 1fr !important;
          }
          .form-double-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}
