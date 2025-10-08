'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Dictionary } from '@/hooks/getDictionary';

interface Chapter1AboutProps {
  dict: Dictionary;
}

export function Chapter1About({ dict }: Chapter1AboutProps) {
  return (
    <>
      <header className='border-primary/20 mb-8 border-b-2 pb-8'>
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
            <a
              href='mailto:your.email@example.com'
              className='flex items-center gap-2'
            >
              <Mail className='h-4 w-4' />
              {dict.common.email}
            </a>
          </Button>
          <Button
            variant='outline'
            size='sm'
            asChild
            className='border-primary/50 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground border-2 bg-transparent transition-all hover:shadow-md'
          >
            <a
              href='https://github.com/yourusername'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2'
            >
              <Github className='h-4 w-4' />
              {dict.social.github}
            </a>
          </Button>
          <Button
            variant='outline'
            size='sm'
            asChild
            className='border-primary/50 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground border-2 bg-transparent transition-all hover:shadow-md'
          >
            <a
              href='https://linkedin.com/in/alejandrotejada17584'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2'
            >
              <Linkedin className='h-4 w-4' />
              {dict.social.linkedin}
            </a>
          </Button>
        </div>
      </header>

      <section className='mb-16'>
        <h2 className='text-foreground mb-6 font-serif text-3xl font-semibold tracking-wide'>
          {dict.chapters.about}
        </h2>
        <div className='text-foreground space-y-4 font-serif text-lg leading-relaxed'>
          <p className='first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-none first-letter:font-bold'>
            {dict.about.text1}
          </p>
          <p>{dict.about.text2}</p>
        </div>

        <div className='mt-12 flex justify-center'>
          <div className='relative w-full max-w-md'>
            <img
              src='/book-stack-illustration.jpg'
              alt='Stack of books illustration'
              className='w-full grayscale transition-all hover:opacity-90'
            />
          </div>
        </div>
      </section>
    </>
  );
}
