'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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

const fallbackBlogs: Blog[] = [
  {
    id: "1",
    slug: "understanding-laser-hair-removal-safety-skin-types",
    title: "Understanding Laser Hair Removal: Safety, Skin Types & Protocols",
    category: "Laser Therapy",
    excerpt: "A comprehensive guide to how modern laser technology works, Fitzpatrick skin classification, and clinical safety protocols.",
    coverImage: "/academy-images/laser-device-training.png",
    date: "May 2025",
    readTime: "6 min read",
    published: true
  },
  {
    id: "2",
    slug: "skin-science-foundations-for-aesthetic-practice",
    title: "Skin Science Foundations Every Aesthetic Practitioner Should Know",
    category: "Skin Science",
    excerpt: "A practical overview of barrier function, cellular skin analysis, and evidence-led consultation planning.",
    coverImage: "/academy-images/training-consultation.png",
    date: "Apr 2025",
    readTime: "4 min read",
    published: true
  },
  {
    id: "3",
    slug: "why-structured-training-opens-doors-globally",
    title: "Why Structured Professional Training Opens Doors in the UAE",
    category: "Career Guidance",
    excerpt: "Discover how recognized CIBTAC qualifications and supervised workstation experience position practitioners for long-term success.",
    coverImage: "/academy-images/al-novelle-training-centre-interior.png",
    date: "May 2025",
    readTime: "5 min read",
    published: true
  }
];

export default function BlogPreview() {
  const [blogs, setBlogs] = useState<Blog[]>(fallbackBlogs);

  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data: Blog[]) => {
        const filtered = data.filter((b) => b.published).slice(0, 3);
        if (filtered.length > 0) setBlogs(filtered);
      })
      .catch(() => {});
  }, []);

  return (
    <section 
      style={{ 
        background: '#FAF8F5', 
        padding: '96px 24px',
        position: 'relative',
        overflow: 'hidden'
      }} 
      id="academy-insights"
    >
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header matching Reference "Notes on keeping your smile healthy" */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '48px',
          textAlign: 'left'
        }}>
          <div>
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
              ACADEMY INSIGHTS
            </span>

            <h2 style={{
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              margin: '0 0 10px 0',
              letterSpacing: '-0.02em'
            }}>
              Notes on Aesthetic Education &amp; Practice
            </h2>

            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '15.5px',
              color: '#8c776e',
              lineHeight: 1.65,
              margin: 0,
              fontWeight: 500
            }}>
              Guidance on skin science, laser safety standards, and aesthetic careers in Abu Dhabi.
            </p>
          </div>

          <div>
            <Link 
              href="/blog"
              style={{
                fontSize: '14px',
                fontFamily: '"General Sans", sans-serif',
                fontWeight: 600,
                color: '#845E35',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              Learn more <span>→</span>
            </Link>
          </div>
        </div>

        {/* 3-Card Grid matching Reference */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          textAlign: 'left'
        }}>
          {blogs.slice(0, 3).map((blog) => (
            <Link 
              key={blog.id}
              href={`/blog/${blog.slug}`}
              style={{
                textDecoration: 'none',
                background: '#FFFFFF',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(197, 160, 89, 0.28)',
                boxShadow: '0 8px 30px rgba(99, 59, 44, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease'
              }}
              className="blog-inspiration-card"
            >
              {/* Photo */}
              <div style={{ position: 'relative', height: '210px', background: '#F5EFE6', overflow: 'hidden' }}>
                <img 
                  src={blog.coverImage || '/academy-images/laser-device-training.png'} 
                  alt={blog.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* Category Pill Tag */}
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  padding: '5px 12px',
                  borderRadius: '100px',
                  border: '1px solid rgba(197, 160, 89, 0.3)'
                }}>
                  <span style={{
                    fontSize: '10px',
                    fontFamily: '"General Sans", sans-serif',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#986A3E',
                    fontWeight: 700
                  }}>
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <span style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: '12px',
                  color: '#a08a80',
                  fontWeight: 500,
                  marginBottom: '10px'
                }}>
                  {blog.date} · {blog.readTime || '5 min read'}
                </span>

                <h3 style={{
                  fontFamily: '"Hedvig Letters Serif", Georgia, serif',
                  fontSize: '19px',
                  color: '#633b2c',
                  fontWeight: 400,
                  lineHeight: 1.35,
                  margin: '0 0 12px 0'
                }}>
                  {blog.title}
                </h3>

                <p style={{
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: '13.5px',
                  color: '#8c776e',
                  lineHeight: 1.6,
                  margin: '0 0 18px 0',
                  flexGrow: 1
                }}>
                  {blog.excerpt}
                </p>

                <div style={{
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(197, 160, 89, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: '#845E35',
                  fontFamily: '"General Sans", sans-serif',
                  fontSize: '13px',
                  fontWeight: 600,
                  marginTop: 'auto'
                }}>
                  Read note <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .blog-inspiration-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(99, 59, 44, 0.08) !important;
          border-color: rgba(197, 160, 89, 0.5) !important;
        }
      `}} />
    </section>
  );
}
