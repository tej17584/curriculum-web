'use client';

import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import {
  containerVariants,
  itemVariants,
  illustrationVariants,
} from '@/lib/motion-variants';
import type { Dictionary } from '@/hooks/getDictionary';
import Link from 'next/link';

interface Chapter5EducationProps {
  dict: Dictionary;
}

export function Chapter5Education({ dict }: Chapter5EducationProps) {
  return (
    <section className='mb-12'>
      <motion.h2
        variants={itemVariants}
        initial='hidden'
        animate='visible'
        className='text-foreground mb-8 font-serif text-3xl font-semibold tracking-wide'
      >
        {dict.chapters.education}
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='mt-8 space-y-6'
      >
        {dict.education.map((edu, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
          >
            <Card
              className={`bg-card border-l-4 p-8 shadow-sm transition-all hover:shadow-md dark:shadow-md dark:shadow-black/20 ${
                index === 0 ? 'border-l-primary/70' : 'border-l-muted/50'
              }`}
            >
              <div className='mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
                <div>
                  <h3 className='text-foreground font-serif text-2xl font-semibold'>
                    {edu.degree}
                  </h3>
                  <Link
                    href={edu.universityUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary inline-flex items-center gap-1 font-serif text-lg hover:underline'
                  >
                    {edu.university}
                    <ExternalLink className='h-4 w-4' />
                  </Link>
                </div>
                <span className='text-muted-foreground font-serif text-base italic'>
                  {edu.period}
                </span>
              </div>
              <p className='text-muted-foreground font-serif text-base leading-relaxed'>
                {edu.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={illustrationVariants}
        initial='hidden'
        animate='visible'
        className='mt-16 flex justify-center'
      >
        <div className='relative w-full max-w-sm lg:max-w-[640px]'>
          <div className='absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent dark:from-primary/10' />
          <img
            src='/Chapter5.png'
            alt='Graduation cap with books in library setting'
            className='relative w-full opacity-90 grayscale transition-all hover:opacity-80 dark:opacity-85 dark:[filter:invert(1)_sepia(0.4)_hue-rotate(10deg)_brightness(1.1)_contrast(1.1)]'
          />
        </div>
      </motion.div>
    </section>
  );
}
