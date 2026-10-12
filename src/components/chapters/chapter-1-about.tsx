'use client';

import { Code2, Globe, Mail, Phone } from 'lucide-react';
import {
  contactEmail,
  contactPhoneDisplay,
  contactPhoneTel,
} from '@/lib/site';
import { MagneticButton } from '@/components/amicro/magnetic-button';
import { ChapterIllustration } from '@/components/chapter-illustration';
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
                href={`mailto:${contactEmail}`}
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
                href={`tel:${contactPhoneTel}`}
                className='flex items-center gap-2'
              >
                <Phone className='h-4 w-4' />
                <span className='sr-only'>{dict.common.phone}: </span>
                {contactPhoneDisplay}
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
        <div className='text-foreground flex flex-col gap-4 font-serif text-lg leading-relaxed lg:gap-6 lg:text-xl'>
          <p className='first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-none first-letter:font-bold'>
            {dict.about.text1.trim()}
          </p>
          <p>{dict.about.text2}</p>
          <p>{dict.about.text3}</p>
        </div>

        <ChapterIllustration
          src='/Chapter1.png'
          alt={dict.illustrations.chapter1}
        />
      </section>
    </div>
  );
}
