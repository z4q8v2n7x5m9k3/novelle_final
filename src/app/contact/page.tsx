'use client';
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import BookConsultation from '@/components/BookConsultation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { COURSE_CATALOGUE } from '@/data/courses';

const WA_URL = 'https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
    consent: false,
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
        `Hello Al Novelle, I would like to enquire about your courses.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCourse of Interest: ${formData.course}\nMessage: ${formData.message}`
      );
      try {
        const res = await fetch('/api/inquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ source: 'Contact page form', ...formData }),
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

  const inputStyle: React.CSSProperties = {
    padding: '14px 20px',
    borderRadius: '12px',
    border: '1px solid rgba(132, 94, 53, 0.1)',
    background: '#f3ebe0',
    fontSize: '14px',
    color: '#2a2118',
    outline: 'none',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    fontFamily: '"General Sans", sans-serif',
    width: '100%',
    boxSizing: 'border-box'
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: 600,
    color: '#60554a',
    fontFamily: '"General Sans", sans-serif'
  };

  return (
    <main style={{ background: '#FAF6F0' }}>
      <Navigation />
      
      {/* ── HEADER — Left Aligned, Faded Interior Background, Unified 1260px ─────── */}
      <section style={{ 
        position: 'relative',
        paddingTop: '140px', 
        paddingBottom: '60px',
        background: 'linear-gradient(180deg, rgba(250, 248, 245, 0.88) 0%, rgba(250, 248, 245, 0.98) 100%), url("/academy-images/al-novelle-training-centre-interior.png") center/cover no-repeat',
        borderBottom: '1px solid rgba(197, 160, 89, 0.2)'
      }}>
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '780px', textAlign: 'left' }}>
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
              marginBottom: '16px',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              boxShadow: '0 4px 12px rgba(99, 59, 44, 0.03)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              ADMISSIONS &amp; ENQUIRIES
            </span>
            <h1 style={{ 
              fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
              fontSize: 'clamp(1.9rem, 3.1vw, 2.65rem)', 
              color: '#633b2c',
              fontWeight: 400,
              margin: '0 0 16px 0',
              lineHeight: 1.2,
              letterSpacing: '-0.02em'
            }}>
              Get in Touch with Al Novelle
            </h1>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif',
              fontSize: '15.5px',
              color: '#8c776e',
              lineHeight: 1.65,
              margin: 0,
              fontWeight: 500
            }}>
              Contact our admissions team for course advice, entry requirements, facility visits, and enrolment support in Abu Dhabi.
            </p>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ──────────────────── */}
      <section style={{ padding: '64px 24px 32px 24px' }}>
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '24px',
            marginBottom: '48px'
          }}>

            {/* WhatsApp */}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '32px', border: '1px solid rgba(197, 160, 89, 0.2)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', boxSizing: 'border-box' }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px rgba(37, 211, 102, 0.12)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(37, 211, 102, 0.3)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(197, 160, 89, 0.2)'; }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '20px', color: '#633b2c', fontWeight: 400, margin: '0 0 4px 0' }}>Chat on WhatsApp</h3>
                  <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14px', color: '#8c776e', margin: 0 }}>+971 50 234 8625</p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '32px', border: '1px solid rgba(197, 160, 89, 0.2)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#F5EFE6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9A7052" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 11.84 19.79 19.79 0 0 1 1.06 3.22 2 2 0 0 1 3.03 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '20px', color: '#633b2c', fontWeight: 400, margin: '0 0 4px 0' }}>Telephone</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href="tel:+971502348625" style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14px', color: '#8c776e', textDecoration: 'none' }}>+971 50 234 8625</a>
                  <a href="tel:+971507629543" style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14px', color: '#8c776e', textDecoration: 'none' }}>+971 50 762 9543</a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '32px', border: '1px solid rgba(197, 160, 89, 0.2)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#F5EFE6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9A7052" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '20px', color: '#633b2c', fontWeight: 400, margin: '0 0 4px 0' }}>Enquiry Email</h3>
                <a href="mailto:hello@novelle.ae" style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14px', color: '#8c776e', textDecoration: 'none' }}>
                  hello@novelle.ae
                </a>
              </div>
            </div>

            {/* Location */}
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '32px', border: '1px solid rgba(197, 160, 89, 0.2)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#F5EFE6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9A7052" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '20px', color: '#633b2c', fontWeight: 400, margin: '0 0 4px 0' }}>Academy Address</h3>
                <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14px', color: '#8c776e', margin: 0, lineHeight: 1.5 }}>
                  Unit 1001, LAVG Building,<br/>Al Zahiyah (16),<br/>Abu Dhabi, UAE
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM ────────────────────────── */}
      <section style={{ background: '#FAF6F0', padding: '40px 24px 100px 24px' }} id="enquiry">
        <div id="admissions" />
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'left', marginBottom: '44px', maxWidth: '780px' }}>
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
              marginBottom: '16px',
              border: '1px solid rgba(197, 160, 89, 0.35)',
              boxShadow: '0 4px 12px rgba(99, 59, 44, 0.03)'
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
              APPLICATION &amp; ENQUIRY FORM
            </span>
            <h2 style={{ 
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2rem, 3.4vw, 2.9rem)', 
              color: '#633b2c', 
              fontWeight: 400,
              margin: '0 0 12px 0',
              lineHeight: 1.2,
              letterSpacing: '-0.02em'
            }}>
              Send an Enquiry
            </h2>
            <p style={{ 
              fontFamily: '"General Sans", sans-serif', 
              fontSize: '15.5px', 
              color: '#8c776e', 
              margin: 0, 
              lineHeight: 1.65,
              fontWeight: 500
            }}>
              Submit your enquiry below and our admissions team will contact you — or message us directly on WhatsApp.
            </p>
          </div>

          {/* Grand Card */}
          <div className="appointment-grand-card" style={{ 
            background: '#eae0d5',
            borderRadius: '32px',
            overflow: 'hidden',
            display: 'flex',
            maxWidth: '1260px',
            margin: '0 auto',
            boxShadow: '0 10px 40px rgba(74, 55, 40, 0.03)',
            border: '1px solid rgba(197, 160, 89, 0.2)'
          }}>
            
            {/* LEFT: Form */}
            <div className="appointment-form-side" style={{ 
              width: '54%', 
              padding: '56px 48px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              {!isSubmitted ? (
                <>
                  <div style={{ marginBottom: '28px' }}>
                    <h3 style={{ 
                      fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                      fontSize: 'clamp(1.6rem, 2.5vw, 2rem)', 
                      color: '#633b2c',
                      fontWeight: 400,
                      margin: '0 0 8px 0',
                      lineHeight: 1.2
                    }}>
                      Course Enquiry
                    </h3>
                    <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '14.5px', color: '#60554a', margin: 0, lineHeight: 1.5 }}>
                      Connect with our admissions desk at <a href="mailto:hello@novelle.ae" style={{ color: '#986A3E', fontWeight: 600, textDecoration: 'none' }}>hello@novelle.ae</a>.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <div className="form-double-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={labelStyle}>Full Name*</label>
                        <input type="text" name="name" required placeholder="Your name" value={formData.name} onChange={handleChange} className="admissions-input" style={inputStyle} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={labelStyle}>Email Address*</label>
                        <input type="email" name="email" required placeholder="Email address" value={formData.email} onChange={handleChange} className="admissions-input" style={inputStyle} />
                      </div>
                    </div>

                    <div className="form-double-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={labelStyle}>Phone Number*</label>
                        <input type="tel" name="phone" required placeholder="e.g. +971 50 000 0000" value={formData.phone} onChange={handleChange} className="admissions-input" style={inputStyle} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        <label style={labelStyle}>Programme of Interest*</label>
                        <div style={{ position: 'relative', width: '100%' }}>
                          <select name="course" required value={formData.course} onChange={handleChange} className="admissions-input" style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}>
                            <option value="" disabled>Select a course</option>
                            {COURSE_CATALOGUE.map(c => (
                              <option key={c.id} value={c.title}>{c.title}</option>
                            ))}
                            <option value="General Enquiry / Multiple Courses">General Enquiry / Multiple Courses</option>
                          </select>
                          <div style={{ position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)', color: '#60554a', fontSize: '10px', pointerEvents: 'none' }}>▼</div>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label style={labelStyle}>Message (Optional)</label>
                      <textarea name="message" rows={3} placeholder="Ask about intake dates, prerequisites, or curriculum..." value={formData.message} onChange={handleChange} className="admissions-input" style={{ ...inputStyle, resize: 'none' }} />
                    </div>

                    {/* Admissions Consent Ticker */}
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '12px', 
                      cursor: 'pointer',
                      padding: '8px 12px',
                      background: 'rgba(255, 255, 255, 0.6)',
                      borderRadius: '12px',
                      border: '1px solid rgba(197, 160, 89, 0.25)'
                    }}>
                      <input 
                        type="checkbox" 
                        name="consent" 
                        required 
                        checked={formData.consent} 
                        onChange={handleChange} 
                        style={{ width: '18px', height: '18px', accentColor: '#633b2c', cursor: 'pointer', marginTop: '2px', flexShrink: 0 }} 
                      />
                      <span style={{ fontSize: '13px', color: '#633b2c', lineHeight: 1.45, fontFamily: '"General Sans", sans-serif', fontWeight: 500 }}>
                        I agree to allow Al Novelle to contact me regarding my course enquiry.*
                      </span>
                    </label>

                    {/* Marketing Consent Ticker */}
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '12px', 
                      cursor: 'pointer',
                      padding: '8px 12px',
                      background: 'rgba(255, 255, 255, 0.4)',
                      borderRadius: '12px',
                      border: '1px solid rgba(197, 160, 89, 0.18)'
                    }}>
                      <input 
                        type="checkbox" 
                        name="marketing" 
                        checked={formData.marketing} 
                        onChange={handleChange} 
                        style={{ width: '18px', height: '18px', accentColor: '#633b2c', cursor: 'pointer', marginTop: '2px', flexShrink: 0 }} 
                      />
                      <span style={{ fontSize: '12.5px', color: '#7a6b63', lineHeight: 1.45, fontFamily: '"General Sans", sans-serif' }}>
                        Keep me informed about future workshops, intake dates, and academy announcements. (Optional)
                      </span>
                    </label>

                    <div className="form-submit-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '8px', gap: '16px', flexWrap: 'wrap' }}>
                      <button 
                        type="submit" 
                        disabled={isPending} 
                        className="btn-premium-dark"
                      >
                        <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
                        <span>{isPending ? 'Submitting...' : 'Send Enquiry'}</span>
                      </button>

                      <a 
                        href={WA_URL} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-premium-light"
                      >
                        <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(132, 94, 53, 0.1)' }}>
                    <img src="/logos/gold-logomark.png" alt="Success" style={{ width: '38px', height: '38px', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: '26px', color: '#633b2c', fontWeight: 400, margin: '0 0 10px 0' }}>Enquiry Received</h3>
                    <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15px', color: '#60554a', maxWidth: '380px', margin: '0 auto', lineHeight: 1.6 }}>
                      Thank you, <strong>{formData.name}</strong>. Our admissions team has received your enquiry and will respond to <strong>{formData.email}</strong> shortly.
                    </p>
                  </div>
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#25D366', color: '#FFFFFF', padding: '12px 28px', borderRadius: '100px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', fontFamily: '"General Sans", sans-serif' }}>
                    Chat Directly on WhatsApp
                  </a>
                </div>
              )}
            </div>

            {/* RIGHT: Authentic Training Centre Photo with Clean Floating Badge */}
            <div className="appointment-image-side" style={{ width: '46%', position: 'relative', minHeight: '520px', background: '#E0D5C7' }}>
              <img 
                src="/academy-images/elegant-al-novelle-training-centre-1.png" 
                alt="Al Novelle training space in Abu Dhabi" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />

              {/* Clean Floating Badge matching Inspiration */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '18px',
                padding: '16px 20px',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <span style={{
                  fontSize: '10px',
                  fontFamily: '"General Sans", sans-serif',
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  color: '#986A3E',
                  fontWeight: 700
                }}>
                  ADMISSIONS &amp; VISITS · ABU DHABI
                </span>
                <strong style={{
                  fontSize: '13.5px',
                  color: '#633b2c',
                  fontFamily: '"General Sans", sans-serif',
                  fontWeight: 600
                }}>
                  Monday – Saturday · 9:00 AM – 6:00 PM
                </strong>
                <span style={{ fontSize: '12px', color: '#7a6b63', fontFamily: '"General Sans", sans-serif' }}>
                  Unit 1001, LAVG Building, Al Zahiyah (16)
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ADDRESS / MAP SECTION ───────────────── */}
      <section style={{ background: '#FFFFFF', padding: '80px 24px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#633b2c', fontWeight: 400, margin: '0 0 12px 0' }}>
            Find Our Academy
          </h2>
          <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '16px', color: '#8c776e', lineHeight: 1.6, margin: '0 0 28px 0' }}>
            Unit 1001, LAVG Building, Al Zahiyah (16), Abu Dhabi, UAE
          </p>
          <div style={{ marginBottom: '32px', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(197, 160, 89, 0.25)', maxWidth: '900px', margin: '0 auto 32px auto', height: '360px' }}>
            <iframe
              title="Al Novelle Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.732958742871!2d54.3725!3d24.4935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6659c25f4b0f%3A0x6b1cfb1c1e0e5a9!2sAl%20Zahiyah%20-%20Abu%20Dhabi!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a 
            href="https://maps.google.com/?q=LAVG+Building,Al+Zahiyah,Abu+Dhabi,UAE"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: '#FAF6F0', color: '#633b2c', padding: '12px 28px',
              borderRadius: '100px', fontSize: '14px', fontWeight: 600, textDecoration: 'none',
              border: '1px solid rgba(197, 160, 89, 0.3)', fontFamily: '"General Sans", sans-serif'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Open in Google Maps
          </a>
        </div>
      </section>

      {/* Book Your Visit Today — Embedded Interactive Booking Form & Academy Photo */}
      <BookConsultation />

      <Footer />
      <WhatsAppButton />

      <style dangerouslySetInnerHTML={{__html: `
        .admissions-input:focus {
          border-color: #845e35 !important;
          background-color: #ffffff !important;
          box-shadow: 0 4px 12px rgba(132, 94, 53, 0.05);
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
    </main>
  );
}
