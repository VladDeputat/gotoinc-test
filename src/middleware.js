import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};

export function middleware(req) {
  const userId = nanoid();
  // console.log(req);
  console.log(req.nextUrl.pathname);

  if (req.nextUrl.pathname.startsWith('/requests')) {
    return NextResponse.next();
  } else if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL(`/${userId}/create`, req.url));
  }
  // if (request.nextUrl.pathname.startsWith('/about')) {
  //   return NextResponse.rewrite(new URL('/about-2', request.url));
  // }

  // if (request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return NextResponse.rewrite(new URL('/dashboard/user', request.url));
  // }

  return NextResponse.next();
}
