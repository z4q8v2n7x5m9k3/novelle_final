'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // Default first item open

  const faqItems = [
    {
      q: "Where is Novelle located?",
      a: "Novelle is located at 1001, LAVG Building, Al Zahiyah, Abu Dhabi, UAE."
    },
    {
      q: "What type of courses does Novelle offer?",
      a: "Novelle offers aesthetic, beauty, laser, and professional training programmes. Updated course details will be shared according to the official course list."
    },
    {
      q: "How can I enquire about admissions?",
      a: "You can contact the admissions team through WhatsApp, phone, or email at contact@novelle.ae."
    },
    {
      q: "Are courses practical-based?",
      a: "Novelle focuses on structured learning, hands-on practice, safety awareness, and professional skill development."
    },
    {
      q: "What are your business hours?",
      a: "We are open Monday to Saturday, 9:00 AM to 6:00 PM. We are closed on Sundays."
    },
    {
      q: "How do I get started?",
      a: "Reach out via WhatsApp, call us, or send an email to contact@novelle.ae. Our admissions team will guide you through the next steps."
    }
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section" style={{ background: '#FAF6F0', padding: '120px 24px 130px 24px', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Main 2-Column Responsive Layout */}
        <div className="faq-split-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1.3fr', 
          gap: '120px',
          alignItems: 'start'
        }}>
          
          {/* LEFT SIDE: Header & Image Card */}
          <div className="faq-left-col" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            {/* Header */}
            <div>
              <div className="scroll-reveal reveal-from-left" style={{ marginBottom: '20px' }}>
                <span style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#FFFFFF', 
                  padding: '8px 16px', 
                  borderRadius: '100px',
                  fontSize: '13px', 
                  letterSpacing: '1px',
                  fontWeight: 600,
                  color: '#633b2c',
                  textTransform: 'uppercase',
                  fontFamily: '"General Sans", sans-serif',
                  marginBottom: '24px',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  boxShadow: '0 4px 12px rgba(99, 59, 44, 0.04)'
                }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
                  FAQS
                </span>
              </div>
              <h2 className="scroll-reveal reveal-from-left reveal-delay-1" style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', 
                color: '#4A3728', 
                fontWeight: 400,
                margin: 0,
                lineHeight: 1.2
              }}>
                Frequently asked questions
              </h2>
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
                src="/academy-images/student-support-admissions.png" 
                alt="Novelle academy admissions guidance" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              
              {/* Glassmorphic overlay */}
              <div className="faq-glass-overlay scroll-reveal reveal-from-left reveal-delay-3" style={{ 
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                right: '20px',
                background: 'rgba(140, 118, 98, 0.35)', // Warm luxury brown glass
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '24px',
                padding: '24px 32px',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px'
              }}>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '20px', fontWeight: 400, margin: '0 0 6px 0', color: '#FFFFFF' }}>
                    Still have questions?
                  </h3>
                  <p style={{ fontFamily: 'system-ui, sans-serif', fontSize: '13px', margin: 0, opacity: 0.9, lineHeight: 1.4 }}>
                    Our admissions team can guide you on eligibility, course level, and the right training pathway.
                  </p>
                </div>

                {/* Contact Us button with circular logo badge */}
                <a href="https://wa.me/971502348625?text=Hello%20Novelle%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses." target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', flexShrink: 0 }}>
                  <span className="faq-contact-btn" style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#FFFFFF',
                    color: '#4A3728',
                    padding: '8px 24px 8px 8px',
                    borderRadius: '100px',
                    fontSize: '13px',
                    fontWeight: 600,
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}>
                    {/* Flower badge */}
                    <span style={{ 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%', 
                      background: '#F5EFE6', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      marginRight: '10px',
                    }}>
                      <img src="/logos/gold-logomark.png" alt="Novelle" style={{ width: '14px', height: '14px' }} />
                    </span>
                    Chat on WhatsApp
                  </span>
                </a>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE: Interactive Accordion Stack */}
          <div className="faq-right-col" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {faqItems.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div 
                  key={index} 
                  className={`faq-accordion-item scroll-reveal reveal-from-right reveal-delay-${Math.min(index + 1, 6)} ${isOpen ? 'active' : ''}`}
                  onClick={() => handleToggle(index)}
                  style={{ 
                    background: isOpen ? '#FFFFFF' : '#FFFFFF', 
                    borderRadius: '24px',
                    padding: '24px 32px', // Reduced padding
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
                      fontSize: '18px', // Reduced text size
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
                      width: '44px', 
                      height: '44px', 
                      borderRadius: '50%', 
                      background: isOpen ? '#633b2c' : 'transparent',
                      color: isOpen ? '#FFFFFF' : '#633b2c',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: isOpen ? '22px' : '26px',
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
                    marginTop: isOpen ? '24px' : '0px'
                  }}>
                    <p style={{ 
                      fontFamily: '"General Sans", sans-serif',
                      fontSize: '15px', // Reduced size
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

      {/* Styled JSX for Mobile and Hover Transitions */}
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
        .faq-contact-btn:hover span {
          background: #FFFFFF !important;
          color: #986A3E !important;
        }
        @media (max-width: 950px) {
          .faq-split-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .faq-left-col {
            order: 1 !important; /* Header and Image Card at the top matching mobile screenshot */
          }
          .faq-right-col {
            order: 2 !important; /* Accordion items below it */
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
