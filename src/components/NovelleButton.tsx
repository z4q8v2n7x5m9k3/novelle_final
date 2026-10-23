'use client';
import React from 'react';
import Link from 'next/link';

interface NovelleButtonProps {
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: 'bronze' | 'light' | 'dark' | 'glass';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function NovelleButton({
  href,
  onClick,
  variant = 'bronze',
  children,
  className = '',
  style = {},
  target,
  rel,
  type = 'button',
  disabled = false
}: NovelleButtonProps) {
  const variantClass = 
    variant === 'light' ? 'btn-premium-light' :
    variant === 'dark' ? 'btn-premium-dark' :
    variant === 'glass' ? 'btn-premium-glass' :
    'btn-premium';

  const combinedClass = `${variantClass} ${className}`.trim();

  const iconElement = (
    <span className="btn-icon-wrapper" aria-hidden="true">
      <img src="/logos/gold-logomark.png" alt="" />
    </span>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('https://wa.me');
    if (isExternal) {
      return (
        <a 
          href={href} 
          className={combinedClass} 
          style={style}
          target={target || (href.startsWith('http') ? '_blank' : undefined)}
          rel={rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined)}
          onClick={onClick}
        >
          {iconElement}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClass} style={style} onClick={onClick}>
        {iconElement}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={combinedClass} 
      style={style} 
      onClick={onClick}
      disabled={disabled}
    >
      {iconElement}
      <span>{children}</span>
    </button>
  );
}
