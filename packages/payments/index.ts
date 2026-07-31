import "server-only";
import Stripe from "stripe";
import { keys } from "./keys";

export const stripe = new Stripe(keys().STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

export type Stripe = typeof stripe;
