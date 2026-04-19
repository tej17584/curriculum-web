'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  containerVariants,
  itemVariants,
  illustrationVariants,
} from '@/lib/motion-variants';
import type { Dictionary } from '@/hooks/getDictionary';
import Link from 'next/link';

interface Chapter1AboutProps {
  dict: Dictionary;
}

export function Chapter1About({ dict }: Chapter1AboutProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.header
        variants={itemVariants}
        className='border-primary/20 mb-8 border-b-2 pb-8'
      >
        <h1 className='text-foreground mb-3 font-serif text-5xl font-bold tracking-tight lg:text-6xl'>
          {dict.profile.name}
        </h1>
        <p className='text-primary mb-4 font-serif text-xl italic lg:text-2xl'>
          {dict.profile.title}
        </p>
        <p className='text-muted-foreground mb-6 max-w-2xl font-serif text-lg leading-relaxed'>
          {dict.profile.bio}
        </p>
        <div className='flex flex-wrap gap-3'>
          <Button
            variant='outline'
            size='sm'
            asChild
            className='border-primary/50 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground border-2 bg-transparent transition-all hover:shadow-md'
          >
            <Link
              href='mailto:alejandro.tejada.ui@gmail.com'
              className='flex items-center gap-2'
            >
              <Mail className='h-4 w-4' />
              {dict.common.email}
            </Link>
          </Button>
          <Button
            variant='outline'
            size='sm'
            asChild
            className='border-primary/50 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground border-2 bg-transparent transition-all hover:shadow-md'
          >
            <Link
              href='https://github.com/tej17584'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2'
            >
              <Github className='h-4 w-4' />
              {dict.social.github}
            </Link>
          </Button>
          <Button
            variant='outline'
            size='sm'
            asChild
            className='border-primary/50 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground border-2 bg-transparent transition-all hover:shadow-md'
          >
            <Link
              href='https://linkedin.com/in/alejandrotejada17584'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2'
            >
              <Linkedin className='h-4 w-4' />
              {dict.social.linkedin}
            </Link>
          </Button>
        </div>
      </motion.header>

      <motion.section
        variants={itemVariants}
        className='mb-16'
      >
        <h2 className='text-foreground mb-8 font-serif text-3xl font-semibold tracking-wide'>
          {dict.chapters.about}
        </h2>
        <div className='text-foreground space-y-4 font-serif text-lg leading-relaxed lg:space-y-6 lg:text-xl'>
          <p className='first-letter:text-primary whitespace-pre-line first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-none first-letter:font-bold'>
            {dict.about.text1}
          </p>
          <p>{dict.about.text2}</p>
          <p>{dict.about.text3}</p>
        </div>

        <motion.div
          variants={illustrationVariants}
          initial='hidden'
          animate='visible'
          className='mt-16 flex justify-center'
        >
          <div className='relative w-full max-w-md lg:max-w-[740px]'>
            <div className='absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent dark:from-primary/10' />
            <img
              src='/Chapter1.png'
              alt='Stack of books illustration'
              className='relative w-full opacity-90 grayscale transition-all hover:opacity-80 dark:opacity-85 dark:[filter:invert(1)_sepia(0.4)_hue-rotate(10deg)_brightness(1.1)_contrast(1.1)]'
            />
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
