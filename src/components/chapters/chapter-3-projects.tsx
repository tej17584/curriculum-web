'use client';

import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { TiltCard } from '@/components/amicro/tilt-card';
import { Card } from '@/components/ui/card';
import { TechBadge } from '@/components/tech-badge';
import { containerVariants, itemVariants } from '@/lib/motion-variants';
import type { Dictionary } from '@/hooks/getDictionary';
import Link from 'next/link';
import { PopAuctionIcon } from '@/components/icons/icons';

interface Chapter3ProjectsProps {
  dict: Dictionary;
}

export function Chapter3Projects({ dict }: Chapter3ProjectsProps) {
  return (
    <section className='mb-12'>
      <motion.h2
        variants={itemVariants}
        initial='hidden'
        animate='visible'
        className='text-foreground mb-8 font-serif text-3xl font-semibold tracking-wide'
      >
        {dict.chapters.projects}
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className='grid gap-6 md:grid-cols-2'
      >
        {dict.projects.items.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
          >
            <TiltCard
              className='h-full'
              cardClassName='h-full'
            >
              <Card className='motion-surface bg-card h-full overflow-hidden shadow-sm hover:shadow-lg dark:shadow-md dark:shadow-black/20'>
                <div className='bg-muted aspect-video w-full overflow-hidden'>
                  {project.SVGIcon ? (
                    <div className='from-primary/10 to-primary/5 flex h-full w-full items-center justify-center bg-gradient-to-br p-8'>
                      <PopAuctionIcon className='h-12 w-auto' />
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className='motion-transform h-full w-full object-contain hover:scale-105'
                    />
                  )}
                </div>
                <div className='p-6'>
                  <h3 className='text-foreground mb-2 font-serif text-2xl font-semibold'>
                    <Link
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='motion-colors hover:text-primary inline-flex items-center gap-2'
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
