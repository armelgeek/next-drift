import { createNextAppConfig } from "@repo/testing/vitest/react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

export default createNextAppConfig(__dirname, repoRoot);
