'use client';
import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports hover (not a touch-only mobile device)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX}px`;
        ringRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnterInteractive = () => setIsHovered(true);
    const handleMouseLeaveInteractive = () => setIsHovered(false);

    // Track active links and buttons
    const addListeners = () => {
      const interactives = document.querySelectorAll(
        'a, button, select, input, textarea, .btn-premium, .btn-secondary-pill, .btn-book-appointment, .btn-success-reset, .nav-link, [role="button"]'
      );
      interactives.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnterInteractive);
        el.addEventListener('mouseleave', handleMouseLeaveInteractive);
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    addListeners();

    // Set up an observer to watch for dynamic DOM additions
    const observer = new MutationObserver(() => {
      addListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot */}
      <div 
        ref={dotRef}
        style={{
          width: isHovered ? '0px' : '8px',
          height: isHovered ? '0px' : '8px',
          backgroundColor: '#986a3e',
          borderRadius: '50%',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s',
          mixBlendMode: 'difference'
        }}
      />
      {/* Outer Ring */}
      <div 
        ref={ringRef}
        style={{
          width: isHovered ? '56px' : '36px',
          height: isHovered ? '56px' : '36px',
          border: isHovered ? '1px solid rgba(152, 106, 62, 0.35)' : '1px solid rgba(152, 106, 62, 0.4)',
          backgroundColor: isHovered ? 'rgba(253, 247, 239, 0.95)' : 'transparent',
          borderRadius: '50%',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isHovered ? '0 8px 24px rgba(152, 106, 62, 0.15)' : 'none',
          transition: 'transform 0.08s ease-out, width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s, background-color 0.25s, box-shadow 0.25s'
        }}
      >
        {/* Tiny Novelle Icon that appears inside the ring on hover */}
        <img 
          src="/logos/gold-logomark.png" 
          alt="Novelle Icon" 
          style={{
            width: '18px',
            height: '18px',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1)' : 'scale(0.5)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            pointerEvents: 'none'
          }}
        />
      </div>
    </>
  );
}
