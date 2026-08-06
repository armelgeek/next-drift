import { logger } from "@repo/observability/logger.server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook } from "svix";
import { env } from "@/env";

export async function POST(request: Request) {
  const payload = await request.json();
  
  try {
    logger.info(`Auth webhook received: ${payload.type}`);
    
    // Handle different webhook events
    switch (payload.type) {
      case "user.created":
        logger.info(`User created: ${payload.data?.id}`);
        break;
      case "user.updated":
        logger.info(`User updated: ${payload.data?.id}`);
        break;
      case "user.deleted":
        logger.info(`User deleted: ${payload.data?.id}`);
        break;
      case "organization.created":
        logger.info(`Organization created: ${payload.data?.id}`);
        break;
      default:
        logger.info(`Unknown auth event: ${payload.type}`);
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error("Auth webhook error");
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 400 });
  }
}
