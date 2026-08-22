'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['01', 'Home', '/'],
  ['02', 'About', '/about'],
  ['03', 'Courses', '/courses'],
  ['04', 'Gallery', '/gallery'],
  ['05', 'Blog', '/blog'],
  ['06', 'Contact', '/contact'],
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}>
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Link href="/" aria-label="Novelle home">
            <img src="/logos/wordmark_%20gold1.svg" alt="NOVELLE" />
          </Link>
        </div>

        <nav className="navbar-links desktop-only" aria-label="Primary navigation">
          {links.map(([, label, href]) => (
            <Link href={href} className={`nav-link ${isActive(href) ? 'active' : ''}`} key={href}>{label}</Link>
          ))}
        </nav>

        <div className="navbar-cta desktop-only">
          <Link href="/contact#admissions" className="btn-premium">
            <span className="btn-icon-wrapper"><img src="/logos/gold-logomark.png" alt="" /></span>
            Apply Today
          </Link>
        </div>

        <div className="mobile-actions-wrapper">
          <Link href="/contact#admissions" className="mobile-cta">
            <span><img src="/logos/gold-logomark.png" alt="" /></span>
            Apply
          </Link>
          <button
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <i /><i />
          </button>
        </div>
      </div>

      <button
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-label="Close navigation"
        tabIndex={mobileMenuOpen ? 0 : -1}
      />

      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        <div className="mobile-menu-kicker"><span>Explore Novelle</span><span>Abu Dhabi · UAE</span></div>
        <nav className="mobile-menu-grid" aria-label="Mobile navigation">
          {links.map(([number, label, href]) => (
            <Link href={href} className={`mobile-nav-link ${isActive(href) ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)} key={href}>
              <span>{number}</span><strong>{label}</strong>
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <Link href="/courses" onClick={() => setMobileMenuOpen(false)}>Explore Courses <span>→</span></Link>
          <a href="https://wa.me/971502348625" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </aside>
    </header>
  );
}
