"use client";

export {
  useSession as useAuth,
  useSession,
  useUser,
  useIsClient,
} from "better-auth/react";

// Custom components imported from components/
export { OrganizationSwitcher } from "./components/organization-switcher";
export { UserButton } from "./components/user-button";
