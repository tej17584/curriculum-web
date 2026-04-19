import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import type { Dictionary } from '@/hooks/getDictionary';
import Link from 'next/link';

interface Chapter5EducationProps {
  dict: Dictionary;
}

export function Chapter5Education({ dict }: Chapter5EducationProps) {
  return (
    <section className='mb-8'>
      <h2 className='text-foreground font-serif text-3xl font-semibold tracking-wide'>
        {dict.chapters.education}
      </h2>
      <div className='mt-8 space-y-6'>
        {dict.education.map((edu, index) => (
          <Card
            key={index}
            className={`bg-card border-l-4 p-8 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg ${
              index === 0 ? 'border-l-primary' : 'border-l-muted'
            }`}
          >
            <div className='mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
              <div>
                <h3 className='text-foreground font-serif text-2xl font-semibold'>
                  {edu.degree}
                </h3>
                <Link
                  href={edu.universityUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-primary inline-flex items-center gap-1 font-serif text-lg hover:underline'
                >
                  {edu.university}
                  <ExternalLink className='h-4 w-4' />
                </Link>
              </div>
              <span className='text-muted-foreground font-serif text-base italic'>
                {edu.period}
              </span>
            </div>
            <p className='text-muted-foreground font-serif text-base leading-relaxed'>
              {edu.description}
            </p>
          </Card>
        ))}
      </div>

      <div className='mt-12 flex justify-center'>
        <div className='relative w-full max-w-md'>
          <img
            src='/Chapter5.png'
            alt='Graduation cap with books in library setting'
            className='illustration w-full grayscale transition-all hover:opacity-90 dark:[filter:invert(1)_brightness(1.3)_contrast(1.2)]'
          />
        </div>
      </div>
    </section>
  );
}
