'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqItems = [
    {
      q: "Where is Al Novelle located?",
      a: "Al Novelle is located at Unit 1001, LAVG Building, Al Zahiyah (16), Abu Dhabi, UAE."
    },
    {
      q: "What types of courses does Al Novelle offer?",
      a: "Al Novelle offers approved training across Facial Skin Care, Electrical Facials, Dermaplaning, Body Treatments, Massage Therapy, Beauty Therapy, Skincare Science, and related aesthetic disciplines."
    },
    {
      q: "What accreditations does Al Novelle hold?",
      a: "Al Novelle is a CIBTAC Accredited Centre and NCLC Certified (USA). Practical training collaborations are held with partner clinical facilities in Abu Dhabi."
    },
    {
      q: "How can I enquire about admissions or fees?",
      a: "You can reach our admissions desk on WhatsApp (+971 50 234 8625), by phone (+971 50 762 9543), or by emailing hello@novelle.ae."
    },
    {
      q: "Are the courses hands-on and practical?",
      a: "Yes. Al Novelle focuses on supervised practical learning in dedicated clinical workstations, supported by rigorous underpinning skin science and hygiene protocols."
    },
    {
      q: "What are your academy opening hours?",
      a: "Our current operating schedule is Monday to Saturday, 9:00 AM to 6:00 PM (Closed on Sundays). Please contact admissions to confirm specific workshop and intake schedules."
    }
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section scroll-reveal" style={{ background: '#FAF6F0', padding: '110px 24px', overflow: 'hidden' }} id="faqs">
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Main 2-Column Responsive Layout */}
        <div className="faq-split-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.3fr', 
          gap: '80px',
          alignItems: 'start'
        }}>
          
          {/* LEFT SIDE: Header & Image Card */}
          <div className="faq-left-col" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Header */}
            <div>
              <div style={{ marginBottom: '16px' }}>
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
                  marginBottom: '18px',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  boxShadow: '0 4px 12px rgba(99, 59, 44, 0.03)'
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </div>
              <h2 style={{ 
                fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', 
                color: '#633b2c', 
                fontWeight: 400,
                margin: '0 0 12px 0',
                lineHeight: 1.2,
                letterSpacing: '-0.02em'
              }}>
                Questions, answered
              </h2>
              <p style={{
                fontFamily: '"General Sans", sans-serif',
                fontSize: '15px',
                color: '#7a6b63',
                lineHeight: 1.65,
                margin: 0
              }}>
                Find clear answers on admissions, clinical workstation practice, qualifications, and UAE study schedules.
              </p>
            </div>

            {/* "Still Have Questions?" Image Card */}
            <div className="faq-image-card scroll-reveal reveal-from-left reveal-delay-2" style={{ 
              position: 'relative',
              borderRadius: '32px',
              overflow: 'hidden',
              height: '320px',
              border: '1px solid rgba(140, 118, 98, 0.15)',
              boxShadow: '0 8px 30px rgba(74, 55, 40, 0.02)'
            }}>
              <img 
                src="/academy-images/al-novelle-training-centre-interior.png" 
                alt="Al Novelle admissions and training space" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              
              {/* Glassmorphic overlay */}
              <div className="faq-glass-overlay scroll-reveal reveal-from-left reveal-delay-3" style={{ 
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(140, 118, 98, 0.45)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '24px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px'
              }}>
                <div>
                  <h3 style={{ 
                    fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                    fontSize: '20px', 
                    color: '#FFFFFF', 
                    fontWeight: 400, 
                    margin: '0 0 4px 0' 
                  }}>
                    Still have questions?
                  </h3>
                  <p style={{ 
                    fontFamily: '"General Sans", sans-serif',
                    fontSize: '13px', 
                    color: 'rgba(255, 255, 255, 0.9)', 
                    margin: 0, 
                    fontWeight: 400 
                  }}>
                    Our admissions team is available to help.
                  </p>
                </div>

                <a 
                  href="https://wa.me/971502348625?text=Hello%20Al%20Novelle%2C%20I%20have%20a%20question%20about%20your%20programmes." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="faq-contact-btn"
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#FFFFFF',
                    color: '#633b2c',
                    padding: '10px 20px',
                    borderRadius: '100px',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontFamily: '"General Sans", sans-serif',
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}
                >
                  WhatsApp Inquiries →
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Accordion Items */}
          <div className="faq-right-col" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqItems.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className={`faq-accordion-item scroll-reveal reveal-from-right reveal-delay-${Math.min(index + 1, 6)} ${isOpen ? 'active' : ''}`}
                  onClick={() => handleToggle(index)}
                  style={{ 
                    background: '#FFFFFF', 
                    borderRadius: '24px',
                    padding: '24px 28px',
                    cursor: 'pointer',
                    border: '1px solid rgba(197, 160, 89, 0.2)',
                    boxShadow: isOpen ? '0 12px 40px rgba(99, 59, 44, 0.08)' : '0 4px 15px rgba(99, 59, 44, 0.03)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  {/* Header Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
                    <h3 style={{ 
                      fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                      fontSize: '18px',
                      fontWeight: 400,
                      color: '#633b2c',
                      margin: 0,
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em'
                    }}>
                      {item.q}
                    </h3>

                    {/* Toggle Button */}
                    <span style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '50%', 
                      background: isOpen ? '#633b2c' : 'transparent',
                      color: isOpen ? '#FFFFFF' : '#633b2c',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: isOpen ? '20px' : '24px',
                      fontWeight: isOpen ? 400 : 300,
                      border: isOpen ? 'none' : '1px solid rgba(197, 160, 89, 0.4)',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      flexShrink: 0
                    }}>
                      {isOpen ? '×' : '+'}
                    </span>
                  </div>

                  {/* Body Content with smooth reveal height transition */}
                  <div style={{ 
                    maxHeight: isOpen ? '250px' : '0px', 
                    opacity: isOpen ? 1 : 0, 
                    overflow: 'hidden', 
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    marginTop: isOpen ? '20px' : '0px'
                  }}>
                    <p style={{ 
                      fontFamily: '"General Sans", sans-serif',
                      fontSize: '14.5px',
                      color: '#8c776e', 
                      lineHeight: 1.7, 
                      fontWeight: 500,
                      margin: 0 
                    }}>
                      {item.a}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .faq-accordion-item:hover {
          transform: translateY(-2px);
          border-color: rgba(152, 106, 62, 0.3) !important;
          box-shadow: 0 8px 25px rgba(140, 118, 98, 0.06) !important;
        }
        .faq-contact-btn:hover {
          background: #986A3E !important;
          color: #FFFFFF !important;
          box-shadow: 0 4px 12px rgba(152, 106, 62, 0.2);
        }
        @media (max-width: 950px) {
          .faq-split-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .faq-left-col {
            order: 1 !important;
          }
          .faq-right-col {
            order: 2 !important;
          }
          .faq-image-card {
            height: 280px !important;
          }
          .faq-glass-overlay {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 20px !important;
          }
          .faq-contact-btn {
            width: 100% !important;
            justify-content: center !important;
            margin-top: 10px !important;
          }
        }
      `}} />
    </section>
  );
}
