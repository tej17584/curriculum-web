import type { LucideIcon } from 'lucide-react';
import {
  Award,
  BookOpen,
  Code2,
  Globe,
  GraduationCap,
  Layers,
  Wrench,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { TechBadge } from '@/components/tech-badge';
import { TechIcon, certTechName } from '@/components/tech-icon';
import type { Dictionary } from '@/hooks/getDictionary';

interface Chapter4SkillsProps {
  dict: Dictionary;
}

function SkillGroup({
  icon: Icon,
  title,
  items,
}: {
  icon: LucideIcon;
  title: string;
  items: string[];
}) {
  return (
    <div className='py-7'>
      <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
        <Icon
          aria-hidden='true'
          className='text-muted-foreground size-5'
        />
        {title}
      </h3>
      <div className='flex flex-wrap gap-3'>
        {items.map(item => (
          <TechBadge
            key={item}
            name={item}
          />
        ))}
      </div>
    </div>
  );
}

const languageBadgeClass =
  'border-border text-foreground rounded-none border bg-transparent px-3 py-1.5 font-mono text-xs';

/** Must render a single root element: the reader paginates by top-level children. */
export function Chapter4Skills({ dict }: Chapter4SkillsProps) {
  const certifications = dict.certifications.filter(
    cert => cert.kind === 'certification'
  );
  const courses = dict.certifications.filter(cert => cert.kind === 'course');

  return (
    <div>
      <section className='mb-16'>
        <h1 className='text-foreground mb-6 font-serif text-3xl font-semibold tracking-tight'>
          {dict.chapters.skills}
        </h1>
        <div className='divide-border divide-y'>
          <SkillGroup
            icon={Code2}
            title={dict.skills.programmingLanguages}
            items={dict.skills.programmingList}
          />
          <SkillGroup
            icon={BookOpen}
            title={dict.skills.frameworks}
            items={dict.skills.frameworksList}
          />
          <SkillGroup
            icon={Wrench}
            title={dict.skills.tools}
            items={dict.skills.toolsList}
          />
          <SkillGroup
            icon={Layers}
            title={dict.skills.otherTools}
            items={dict.skills.otherList}
          />
          <div className='py-7'>
            <h3 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
              <Globe
                aria-hidden='true'
                className='text-muted-foreground size-5'
              />
              {dict.skills.spokenLanguages}
            </h3>
            <div className='flex flex-wrap gap-3'>
              <Badge className={languageBadgeClass}>
                {dict.languages.spanish} — {dict.languages.native}
              </Badge>
              <Badge className={languageBadgeClass}>
                {dict.languages.english} — {dict.languages.advanced}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-16'>
        <h2 className='text-foreground mb-6 flex items-center gap-2 font-serif text-2xl font-semibold'>
          <Award
            aria-hidden='true'
            className='text-primary size-6'
          />
          {dict.skills.certifications}
        </h2>
        <div className='grid gap-4 sm:grid-cols-2'>
          {certifications.map(cert => {
            const iconName = certTechName(cert.title, cert.provider);
            return (
              <div
                key={`${cert.title}-${cert.date}`}
                className='border-primary/40 flex items-start gap-4 border p-5'
              >
                <span className='border-border flex size-10 shrink-0 items-center justify-center border'>
                  <TechIcon
                    name={iconName}
                    className={
                      iconName === 'aws-practitioner' ? 'size-9' : 'size-5'
                    }
                  />
                </span>
                <div className='min-w-0'>
                  <h3 className='text-foreground font-serif text-xl leading-snug font-semibold'>
                    {cert.title}
                  </h3>
                  <p className='text-muted-foreground font-serif text-base'>
                    {cert.provider}
                  </p>
                  <p className='text-muted-foreground mt-2 font-mono text-xs tracking-[0.12em] uppercase'>
                    {cert.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className='text-foreground mb-4 flex items-center gap-2 font-serif text-2xl font-semibold'>
          <GraduationCap
            aria-hidden='true'
            className='text-muted-foreground size-6'
          />
          {dict.skills.courses}
        </h2>
        <ul className='grid sm:grid-cols-2 sm:gap-x-10'>
          {courses.map(course => (
            <li
              key={`${course.title}-${course.date}`}
              className='border-border flex items-start justify-between gap-4 border-b py-4'
            >
              <div className='flex min-w-0 items-start gap-3'>
                <TechIcon
                  name={certTechName(course.title, course.provider)}
                  className='text-muted-foreground mt-1 size-4'
                />
                <div className='min-w-0'>
                  <p className='text-foreground font-serif text-base leading-snug font-semibold'>
                    {course.title}
                  </p>
                  <p className='text-muted-foreground font-serif text-sm'>
                    {course.provider}
                  </p>
                </div>
              </div>
              <span className='text-muted-foreground shrink-0 font-mono text-xs tracking-[0.12em] uppercase'>
                {course.date}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
