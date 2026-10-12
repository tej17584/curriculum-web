import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ChapterIllustration } from '@/components/chapter-illustration';
import { TechBadge } from '@/components/tech-badge';
import type { Dictionary } from '@/hooks/getDictionary';
import Link from 'next/link';

interface Chapter2ExperienceProps {
  dict: Dictionary;
}

export function Chapter2Experience({ dict }: Chapter2ExperienceProps) {
  return (
    <section className='mb-12'>
      <h1 className='text-foreground mb-8 font-serif text-3xl font-semibold tracking-tight'>
        {dict.chapters.experience}
      </h1>
      <div className='flex flex-col gap-10'>
        {dict.experience.jobs.map(job => (
          <div key={`${job.title}-${job.company}`}>
            <Card className='border-border rounded-none border-x-0 border-t-2 border-b-0 bg-transparent p-0 pt-7 shadow-none'>
              <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
                <div>
                  <h3 className='text-foreground font-serif text-2xl font-semibold'>
                    {job.title}
                  </h3>
                  <Link
                    href={job.companyUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary focus-visible:outline-ring inline-flex items-center gap-1 font-serif text-lg hover:underline focus-visible:outline-2 focus-visible:outline-offset-4'
                  >
                    {job.company}
                    <ExternalLink className='size-4' />
                  </Link>
                </div>
                <span className='text-muted-foreground font-mono text-xs tracking-[0.12em] uppercase'>
                  {job.period}
                </span>
              </div>
              <p className='text-muted-foreground font-serif text-lg leading-relaxed'>
                {job.description}
              </p>
              <p className='text-muted-foreground font-serif text-lg leading-relaxed'>
                {job.description2}
              </p>
              <div className='flex flex-wrap gap-2'>
                {job.tags.map(tag => (
                  <TechBadge
                    key={tag}
                    name={tag}
                    className='border-primary/30 text-primary px-3 py-1'
                  />
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>

      <ChapterIllustration
        src='/Chapter2.png'
        alt={dict.illustrations.chapter2}
        figureClassName='lg:max-w-[720px]'
      />
    </section>
  );
}
