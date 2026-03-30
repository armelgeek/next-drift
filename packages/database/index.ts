import "server-only";

import { drizzle } from "drizzle-orm/neon-serverless";
import { neonConfig, Pool } from "@neondatabase/serverless";
import ws from "ws";
import { keys } from "./keys";
import * as schema from "./src/schema";

neonConfig.webSocketConstructor = ws;

const pool = new Pool({ connectionString: keys().DATABASE_URL });

export const database = drizzle(pool, { schema });

// biome-ignore lint/performance/noBarrelFile: re-exporting
export * from "./src/schema";
// Re-export drizzle-orm helpers
export { ilike } from "drizzle-orm";