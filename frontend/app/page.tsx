import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { AUTH_COOKIE_NAME, isJwtValid } from "@/lib/auth/jwt";
import { ROUTES } from "@/lib/constants";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  redirect(isJwtValid(token) ? ROUTES.dashboard : ROUTES.login);
}
