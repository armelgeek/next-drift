import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_WEB_URL ?? "http://localhost:3000";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => [
  { url: new URL("/", baseUrl).href, lastModified: new Date() },
  { url: new URL("/blog", baseUrl).href, lastModified: new Date() },
  { url: new URL("/pricing", baseUrl).href, lastModified: new Date() },
  { url: new URL("/contact", baseUrl).href, lastModified: new Date() },
];

export default sitemap;
