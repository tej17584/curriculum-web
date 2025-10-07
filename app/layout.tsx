import type React from 'react';
import { headers } from 'next/headers';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Neuton } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { i18n, type Locale } from '@/i18n.config';
import './globals.css';
import { Suspense } from 'react';

const neuton = Neuton({
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
  variable: '--font-neuton',
});

// Root layout - solo estructura HTML básica, sin metadata
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
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${neuton.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
