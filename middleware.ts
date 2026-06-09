import createMiddleware from 'next-intl/middleware';
import {routing} from './src/i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  matcher: [
    // Match root
    '/',
    // Match all pathnames with locale prefix
    '/(pt|en|es|fr)/:path*',
    // Match all pathnames WITHOUT locale prefix (for default locale PT)
    '/((?!_next|_vercel|api|.*\\..*).*)'
  ]
};
