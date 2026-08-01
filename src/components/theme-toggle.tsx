'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
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
    // Apply theme class to document on mount and when theme changes
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={toggleTheme}
      className='motion-surface border-primary/30 bg-background/80 hover:border-primary hover:bg-primary/10 fixed top-4 right-4 z-50 h-10 w-10 rounded-full border-2 backdrop-blur-sm hover:scale-110 sm:h-12 sm:w-12'
      aria-label='Toggle theme'
    >
      <span
        className='t-icon-swap'
        data-state={theme === 'light' ? 'a' : 'b'}
        aria-hidden='true'
      >
        <Moon
          className='t-icon text-primary h-5 w-5 sm:h-6 sm:w-6'
          data-icon='a'
        />
        <Sun
          className='t-icon text-primary h-5 w-5 sm:h-6 sm:w-6'
          data-icon='b'
        />
      </span>
    </Button>
  );
}
