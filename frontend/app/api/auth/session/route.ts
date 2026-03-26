import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { AUTH_COOKIE_NAME, decodeJwtPayload, isJwtValid } from "@/lib/auth/jwt";

export async function GET() {
  const token = (await cookies()).get(AUTH_COOKIE_NAME)?.value;

  if (!isJwtValid(token)) {
    return NextResponse.json({ authenticated: false, user: null }, { status: 200 });
  }

  const payload = token ? decodeJwtPayload(token) : null;

  return NextResponse.json({
    authenticated: true,
    user: payload
      ? {
          id: payload.userId ?? null,
          email: payload.email ?? null,
          full_name: payload.full_name ?? null,
        }
      : null,
  });
}
