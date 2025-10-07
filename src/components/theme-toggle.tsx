'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Check for saved theme preference or default to light
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

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={toggleTheme}
      className='border-primary/30 bg-background/80 hover:border-primary hover:bg-primary/10 fixed top-4 right-4 z-50 h-10 w-10 rounded-full border-2 backdrop-blur-sm transition-all hover:scale-110 sm:h-12 sm:w-12'
      aria-label='Toggle theme'
    >
      {theme === 'light' ? (
        <Moon className='text-primary h-5 w-5 transition-transform hover:rotate-12 sm:h-6 sm:w-6' />
      ) : (
        <Sun className='text-primary h-5 w-5 transition-transform hover:rotate-90 sm:h-6 sm:w-6' />
      )}
    </Button>
  );
}
