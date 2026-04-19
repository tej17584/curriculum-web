import { Code2, BookOpen, Wrench, Globe, Award } from 'lucide-react';
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
        <h2 className='text-foreground mb-6 font-serif text-3xl font-semibold tracking-wide'>
          {dict.chapters.skills}
        </h2>
        <div className='space-y-8'>
          <Card className='border-primary/15 bg-card border p-6 shadow-sm transition-all hover:shadow-md dark:shadow-md dark:shadow-black/20'>
            <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
              <Code2 className='text-primary h-6 w-6' />
              {dict.skills.programmingLanguages}
            </h3>
            <div className='flex flex-wrap gap-3'>
              {dict.skills.programmingList.map((skill, index) => (
                <Badge
                  key={index}
                  className='border-primary/20 bg-primary/8 text-primary hover:bg-primary/15 border px-4 py-2 text-base font-medium transition-all'
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className='border-primary/15 bg-card border p-6 shadow-sm transition-all hover:shadow-md dark:shadow-md dark:shadow-black/20'>
            <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
              <BookOpen className='text-primary h-6 w-6' />
              {dict.skills.frameworks}
            </h3>
            <div className='flex flex-wrap gap-3'>
              {dict.skills.frameworksList.map((framework, index) => (
                <Badge
                  key={index}
                  className='border-primary/20 bg-primary/8 text-primary hover:bg-primary/15 border px-4 py-2 text-base font-medium transition-all'
                >
                  {framework}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className='border-primary/15 bg-card border p-6 shadow-sm transition-all hover:shadow-md dark:shadow-md dark:shadow-black/20'>
            <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
              <Wrench className='text-primary h-6 w-6' />
              {dict.skills.tools}
            </h3>
            <div className='flex flex-wrap gap-3'>
              {dict.skills.toolsList.map((tool, index) => (
                <Badge
                  key={index}
                  className='border-primary/20 bg-primary/8 text-primary hover:bg-primary/15 border px-4 py-2 text-base font-medium transition-all'
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className='border-primary/15 bg-card border p-6 shadow-sm transition-all hover:shadow-md dark:shadow-md dark:shadow-black/20'>
            <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
              <Globe className='text-primary h-6 w-6' />
              {dict.skills.spokenLanguages}
            </h3>
            <div className='flex flex-wrap gap-3'>
              <Badge className='border-primary/20 bg-primary/8 text-primary hover:bg-primary/15 border px-4 py-2 text-base font-medium transition-all'>
                {dict.languages.spanish} — {dict.languages.native}
              </Badge>
              <Badge className='border-primary/20 bg-primary/8 text-primary hover:bg-primary/15 border px-4 py-2 text-base font-medium transition-all'>
                {dict.languages.english} — {dict.languages.advanced}
              </Badge>
            </div>
          </Card>
        </div>

        <div className='mt-16 flex justify-center'>
          <div className='relative w-full max-w-sm lg:max-w-[640px]'>
            <div className='absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent dark:from-primary/10' />
            <img
              src='/Chapter4.png'
              alt='Open books and study materials'
              className='relative w-full opacity-90 grayscale transition-all hover:opacity-80 dark:opacity-85 dark:[filter:invert(1)_sepia(0.4)_hue-rotate(10deg)_brightness(1.1)_contrast(1.1)]'
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className='text-foreground mb-6 flex items-center gap-2 font-serif text-2xl font-semibold'>
          <Award className='text-primary h-6 w-6' />
          {dict.skills.certifications}
        </h3>
        <div className='space-y-4'>
          {dict.certifications.map((cert, index) => (
            <Card
              key={index}
              className={`bg-card border-l-4 p-6 shadow-sm transition-all hover:shadow-md dark:shadow-md dark:shadow-black/20 ${
                index === 0 ? 'border-l-primary/70' : 'border-l-muted/50'
              }`}
            >
              <div className='flex flex-col justify-between gap-2 sm:flex-row sm:items-start'>
                <div>
                  <h4 className='text-foreground font-serif text-xl font-semibold'>
                    {cert.title}
                  </h4>
                  <p className='text-muted-foreground font-serif text-base'>
                    {cert.provider}
                  </p>
                </div>
                <span className='text-muted-foreground font-serif text-base italic'>
                  {cert.date}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
