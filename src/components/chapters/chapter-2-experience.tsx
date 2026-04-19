import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Dictionary } from '@/hooks/getDictionary';
import Link from 'next/link';

interface Chapter2ExperienceProps {
  dict: Dictionary;
}

export function Chapter2Experience({ dict }: Chapter2ExperienceProps) {
  return (
    <section className='mb-12'>
      <h2 className='text-foreground mb-8 font-serif text-3xl font-semibold tracking-wide'>
        {dict.chapters.experience}
      </h2>
      <div className='space-y-10'>
        {dict.experience.jobs.map((job, index) => (
          <Card
            key={index}
            className={`bg-card border-l-4 p-8 shadow-sm transition-all hover:shadow-lg dark:shadow-md dark:shadow-black/20 ${
              index === 0 ? 'border-l-primary/70' : 'border-l-muted/50'
            }`}
          >
            <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
              <div>
                <h3 className='text-foreground font-serif text-2xl font-semibold'>
                  {job.title}
                </h3>
                <Link
                  href={job.companyUrl}
                  target='_blank'
                  className='text-primary inline-flex items-center gap-1 font-serif text-lg hover:underline'
                >
                  {job.company}
                  <ExternalLink className='h-4 w-4' />
                </Link>
              </div>
              <span className='text-muted-foreground font-serif text-base italic'>
                {job.period}
                {index === 0 && ` — ${dict.common.present}`}
              </span>
            </div>
            <p className='text-muted-foreground font-serif text-lg leading-relaxed'>
              {job.description}
            </p>
            <p className='text-muted-foreground font-serif text-lg leading-relaxed'>
              {job.description2}
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

      <div className='mt-16 flex justify-center'>
        <div className='relative w-full max-w-md lg:max-w-[720px]'>
          <div className='from-primary/5 dark:from-primary/10 absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] via-transparent to-transparent' />
          <img
            src='/Chapter2.png'
            alt='Professional workspace with books and documents'
            className='relative w-full opacity-90 grayscale transition-all hover:opacity-80 dark:opacity-85 dark:[filter:invert(1)_sepia(0.4)_hue-rotate(10deg)_brightness(1.1)_contrast(1.1)]'
          />
        </div>
      </div>
    </section>
  );
}
