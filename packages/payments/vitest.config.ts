import { createPackageConfig } from "@repo/testing/vitest/node";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default createPackageConfig(__dirname);
