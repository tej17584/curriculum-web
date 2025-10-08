'use client';

import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Dictionary } from '@/hooks/getDictionary';

interface Chapter2ExperienceProps {
  dict: Dictionary;
}

export function Chapter2Experience({ dict }: Chapter2ExperienceProps) {
  return (
    <section className='mb-8'>
      <h2 className='text-foreground mb-6 font-serif text-3xl font-semibold tracking-wide'>
        {dict.chapters.experience}
      </h2>
      <div className='space-y-8'>
        <Card className='border-l-primary bg-card border-l-4 p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg'>
          <div className='mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
            <div>
              <h3 className='text-foreground font-serif text-2xl font-semibold'>
                Software Engineer 3
              </h3>
              <a
                href='https://www.xoom.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary inline-flex items-center gap-1 font-serif text-lg hover:underline'
              >
                Xoom, A PayPal Service
                <ExternalLink className='h-4 w-4' />
              </a>
            </div>
            <span className='text-muted-foreground font-serif text-base italic'>
              Oct 2022 — {dict.common.present}
            </span>
          </div>
          <p className='text-muted-foreground mb-4 font-serif text-base leading-relaxed'>
            Working as a Software Engineer at Xoom, a PayPal service,
            contributing to the development and maintenance of financial
            technology solutions that enable international money transfers.
          </p>
          <div className='flex flex-wrap gap-2'>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              JavaScript
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              React
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              PayPal
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              FinTech
            </Badge>
          </div>
        </Card>

        <Card className='border-l-muted bg-card border-l-4 p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg'>
          <div className='mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
            <div>
              <h3 className='text-foreground font-serif text-2xl font-semibold'>
                Software Engineer
              </h3>
              <a
                href='https://www.cognits.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary inline-flex items-center gap-1 font-serif text-lg hover:underline'
              >
                Cognits
                <ExternalLink className='h-4 w-4' />
              </a>
            </div>
            <span className='text-muted-foreground font-serif text-base italic'>
              Aug 2020 — Aug 2022
            </span>
          </div>
          <p className='text-muted-foreground mb-4 font-serif text-base leading-relaxed'>
            Worked as a UI developer on banking projects, utilizing low code
            tools like Visualizer, Mendix and others to deliver efficient
            solutions for financial institutions.
          </p>
          <div className='flex flex-wrap gap-2'>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              UI Development
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              Mendix
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              Visualizer
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              Banking
            </Badge>
          </div>
        </Card>

        <Card className='border-l-muted bg-card border-l-4 p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg'>
          <div className='mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
            <div>
              <h3 className='text-foreground font-serif text-2xl font-semibold'>
                Auxiliary Teacher
              </h3>
              <a
                href='https://www.uvg.edu.gt'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary inline-flex items-center gap-1 font-serif text-lg hover:underline'
              >
                Universidad del Valle de Guatemala
                <ExternalLink className='h-4 w-4' />
              </a>
            </div>
            <span className='text-muted-foreground font-serif text-base italic'>
              Jan 2019 — Dec 2020
            </span>
          </div>
          <p className='text-muted-foreground mb-4 font-serif text-base leading-relaxed'>
            Teaching physics, statistics, mathematics, algorithms and basic
            programming to university students, helping them develop strong
            foundational skills in STEM subjects.
          </p>
          <div className='flex flex-wrap gap-2'>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              Teaching
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              Programming
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              Mathematics
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              Physics
            </Badge>
          </div>
        </Card>

        <Card className='border-l-muted bg-card border-l-4 p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg'>
          <div className='mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
            <div>
              <h3 className='text-foreground font-serif text-2xl font-semibold'>
                Software Developer
              </h3>
              <a
                href='https://www.pacifiko.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary inline-flex items-center gap-1 font-serif text-lg hover:underline'
              >
                Pacifiko.com
                <ExternalLink className='h-4 w-4' />
              </a>
            </div>
            <span className='text-muted-foreground font-serif text-base italic'>
              Oct 2019 — Jun 2020
            </span>
          </div>
          <p className='text-muted-foreground mb-4 font-serif text-base leading-relaxed'>
            Worked in several areas including publicity, inventory management,
            finances, and developing features for an e-commerce platform,
            gaining diverse experience in full-stack development.
          </p>
          <div className='flex flex-wrap gap-2'>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              E-Commerce
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              Full-Stack
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              Inventory
            </Badge>
            <Badge
              variant='secondary'
              className='bg-primary/10 text-primary px-3 py-1 text-sm'
            >
              Finance
            </Badge>
          </div>
        </Card>
      </div>

      <div className='mt-12 flex justify-center'>
        <div className='relative w-full max-w-md'>
          <img
            src='/career-desk-illustration.jpg'
            alt='Professional workspace with books and documents'
            className='w-full grayscale transition-all hover:opacity-90'
          />
        </div>
      </div>
    </section>
  );
}
