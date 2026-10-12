import type { LucideIcon } from 'lucide-react';
import {
  Accessibility,
  AppWindow,
  Atom,
  Boxes,
  Building2,
  CircleDollarSign,
  Cloud,
  Code2,
  FlaskConical,
  Calculator,
  GraduationCap,
  Landmark,
  Layers,
  Palette,
  School,
  Search,
  ShoppingBag,
  Users,
  Workflow,
} from 'lucide-react';
import Image from 'next/image';
import type { SimpleIcon } from 'simple-icons';
import {
  siChartdotjs,
  siCodecademy,
  siCoursera,
  siCss,
  siDocker,
  siFigma,
  siGit,
  siGithub,
  siGooglesearchconsole,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPaypal,
  siPostgresql,
  siPython,
  siReact,
  siScrumalliance,
  siSentry,
  siStripe,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siUnity,
  siWhatsapp,
} from 'simple-icons';
import { cn } from '@/lib/utils';

export function normalizeTechName(name: string): string {
  return name
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

const simpleByKey: Record<string, SimpleIcon> = {};
const lucideByKey: Record<string, LucideIcon> = {};

function aliasSimple(icon: SimpleIcon, ...names: string[]) {
  for (const name of names) {
    simpleByKey[normalizeTechName(name)] = icon;
  }
}

function aliasLucide(icon: LucideIcon, ...names: string[]) {
  for (const name of names) {
    lucideByKey[normalizeTechName(name)] = icon;
  }
}

aliasSimple(
  siJavascript,
  'JavaScript',
  'JS',
  'Programación',
  'Programming'
);
aliasSimple(siTypescript, 'TypeScript', 'TS');
aliasSimple(siHtml5, 'HTML');
aliasSimple(siCss, 'CSS');
aliasSimple(siPython, 'Python');
aliasSimple(siPostgresql, 'SQL');
aliasSimple(siReact, 'React', 'React.js', 'React js', 'React Native');
aliasSimple(siNextdotjs, 'Next.js', 'Next');
aliasSimple(siNodedotjs, 'Node.js', 'Node');
aliasSimple(siTailwindcss, 'Tailwind CSS', 'Tailwind');
aliasSimple(siGit, 'Git');
aliasSimple(siGithub, 'GitHub');
aliasSimple(siSupabase, 'Supabase');
aliasSimple(siSentry, 'Sentry');
aliasSimple(siUnity, 'Unity');
aliasSimple(siFigma, 'Figma', 'UI/UX', 'UX/UI', 'UI Development');
aliasSimple(siStripe, 'Stripe');
aliasSimple(siPaypal, 'PayPal');
aliasSimple(siWhatsapp, 'WhatsApp');
aliasSimple(siDocker, 'DevOps', 'Devops');
aliasSimple(siCodecademy, 'Codecademy');
aliasSimple(siCoursera, 'Coursera');
aliasSimple(siChartdotjs, 'D3', 'Data Visualization');
aliasSimple(siGooglesearchconsole, 'SEO');
aliasSimple(siScrumalliance, 'Agile');

aliasLucide(Cloud, 'AWS', 'AWS IVS', 'AWS Cognito', 'AWS IAM');
aliasLucide(FlaskConical, 'Playwright');
aliasLucide(Building2, 'B2B');
aliasLucide(Accessibility, 'Accessibility', 'Accesibilidad');
aliasLucide(Landmark, 'Banking');
aliasLucide(ShoppingBag, 'E-Commerce');
aliasLucide(Layers, 'Full-Stack');
aliasLucide(Boxes, 'Inventory', 'Inventario');
aliasLucide(CircleDollarSign, 'Finance', 'Finanzas');
aliasLucide(GraduationCap, 'Teaching', 'Enseñanza');
aliasLucide(Calculator, 'Mathematics', 'Matemáticas');
aliasLucide(Atom, 'Physics', 'Física');
aliasLucide(School, 'UVG');
aliasLucide(AppWindow, 'Visualizer');
aliasLucide(Workflow, 'Mendix');
aliasLucide(Search, 'User Experience');
aliasLucide(Users, 'UX');
aliasLucide(Palette, 'Visual Elements');

export function certTechName(title: string, provider: string): string {
  const hay = `${title} ${provider}`.toLowerCase();
  if (hay.includes('cloud practitioner')) return 'aws-practitioner';
  if (hay.includes('aws')) return 'AWS';
  if (hay.includes('react native')) return 'React Native';
  if (hay.includes('react')) return 'React';
  if (hay.includes('css')) return 'CSS';
  if (hay.includes('codecademy') || hay.includes('full-stack')) {
    return 'Codecademy';
  }
  if (hay.includes('user experience') || hay.includes('prototyp')) {
    return 'User Experience';
  }
  if (hay.includes('visual elements') || hay.includes('interface design')) {
    return 'Figma';
  }
  if (hay.includes('data visualization') || hay.includes('visualizacion')) {
    return 'Data Visualization';
  }
  return provider;
}

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className }: TechIconProps) {
  const key = normalizeTechName(name);

  if (key === 'aws practitioner' || name === 'aws-practitioner') {
    return (
      <Image
        src='/aws-practitioner.webp'
        alt=''
        width={32}
        height={32}
        className={cn('size-7 object-contain', className)}
      />
    );
  }

  const brand = simpleByKey[key];
  if (brand) {
    return (
      <svg
        aria-hidden
        viewBox='0 0 24 24'
        className={cn('size-3.5 shrink-0 fill-current', className)}
      >
        <path d={brand.path} />
      </svg>
    );
  }

  const Lucide = lucideByKey[key] ?? Code2;
  return (
    <Lucide
      aria-hidden
      className={cn('size-3.5 shrink-0', className)}
    />
  );
}
