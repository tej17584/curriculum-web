import type React from 'react';
import { headers } from 'next/headers';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Neuton } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { i18n, type Locale } from '@/i18n.config';
import './globals.css';
import { Suspense } from 'react';
import { getImageProps } from 'next/image';
import { Providers } from '@/components/providers';

const neuton = Neuton({
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
  variable: '--font-neuton',
});

const { props: firstChapterImage } = getImageProps({
  src: '/illustrations/chapter-1.svg',
  alt: '',
  width: 400,
  height: 280,
  sizes: '(max-width: 768px) 100vw, 740px',
});

// Root layout - basic HTML structure only, no metadata
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const lang = (headersList.get('x-language') as Locale) ?? i18n.defaultLocale;
  return (
    <html
      lang={lang}
      suppressHydrationWarning
    >
      <head>
        <link
          rel='preload'
          as='image'
          imageSrcSet={firstChapterImage.srcSet}
          imageSizes={firstChapterImage.sizes}
          fetchPriority='high'
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${neuton.variable}`}
      >
        <Providers>
          <Suspense fallback={null}>{children}</Suspense>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
