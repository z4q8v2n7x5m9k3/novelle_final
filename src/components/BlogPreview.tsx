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

  if (blogs.length === 0) return null;
  const [featured, ...sidePosts] = blogs;

  return (
    <section className="blog-preview-section section-padding">
      <div className="container blog-preview-container">
        <div className="blog-preview-header scroll-reveal reveal-from-left">
          <span className="badge blog-preview-badge">Academy Insights</span>
          <h2>Career Guidance & Expert Advice</h2>
          <p>Discover clinical advancements, aesthetics training techniques, and beauty industry insights from Novelle&apos;s educators.</p>
        </div>

        <div className="blog-preview-grid">
          <Link href={`/blog/${featured.slug}`} className="blog-preview-featured-link scroll-reveal reveal-from-left reveal-delay-1">
            <article className="blog-preview-featured">
              <SafeImage src={featured.coverImage} alt={featured.title} className="blog-preview-featured-image" />
              <div className="blog-preview-featured-body">
                <span>{featured.category}</span>
                <h3>{featured.title}</h3>
                <p>{featured.excerpt}</p>
              </div>
            </article>
          </Link>

          <div className="blog-preview-side">
            {sidePosts.map((post, index) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className={`blog-preview-side-link scroll-reveal reveal-from-right reveal-delay-${Math.min(index + 1, 4)}`}>
                <article className="blog-preview-side-card">
                  <SafeImage src={post.coverImage} alt={post.title} className="blog-preview-side-image" />
                  <div className="blog-preview-side-body">
                    <span>{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt.slice(0, 104)}...</p>
                  </div>
                </article>
              </Link>
            ))}
            <Link href="/blog" className="btn btn-dark blog-preview-all-link scroll-reveal reveal-from-right reveal-delay-5">View All Articles</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
