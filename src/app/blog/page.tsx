'use client';
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';

interface Blog {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  readTime: string;
  published: boolean;
}

const CATEGORIES = ['All', 'Laser Therapy', 'Career Guidance', 'Industry Trends', 'Skin Science', 'Beauty Education'];

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [active, setActive] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(r => r.json())
      .then(data => {
        setBlogs(data.filter((b: Blog) => b.published));
        setLoading(false);
      });
  }, []);

  const filtered = active === 'All' ? blogs : blogs.filter(b => b.category === active);

  return (
    <main style={{ background: '#FAF8F5' }}>
      <Navigation />

      {/* ── HERO ─────────────────────────────── */}
      <section style={{ paddingTop: '160px', paddingBottom: '72px', textAlign: 'center', background: '#FFFFFF', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span style={{
            background: '#FFFFFF', 
            border: '1px solid #FAF6F0', 
            color: '#c5a059', 
            padding: '8px 20px', 
            borderRadius: '100px', 
            boxShadow: '0 4px 15px rgba(99, 59, 44, 0.05)',
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            fontSize: '11px',
            textTransform: 'uppercase',
            marginBottom: '24px'
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c5a059' }}></span>
            KNOWLEDGE &amp; INSIGHTS
          </span>
          <h1 className="title-massive" style={{ marginBottom: '20px', fontSize: 'clamp(2.2rem, 4vw, 3rem)' }}>
            From The Academy
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto' }}>
            Thoughtful guidance on aesthetic learning, safer practice, professional growth, and the future of beauty education in the UAE.
          </p>
        </div>
      </section>

      {/* ── FILTER TABS ──────────────────────── */}
      <section style={{ background: '#FFFFFF', paddingBottom: '0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '16px', paddingTop: '16px', whiteSpace: 'nowrap', WebkitOverflowScrolling: 'touch', justifyContent: 'center' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  background: active === cat ? '#633b2c' : '#FAF6F0',
                  border: active === cat ? '1px solid #633b2c' : '1px solid rgba(197, 160, 89, 0.2)',
                  color: active === cat ? '#FFFFFF' : '#633b2c',
                  padding: '10px 24px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontFamily: '"General Sans", sans-serif',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => {
                  if (active !== cat) {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.borderColor = '#c5a059';
                  }
                }}
                onMouseLeave={e => {
                  if (active !== cat) {
                    e.currentTarget.style.background = '#FAF6F0';
                    e.currentTarget.style.borderColor = 'rgba(197, 160, 89, 0.2)';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG GRID ────────────────────────── */}
      <section style={{ padding: '56px 0 80px' }}>
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#887B73' }}>Loading articles...</div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#887B73' }}>No articles in this category yet.</div>
          ) : (
            <div className="blog-page-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
              {filtered.map((blog, i) => (
                <Link key={blog.id} href={`/blog/${blog.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <article
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: '1px solid rgba(0,0,0,0.05)',
                      boxShadow: '0 4px 20px rgba(74,55,40,0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(74,55,40,0.1)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(74,55,40,0.05)';
                    }}
                  >
                    {/* Cover image */}
                    <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                      <SafeImage
                        src={blog.coverImage}
                        alt={blog.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                      <span style={{
                        position: 'absolute', top: '16px', left: '16px',
                        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
                        color: '#9A7052', fontSize: '11px', fontWeight: 700,
                        padding: '4px 12px', borderRadius: '100px', letterSpacing: '0.04em',
                      }}>
                        {blog.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <div style={{ display: 'flex', gap: '12px', marginBottom: '14px', fontSize: '13px', color: '#c5a059', fontWeight: 600, fontFamily: '"General Sans", sans-serif' }}>
                        <span>{blog.readTime}</span>
                      </div>
                      <h2 style={{ fontSize: '22px', fontWeight: 400, color: '#633b2c', marginBottom: '12px', lineHeight: 1.35, fontFamily: '"Hedvig Letters Serif", Georgia, serif' }}>
                        {blog.title}
                      </h2>
                      <p style={{ fontSize: '15px', color: '#8c776e', lineHeight: 1.65, marginBottom: '24px', flexGrow: 1, fontFamily: '"General Sans", sans-serif', fontWeight: 500 }}>
                        {blog.excerpt}
                      </p>
                      <span style={{ color: '#c5a059', fontWeight: 600, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px', fontFamily: '"General Sans", sans-serif' }}>
                        Read Article
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6H10M7 3L10 6L7 9" stroke="var(--deep-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
