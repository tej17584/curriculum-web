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
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as
        'light' | 'dark' | null;
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      return savedTheme || (prefersDark ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

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
    <nav
      aria-label='Chapter navigation'
      className='border-border bg-background fixed bottom-20 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 border px-2 py-2 shadow-lg sm:bottom-28 sm:gap-2 sm:px-4'
    >
      <Button
        variant='ghost'
        size='icon'
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className='h-9 w-9 sm:h-9 sm:w-9'
      >
        <ChevronLeft className='h-4 w-4 sm:h-4 sm:w-4' />
      </Button>

      <span className='text-foreground min-w-22 text-center font-mono text-[0.65rem] tracking-[0.1em] whitespace-nowrap uppercase sm:min-w-28 sm:text-xs'>
        {pageText} {currentPage} {ofText} {totalPages}
      </span>

      <Button
        variant='ghost'
        size='icon'
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className='h-9 w-9 sm:h-9 sm:w-9'
      >
        <ChevronRight className='h-4 w-4 sm:h-4 sm:w-4' />
      </Button>

      <div className='bg-border mx-1 h-5 w-px sm:h-6' />

      <Button
        variant='ghost'
        size='icon'
        onClick={toggleTheme}
        className='motion-surface hover:bg-muted h-9 w-9 sm:h-9 sm:w-9'
        aria-label='Toggle theme'
      >
        <span
          className='t-icon-swap'
          data-state={theme === 'light' ? 'a' : 'b'}
          aria-hidden='true'
        >
          <Moon
            className='t-icon text-primary h-4 w-4 sm:h-4 sm:w-4'
            data-icon='a'
          />
          <Sun
            className='t-icon text-primary h-4 w-4 sm:h-4 sm:w-4'
            data-icon='b'
          />
        </span>
      </Button>

      <Button
        variant='ghost'
        size='icon'
        onClick={toggleLanguage}
        className='motion-surface hover:bg-muted h-9 w-9 sm:h-9 sm:w-9'
        aria-label='Toggle language'
      >
        <Languages className='text-primary h-4 w-4 sm:h-4 sm:w-4' />
      </Button>
    </nav>
  );
}
