import {
  contactEmail,
  contactPhoneTel,
  siteUrl,
} from '@/lib/site';
import type { Dictionary } from '@/hooks/getDictionary';

export function JsonLdPerson({ dict }: { dict: Dictionary }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: dict.profile.name,
    jobTitle: dict.profile.title,
    description: dict.seo.defaultDescription,
    url: siteUrl,
    email: contactEmail,
    telephone: contactPhoneTel,
    sameAs: [
      'https://github.com/tej17584',
      'https://linkedin.com/in/alejandrotejada17584',
      'https://x.com/josejose9797',
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
