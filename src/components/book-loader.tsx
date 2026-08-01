'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Dictionary } from '@/hooks/getDictionary';

interface BookLoaderProps {
  onComplete: () => void;
  dict: Dictionary;
}

const editorialEase = [0.22, 1, 0.36, 1] as const;

export function BookLoader({ onComplete, dict }: BookLoaderProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1900);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className='bg-background fixed inset-0 flex items-center justify-center overflow-hidden px-6'>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: editorialEase }}
        className='relative w-full max-w-[19rem] sm:max-w-sm'
      >
        <div
          aria-hidden='true'
          className='absolute -right-1 -bottom-1 -z-10 h-full w-full border border-[var(--book-edge)]'
        />
        <div
          aria-hidden='true'
          className='absolute top-0 bottom-0 left-0 z-10 w-4 sm:w-5'
          style={{ background: 'var(--book-spine)' }}
        />
        <div
          className='relative min-h-[24rem] border border-[var(--book-gilding-muted)] p-4 shadow-2xl sm:min-h-[28rem] sm:p-6'
          style={{
            background: 'var(--book-cover)',
            boxShadow: '0 1.5rem 3rem var(--book-shadow)',
          }}
        >
          <div className='flex min-h-[22rem] flex-col items-center justify-center border border-[var(--book-gilding-muted)] px-6 text-center sm:min-h-[24.75rem] sm:px-10'>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.25, duration: 0.5, ease: editorialEase }}
              className='h-px w-16 bg-[var(--book-gilding)]'
            />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.5, ease: editorialEase }}
              className='mt-7 font-serif text-4xl font-bold tracking-wide text-[var(--book-gilding)] sm:text-5xl'
            >
              {dict.bookLoader.title}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.45 }}
              className='mt-3 font-sans text-xs tracking-[0.18em] text-[var(--book-gilding-muted)] uppercase sm:text-sm'
            >
              {dict.bookLoader.subtitle}
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.78, duration: 0.5, ease: editorialEase }}
              className='mt-7 h-px w-16 bg-[var(--book-gilding)]'
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95, duration: 0.4 }}
              className='mt-8 font-mono text-[0.65rem] tracking-[0.22em] text-[var(--book-gilding-muted)] uppercase'
            >
              {dict.bookLoader.loading}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
