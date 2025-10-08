'use client';

import type { Dictionary } from '@/hooks/getDictionary';
import Link from 'next/link';

const navigation = [
  {
    name: 'X',
    href: 'https://x.com/josejose9797',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        fill='currentColor'
        viewBox='0 0 24 24'
        {...props}
      >
        <path d='M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z' />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/tej17584',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        fill='currentColor'
        viewBox='0 0 24 24'
        {...props}
      >
        <path
          fillRule='evenodd'
          d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/alejandrotejada17584',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg
        fill='currentColor'
        viewBox='0 0 24 24'
        {...props}
      >
        <path
          fillRule='evenodd'
          d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
];

interface FooterProps {
  dict: Dictionary;
}

export function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-background/95 border-border fixed right-0 bottom-0 left-0 z-30 border-t backdrop-blur-md'>
      <div className='mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8'>
        {/* Mobile layout - stacked vertically */}
        <div className='flex flex-col gap-3 md:hidden'>
          {/* Social Links */}
          <div className='flex justify-center gap-x-4'>
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon
                  aria-hidden='true'
                  className='h-5 w-5'
                />
              </Link>
            ))}
          </div>
          {/* Copyright */}
          <p className='text-muted-foreground text-center text-xs'>
            &copy; {currentYear} {dict.footer.copyright}
          </p>
        </div>

        {/* Desktop layout - horizontal */}
        <div className='hidden md:flex md:items-center md:justify-between'>
          <p className='text-muted-foreground text-sm'>
            &copy; {currentYear} {dict.footer.copyright}
          </p>
          <div className='flex justify-center gap-x-6'>
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                target='_blank'
                className='text-muted-foreground hover:text-foreground transition-colors'
              >
                <span className='sr-only'>{item.name}</span>
                <item.icon
                  aria-hidden='true'
                  className='size-6'
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
