import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';
import type { CustomMiddleware } from './chain';
import { getCSP } from '@/lib/csp';

/**
 * Security middleware that adds security headers to responses
 */
export function withSecurityHeaders(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse
  ) => {
    // Execute the next middleware in the chain
    const res =
      (await middleware(request, event, response)) || NextResponse.next();

    // Add CSP header
    const csp = getCSP();
    res.headers.set('Content-Security-Policy', csp);

    // Add additional security headers (these are also in next.config.mjs for redundancy)
    res.headers.set('X-DNS-Prefetch-Control', 'on');
    res.headers.set('X-Frame-Options', 'SAMEORIGIN');
    res.headers.set('X-Content-Type-Options', 'nosniff');
    res.headers.set('X-XSS-Protection', '1; mode=block');
    res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.headers.set(
      'Permissions-Policy',
      'camera=(), microphone=(), geolocation=(), interest-cohort=()'
    );

    return res;
  };
}
