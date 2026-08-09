"use server";

export async function signOut() {
  try {
    return { success: true };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Sign out failed" };
  }
}

export async function handleAuthError(error: unknown) {
  const message = error instanceof Error ? error.message : "Auth failed";
  return { error: message };
}

export async function signInWithEmail(email: string, password: string) {
  try {
    if (!email || !password) {
      return { error: "Email and password are required" };
    }
    return { success: true };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Sign in failed" };
  }
}

export async function signUpWithEmail(email: string, password: string, name: string) {
  try {
    if (!email || !password || !name) {
      return { error: "Name, email and password are required" };
    }
    return { success: true };
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Sign up failed" };
  }
}
