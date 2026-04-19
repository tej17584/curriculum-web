'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Dictionary } from '@/hooks/getDictionary';

interface BookLoaderProps {
  onComplete: () => void;
  dict: Dictionary;
}

const editorialEase = [0.25, 0.46, 0.45, 0.94] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: editorialEase },
  },
};

const ruleVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: editorialEase },
  },
};

export function BookLoader({ onComplete, dict }: BookLoaderProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className='bg-background fixed inset-0 z-50 flex items-center justify-center overflow-hidden'>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='flex flex-col items-center gap-4 px-8 text-center'
      >
        <motion.div
          variants={ruleVariants}
          className='bg-primary/40 h-px w-24 origin-center'
        />

        <motion.h1
          variants={itemVariants}
          className='text-foreground font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'
        >
          {dict.bookLoader.title}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className='text-primary font-serif text-lg italic sm:text-xl'
        >
          {dict.bookLoader.subtitle}
        </motion.p>

        <motion.div
          variants={ruleVariants}
          className='bg-primary/40 h-px w-24 origin-center'
        />

        <motion.p
          variants={itemVariants}
          className='text-muted-foreground mt-4 font-serif text-sm tracking-widest uppercase'
        >
          {dict.bookLoader.loading}
        </motion.p>
      </motion.div>
    </div>
  );
}
