'use client';
import React, { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPath = useRef(pathname);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [opacity, setOpacity] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // If pathname didn't change (only query parameters, hash links or metadata), sync directly
    if (pathname === prevPath.current) {
      setDisplayChildren(children);
      return;
    }

    // Start slow and elegant fade out
    setIsTransitioning(true);
    setOpacity(0);

    const timer = setTimeout(() => {
      setDisplayChildren(children);
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      
      // Start slow and elegant fade in
      setOpacity(1);
      prevPath.current = pathname;
    }, 450); // Generous timeout matching transition speed

    return () => clearTimeout(timer);
  }, [pathname, children]);

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    // Only remove transform container styling once fully faded in
    if (opacity === 1 && e.propertyName === 'opacity') {
      setIsTransitioning(false);
    }
  };

  return (
    <div 
      onTransitionEnd={handleTransitionEnd}
      style={{
        opacity: opacity,
        transition: opacity === 0
          ? 'opacity 0.45s cubic-bezier(0.25, 1, 0.3, 1)'
          : 'opacity 0.65s cubic-bezier(0.25, 1, 0.3, 1)',
        width: '100%',
        minHeight: '100vh',
        willChange: isTransitioning ? 'opacity' : 'auto'
      }}
    >
      {displayChildren}
    </div>
  );
}
