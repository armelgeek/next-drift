"use server";

export async function handleAuthError(error: unknown) {
  const message = error instanceof Error ? error.message : "Auth failed";
  return { error: message };
}
