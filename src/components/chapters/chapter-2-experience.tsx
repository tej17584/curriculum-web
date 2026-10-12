import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
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
      <h1 className='text-foreground mb-8 font-serif text-3xl font-semibold tracking-tight'>
        {dict.chapters.experience}
      </h1>
      <div className='flex flex-col gap-10'>
        {dict.experience.jobs.map((job, index) => (
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
                {job.tags.map(tag => (
                  <Badge
                    key={tag}
                    variant='secondary'
                    className='border-primary/30 text-primary rounded-none border bg-transparent px-3 py-1 font-mono text-xs'
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>

      <div className='mt-16 flex justify-center'>
        <figure className='border-border w-full max-w-md border-y py-6 lg:max-w-[720px]'>
          <Image
            src='/illustrations/chapter-2.svg'
            alt={dict.illustrations.chapter2}
            width={400}
            height={280}
            className='w-full opacity-90 grayscale dark:opacity-85 dark:[filter:invert(1)_sepia(0.4)_hue-rotate(10deg)_brightness(1.1)_contrast(1.1)]'
          />
        </figure>
      </div>
    </section>
  );
}
