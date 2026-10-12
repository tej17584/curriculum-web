import type { MetadataRoute } from 'next';
import { i18n } from '@/i18n.config';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return i18n.locales.map(locale => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: {
      languages: Object.fromEntries(
        i18n.locales.map(l => [l, `${siteUrl}/${l}`])
      ),
    },
  }));
}
