'use client';

import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { TiltCard } from '@/components/amicro/tilt-card';
import { Card } from '@/components/ui/card';
import { TechBadge } from '@/components/tech-badge';
import type { Dictionary } from '@/hooks/getDictionary';
import Link from 'next/link';
import { PopAuctionIcon } from '@/components/icons/icons';

interface Chapter3ProjectsProps {
  dict: Dictionary;
}

export function Chapter3Projects({ dict }: Chapter3ProjectsProps) {
  return (
    <section className='mb-12'>
      <h2 className='text-foreground mb-8 font-serif text-3xl font-semibold tracking-tight'>
        {dict.chapters.projects}
      </h2>
      <div className='grid gap-x-10 gap-y-12 md:grid-cols-2'>
        {dict.projects.items.map((project, index) => (
          <div key={index}>
            <TiltCard
              className='h-full'
              cardClassName='h-full'
            >
              <Card className='h-full overflow-hidden rounded-none border-x-0 border-t-2 border-b-0 bg-transparent shadow-none'>
                <div className='bg-muted border-border relative aspect-video w-full overflow-hidden border-b'>
                  {project.SVGIcon ? (
                    <div className='from-primary/10 to-primary/5 flex h-full w-full items-center justify-center bg-gradient-to-br p-8'>
                      <PopAuctionIcon className='h-12 w-auto' />
                    </div>
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes='(min-width: 768px) 50vw, 100vw'
                      className='object-contain'
                    />
                  )}
                </div>
                <div className='pt-6'>
                  <h3 className='text-foreground mb-2 font-serif text-2xl font-semibold'>
                    <Link
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='motion-colors hover:text-primary focus-visible:outline-ring inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4'
                    >
                      {project.title}
                      <ExternalLink className='h-4 w-4' />
                    </Link>
                  </h3>
                  <p className='text-muted-foreground mb-4 font-serif text-base leading-relaxed'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag, tagIndex) => (
                      <TechBadge
                        key={tagIndex}
                        name={tag}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
}
