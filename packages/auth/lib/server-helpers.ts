import "server-only";
import { auth } from "./better-auth";

export async function getSession() {
  try {
    // Better Auth provides a toJSON method on the session
    const session = auth.toJSON?.();
    return session || null;
  } catch {
    return null;
  }
}

export async function getCurrentUser() {
  const session = await getSession();
  return session?.user || null;
}

export async function getAdminClient() {
  // Better Auth admin functions for managing users/orgs
  return {
    createUser: auth.createUser,
    deleteUser: auth.deleteUser,
    updateUser: auth.updateUser,
  };
}
