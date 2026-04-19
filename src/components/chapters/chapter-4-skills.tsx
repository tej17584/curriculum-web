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
          <Card className='border-primary/20 bg-card border-2 p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl'>
            <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
              <Code2 className='text-primary h-6 w-6' />
              {dict.skills.programmingLanguages}
            </h3>
            <div className='flex flex-wrap gap-3'>
              {dict.skills.programmingList.map((skill, index) => (
                <Badge
                  key={index}
                  className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className='border-primary/20 bg-card border-2 p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl'>
            <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
              <BookOpen className='text-primary h-6 w-6' />
              {dict.skills.frameworks}
            </h3>
            <div className='flex flex-wrap gap-3'>
              {dict.skills.frameworksList.map((framework, index) => (
                <Badge
                  key={index}
                  className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'
                >
                  {framework}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className='border-primary/20 bg-card border-2 p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl'>
            <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
              <Wrench className='text-primary h-6 w-6' />
              {dict.skills.tools}
            </h3>
            <div className='flex flex-wrap gap-3'>
              {dict.skills.toolsList.map((tool, index) => (
                <Badge
                  key={index}
                  className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className='border-primary/20 bg-card border-2 p-6 shadow-md transition-all hover:scale-[1.02] hover:shadow-xl'>
            <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
              <Globe className='text-primary h-6 w-6' />
              {dict.skills.spokenLanguages}
            </h3>
            <div className='flex flex-wrap gap-3'>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                {dict.languages.spanish} — {dict.languages.native}
              </Badge>
              <Badge className='border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-2 px-4 py-2 text-base font-semibold transition-all hover:scale-110'>
                {dict.languages.english} — {dict.languages.advanced}
              </Badge>
            </div>
          </Card>
        </div>

        <div className='mt-12 flex justify-center'>
          <div className='relative w-full max-w-md'>
            <img
              src='/Chapter4.png'
              alt='Open books and study materials'
              className='illustration w-full grayscale transition-all hover:opacity-90 dark:[filter:invert(1)_brightness(1.3)_contrast(1.2)]'
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
              className={`bg-card border-l-4 p-6 shadow-sm transition-all hover:scale-[1.02] hover:shadow-lg ${
                index === 0 ? 'border-l-primary' : 'border-l-muted'
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
