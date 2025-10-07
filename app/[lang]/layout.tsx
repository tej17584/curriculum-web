import type React from 'react';
import type { Metadata } from 'next';
import { i18n } from '@/i18n.config';
import { getDictionary } from '@/hooks/getDictionary';
import { type Lang } from '@/types';
import { Footer } from '@/components/footer';

// Generar metadatos dinámicos por idioma
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Lang;
  const dict = await getDictionary(lang);

  return {
    title: {
      default: dict.seo.defaultTitle,
      template: `%s | ${dict.seo.siteName}`,
    },
    description: dict.seo.defaultDescription,
    keywords: dict.seo.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        es: '/es',
        en: '/en',
      },
    },
    openGraph: {
      title: dict.seo.defaultTitle,
      description: dict.seo.defaultDescription,
      url: `/${lang}`,
      siteName: dict.seo.siteName,
      locale: lang,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Generar parámetros estáticos para todas las locales
export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }));
}

// Layout del segmento [lang]
export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang: langParam } = await params;
  const lang = langParam as Lang;
  const dict = await getDictionary(lang);

  return (
    /* eslint-disable-next-line @next/next/no-head-element */
    <div lang={lang}>
      {children}
      <Footer dict={dict} />
    </div>
  );
}
