import 'server-only';
import { cache } from 'react';
import type { Lang } from '@/types';

/**
 * Carga dinámica (code-splitting) de cada diccionario.
 * Al ser imports dinámicos, Node ya hace module-level caching; envolveremos con React.cache
 * para deduplicar durante el render de un mismo request y entre renders RSC mientras viva
 * el proceso.
 */
const dictionaries = {
  es: () => import('../locales/es.json').then(m => m.default),
  en: () => import('../locales/en.json').then(m => m.default),
};

// Tipo inferido del diccionario (garantiza autocompletado y evita any).
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)['en']>>;

/**
 * getDictionary(locale)
 * - Envuelto en React.cache para memoizar por (locale) mientras el proceso siga vivo.
 * - Devuelve siempre un objeto tipado Dictionary.
 * - Fallback: si la locale no existe, usa 'es'.
 */
export const getDictionary = cache(
  async (locale: Lang | string): Promise<Dictionary> => {
    const normalizedLocale = locale as keyof typeof dictionaries;
    const loader = dictionaries[normalizedLocale];
    if (!loader) {
      console.warn(
        `Dictionary for locale "${locale}" not found, falling back to 'es'`
      );
      return dictionaries.es();
    }
    return loader();
  }
);

/**
 * Nota sobre caching:
 * - React.cache memoiza por argumentos primitivos (locale) -> resultado Promise resuelta.
 * - Si cambias físicamente los archivos JSON necesitarás reiniciar el proceso de desarrollo
 *   (o invalidar el módulo) para ver los cambios, lo cual en dev sucede automáticamente
 *   porque Next limpia el require cache al detectar cambios.
 */
