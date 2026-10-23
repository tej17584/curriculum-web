import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ChapterIllustration } from '@/components/chapter-illustration';
import type { Dictionary } from '@/hooks/getDictionary';
import Link from 'next/link';

interface Chapter5EducationProps {
  dict: Dictionary;
}

export function Chapter5Education({ dict }: Chapter5EducationProps) {
  return (
    <section className='mb-12'>
      <h1 className='text-foreground mb-8 font-serif text-3xl font-semibold tracking-tight'>
        {dict.chapters.education}
      </h1>
      <div className='mt-8 flex flex-col gap-6'>
        {dict.education.map(edu => (
          <div key={`${edu.degree}-${edu.period}`}>
            <Card className='border-border rounded-none border-x-0 border-t-2 border-b-0 bg-transparent p-0 pt-7 shadow-none'>
              <div className='mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
                <div>
                  <h3 className='text-foreground font-serif text-2xl font-semibold'>
                    {edu.degree}
                  </h3>
                  {edu.universityUrl ? (
                    <Link
                      href={edu.universityUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary focus-visible:outline-ring inline-flex items-center gap-1 font-serif text-lg hover:underline focus-visible:outline-2 focus-visible:outline-offset-4'
                    >
                      {edu.university}
                      <ExternalLink className='size-4' />
                    </Link>
                  ) : (
                    <p className='text-primary font-serif text-lg'>
                      {edu.university}
                    </p>
                  )}
                </div>
                <span className='text-muted-foreground font-mono text-xs tracking-[0.12em] uppercase'>
                  {edu.period}
                </span>
              </div>
              <p className='text-foreground font-serif text-base leading-relaxed'>
                {edu.description}
              </p>
            </Card>
          </div>
        ))}
      </div>

      <ChapterIllustration
        src='/Chapter5.png'
        alt={dict.illustrations.chapter5}
        figureClassName='max-w-sm lg:max-w-[640px]'
      />
    </section>
  );
}
