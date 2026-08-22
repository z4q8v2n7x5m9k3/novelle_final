'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
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
  content: string;
  published: boolean;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [related, setRelated] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    
    // Fetch individual blog
    fetch(`/api/blogs/${slug}`)
      .then(r => {
        if (!r.ok) throw new Error('Not found');
        return r.json();
      })
      .then(data => {
        setBlog(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

    // Fetch related blogs
    fetch('/api/blogs')
      .then(r => r.json())
      .then((data: Blog[]) => {
        const filtered = data
          .filter(b => b.published && b.slug !== slug)
          .slice(0, 2);
        setRelated(filtered);
      });
  }, [slug]);

  // Helper to parse simple markdown to premium JSX
  const renderContent = (text: string) => {
    if (!text) return null;
    const blocks = text.split('\n\n');
    return blocks.map((block, idx) => {
      const trimmed = block.trim();
      if (trimmed.startsWith('## ')) {
        return (
          <h2
            key={idx}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: '26px',
              fontWeight: 400,
              color: 'var(--charcoal)',
              marginTop: '40px',
              marginBottom: '20px',
              lineHeight: 1.3
            }}
          >
            {trimmed.replace('## ', '')}
          </h2>
        );
      }
      if (trimmed.startsWith('### ')) {
        return (
          <h3
            key={idx}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: '20px',
              fontWeight: 400,
              color: 'var(--charcoal)',
              marginTop: '30px',
              marginBottom: '16px',
              lineHeight: 1.3
            }}
          >
            {trimmed.replace('### ', '')}
          </h3>
        );
      }
      if (trimmed.startsWith('- ')) {
        const items = trimmed.split('\n');
        return (
          <ul
            key={idx}
            style={{
              paddingLeft: '24px',
              marginBottom: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            {items.map((item, itemIdx) => (
              <li
                key={itemIdx}
                style={{
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)'
                }}
              >
                {item.replace('- ', '').replace(/^\d+\.\s+/, '')}
              </li>
            ))}
          </ul>
        );
      }
      if (trimmed.match(/^\d+\.\s+/)) {
        const items = trimmed.split('\n');
        return (
          <ol
            key={idx}
            style={{
              paddingLeft: '24px',
              marginBottom: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            {items.map((item, itemIdx) => (
              <li
                key={itemIdx}
                style={{
                  fontSize: '17px',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)'
                }}
              >
                {item.replace(/^\d+\.\s+/, '')}
              </li>
            ))}
          </ol>
        );
      }
      return (
        <p
          key={idx}
          style={{
            fontSize: '17px',
            lineHeight: 1.8,
            color: 'var(--text-secondary)',
            marginBottom: '24px'
          }}
        >
          {trimmed}
        </p>
      );
    });
  };

  if (loading) {
    return (
      <main style={{ background: 'var(--bg-primary)' }}>
        <Navigation />
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>Loading article details...</p>
        </div>
        <Footer />
      </main>
    );
  }

  if (!blog) {
    return (
      <main style={{ background: 'var(--bg-primary)' }}>
        <Navigation />
        <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <h1 style={{ fontSize: '32px', color: 'var(--charcoal)', fontFamily: "var(--font-heading)", fontWeight: 400 }}>Article Not Found</h1>
          <p style={{ color: 'var(--text-secondary)' }}>The article you are looking for does not exist or has been removed.</p>
          <Link href="/blog" className="btn-premium">Back to Blog</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main style={{ background: 'var(--bg-primary)' }}>
      <Navigation />

      {/* ── BREADCRUMB & METADATA ── */}
      <section style={{ paddingTop: '160px', paddingBottom: '32px', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            <Link href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/blog" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Blog</Link>
            <span>/</span>
            <span style={{ color: 'var(--deep-gold)', fontWeight: 500 }}>{blog.title.slice(0, 30)}...</span>
          </div>
          
          <span style={{
            display: 'inline-block',
            background: 'var(--bg-secondary)',
            border: '1px solid rgba(152,106,62,0.3)',
            color: 'var(--deep-gold)',
            fontSize: '11px',
            fontWeight: 700,
            padding: '4px 14px',
            borderRadius: '100px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            {blog.category}
          </span>
          
          <h1 style={{
            fontFamily: "var(--font-heading)",
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            fontWeight: 400,
            color: 'var(--charcoal)',
            lineHeight: 1.25,
            marginBottom: '24px'
          }}>
            {blog.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '20px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--deep-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontWeight: 600, fontSize: '18px' }}>
              N
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 600, color: 'var(--charcoal)', fontSize: '15px' }}>{blog.author}</p>
              <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '13px' }}>
                <span>{blog.date}</span>
                <span style={{ margin: '0 8px' }}>·</span>
                <span>{blog.readTime}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED IMAGE ── */}
      <section style={{ padding: '0', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{
            width: '100%',
            height: 'clamp(300px, 45vh, 500px)',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)'
          }}>
            <SafeImage src={blog.coverImage} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section style={{ padding: '64px 0 80px', background: '#FFFFFF' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <article style={{ fontFamily: "var(--font-body)" }}>
            {renderContent(blog.content)}
          </article>

          {/* Social share mock */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', borderTop: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)', padding: '20px 0', marginTop: '48px' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--charcoal)' }}>Share this article:</span>
            <button style={{ border: 'none', background: 'var(--bg-secondary)', color: 'var(--charcoal)', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 500, cursor: 'pointer' }}>Copy Link</button>
            <button style={{ border: 'none', background: '#E8F3FF', color: '#1B74E4', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 500, cursor: 'pointer' }}>Facebook</button>
            <button style={{ border: 'none', background: '#E8F5FE', color: '#1DA1F2', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 500, cursor: 'pointer' }}>Twitter</button>
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section style={{ padding: '64px 0 80px', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 400, fontSize: '28px', color: 'var(--charcoal)', marginBottom: '32px', textAlign: 'center' }}>Related Insights</h2>
            <div className="related-post-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              {related.map(item => (
                <Link key={item.id} href={`/blog/${item.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 4px 20px rgba(74,55,40,0.05)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(74,55,40,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(74,55,40,0.05)';
                  }}
                  >
                    <div style={{ height: '180px', overflow: 'hidden' }}>
                      <SafeImage src={item.coverImage} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                      <span style={{ color: 'var(--deep-gold)', fontSize: '12px', fontWeight: 700, marginBottom: '8px', textTransform: 'uppercase' }}>{item.category}</span>
                      <h3 style={{ fontSize: '18px', fontWeight: 400, color: 'var(--charcoal)', marginBottom: '12px', fontFamily: "var(--font-heading)", lineHeight: 1.3 }}>{item.title}</h3>
                      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, flexGrow: 1, marginBottom: '16px' }}>{item.excerpt.slice(0, 100)}...</p>
                      <span style={{ color: 'var(--deep-gold)', fontWeight: 600, fontSize: '13px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Read Article →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FOOTER CTA ── */}
      <section style={{ background: 'var(--charcoal)', padding: '64px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 400, color: '#FFFFFF', fontSize: '28px', marginBottom: '16px' }}>Elevate Your Professional Standard</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px', marginBottom: '28px', lineHeight: 1.6 }}>Ready to join Al Novelle Academy? Explore our full vocational training programmes in beauty therapy, laser technology, body contouring, and advanced clinical skin science.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <Link href="/courses" className="btn-premium">View Course Catalogue</Link>
            <Link href="/contact" className="btn-premium" style={{ background: 'transparent', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.2)' }}>Contact Admissions</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
