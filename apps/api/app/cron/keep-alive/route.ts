import { database, pages } from "@repo/database";
import { eq } from "drizzle-orm";

export const GET = async () => {
  // Insert a test page
  const [newPage] = await database.insert(pages).values({
    name: "cron-temp",
  }).returning();

  // Delete the test page
  await database.delete(pages).where(eq(pages.id, newPage.id));

  return new Response("OK", { status: 200 });
};