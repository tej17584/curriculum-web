'use client';

import { useEffect } from 'react';
import type { Dictionary } from '@/hooks/getDictionary';

interface BookLoaderProps {
  onComplete: () => void;
  dict: Dictionary;
}

export function BookLoader({ onComplete, dict }: BookLoaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className='bg-background fixed inset-0 z-50 flex items-center justify-center overflow-hidden'>
      <div className='book-container'>
        <div className='book'>
          {/* Book spine */}
          <div className='book-spine' />

          {/* Left cover */}
          <div className='book-cover book-cover-left'>
            <div className='book-cover-inner'>
              <div className='book-title'>
                <div className='text-center'>
                  <div className='text-background/80 font-serif text-2xl font-bold'>
                    {dict.bookLoader.title}
                  </div>
                  <div className='text-background/60 mt-2 font-serif text-sm'>
                    {dict.bookLoader.subtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right cover */}
          <div className='book-cover book-cover-right'>
            <div className='book-cover-inner' />
          </div>

          {/* Pages */}
          <div className='book-pages'>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className='book-page'
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='absolute bottom-16 left-1/2 -translate-x-1/2'>
        <p className='text-foreground animate-pulse font-serif text-xl sm:text-2xl md:text-3xl'>
          {dict.bookLoader.loading}
        </p>
      </div>
    </div>
  );
}
