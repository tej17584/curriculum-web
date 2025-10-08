import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';

export type CustomMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
  response: NextResponse
) =>
  | NextResponse
  | Response
  | Promise<NextResponse | Response>
  | undefined
  | Promise<undefined>;

export function chain(
  functions: ((middleware: CustomMiddleware) => CustomMiddleware)[],
  index = 0
): CustomMiddleware {
  const current = functions[index];

  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }

  return () => NextResponse.next();
}
