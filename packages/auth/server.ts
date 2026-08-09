import "server-only";

export { getSession as auth, getCurrentUser } from "./lib/server-helpers";
export type { Session, User } from "./lib/better-auth";
