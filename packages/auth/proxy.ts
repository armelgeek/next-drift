export { toNextJsHandler as authMiddleware } from "better-auth/next-js";

// Note: Better Auth uses a different middleware pattern.
// toNextJsHandler wraps Better Auth for use in Next.js middleware.
// Protected routes are handled via auth() checks in route handlers/server actions.
