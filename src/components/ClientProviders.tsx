'use client';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import PageTransition from './PageTransition';
import LoadingScreen from './LoadingScreen';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.body.classList.add('loaded');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    const setupElement = (el: HTMLElement) => {
      // Don't apply scroll hide to hero sections, header, or footer
      if (
        el.classList.contains('hero-section') || 
        el.classList.contains('hero-wrapper') ||
        el.classList.contains('no-scroll-reveal') ||
        el.tagName.toLowerCase() === 'header' ||
        el.tagName.toLowerCase() === 'footer'
      ) {
        el.classList.add('is-visible');
        return;
      }

      if (!el.classList.contains('scroll-reveal')) {
        el.classList.add('scroll-reveal');
      }

      // If already in viewport on mount, reveal immediately with smooth ease
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-visible');
      } else {
        observer.observe(el);
      }
    };

    document.querySelectorAll<HTMLElement>('.scroll-reveal, section').forEach(setupElement);

    const mutation = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>('.scroll-reveal:not(.is-visible), section:not(.is-visible)').forEach(setupElement);
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <LoadingScreen />
      <PageTransition>
        {children}
      </PageTransition>
    </>
  );
}
