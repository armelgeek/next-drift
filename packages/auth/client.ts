"use client";

import { createAuthClient } from "better-auth/react";
import { AuthProvider } from "./provider";

export const authClient = createAuthClient({
  baseURL: typeof window !== "undefined" ? window.location.origin : "",
});

export { AuthProvider as SessionProvider };

// Custom components imported from components/
export { OrganizationSwitcher } from "./components/organization-switcher";
export { UserButton } from "./components/user-button";
