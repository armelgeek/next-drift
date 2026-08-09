import "server-only";

export async function getSession() {
  try {
    // Session retrieval depends on Better Auth setup and configuration
    // Implement based on your Better Auth instance
    return null;
  } catch {
    return null;
  }
}

export async function getCurrentUser() {
  const session = await getSession();
  return session && typeof session === "object" && "user" in session
    ? (session as any).user
    : null;
}
