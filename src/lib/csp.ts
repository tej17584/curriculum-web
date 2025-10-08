/**
 * Content Security Policy Configuration
 *
 * This helps prevent XSS attacks, clickjacking, and other code injection attacks.
 * Adjust the directives based on your actual needs.
 */

export function getCSP() {
  const cspDirectives = {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-eval'", // Required by Next.js in development
      "'unsafe-inline'", // Required for inline scripts (consider nonce-based approach in production)
      'https://vercel.live',
      'https://va.vercel-scripts.com',
    ],
    'style-src': ["'self'", "'unsafe-inline'"], // Tailwind requires inline styles
    'img-src': ["'self'", 'data:', 'https:', 'blob:'],
    'font-src': ["'self'", 'data:', 'https://fonts.gstatic.com'],
    'connect-src': [
      "'self'",
      'https://vercel.live',
      'https://vitals.vercel-insights.com',
      'https://va.vercel-scripts.com',
    ],
    'frame-ancestors': ["'self'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'object-src': ["'none'"],
    'upgrade-insecure-requests': [],
  };

  // Convert to CSP header string
  return Object.entries(cspDirectives)
    .map(([key, values]) => {
      if (values.length === 0) return key;
      return `${key} ${values.join(' ')}`;
    })
    .join('; ');
}
