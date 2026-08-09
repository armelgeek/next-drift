import "server-only";
import { headers } from "next/headers";
import { auth } from "./better-auth";

export async function getSession() {
  const headersList = await headers();
  try {
    const session = await auth.api.getSession({
      headers: headersList,
    });
    return session || null;
  } catch {
    return null;
  }
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user || null;
}
