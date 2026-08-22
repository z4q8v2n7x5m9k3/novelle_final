'use client';
import React, { useEffect } from 'react';
import PageTransition from './PageTransition';
import LoadingScreen from './LoadingScreen';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.body.classList.add('loaded');
      return;
    }

    const revealElements = () => {
      document.querySelectorAll<HTMLElement>('.scroll-reveal').forEach((element, index) => {
        if (element.dataset.revealReady === 'true') return;
        element.dataset.revealReady = 'true';
        if (!element.classList.contains('reveal-from-left') && !element.classList.contains('reveal-from-right')) {
          element.classList.add(index % 2 === 0 ? 'reveal-from-left' : 'reveal-from-right');
        }
      });
    };

    revealElements();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll<HTMLElement>('.scroll-reveal').forEach((element) => observer.observe(element));
    const mutation = new MutationObserver(() => {
      revealElements();
      document.querySelectorAll<HTMLElement>('.scroll-reveal:not(.is-visible)').forEach((element) => observer.observe(element));
    });
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <PageTransition>
        {children}
      </PageTransition>
    </>
  );
}
