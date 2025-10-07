import { chain } from '@/middlewares/chain';
import { withI18nMiddleware } from '@/middlewares/i18n';

export default chain([withI18nMiddleware]);

export const config = {
  matcher: [
    // Excluir archivos estáticos y API routes
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
