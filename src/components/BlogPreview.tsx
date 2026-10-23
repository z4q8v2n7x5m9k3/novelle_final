'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';

type Blog = {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  published: boolean;
};

export default function BlogPreview() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data: Blog[]) => setBlogs(data.filter((blog) => blog.published).slice(0, 4)))
      .catch(() => setBlogs([]));
  }, []);

  if (blogs.length === 0) {
    return (
      <section style={{ background: '#FAF8F5', padding: '100px 24px' }}>
        <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px', textAlign: 'left' }}>
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
            ACADEMY BLOGS &amp; INSIGHTS
          </span>
          <h2 style={{
            fontFamily: '"Hedvig Letters Serif", Georgia, serif',
            fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
            color: '#633b2c',
            fontWeight: 400,
            lineHeight: 1.2,
            margin: '0 0 14px 0',
            letterSpacing: '-0.02em'
          }}>
            Blogs Coming Soon
          </h2>
          <p style={{ fontFamily: '"General Sans", sans-serif', fontSize: '15.5px', color: '#8c776e', lineHeight: 1.65, maxWidth: '680px', margin: '0 0 24px 0' }}>
            Thoughtful guidance on aesthetic education, safe clinical practice, and professional development is being prepared by the Novelle academic team.
          </p>
          <Link href="/courses" className="editorial-link">Explore Courses <span aria-hidden="true">&#8594;</span></Link>
        </div>
      </section>
    );
  }

  const [featured, ...sidePosts] = blogs;

  return (
    <section style={{ background: '#FAF8F5', padding: '100px 24px' }} id="blogs">
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header - Strictly Left Aligned */}
        <div style={{ textAlign: 'left', marginBottom: '48px', maxWidth: '780px' }}>
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
            ACADEMY BLOGS &amp; INSIGHTS
          </span>

          <h2 style={{
            fontFamily: '"Hedvig Letters Serif", Georgia, serif',
            fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
            color: '#633b2c',
            fontWeight: 400,
            lineHeight: 1.2,
            margin: '0 0 12px 0',
            letterSpacing: '-0.02em'
          }}>
            Latest Academy Blogs
          </h2>

          <p style={{
            fontFamily: '"General Sans", sans-serif',
            fontSize: '15.5px',
            color: '#8c776e',
            lineHeight: 1.65,
            margin: 0,
            fontWeight: 500
          }}>
            Explore thoughtful guidance on aesthetic education, safety-led learning, and professional development from the Novelle academy.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="blog-preview-grid" style={{ textAlign: 'left' }}>
          <Link href={`/blog/${featured.slug}`} className="blog-preview-featured-link scroll-reveal reveal-from-left reveal-delay-1" style={{ textDecoration: 'none' }}>
            <article className="blog-preview-featured" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(197, 160, 89, 0.25)', boxShadow: '0 8px 30px rgba(99, 59, 44, 0.04)' }}>
              <SafeImage src={featured.coverImage} alt={featured.title} className="blog-preview-featured-image" />
              <div className="blog-preview-featured-body" style={{ textAlign: 'left' }}>
                <span style={{ color: '#986A3E', fontWeight: 700, fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}>{featured.category}</span>
                <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', color: '#633b2c' }}>{featured.title}</h3>
                <p style={{ color: '#8c776e', fontSize: '14px', lineHeight: 1.6 }}>{featured.excerpt}</p>
              </div>
            </article>
          </Link>

          <div className="blog-preview-side" style={{ textAlign: 'left' }}>
            {sidePosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className={`blog-preview-side-link scroll-reveal reveal-from-right reveal-delay-${Math.min(index + 1, 4)}`} style={{ textDecoration: 'none' }}>
                <article className="blog-preview-side-card" style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(197, 160, 89, 0.22)', boxShadow: '0 4px 20px rgba(99, 59, 44, 0.03)' }}>
                  <SafeImage src={post.coverImage} alt={post.title} className="blog-preview-side-image" />
                  <div className="blog-preview-side-body" style={{ textAlign: 'left' }}>
                    <span style={{ color: '#986A3E', fontWeight: 700, fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase' }}>{post.category}</span>
                    <h3 style={{ fontFamily: '"Hedvig Letters Serif", Georgia, serif', color: '#633b2c' }}>{post.title}</h3>
                    <p style={{ color: '#8c776e', fontSize: '13px', lineHeight: 1.5 }}>{post.excerpt.slice(0, 104)}...</p>
                  </div>
                </article>
              </Link>
            ))}
            <div style={{ textAlign: 'left', marginTop: '16px' }}>
              <Link href="/blog" className="editorial-link blog-preview-all-link">Read All Blogs <span aria-hidden="true">&#8594;</span></Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
