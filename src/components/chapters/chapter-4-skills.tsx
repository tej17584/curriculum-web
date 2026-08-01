'use client';

import { Code2, BookOpen, Wrench, Globe, Award } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import type { Dictionary } from '@/hooks/getDictionary';

interface Chapter4SkillsProps {
  dict: Dictionary;
}

export function Chapter4Skills({ dict }: Chapter4SkillsProps) {
  return (
    <>
      <section className='mb-16'>
        <h2 className='text-foreground mb-6 font-serif text-3xl font-semibold tracking-tight'>
          {dict.chapters.skills}
        </h2>
        <div className='divide-border space-y-0 divide-y'>
          <div>
            <Card className='rounded-none border-0 bg-transparent px-0 py-7 shadow-none'>
              <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
                <Code2 className='text-primary h-6 w-6' />
                {dict.skills.programmingLanguages}
              </h3>
              <div className='flex flex-wrap gap-3'>
                {dict.skills.programmingList.map((skill, index) => (
                  <Badge
                    key={index}
                    className='motion-colors border-border text-primary hover:border-primary/60 rounded-none border bg-transparent px-3 py-1.5 font-mono text-xs'
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          <div>
            <Card className='rounded-none border-0 bg-transparent px-0 py-7 shadow-none'>
              <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
                <BookOpen className='text-primary h-6 w-6' />
                {dict.skills.frameworks}
              </h3>
              <div className='flex flex-wrap gap-3'>
                {dict.skills.frameworksList.map((framework, index) => (
                  <Badge
                    key={index}
                    className='motion-colors border-border text-primary hover:border-primary/60 rounded-none border bg-transparent px-3 py-1.5 font-mono text-xs'
                  >
                    {framework}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          <div>
            <Card className='rounded-none border-0 bg-transparent px-0 py-7 shadow-none'>
              <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
                <Wrench className='text-primary h-6 w-6' />
                {dict.skills.tools}
              </h3>
              <div className='flex flex-wrap gap-3'>
                {dict.skills.toolsList.map((tool, index) => (
                  <Badge
                    key={index}
                    className='motion-colors border-border text-primary hover:border-primary/60 rounded-none border bg-transparent px-3 py-1.5 font-mono text-xs'
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          <div>
            <Card className='rounded-none border-0 bg-transparent px-0 py-7 shadow-none'>
              <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
                <Globe className='text-primary h-6 w-6' />
                {dict.skills.spokenLanguages}
              </h3>
              <div className='flex flex-wrap gap-3'>
                <Badge className='motion-colors border-border text-primary hover:border-primary/60 rounded-none border bg-transparent px-3 py-1.5 font-mono text-xs'>
                  {dict.languages.spanish} — {dict.languages.native}
                </Badge>
                <Badge className='motion-colors border-border text-primary hover:border-primary/60 rounded-none border bg-transparent px-3 py-1.5 font-mono text-xs'>
                  {dict.languages.english} — {dict.languages.advanced}
                </Badge>
              </div>
            </Card>
          </div>
        </div>

        <div className='mt-16 flex justify-center'>
          <figure className='border-border w-full max-w-sm border-y py-6 lg:max-w-[640px]'>
            <Image
              src='/Chapter4.png'
              alt='Open books and study materials'
              width={1024}
              height={1024}
              className='w-full opacity-90 grayscale dark:opacity-85 dark:[filter:invert(1)_sepia(0.4)_hue-rotate(10deg)_brightness(1.1)_contrast(1.1)]'
            />
          </figure>
        </div>
      </section>

      <section>
        <h3 className='text-foreground mb-6 flex items-center gap-2 font-serif text-2xl font-semibold'>
          <Award className='text-primary h-6 w-6' />
          {dict.skills.certifications}
        </h3>
        <div className='space-y-4'>
          {dict.certifications.map((cert, index) => (
            <div key={index}>
              <Card className='border-border rounded-none border-x-0 border-t-2 border-b-0 bg-transparent p-0 pt-6 shadow-none'>
                <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
                  <div>
                    <h4 className='text-foreground font-serif text-xl font-semibold'>
                      {cert.title}
                    </h4>
                    <p className='text-muted-foreground font-serif text-base'>
                      {cert.provider}
                    </p>
                  </div>
                  <span className='text-muted-foreground font-mono text-xs tracking-[0.12em] uppercase'>
                    {cert.date}
                  </span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
