'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

function useInView(options = { threshold: 0.1, triggerOnce: true }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.triggerOnce && ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, { threshold: options.threshold });

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [options.threshold, options.triggerOnce]);

  return { ref, inView };
}

interface GalleryPreviewProps {
  hideHeader?: boolean;
}

export default function GalleryPreview({ hideHeader = false }: GalleryPreviewProps) {
  const { ref } = useInView();

  return (
    <section 
      ref={ref}
      className="gallery-preview-section" 
      style={{ 
        background: '#FAF8F5', 
        padding: hideHeader ? '20px 24px 100px 24px' : '100px 24px', 
        color: '#4A3728',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container" style={{ maxWidth: '1260px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Block (Only visible if hideHeader is false) - Left Aligned */}
        {!hideHeader && (
          <div className="scroll-reveal reveal-from-left" style={{ 
            textAlign: 'left', 
            marginBottom: '48px',
            maxWidth: '780px'
          }}>
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
              THE VISUAL SUITE
            </span>
            
            <h2 className="gallery-title" style={{ 
              fontFamily: '"Hedvig Letters Serif", Georgia, serif',
              fontSize: 'clamp(2rem, 3.4vw, 2.9rem)',
              color: '#633b2c',
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: '14px',
              marginTop: 0,
              letterSpacing: '-0.02em'
            }}>
              A Glimpse Inside Al Novelle
            </h2>
            
            <p style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '15.5px',
              color: '#8c776e',
              lineHeight: 1.65,
              fontWeight: 500,
              margin: 0
            }}>
              Explore Al Novelle&apos;s training spaces, practical clinical suites, equipment stations, and educational atmosphere in Abu Dhabi.
            </p>
          </div>
        )}

        {/* Staggered Column Masonry Grid - High-end editorial feel with authentic training centre imagery */}
        <div className="gallery-masonry">
          {/* Column 1 */}
          <div className="gallery-masonry-col">
            <div className="gallery-frame scroll-reveal reveal-from-left reveal-delay-1" style={{ height: '420px' }}>
              <img 
                src="/academy-images/polished-al-novelle-training-centre-interior.png" 
                alt="Al Novelle training suite" 
                className="gallery-frame-img"
                loading="lazy"
              />
            </div>
            <div className="gallery-frame scroll-reveal reveal-from-left reveal-delay-3" style={{ height: '300px' }}>
              <img 
                src="/academy-images/refined-al-novelle-training-centre-interior-1.png" 
                alt="Aesthetic treatment workstations" 
                className="gallery-frame-img"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Column 2 - Shifted slightly down for staggered visual weight */}
          <div className="gallery-masonry-col col-shifted">
            <div className="gallery-frame scroll-reveal reveal-from-right reveal-delay-2" style={{ height: '320px' }}>
              <img 
                src="/academy-images/elegant-al-novelle-training-centre-1.png" 
                alt="Supervised practical practice stations" 
                className="gallery-frame-img"
                loading="lazy"
              />
            </div>
            <div className="gallery-frame scroll-reveal reveal-from-right reveal-delay-4" style={{ height: '400px' }}>
              <img 
                src="/academy-images/al-novelle-training-centre-interior.png" 
                alt="Clinical demonstration and training environment" 
                className="gallery-frame-img"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Column 3 */}
          <div className="gallery-masonry-col">
            <div className="gallery-frame scroll-reveal reveal-from-left reveal-delay-3" style={{ height: '450px' }}>
              <img 
                src="/academy-images/refined-aesthetic-training-centre-interior.png" 
                alt="Consultation and reception area" 
                className="gallery-frame-img"
                loading="lazy"
              />
            </div>
            <div className="gallery-frame scroll-reveal reveal-from-right reveal-delay-5" style={{ height: '280px' }}>
              <img 
                src="/academy-images/polished-aesthetic-training-centre-interior.png" 
                alt="Aesthetic equipment and clinical suite" 
                className="gallery-frame-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* View Gallery Button (Only visible if hideHeader is false) */}
        {!hideHeader && (
          <div className="scroll-reveal reveal-from-right reveal-delay-4" style={{ 
            textAlign: 'center', 
            marginTop: '60px',
          }}>
            <Link href="/gallery" className="btn-premium">
              <div className="btn-icon-wrapper">
                <img src="/logos/gold-logomark.png" alt="" />
              </div>
              Explore Full Gallery
            </Link>
          </div>
        )}

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .gallery-masonry {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        
        .gallery-masonry-col {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .col-shifted {
          padding-top: 40px;
        }

        .gallery-frame {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(74, 55, 40, 0.04);
          background: #F3ECE3;
          width: 100%;
          border: 1px solid rgba(197, 160, 89, 0.15);
        }

        .gallery-frame-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gallery-frame:hover .gallery-frame-img {
          transform: scale(1.04);
        }

        @media (max-width: 900px) {
          .gallery-masonry {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .gallery-masonry-col {
            gap: 20px;
          }
          .col-shifted {
            padding-top: 0;
          }
          .gallery-frame {
            border-radius: 20px;
            height: 280px !important;
          }
        }

        @media (max-width: 600px) {
          .gallery-masonry {
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .gallery-masonry-col:not(:first-child) {
            display: none !important;
          }
          .gallery-masonry-col {
            gap: 16px;
          }
          .gallery-frame {
            border-radius: 16px;
            height: 320px !important;
            width: 100%;
          }
        }
      `}} />
    </section>
  );
}
