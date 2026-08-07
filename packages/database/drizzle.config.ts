import { defineConfig } from "drizzle-kit";
import * as fs from "fs";

let databaseUrl = process.env.DATABASE_URL;

// Load from .env.local if not set
if (!databaseUrl) {
  const envLocalPath = "./.env.local";
  if (fs.existsSync(envLocalPath)) {
    const envContent = fs.readFileSync(envLocalPath, "utf-8");
    const match = envContent.match(/DATABASE_URL="([^"]+)"/);
    if (match) {
      databaseUrl = match[1];
    }
  }
}

if (!databaseUrl) {
  throw new Error("DATABASE_URL must be set");
}

// Detect Neon and sanitize URL for drizzle-kit compatibility
// Neon's serverless driver can timeout; direct endpoint is more reliable
const isNeon = databaseUrl.includes("neon.tech");
const sanitizedUrl = isNeon
  ? databaseUrl
      // Use direct endpoint instead of pooler (avoids WebSocket timeouts)
      .replace(/(-pooler\.)?c-\d+\./, "-c-")
      // Remove channel_binding parameter (causes WebSocket issues)
      .replace(/[&?]channel_binding=[^&]*/g, "")
  : databaseUrl;

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: sanitizedUrl,
  },
});
