import { NextRequest, NextResponse } from "next/server";

import { AUTH_COOKIE_NAME, isJwtValid } from "@/lib/auth/jwt";
import { ROUTES } from "@/lib/constants";

const PROTECTED_PREFIXES = [
  ROUTES.dashboard,
  ROUTES.weather,
  ROUTES.holidays,
  ROUTES.currency,
  ROUTES.reminders,
  ROUTES.profile,
  ROUTES.settings,
];

const PUBLIC_ROUTES: string[] = [ROUTES.login, ROUTES.register];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const authenticated = isJwtValid(token);

  if (pathname === ROUTES.home) {
    const url = request.nextUrl.clone();
    url.pathname = authenticated ? ROUTES.dashboard : ROUTES.login;
    return NextResponse.redirect(url);
  }

  if (PUBLIC_ROUTES.includes(pathname)) {
    if (authenticated) {
      const url = request.nextUrl.clone();
      url.pathname = ROUTES.dashboard;
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  if (PROTECTED_PREFIXES.some((route) => pathname === route || pathname.startsWith(`${route}/`))) {
    if (!authenticated) {
      const url = request.nextUrl.clone();
      url.pathname = ROUTES.login;
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register", "/dashboard/:path*", "/weather/:path*", "/holidays/:path*", "/currency/:path*", "/reminders/:path*", "/profile/:path*", "/settings/:path*"],
};
