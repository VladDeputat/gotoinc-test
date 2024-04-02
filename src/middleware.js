import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export function middleware(req) {
  const userId = nanoid();

  if (req.nextUrl.pathname.startsWith("/requests")) {
    return NextResponse.next();
  } else if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${userId}/create`, req.url));
  }

  return NextResponse.next();
}
