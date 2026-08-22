'use client';

import React, { ImgHTMLAttributes, useState } from 'react';

const FALLBACK_IMAGE = '/uploads/blog-placeholder.svg';

type SafeImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallback?: string;
};

export default function SafeImage({ src, fallback = FALLBACK_IMAGE, alt, ...props }: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src || fallback);

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt || ''}
      onError={() => {
        if (currentSrc !== fallback) setCurrentSrc(fallback);
      }}
    />
  );
}
