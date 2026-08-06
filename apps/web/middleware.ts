import {
  noseconeOptions,
  noseconeOptionsWithToolbar,
  securityMiddleware,
} from "@repo/security/proxy";
import type { NextRequest } from "next/server";
import { env } from "@/env";

export const config = {
  matcher: ["/((?!_next/static|_next/image|ingest|favicon.ico).*)"],
};

export const middleware = env.FLAGS_SECRET
  ? securityMiddleware(noseconeOptionsWithToolbar)
  : securityMiddleware(noseconeOptions);
