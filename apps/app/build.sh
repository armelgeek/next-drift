#!/bin/bash
set -e

# Install pnpm globally
npm install -g pnpm

# Use pnpm from repo root
cd ../../

# Install dependencies
pnpm install --frozen-lockfile

# Build the app
pnpm build

# Copy .next to expected location
mkdir -p apps/app/.next
cp -r apps/app/.next/* apps/app/.next/ 2>/dev/null || true
