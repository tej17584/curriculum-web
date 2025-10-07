'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'es';

type Translations = {
  [key: string]: {
    en: string;
    es: string;
  };
};

const translations: Translations = {
  name: { en: 'Alejandro Tejada', es: 'Alejandro Tejada' },
  title: { en: 'Software Engineer 3', es: 'Ingeniero de Software 3' },
  bio: {
    en: 'A positive person, fond of learning, reading, family and God.',
    es: 'Una persona positiva, gustosa del aprendizaje, la lectura, la familia y Dios.',
  },
  email: { en: 'Email', es: 'Correo' },
  chapterAbout: { en: 'Chapter I: About', es: 'Capítulo I: Acerca de' },
  chapterExperience: {
    en: 'Chapter II: Experience',
    es: 'Capítulo II: Experiencia',
  },
  chapterProjects: {
    en: 'Chapter III: Featured Projects',
    es: 'Capítulo III: Proyectos Destacados',
  },
  chapterSkills: {
    en: 'Chapter IV: Skills & Technologies',
    es: 'Capítulo IV: Habilidades y Tecnologías',
  },
  chapterEducation: { en: 'Chapter V: Education', es: 'Capítulo V: Educación' },
  aboutText1: {
    en: "Currently, I'm a Senior Software Engineer at TechCorp, specializing in front-end architecture. I contribute to the creation and maintenance of UI components that power our platform's frontend, ensuring our applications meet web accessibility standards and best practices to deliver an inclusive user experience.",
    es: 'Actualmente, soy Ingeniero de Software Senior en TechCorp, especializado en arquitectura front-end. Contribuyo a la creación y mantenimiento de componentes de UI que impulsan el frontend de nuestra plataforma, asegurando que nuestras aplicaciones cumplan con los estándares de accesibilidad web y las mejores prácticas para ofrecer una experiencia de usuario inclusiva.',
  },
  aboutText2: {
    en: "In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with modern technologies.",
    es: 'En el pasado, he tenido la oportunidad de desarrollar software en una variedad de entornos: desde agencias de publicidad y grandes corporaciones hasta startups y pequeños estudios de productos digitales. Además, también lancé un curso de video completo hace unos años, guiando a los estudiantes a través de la construcción de una aplicación web con tecnologías modernas.',
  },
  programmingLanguages: {
    en: 'Programming Languages',
    es: 'Lenguajes de Programación',
  },
  frameworks: { en: 'Frameworks & Libraries', es: 'Frameworks y Librerías' },
  tools: { en: 'Tools & Platforms', es: 'Herramientas y Plataformas' },
  spokenLanguages: { en: 'Spoken Languages', es: 'Idiomas' },
  spanish: { en: 'Spanish', es: 'Español' },
  english: { en: 'English', es: 'Inglés' },
  native: { en: 'Native', es: 'Nativo' },
  advanced: {
    en: 'Full Professional Proficiency',
    es: 'Dominio Profesional Completo',
  },
  certifications: { en: 'Certifications', es: 'Certificaciones' },
  present: { en: 'Present', es: 'Presente' },
  page: { en: 'Page', es: 'Página' },
  of: { en: 'of', es: 'de' },
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
