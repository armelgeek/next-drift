"use server";

// Server actions for authentication
// Most auth operations are handled by Better Auth client library
// This file is kept for potential custom auth flows

export async function handleAuthError(error: unknown) {
  const message = error instanceof Error ? error.message : "Auth failed";
  return { error: message };
}
