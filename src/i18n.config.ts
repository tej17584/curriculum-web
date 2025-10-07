import type { Lang } from '@/types';

export const i18n = {
  defaultLocale: 'es' as const,
  locales: ['es', 'en'] as const,
} as const;

export type Locale = Lang;
