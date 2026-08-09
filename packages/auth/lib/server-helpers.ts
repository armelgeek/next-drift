import "server-only";
import { auth } from "./better-auth";

export async function getSession() {
  try {
    // Better Auth provides session via auth object
    // In a server context, session is accessed through the auth instance
    return null; // TODO: Implement session retrieval based on Better Auth setup
  } catch {
    return null;
  }
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user || null;
}
