import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { TechBadge } from '@/components/tech-badge';
import type { Dictionary } from '@/hooks/getDictionary';
import Link from 'next/link';
import { PopAuctionIcon } from '@/components/icons/icons';
import { cn } from '@/lib/utils';

function projectImageClass(image: string) {
  if (image.endsWith('.svg')) {
    return 'object-contain p-10 opacity-80 grayscale dark:invert';
  }
  return 'motion-transform object-cover group-hover:scale-[1.02]';
}

interface Chapter3ProjectsProps {
  dict: Dictionary;
}

export function Chapter3Projects({ dict }: Chapter3ProjectsProps) {
  const projects = dict.projects.items;
  const hasOddCount = projects.length % 2 === 1;

  return (
    <section className='mb-12'>
      <h1 className='text-foreground mb-8 font-serif text-3xl font-semibold tracking-tight'>
        {dict.chapters.projects}
      </h1>
      <div className='grid gap-x-10 gap-y-12 md:grid-cols-2'>
        {projects.map((project, index) => {
          const isWide = hasOddCount && index === projects.length - 1;
          return (
            <Card
              key={project.title}
              className={cn(
                'border-border h-full gap-0 overflow-hidden rounded-none border-x-0 border-t-2 border-b-0 bg-transparent p-0 pt-6 shadow-none',
                isWide && 'md:col-span-2 md:grid md:grid-cols-2 md:gap-10'
              )}
            >
              <div className='group bg-muted border-border relative aspect-video w-full overflow-hidden border'>
                {project.brandLogo === 'popauction' ? (
                  <div
                    role='img'
                    aria-label={project.imageAlt}
                    className='flex h-full w-full items-center justify-center px-6 py-8'
                  >
                    <PopAuctionIcon className='text-foreground h-12 w-full max-w-[240px] opacity-80' />
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                    className={projectImageClass(project.image)}
                    style={{ objectPosition: project.imagePosition }}
                  />
                )}
              </div>
              <div className={cn('pt-6', isWide && 'md:pt-0')}>
                <h3 className='text-foreground mb-2 font-serif text-2xl font-semibold'>
                  <Link
                    href={project.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='motion-colors hover:text-primary focus-visible:outline-ring inline-flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-4'
                  >
                    {project.title}
                    <ExternalLink
                      aria-hidden='true'
                      className='size-4'
                    />
                  </Link>
                </h3>
                <p className='text-foreground mb-4 font-serif text-base leading-relaxed'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map(tag => (
                    <TechBadge
                      key={tag}
                      name={tag}
                    />
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
