// src/middleware.ts

import { NextResponse } from 'next/server';

export async function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  // Protect only the /api/enquiry route
  if (pathname.startsWith('/api/enquiry')) {
    const authHeader = request.headers.get('Authorization');

    // if (authHeader !== '123456') {
    //   return new NextResponse('Unauthorized', { status: 401 });
    // }
  }

  return NextResponse.next();
}
