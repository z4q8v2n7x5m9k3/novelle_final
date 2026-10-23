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
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    // Observe both explicit .scroll-reveal elements and full section blocks
    const elementsToObserve = document.querySelectorAll<HTMLElement>('.scroll-reveal, section');
    elementsToObserve.forEach((el) => {
      if (!el.classList.contains('scroll-reveal')) {
        el.classList.add('scroll-reveal');
      }
      observer.observe(el);
    });

    const mutation = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>('.scroll-reveal:not(.is-visible), section:not(.is-visible)').forEach((el) => {
        if (!el.classList.contains('scroll-reveal')) {
          el.classList.add('scroll-reveal');
        }
        observer.observe(el);
      });
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
