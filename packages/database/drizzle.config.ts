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

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: databaseUrl,
  },
});
