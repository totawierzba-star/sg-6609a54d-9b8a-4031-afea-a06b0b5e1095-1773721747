import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if pathname already has a locale
  const pathnameHasLocale = ["/pl", "/en"].some(
    (locale) => pathname.startsWith(locale) || pathname === locale.slice(1)
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Get browser language
  const acceptLanguage = request.headers.get("accept-language") || "";
  const browserLang = acceptLanguage.split(",")[0].split("-")[0].toLowerCase();

  // Determine locale: prefer browser language if Polish, otherwise default to English
  const locale = browserLang === "pl" ? "pl" : "en";

  // Redirect to the locale-specific path
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|json|xml|txt|woff|woff2)).*)",
  ],
};