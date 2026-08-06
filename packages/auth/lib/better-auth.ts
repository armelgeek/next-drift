import { betterAuth } from "better-auth";
import { stripePlugin } from "better-auth/plugins/stripe";
import { drizzleAdapter } from "@better-auth/drizzle";
import Stripe from "stripe";
import * as schema from "@repo/database/src/schema";

// Import database client - adjust path based on actual export
let db: any;
try {
  // This will need to be updated based on actual @repo/database export
  db = require("@repo/database").default;
} catch {
  // Database client will be initialized at runtime
  console.warn("Database client not available during import");
}

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      user: schema.betterAuthUsers,
      session: schema.betterAuthSessions,
      account: schema.betterAuthAccounts,
      organization: schema.betterAuthOrganizations,
      organizationMember: schema.betterAuthOrganizationMembers,
      verification: schema.betterAuthVerifications,
    },
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
  plugins: [
    stripePlugin({
      stripe: new Stripe(process.env.STRIPE_SECRET_KEY || "", {
        apiVersion: "2023-10-16",
      }),
    }),
  ],
  secret: process.env.BETTER_AUTH_SECRET,
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.User;
