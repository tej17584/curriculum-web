'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { Dictionary } from '@/hooks/getDictionary';

interface BookLoaderProps {
  onComplete: () => void;
  dict: Dictionary;
}

export const INTRO_OPEN_DELAY_MS = 1100;
export const INTRO_ZOOM_DELAY_MS = 2150;
export const INTRO_DURATION_MS = 2600;

type Phase = 'closed' | 'open' | 'zoom';

const editorialEase = [0.22, 1, 0.36, 1] as const;
const pageTurnEase = [0.65, 0, 0.35, 1] as const;
const leafCount = 3;
const spreadMargin = 32;

function pageBackground(side: 'left' | 'right'): string {
  const gutter = side === 'right' ? 'to right' : 'to left';
  return `linear-gradient(${gutter}, oklch(0.3 0.03 50 / 0.22), transparent 14%), var(--book-page)`;
}

export function BookLoader({ onComplete, dict }: BookLoaderProps) {
  const reduceMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>('closed');
  const [spreadScale, setSpreadScale] = useState(1);
  const bookRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  const doneRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      onCompleteRef.current();
    };

    if (reduceMotion) {
      finish();
      return;
    }

    const openTimer = setTimeout(() => {
      const bookWidth = bookRef.current?.offsetWidth ?? 0;
      if (bookWidth > 0) {
        setSpreadScale(
          Math.min(1, (window.innerWidth - spreadMargin) / (bookWidth * 2))
        );
      }
      setPhase('open');
    }, INTRO_OPEN_DELAY_MS);
    const zoomTimer = setTimeout(() => setPhase('zoom'), INTRO_ZOOM_DELAY_MS);
    const doneTimer = setTimeout(finish, INTRO_DURATION_MS);
    window.addEventListener('keydown', finish);
    window.addEventListener('pointerdown', finish);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(zoomTimer);
      clearTimeout(doneTimer);
      window.removeEventListener('keydown', finish);
      window.removeEventListener('pointerdown', finish);
    };
  }, [reduceMotion]);

  const isOpen = phase !== 'closed';

  return (
    <div
      className='book-loader bg-background fixed inset-0 flex items-center justify-center overflow-hidden px-6'
      role='status'
      aria-live='polite'
      aria-busy='true'
      aria-label={dict.bookLoader.loading}
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 45%, color-mix(in oklch, var(--book-gilding) 14%, transparent), transparent 70%)',
        }}
      />

      <div
        className='book-loader-book relative w-full max-w-[17rem] sm:max-w-[20rem]'
        style={{ perspective: '1800px' }}
      >
        <motion.div
          ref={bookRef}
          initial={{ opacity: 0, y: 40, rotateX: 22, scale: 0.9 }}
          animate={
            phase === 'zoom'
              ? {
                  opacity: 0,
                  y: 0,
                  rotateX: 0,
                  scale: spreadScale * 1.12,
                  x: '50%',
                }
              : {
                  opacity: 1,
                  y: 0,
                  rotateX: isOpen ? 0 : 8,
                  scale: isOpen ? spreadScale : 1,
                  x: isOpen ? '50%' : '0%',
                }
          }
          transition={
            phase === 'zoom'
              ? { duration: 0.45, ease: editorialEase }
              : isOpen
                ? { duration: 0.9, ease: pageTurnEase }
                : { duration: 0.7, ease: editorialEase }
          }
          className='relative aspect-[3/4] w-full'
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            aria-hidden='true'
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: isOpen ? 2 : 1 }}
            transition={{ duration: 0.9, ease: editorialEase }}
            className='absolute -bottom-8 left-[5%] h-8 w-[90%] rounded-[50%] blur-xl'
            style={{ background: 'var(--book-shadow)', originX: 0.95 }}
          />

          <div
            aria-hidden='true'
            className='absolute inset-0 border border-[var(--book-edge)]'
            style={{ background: 'var(--book-cover-back)' }}
          />
          <div
            aria-hidden='true'
            className='absolute top-1 right-[-5px] bottom-1 w-[6px]'
            style={{
              background:
                'repeating-linear-gradient(90deg, var(--book-page) 0 1px, var(--book-edge) 1px 2px)',
            }}
          />

          <div
            className='absolute inset-y-1 right-1 left-0 flex flex-col justify-center gap-3 border border-[var(--book-edge)] px-8 sm:px-10'
            style={{ background: pageBackground('right') }}
          >
            {[92, 78, 88, 64, 84, 52].map((width, index) => (
              <motion.span
                key={width}
                aria-hidden='true'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isOpen ? 1 : 0 }}
                transition={{
                  duration: 0.5,
                  delay: isOpen ? 0.55 + index * 0.06 : 0,
                  ease: editorialEase,
                }}
                className='block h-[3px] origin-left'
                style={{ width: `${width}%`, background: 'var(--book-ink)' }}
              />
            ))}
            <p className='mt-4 font-serif text-sm text-[oklch(0.4_0.04_55)] italic'>
              {dict.bookLoader.loading}
            </p>
          </div>

          {Array.from({ length: leafCount }, (_, index) => (
            <motion.div
              key={index}
              aria-hidden='true'
              initial={false}
              animate={{ rotateY: isOpen ? -176 + index * 3 : 0 }}
              transition={{
                duration: 0.8,
                delay: isOpen ? 0.12 + index * 0.09 : 0,
                ease: pageTurnEase,
              }}
              className='absolute inset-y-1 right-1 left-0'
              style={{
                transformOrigin: 'left center',
                transformStyle: 'preserve-3d',
                translateZ: 1 + index,
              }}
            >
              <div
                className='absolute inset-0 border border-[var(--book-edge)]'
                style={{
                  background: pageBackground('right'),
                  backfaceVisibility: 'hidden',
                }}
              />
              <div
                className='absolute inset-0 flex flex-col items-center justify-center gap-3 border border-[var(--book-edge)]'
                style={{
                  background: pageBackground('left'),
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                {index === leafCount - 1 && (
                  <>
                    <span className='font-serif text-5xl font-bold text-[oklch(0.5_0.07_60)]'>
                      AT
                    </span>
                    <span className='h-px w-10 bg-[oklch(0.5_0.07_60)]' />
                  </>
                )}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={false}
            animate={{
              rotateY: isOpen ? -178 : 0,
              translateZ: isOpen ? 0 : leafCount + 2,
            }}
            transition={{ duration: 0.95, ease: pageTurnEase }}
            className='absolute inset-0'
            style={{
              transformOrigin: 'left center',
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              className='absolute inset-0 overflow-hidden border border-[var(--book-gilding-muted)] p-4 sm:p-5'
              style={{
                background: 'var(--book-cover)',
                boxShadow: '0 1.75rem 3.5rem var(--book-shadow)',
                backfaceVisibility: 'hidden',
              }}
            >
              <div
                aria-hidden='true'
                className='absolute top-0 bottom-0 left-0 w-4 sm:w-5'
                style={{ background: 'var(--book-spine)' }}
              />
              <div className='flex h-full flex-col items-center justify-center border border-[var(--book-gilding-muted)] px-5 text-center sm:px-8'>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35,
                    ease: editorialEase,
                  }}
                  className='h-px w-16 bg-[var(--book-gilding)]'
                />
                <motion.p
                  initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.6,
                    delay: 0.45,
                    ease: editorialEase,
                  }}
                  className='mt-6 font-serif text-4xl leading-tight font-bold text-[var(--book-gilding)] sm:text-[2.75rem]'
                >
                  {dict.bookLoader.title}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.65,
                    ease: editorialEase,
                  }}
                  className='mt-4 font-serif text-lg text-[var(--book-gilding-muted)]'
                >
                  {dict.bookLoader.subtitle}
                </motion.p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.35,
                    ease: editorialEase,
                  }}
                  className='mt-6 h-px w-16 bg-[var(--book-gilding)]'
                />
              </div>
              <motion.div
                aria-hidden='true'
                initial={{ x: '-120%' }}
                animate={{ x: '220%' }}
                transition={{ duration: 0.9, delay: 0.7, ease: pageTurnEase }}
                className='pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12'
                style={{
                  background:
                    'linear-gradient(90deg, transparent, color-mix(in oklch, var(--book-gilding) 22%, transparent), transparent)',
                }}
              />
              <motion.div
                aria-hidden='true'
                initial={false}
                animate={{ opacity: isOpen ? 0.55 : 0 }}
                transition={{ duration: 0.5, ease: pageTurnEase }}
                className='pointer-events-none absolute inset-0 bg-black'
              />
            </div>

            <div
              aria-hidden='true'
              className='absolute inset-0 border border-[var(--book-edge)]'
              style={{
                background: 'var(--book-cover-back)',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
