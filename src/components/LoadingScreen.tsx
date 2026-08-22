'use client';
import React, { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('novelle-loader-seen') === 'true') {
      document.body.classList.add('loaded');
      return;
    }

    setVisible(true);
    sessionStorage.setItem('novelle-loader-seen', 'true');
    document.body.style.overflow = 'hidden';
    document.body.classList.remove('loaded');

    const timer = setTimeout(() => {
      setFadeOut(true);
      document.body.style.overflow = '';
      document.body.classList.add('loaded');
      
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 900);
      return () => clearTimeout(removeTimer);
    }, 2400);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 999999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at 50% 42%, #fffaf1 0%, #f6e6c2 44%, #d9b979 100%)',
      opacity: fadeOut ? 0 : 1,
      transform: fadeOut ? 'scale(1.035)' : 'scale(1)',
      transition: 'transform 1.1s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1)',
      pointerEvents: fadeOut ? 'none' : 'auto',
      overflow: 'hidden'
    }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes loader-spin-logo {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .loader-logo-wrap {
          position: relative;
          width: 96px;
          height: 96px;
          display: grid;
          place-items: center;
        }
        .loader-logo-spin {
          animation: loader-spin-logo 2.8s linear infinite;
          width: 78px;
          height: 78px;
          object-fit: contain;
          transition: opacity 0.85s ease-in-out;
          opacity: ${fadeOut ? 0 : 1};
          filter: drop-shadow(0 18px 32px rgba(99, 59, 44, 0.18));
        }
        /* Reveal website contents smoothly by sliding up and fading in */
        main {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 1.8s cubic-bezier(0.22, 1, 0.36, 1), transform 1.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        body.loaded main {
          opacity: 1;
          transform: translateY(0);
        }
      `}} />
      <div className="loader-logo-wrap">
        <img 
          src="/logos/gold-logomark.png" 
          alt="NOVELLE" 
          className="loader-logo-spin" 
        />
      </div>
    </div>
  );
}
