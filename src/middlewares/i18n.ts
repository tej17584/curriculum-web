import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';

import { i18n } from '@/i18n.config';

import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { type CustomMiddleware } from '@/middlewares/chain';

function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const negotiator = new Negotiator({ headers: negotiatorHeaders });
  const languages = negotiator.languages();

  return (
    matchLocale(languages, i18n.locales, i18n.defaultLocale) ||
    i18n.defaultLocale
  );
}

export function withI18nMiddleware(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    const { pathname, search } = request.nextUrl;

    // Extract the locale from the URL path
    const localeFromPath = i18n.locales.find(
      locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    let locale: string;

    if (localeFromPath) {
      // If the locale is present in the URL, use it
      locale = localeFromPath;
    } else {
      // Otherwise, fall back to the `Accept-Language` header
      try {
        locale = getLocale(request) || i18n.defaultLocale;
      } catch {
        locale = i18n.defaultLocale;
      }
    }

    // If the pathname is missing the locale, we do a redirect
    const pathnameIsMissingLocale = !localeFromPath;

    if (pathnameIsMissingLocale) {
      // Redirect to add locale prefix
      const newPathname =
        pathname === '/' ? `/${locale}` : `/${locale}${pathname}`;
      const newUrl = new URL(newPathname, request.url);
      newUrl.search = search;

      const redirectResponse = NextResponse.redirect(newUrl);
      redirectResponse.headers.set('x-language', locale);
      redirectResponse.headers.set('x-pathname', request.nextUrl.pathname);
      return redirectResponse;
    }

    // If we get here, the locale is already in the path - continue normally
    const responseWithLanguage =
      (await middleware(request, event, response)) || NextResponse.next();
    responseWithLanguage.headers.set('x-language', locale);
    responseWithLanguage.headers.set('x-pathname', request.nextUrl.pathname);

    return responseWithLanguage;
  };
}
