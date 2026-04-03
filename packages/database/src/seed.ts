import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
import { pages } from "./schema";

const TEST_DATABASE_URL =
  process.env.TEST_DATABASE_URL || process.env.DATABASE_URL;

if (!TEST_DATABASE_URL) {
  console.error(
    "❌ No database URL provided. Set TEST_DATABASE_URL or DATABASE_URL."
  );
  process.exit(1);
}

const pool = new Pool({ connectionString: TEST_DATABASE_URL });
const db = drizzle(pool);

const samplePages = [
  { name: "Home" },
  { name: "About" },
  { name: "Contact" },
  { name: "Products" },
  { name: "Blog" },
];

async function seed() {
  console.log("🌱 Seeding database...");

  try {
    // Check if pages already exist
    const existingPages = await db.select().from(pages);

    if (existingPages.length > 0) {
      console.log(
        `⚠️  ${existingPages.length} pages already exist. Skipping seed.`
      );
      return;
    }

    // Insert sample pages
    const result = await db.insert(pages).values(samplePages).returning();

    console.log(`✅ Seeded ${result.length} pages successfully!`);
    console.log("📄 Pages:");
    for (const page of result) {
      console.log(`   - ${page.name} (id: ${page.id})`);
    }
  } catch (error) {
    console.error("❌ Failed to seed database:", error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

seed();
