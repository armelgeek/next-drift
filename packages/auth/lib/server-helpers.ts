import "server-only";

export async function getSession() {
  try {
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
