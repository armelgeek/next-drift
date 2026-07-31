"use server";

import { auth } from "./lib/better-auth";
import { emitWebhookEvent } from "./lib/webhooks";

export async function signInWithEmail(email: string, password: string) {
  try {
    const response = await auth.signIn.email({
      email,
      password,
    });

    if (!response.ok) {
      return {
        error: "Invalid email or password",
      };
    }

    return {
      data: response,
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Sign in failed",
    };
  }
}

export async function signUpWithEmail(
  email: string,
  password: string,
  name: string
) {
  try {
    const response = await auth.signUp.email({
      email,
      password,
      name,
    });

    if (!response.ok) {
      return {
        error: "Sign up failed",
      };
    }

    return {
      data: response,
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Sign up failed",
    };
  }
}

export async function signOut() {
  try {
    await auth.signOut();
    return { success: true };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Sign out failed",
    };
  }
}
