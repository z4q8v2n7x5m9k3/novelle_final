'use client';
import React from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SitemapPage() {
  const directoryData = [
    {
      title: "Core Directory",
      description: "Primary institutional sections and navigation pathways.",
      links: [
        { name: "Academy Homepage", path: "/", desc: "Explore our flagship training programmes, student learning atmosphere, and our aesthetic education vision." },
        { name: "About Novelle", path: "/about", desc: "Learn about our professional training standards, founders, and our educational team." },
        { name: "Aesthetic Programmes", path: "/courses", desc: "Browse our comprehensive list of beauty therapy, laser, SPMU, and professional aesthetic courses." },
        { name: "Skin Insights (Blog)", path: "/blog", desc: "Read expert articles, clinical guides, chemical peel guides, and career path tips from our educators." },
        { name: "Academy Gallery", path: "/gallery", desc: "Browse images of our advanced training clinic, classrooms, and student workshops in Abu Dhabi." },
        { name: "Get In Touch", path: "/contact", desc: "Find our office location, operating hours, phone contacts, and student registration form." }
      ]
    },
    {
      title: "Training Specialties",
      description: "Quick access to specific curriculum areas and vocational courses.",
      links: [
        { name: "Beauty Therapy Training", path: "/courses", desc: "Foundation and advanced aesthetics training for beauty practitioners." },
        { name: "Laser & Device Technologies", path: "/courses", desc: "Core laser safety, physics, and clinical skin rejuvenation training." },
        { name: "Semi-Permanent Makeup (SPMU)", path: "/courses", desc: "Microblading, micropigmentation, and artistic cosmetic tattooing." },
        { name: "Skin & Facial Treatments", path: "/courses", desc: "Structured training in chemical peels, microneedling, and skincare science." },
        { name: "Professional Workshops", path: "/courses", desc: "Hands-on workshops focused on specialized aesthetic techniques and safety protocols." }
      ]
    },
    {
      title: "Academy Insights",
      description: "Educational articles, industry guides, and student resources.",
      links: [
        { name: "Laser Treatment Safety", path: "/blog", desc: "Critical safety protocols and patient expectation guidelines." },
        { name: "Professional Career Value", path: "/blog", desc: "How structured training elevates your employment status." },
        { name: "Skin Science Foundations", path: "/blog", desc: "Understanding the skin barrier system and clinical treatment planning." },
        { name: "Mastering Consultations", path: "/blog", desc: "Steps to build client trust and outline clinical treatment plans." }
      ]
    }
  ];

  return (
    <main style={{ background: '#FAF6F0', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation />
      
      {/* ── HEADER ─────────────────────────────── */}
      <section style={{ paddingTop: '180px', paddingBottom: '60px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
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
            marginBottom: '16px',
            border: '1px solid rgba(197, 160, 89, 0.3)'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c5a059', marginRight: '8px' }}></span>
            Sitemap
          </span>
          <h1 style={{ 
            fontFamily: '"Hedvig Letters Serif", Georgia, serif', 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            color: '#633b2c',
            fontWeight: 400,
            margin: 0
          }}>
            Academy Directory
          </h1>
          <p style={{
            fontFamily: '"General Sans", sans-serif',
            fontSize: '16px',
            color: '#8c776e',
            marginTop: '12px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.6
          }}>
            Easily locate pages, curriculum quick-links, and educational insights using our organized public index.
          </p>
        </div>
      </section>

      {/* ── SITEMAP CONTENT ────────────────────── */}
      <section style={{ paddingBottom: '120px', flexGrow: 1 }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px'
          }}>
            {directoryData.map((category, catIdx) => (
              <div key={catIdx} style={{
                background: '#FFFFFF',
                borderRadius: '28px',
                border: '1px solid rgba(197, 160, 89, 0.15)',
                padding: '36px',
                boxShadow: '0 10px 30px rgba(99, 59, 44, 0.03)',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h2 style={{
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                  fontSize: '22px',
                  color: '#633b2c',
                  fontWeight: 400,
                  margin: '0 0 8px 0'
                }}>
                  {category.title}
                </h2>
                <p style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: '14px',
                  color: '#8c776e',
                  margin: '0 0 24px 0',
                  lineHeight: 1.5
                }}>
                  {category.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
                  {category.links.map((link, linkIdx) => (
                    <Link 
                      key={linkIdx} 
                      href={link.path} 
                      style={{ 
                        textDecoration: 'none', 
                        display: 'block',
                        padding: '16px',
                        borderRadius: '16px',
                        background: '#FAF6F0',
                        border: '1px solid rgba(197, 160, 89, 0.08)',
                        transition: 'transform 0.2s, background-color 0.2s, border-color 0.2s'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                        e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.3)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.backgroundColor = '#FAF6F0';
                        e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.08)';
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ 
                          fontFamily: '"General Sans", sans-serif', 
                          fontSize: '15px', 
                          fontWeight: 600, 
                          color: '#633b2c' 
                        }}>
                          {link.name}
                        </span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c5a059" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                      <p style={{
                        fontFamily: '"General Sans", sans-serif',
                        fontSize: '13px',
                        color: '#8c776e',
                        margin: 0,
                        lineHeight: 1.45
                      }}>
                        {link.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
