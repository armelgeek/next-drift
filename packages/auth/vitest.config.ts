import { createReactConfig } from "@repo/testing/vitest/react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default createReactConfig({
  alias: {
    "@": path.resolve(__dirname, "./"),
  },
});
