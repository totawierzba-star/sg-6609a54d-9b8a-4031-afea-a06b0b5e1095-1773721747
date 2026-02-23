import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Handle /en routes - rewrite to /en/[page]
  if (pathname.startsWith("/en")) {
    return NextResponse.next();
  }

  // Handle root and Polish routes - serve from /pages
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all pathnames except static files and API routes
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.ico).*)",
  ],
};