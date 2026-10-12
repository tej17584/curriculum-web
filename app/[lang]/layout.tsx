import type React from 'react';
import type { Metadata } from 'next';
import { i18n } from '@/i18n.config';
import { getDictionary } from '@/hooks/getDictionary';
import { type Lang } from '@/types';
import { Footer } from '@/components/footer';
import { JsonLdPerson } from '@/components/json-ld-person';
import { siteUrl } from '@/lib/site';

// Generar metadatos dinámicos por idioma
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Lang;
  const dict = await getDictionary(lang);

  const pageUrl = `${siteUrl}/${lang}`;

  return {
    metadataBase: new URL(siteUrl),
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
        'x-default': '/es',
      },
    },
    openGraph: {
      title: dict.seo.defaultTitle,
      description: dict.seo.defaultDescription,
      url: pageUrl,
      siteName: dict.seo.siteName,
      locale: lang === 'es' ? 'es_GT' : 'en_US',
      type: 'website',
      images: [{ url: '/icon.svg', width: 32, height: 32, alt: dict.seo.siteName }],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.seo.defaultTitle,
      description: dict.seo.defaultDescription,
      images: ['/icon.svg'],
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
    <div lang={lang}>
      <JsonLdPerson dict={dict} />
      {children}
      <Footer dict={dict} />
    </div>
  );
}
