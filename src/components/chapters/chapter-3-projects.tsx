import { ExternalLink } from 'lucide-react';
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
    <section className='mb-8'>
      <h2 className='text-foreground mb-6 font-serif text-3xl font-semibold tracking-wide'>
        {dict.chapters.projects}
      </h2>
      <div className='grid gap-6 md:grid-cols-2'>
        {dict.projects.items.map((project, index) => (
          <Card
            key={index}
            className='bg-card overflow-hidden shadow-sm transition-all hover:scale-[1.03] hover:shadow-lg'
          >
            <div className='bg-muted aspect-video w-full overflow-hidden'>
              {project.SVGIcon ? (
                <div className='from-primary/10 to-primary/5 flex h-full w-full items-center justify-center bg-gradient-to-br p-8'>
                  <PopAuctionIcon className='h-12 w-auto' />
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className='h-full w-full object-contain transition-all hover:scale-105'
                />
              )}
            </div>
            <div className='p-6'>
              <h3 className='text-foreground mb-2 font-serif text-2xl font-semibold'>
                <Link
                  href={project.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-primary inline-flex items-center gap-2'
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
        ))}
      </div>
    </section>
  );
}
