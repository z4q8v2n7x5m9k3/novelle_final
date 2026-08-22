'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-menu-active' : ''}`} style={{
      boxSizing: 'border-box'
    }}>
      <div className="navbar-inner" style={{ position: 'relative', zIndex: 105, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <div className="navbar-logo">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <img src="/logos/wordmark_%20gold1.svg" alt="NOVELLE" />
          </Link>
        </div>
        
        <nav className="navbar-links desktop-only">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/courses" className="nav-link">Courses</Link>
          <Link href="/gallery" className="nav-link">Gallery</Link>
          <Link href="/blog" className="nav-link">Blog</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>
        
        <div className="navbar-cta desktop-only">
          <Link href="/contact#admissions" className="btn-premium">
            <div className="btn-icon-wrapper">
              <img src="/logos/gold-logomark.png" alt="Icon" />
            </div>
            Apply Today
          </Link>
        </div>

        {/* Mobile Actions Wrapper (Visible only on mobile via CSS) */}
        <div className="mobile-actions-wrapper" style={{ display: 'none', alignItems: 'center', gap: '12px', zIndex: 110 }}>
          {/* Mobile Apply Today Pill Button (Always visible as in screenshot) */}
          <Link href="/contact#admissions" className="mobile-cta" style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            background: '#F9F3EB',
            borderRadius: '100px',
            padding: '4px 12px 4px 4px',
            gap: '6px',
            height: '40px',
            boxSizing: 'border-box',
            border: '1px solid rgba(197, 160, 89, 0.15)',
            boxShadow: '0 2px 8px rgba(99, 59, 44, 0.03)',
          }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(99, 59, 44, 0.05)'
            }}>
              <img src="/logos/gold-logomark.png" alt="Icon" style={{ width: '14px', height: '14px' }} />
            </div>
            <span style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: '11px',
              fontWeight: 600,
              color: '#633b2c',
              letterSpacing: '0.2px',
              textTransform: 'uppercase'
            }}>
              Apply
            </span>
          </Link>

          {/* Mobile Circular Hamburger Button */}
          <button 
            className="mobile-hamburger" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              background: '#633b2c',
              border: 'none',
              cursor: 'pointer',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 12px rgba(99, 59, 44, 0.1)',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{
              width: '18px',
              height: '2px',
              background: '#FFFFFF',
              transition: 'transform 0.3s ease, margin 0.3s ease',
              transform: mobileMenuOpen ? 'rotate(45deg) translate(4px, 5px)' : 'none'
            }}></span>
            <span style={{
              width: '18px',
              height: '2px',
              background: '#FFFFFF',
              transition: 'transform 0.3s ease, opacity 0.3s ease, margin 0.3s ease',
              transform: mobileMenuOpen ? 'rotate(-45deg) translate(4px, -5px)' : 'none',
              marginTop: mobileMenuOpen ? '-2px' : '0'
            }}></span>
          </button>
        </div>
      </div>

      {/* Backdrop blur overlay */}
      <div 
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(20, 15, 12, 0.4)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 101, // Stacks behind drawer and navbar-inner
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s ease'
        }}
      />

      {/* Mobile Menu Drawer Overlay - Floating Rounded Card Design matching reference image */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} style={{
        position: 'fixed',
        top: '80px', // Matches bottom edge of floating navbar
        left: '4%',
        right: '4%',
        background: '#FFFFFF', 
        borderRadius: '32px',
        boxShadow: '0 20px 50px rgba(99, 59, 44, 0.15)',
        zIndex: 102, // Stacks above backdrop, below navbar-inner
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        padding: '28px 24px', // Reduced padding for a more compact card
        pointerEvents: mobileMenuOpen ? 'auto' : 'none',
        opacity: mobileMenuOpen ? 1 : 0,
        transform: mobileMenuOpen ? 'translateY(12px)' : 'translateY(-20px)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        {/* Style tag for link animations inside the drawer */}
        <style dangerouslySetInnerHTML={{__html: `
          .mobile-nav-link {
            font-family: 'Playfair Display', Georgia, serif;
            font-size: 18px; /* Tighter size */
            color: #633b2c;
            text-decoration: none;
            opacity: 0;
            transform: translateY(10px);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease-out;
            display: block;
            width: 100%;
            padding: 3px 0;
            font-weight: 500;
          }
          .mobile-drawer.open .mobile-nav-link {
            opacity: 1;
            transform: translateY(0);
          }
          .mobile-drawer.open .mobile-nav-link:nth-child(1) { transition-delay: 0.05s; }
          .mobile-drawer.open .mobile-nav-link:nth-child(2) { transition-delay: 0.1s; }
          .mobile-drawer.open .mobile-nav-link:nth-child(3) { transition-delay: 0.15s; }
          .mobile-drawer.open .mobile-nav-link:nth-child(4) { transition-delay: 0.2s; }
          .mobile-drawer.open .mobile-nav-link:nth-child(5) { transition-delay: 0.25s; }
          .mobile-drawer.open .mobile-nav-link:nth-child(6) { transition-delay: 0.3s; }
        `}} />
        
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '14px', /* Tighter gap */
          width: '100%'
        }}>
          <Link href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/courses" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
          <Link href="/gallery" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
          <Link href="/blog" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
          <Link href="/contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
