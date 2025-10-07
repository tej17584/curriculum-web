import type React from 'react';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Neuton } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import { Suspense } from 'react';

const neuton = Neuton({
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
  variable: '--font-neuton',
});

// Root layout - solo estructura HTML básica, sin metadata
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${neuton.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
