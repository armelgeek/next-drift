import fs from "node:fs";
import { blog, legal } from "@repo/cms";
import type { MetadataRoute } from "next";
import { env } from "@/env";

// Local type definitions to work around basehub fragmentOn.infer bug
type BlogPost = {
  _slug: string;
};

type LegalPost = {
  _slug: string;
};

const appFolders = fs.readdirSync("app", { withFileTypes: true });
const pages = appFolders
  .filter((file) => file.isDirectory())
  .filter((folder) => !folder.name.startsWith("_"))
  .filter((folder) => !folder.name.startsWith("("))
  .map((folder) => folder.name);
const blogs = ((await blog.getPosts()) as BlogPost[]).map((post) => post._slug);
const legals = ((await legal.getPosts()) as LegalPost[]).map(
  (post) => post._slug
);
const protocol = env.VERCEL_PROJECT_PRODUCTION_URL?.startsWith("https")
  ? "https"
  : "http";
const url = new URL(`${protocol}://${env.VERCEL_PROJECT_PRODUCTION_URL}`);

const sitemap = async (): Promise<MetadataRoute.Sitemap> => [
  {
    url: new URL("/", url).href,
    lastModified: new Date(),
  },
  ...pages.map((page) => ({
    url: new URL(page, url).href,
    lastModified: new Date(),
  })),
  ...blogs.map((blogSlug) => ({
    url: new URL(`blog/${blogSlug}`, url).href,
    lastModified: new Date(),
  })),
  ...legals.map((legalSlug) => ({
    url: new URL(`legal/${legalSlug}`, url).href,
    lastModified: new Date(),
  })),
];

export default sitemap;
