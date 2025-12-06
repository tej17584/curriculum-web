import { chain } from '@/middlewares/chain';
import { withI18nMiddleware } from '@/middlewares/i18n';
import { withSecurityHeaders } from '@/middlewares/security';

// Chain proxy functions in order: security headers first, then i18n
export function proxy(request: Request) {
  return chain([withSecurityHeaders, withI18nMiddleware])(request);
}

export const config = {
  matcher: [
    // Excluir archivos estáticos y API routes
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
