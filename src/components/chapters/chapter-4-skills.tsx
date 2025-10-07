'use client';

import { Code2, BookOpen, Wrench, Globe, Award } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface Chapter4SkillsProps {
  t: (key: string) => string;
}

export function Chapter4Skills({ t }: Chapter4SkillsProps) {
  return (
    <>
      <section className='mb-16'>
        <h2 className='text-foreground mb-6 font-serif text-3xl font-semibold tracking-wide'>
          {t('chapterSkills')}
        </h2>
        <div className='space-y-8'>
          <Card className='border-primary/20 bg-card border-2 p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl'>
            <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
              <Code2 className='text-primary h-6 w-6' />
              {t('programmingLanguages')}
            </h3>
            <div className='flex flex-wrap gap-3'>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                JavaScript
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                TypeScript
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                HTML
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                CSS
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                Python
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                SQL
              </Badge>
            </div>
          </Card>

          <Card className='border-primary/20 bg-card border-2 p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl'>
            <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
              <BookOpen className='text-primary h-6 w-6' />
              {t('frameworks')}
            </h3>
            <div className='flex flex-wrap gap-3'>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                React
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                Next.js
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                Vue.js
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                Node.js
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                React Native
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                Tailwind CSS
              </Badge>
            </div>
          </Card>

          <Card className='border-primary/20 bg-card border-2 p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl'>
            <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
              <Wrench className='text-primary h-6 w-6' />
              {t('tools')}
            </h3>
            <div className='flex flex-wrap gap-3'>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                Git
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                GitHub
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                Mendix
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                Visualizer
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                Unity
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                Figma
              </Badge>
            </div>
          </Card>

          <Card className='border-primary/20 bg-card border-2 p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl'>
            <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
              <Globe className='text-primary h-6 w-6' />
              {t('spokenLanguages')}
            </h3>
            <div className='flex flex-wrap gap-3'>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                {t('spanish')} — {t('native')}
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                {t('english')} — {t('advanced')}
              </Badge>
            </div>
          </Card>
        </div>

        <div className='mt-12 flex justify-center'>
          <div className='relative w-full max-w-md'>
            <img
              src='/study-books-illustration.jpg'
              alt='Open books and study materials'
              className='w-full grayscale transition-all hover:opacity-90'
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className='text-foreground mb-6 flex items-center gap-2 font-serif text-2xl font-semibold'>
          <Award className='text-primary h-6 w-6' />
          {t('certifications')}
        </h3>
        <div className='space-y-4'>
          <Card className='border-l-primary bg-card border-l-4 p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg'>
            <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
              <div>
                <h4 className='text-foreground font-serif text-xl font-semibold'>
                  Complete Intro to React, v6
                </h4>
                <p className='text-muted-foreground font-serif text-base'>
                  Frontend Masters
                </p>
              </div>
              <span className='text-muted-foreground font-serif text-base italic'>
                Jul 2021
              </span>
            </div>
          </Card>

          <Card className='border-l-muted bg-card border-l-4 p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg'>
            <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
              <div>
                <h4 className='text-foreground font-serif text-xl font-semibold'>
                  React Native
                </h4>
                <p className='text-muted-foreground font-serif text-base'>
                  Frontend Masters
                </p>
              </div>
              <span className='text-muted-foreground font-serif text-base italic'>
                Jun 2021
              </span>
            </div>
          </Card>

          <Card className='border-l-muted bg-card border-l-4 p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg'>
            <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
              <div>
                <h4 className='text-foreground font-serif text-xl font-semibold'>
                  Visual Elements of User Interface Design
                </h4>
                <p className='text-muted-foreground font-serif text-base'>
                  Coursera
                </p>
              </div>
              <span className='text-muted-foreground font-serif text-base italic'>
                Aug 2020
              </span>
            </div>
          </Card>

          <Card className='border-l-muted bg-card border-l-4 p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg'>
            <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
              <div>
                <h4 className='text-foreground font-serif text-xl font-semibold'>
                  CSS Grids and Flexbox for Responsive Web Design
                </h4>
                <p className='text-muted-foreground font-serif text-base'>
                  Frontend Masters
                </p>
              </div>
              <span className='text-muted-foreground font-serif text-base italic'>
                Aug 2020
              </span>
            </div>
          </Card>

          <Card className='border-l-muted bg-card border-l-4 p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg'>
            <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
              <div>
                <h4 className='text-foreground font-serif text-xl font-semibold'>
                  User Experience: Research & Prototyping
                </h4>
                <p className='text-muted-foreground font-serif text-base'>
                  Coursera
                </p>
              </div>
              <span className='text-muted-foreground font-serif text-base italic'>
                Jul 2020
              </span>
            </div>
          </Card>

          <Card className='border-l-muted bg-card border-l-4 p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg'>
            <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
              <div>
                <h4 className='text-foreground font-serif text-xl font-semibold'>
                  Data Visualization
                </h4>
                <p className='text-muted-foreground font-serif text-base'>
                  Frontend Masters
                </p>
              </div>
              <span className='text-muted-foreground font-serif text-base italic'>
                Jun 2020
              </span>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
