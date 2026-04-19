'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Dictionary } from '@/hooks/getDictionary';

interface BookLoaderProps {
  onComplete: () => void;
  dict: Dictionary;
}

const editorialEase = [0.25, 0.46, 0.45, 0.94] as const;

const gold = 'rgba(212,175,115,';

export function BookLoader({ onComplete, dict }: BookLoaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className='bg-background fixed inset-0 z-50 flex items-center justify-center overflow-hidden'>
      {/* Book with subtle 3D tilt */}
      <motion.div
        initial={{ scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: editorialEase }}
        className='relative'
        style={{ perspective: '1200px' }}
      >
        {/* Drop shadow on surface */}
        <div className='absolute -bottom-5 left-1/2 -z-10 h-6 w-[80%] -translate-x-1/2 rounded-[50%] bg-black/12 blur-xl dark:bg-black/35 sm:-bottom-7 sm:h-8' />

        {/* Book body */}
        <motion.div
          initial={{ rotateY: -4, rotateX: 2 }}
          animate={{ rotateY: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: editorialEase }}
          className='relative'
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Page edges - right side */}
          <div className='absolute right-[-5px] top-[4px] z-[1] sm:right-[-7px] sm:top-[5px] md:right-[-8px] md:top-[6px]'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='absolute h-[372px] sm:h-[472px] md:h-[548px]'
                style={{
                  right: `${i * 1.2}px`,
                  width: '1px',
                  background:
                    i % 2 === 0
                      ? 'rgba(230,220,200,0.8)'
                      : 'rgba(215,205,185,0.5)',
                }}
              />
            ))}
          </div>

          {/* Page edges - bottom */}
          <div className='absolute bottom-[-5px] left-[10px] right-[10px] z-[1] sm:bottom-[-7px] sm:left-[12px] sm:right-[12px] md:bottom-[-8px]'>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className='absolute w-full'
                style={{
                  bottom: `${i * 1.2}px`,
                  height: '1px',
                  background:
                    i % 2 === 0
                      ? 'rgba(230,220,200,0.8)'
                      : 'rgba(215,205,185,0.5)',
                }}
              />
            ))}
          </div>

          {/* Spine - left side */}
          <div
            className='absolute left-0 top-0 z-[3] h-[380px] w-[16px] rounded-l-sm sm:h-[480px] sm:w-[20px] md:h-[560px] md:w-[24px]'
            style={{
              background:
                'linear-gradient(90deg, #7a5f3d 0%, #a07d52 35%, #8b6d47 65%, #7a5f3d 100%)',
              boxShadow:
                'inset -2px 0 6px rgba(0,0,0,0.15), inset 2px 0 4px rgba(255,255,255,0.08), 2px 0 8px rgba(0,0,0,0.15)',
            }}
          >
            {/* Spine ridges */}
            <div
              className='absolute inset-x-1 top-[12%] h-px'
              style={{ background: 'rgba(212,175,115,0.3)' }}
            />
            <div
              className='absolute inset-x-1 top-[88%] h-px'
              style={{ background: 'rgba(212,175,115,0.3)' }}
            />
            <div
              className='absolute inset-x-1 top-[50%] h-px'
              style={{ background: 'rgba(212,175,115,0.2)' }}
            />
          </div>

          {/* Main cover face */}
          <div
            className='relative z-[2] flex h-[380px] w-[280px] flex-col items-center justify-center overflow-hidden rounded-r-sm sm:h-[480px] sm:w-[340px] md:h-[560px] md:w-[400px]'
            style={{
              marginLeft: '16px',
              background:
                'linear-gradient(155deg, #6b4c2a 0%, #5a3e22 20%, #4e3420 45%, #5a3e22 70%, #6b4c2a 100%)',
              boxShadow:
                '6px 6px 24px rgba(0,0,0,0.3), inset 0 0 40px rgba(0,0,0,0.2), inset 0 0 80px rgba(255,255,255,0.02)',
              border: '1px solid rgba(139,109,71,0.3)',
              borderLeft: 'none',
            }}
          >
            {/* Outer embossed frame */}
            <div
              className='absolute inset-3 rounded-sm sm:inset-5 md:inset-6'
              style={{
                border: `1px solid ${gold}0.22)`,
                boxShadow: `inset 0 0 20px rgba(0,0,0,0.08), 0 0 1px ${gold}0.15)`,
              }}
            />
            {/* Inner decorative frame */}
            <div
              className='absolute inset-5 rounded-sm sm:inset-8 md:inset-10'
              style={{
                border: `1px solid ${gold}0.12)`,
              }}
            />

            {/* Cover content - staggered fade in */}
            <div className='relative flex flex-col items-center gap-3 px-6 sm:gap-4 sm:px-8'>
              {/* Top ornament */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: editorialEase }}
                className='h-px w-14 origin-center sm:w-20'
                style={{ background: `${gold}0.45)` }}
              />

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7, ease: editorialEase }}
                className='font-serif text-4xl font-bold tracking-wider sm:text-5xl md:text-6xl'
                style={{ color: `${gold}0.9)` }}
              >
                {dict.bookLoader.title}
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.7, ease: editorialEase }}
                className='font-serif text-base italic sm:text-lg md:text-xl'
                style={{ color: `${gold}0.6)` }}
              >
                {dict.bookLoader.subtitle}
              </motion.div>

              {/* Bottom ornament */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{
                  delay: 1.1,
                  duration: 0.6,
                  ease: editorialEase,
                }}
                className='h-px w-14 origin-center sm:w-20'
                style={{ background: `${gold}0.45)` }}
              />

              {/* Decorative diamond */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.3,
                  duration: 0.5,
                  ease: editorialEase,
                }}
                className='mt-1 h-2 w-2 rotate-45 sm:mt-3 sm:h-2.5 sm:w-2.5'
                style={{ background: `${gold}0.35)` }}
              />

              {/* Loading text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className='mt-4 font-serif text-xs tracking-[0.25em] uppercase sm:mt-6 sm:text-sm'
                style={{ color: `${gold}0.4)` }}
              >
                {dict.bookLoader.loading}
              </motion.p>
            </div>
          </div>

          {/* Back cover (slightly visible behind, gives depth) */}
          <div
            className='absolute left-0 top-[3px] z-0 h-[380px] w-full rounded-sm sm:top-[4px] sm:h-[480px] md:top-[5px] md:h-[560px]'
            style={{
              background:
                'linear-gradient(145deg, #4e3420 0%, #3e2a18 50%, #4e3420 100%)',
              boxShadow: '3px 5px 20px rgba(0,0,0,0.25)',
              border: '1px solid rgba(100,75,45,0.2)',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
