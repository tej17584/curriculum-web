import { Fragment } from 'react';
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
          <div key={`${job.title}-${job.period}`}>
            <Card className='border-border rounded-none border-x-0 border-t-2 border-b-0 bg-transparent p-0 pt-7 shadow-none'>
              <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
                <div>
                  <h3 className='text-foreground font-serif text-2xl font-semibold'>
                    {job.title}
                  </h3>
                  <p className='font-serif text-lg'>
                    {job.companies.map((company, index) => (
                      <Fragment key={company.name}>
                        {index > 0 && (
                          <span className='text-muted-foreground'>
                            {index === job.companies.length - 1 ? ' & ' : ', '}
                          </span>
                        )}
                        {company.url ? (
                          <Link
                            href={company.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-primary focus-visible:outline-ring inline-flex items-center gap-1 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4'
                          >
                            {company.name}
                            <ExternalLink
                              aria-hidden='true'
                              className='size-3.5'
                            />
                          </Link>
                        ) : (
                          <span className='text-foreground'>
                            {company.name}
                          </span>
                        )}
                      </Fragment>
                    ))}
                  </p>
                </div>
                <span className='text-muted-foreground shrink-0 font-mono text-xs tracking-[0.12em] uppercase'>
                  {job.period}
                </span>
              </div>
              <p className='text-foreground font-serif text-lg leading-relaxed'>
                {job.description}
              </p>
              <p className='text-foreground font-serif text-lg leading-relaxed'>
                {job.description2}
              </p>
              <div className='flex flex-wrap gap-2'>
                {job.tags.map(tag => (
                  <TechBadge
                    key={tag}
                    name={tag}
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
