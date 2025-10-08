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
        {dict.experience.jobs.map((job, index) => (
          <Card
            key={index}
            className={`bg-card border-l-4 p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg ${
              index === 0 ? 'border-l-primary' : 'border-l-muted'
            }`}
          >
            <div className='mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
              <div>
                <h3 className='text-foreground font-serif text-2xl font-semibold'>
                  {job.title}
                </h3>
                <a
                  href={job.companyUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary inline-flex items-center gap-1 font-serif text-lg hover:underline'
                >
                  {job.company}
                  <ExternalLink className='h-4 w-4' />
                </a>
              </div>
              <span className='text-muted-foreground font-serif text-base italic'>
                {job.period}
                {index === 0 && ` — ${dict.common.present}`}
              </span>
            </div>
            <p className='text-muted-foreground mb-4 font-serif text-base leading-relaxed'>
              {job.description}
            </p>
            <div className='flex flex-wrap gap-2'>
              {job.tags.map((tag, tagIndex) => (
                <Badge
                  key={tagIndex}
                  variant='secondary'
                  className='bg-primary/10 text-primary px-3 py-1 text-sm'
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
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
