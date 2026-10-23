'use client';

import { ChevronLeft, ChevronRight, Languages, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Lang } from '@/types';
import { saveCvSession } from '@/lib/cv-session';

type PageNavigationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  lang: Lang;
  pageText: string;
  ofText: string;
  chapterNames?: readonly string[];
  navLabel?: string;
  prevPageLabel: string;
  nextPageLabel: string;
  themeLightLabel: string;
  themeDarkLabel: string;
  switchLanguageLabel: string;
};

export function PageNavigation({
  currentPage,
  totalPages,
  onPageChange,
  lang,
  pageText,
  ofText,
  chapterNames = [],
  navLabel = 'Chapter navigation',
  prevPageLabel,
  nextPageLabel,
  themeLightLabel,
  themeDarkLabel,
  switchLanguageLabel,
}: PageNavigationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';
  const chapterName = chapterNames[currentPage - 1];

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'es' : 'en';
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    saveCvSession({ page: currentPage, introSeen: true });
    router.push(`${newPath}${window.location.hash}`);
  };

  const nextLangLabel = lang === 'en' ? 'ES' : 'EN';

  return (
    <nav
      aria-label={navLabel}
      className='border-border bg-background/92 fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 border px-2 py-1.5 shadow-lg backdrop-blur-md sm:bottom-6 sm:gap-2 sm:px-3'
    >
      <Button
        variant='ghost'
        size='icon'
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className='size-9'
        aria-label={prevPageLabel}
      >
        <ChevronLeft className='size-4' />
      </Button>

      <span
        className='flex min-w-24 flex-col items-center text-center leading-tight whitespace-nowrap sm:min-w-32'
        aria-live='polite'
      >
        {chapterName && (
          <span className='text-foreground font-serif text-sm font-semibold sm:text-base'>
            {chapterName}
          </span>
        )}
        <span className='text-muted-foreground font-mono text-[0.65rem]'>
          {pageText} {currentPage} {ofText} {totalPages}
        </span>
      </span>

      <Button
        variant='ghost'
        size='icon'
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className='size-9'
        aria-label={nextPageLabel}
      >
        <ChevronRight className='size-4' />
      </Button>

      <div className='bg-border mx-1 h-6 w-px' />

      <Button
        variant='ghost'
        size='icon'
        onClick={toggleTheme}
        className='motion-surface hover:bg-muted size-9'
        aria-label={isDark ? themeLightLabel : themeDarkLabel}
        disabled={!mounted}
      >
        <span
          className='t-icon-swap'
          data-state={!isDark ? 'a' : 'b'}
          aria-hidden='true'
        >
          <Moon
            className='t-icon size-4'
            data-icon='a'
          />
          <Sun
            className='t-icon size-4'
            data-icon='b'
          />
        </span>
      </Button>

      <Button
        variant='ghost'
        size='sm'
        onClick={toggleLanguage}
        className='motion-surface hover:bg-muted h-9 gap-1.5 px-2.5 font-mono text-xs'
        aria-label={`${switchLanguageLabel} ${nextLangLabel}`}
      >
        <Languages className='size-4' />
        {nextLangLabel}
      </Button>
    </nav>
  );
}
