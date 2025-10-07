'use client';

import { ChevronLeft, ChevronRight, Languages, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Lang } from '@/types';

type PageNavigationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  lang: Lang;
  pageText: string;
  ofText: string;
};

export function PageNavigation({
  currentPage,
  totalPages,
  onPageChange,
  lang,
  pageText,
  ofText,
}: PageNavigationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'es' : 'en';
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div className='border-border bg-card/95 fixed bottom-24 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border-2 px-3 py-2 shadow-xl backdrop-blur-md sm:bottom-28 sm:gap-3 sm:px-6 sm:py-3'>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className='h-10 w-10 sm:h-9 sm:w-9'
      >
        <ChevronLeft className='h-5 w-5 sm:h-4 sm:w-4' />
      </Button>

      <span className='text-foreground font-serif text-sm sm:text-base'>
        {pageText} {currentPage} {ofText} {totalPages}
      </span>

      <Button
        variant='ghost'
        size='icon'
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className='h-10 w-10 sm:h-9 sm:w-9'
      >
        <ChevronRight className='h-5 w-5 sm:h-4 sm:w-4' />
      </Button>

      <div className='bg-border h-6 w-px' />

      <Button
        variant='ghost'
        size='icon'
        onClick={toggleTheme}
        className='h-10 w-10 transition-all hover:scale-110 sm:h-9 sm:w-9'
        aria-label='Toggle theme'
      >
        {theme === 'light' ? (
          <Moon className='text-primary h-5 w-5 sm:h-4 sm:w-4' />
        ) : (
          <Sun className='text-primary h-5 w-5 sm:h-4 sm:w-4' />
        )}
      </Button>

      <Button
        variant='ghost'
        size='icon'
        onClick={toggleLanguage}
        className='h-10 w-10 transition-all hover:scale-110 sm:h-9 sm:w-9'
        aria-label='Toggle language'
      >
        <Languages className='text-primary h-5 w-5 sm:h-4 sm:w-4' />
      </Button>
    </div>
  );
}
