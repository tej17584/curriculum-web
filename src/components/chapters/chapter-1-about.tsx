'use client';

import { Code2, Globe, Mail } from 'lucide-react';
import Image from 'next/image';
import { MagneticButton } from '@/components/amicro/magnetic-button';
import { Button } from '@/components/ui/button';
import type { Dictionary } from '@/hooks/getDictionary';
import Link from 'next/link';

interface Chapter1AboutProps {
  dict: Dictionary;
}

export function Chapter1About({ dict }: Chapter1AboutProps) {
  return (
    <div>
      <header className='border-border mb-10 border-b pb-10'>
        <h1 className='text-foreground mb-3 font-serif text-5xl font-bold tracking-tight lg:text-6xl'>
          {dict.profile.name}
        </h1>
        <p className='text-primary mb-5 font-mono text-xs font-medium tracking-[0.16em] uppercase lg:text-sm'>
          {dict.profile.title}
        </p>
        <p className='text-muted-foreground mb-6 max-w-2xl font-serif text-lg leading-relaxed'>
          {dict.profile.bio}
        </p>
        <div className='flex flex-wrap gap-3'>
          <MagneticButton>
            <Button
              variant='outline'
              size='sm'
              asChild
              className='motion-surface border-border text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground rounded-none border bg-transparent'
            >
              <Link
                href='mailto:alejandro.tejada.ui@gmail.com'
                className='flex items-center gap-2'
              >
                <Mail className='h-4 w-4' />
                {dict.common.email}
              </Link>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button
              variant='outline'
              size='sm'
              asChild
              className='motion-surface border-border text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground rounded-none border bg-transparent'
            >
              <Link
                href='https://github.com/tej17584'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2'
              >
                <Code2 className='h-4 w-4' />
                {dict.social.github}
              </Link>
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button
              variant='outline'
              size='sm'
              asChild
              className='motion-surface border-border text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground rounded-none border bg-transparent'
            >
              <Link
                href='https://linkedin.com/in/alejandrotejada17584'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2'
              >
                <Globe className='h-4 w-4' />
                {dict.social.linkedin}
              </Link>
            </Button>
          </MagneticButton>
        </div>
      </header>

      <section className='mb-16'>
        <h2 className='text-foreground mb-8 font-serif text-3xl font-semibold tracking-tight'>
          {dict.chapters.about}
        </h2>
        <div className='text-foreground space-y-4 font-serif text-lg leading-relaxed lg:space-y-6 lg:text-xl'>
          <p className='first-letter:text-primary whitespace-pre-line first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-none first-letter:font-bold'>
            {dict.about.text1}
          </p>
          <p>{dict.about.text2}</p>
          <p>{dict.about.text3}</p>
        </div>

        <div className='mt-16 flex justify-center'>
          <figure className='border-border w-full max-w-md border-y py-6 lg:max-w-[740px]'>
            <Image
              src='/Chapter1.png'
              alt='Stack of books illustration'
              width={1024}
              height={1024}
              className='w-full opacity-90 grayscale dark:opacity-85 dark:[filter:invert(1)_sepia(0.4)_hue-rotate(10deg)_brightness(1.1)_contrast(1.1)]'
            />
          </figure>
        </div>
      </section>
    </div>
  );
}
