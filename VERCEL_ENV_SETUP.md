# Test Database Configuration

## Environment Variable to Add

**Name:** `TEST_DATABASE_URL`

**Value:**
```
postgresql://neondb_owner:npg_eR0sONS9TYBg@ep-soft-sunset-akonq92b-pooler.c-3.us-west-2.aws.neon.tech/neondb?channel_binding=require&sslmode=require
```

## Where to Add

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the variable for these environments:
   - ✅ Production
   - ✅ Preview
   - ✅ Development

## What This Enables

- Database tests will run during the build process on Vercel
- Preview deployments will have access to the test database
- CI/CD pipeline will validate database queries before deployment

## Neon Project Details

- **Project ID:** `withered-rain-16037246`
- **Database:** `neondb`
- **Region:** us-west-2 (AWS)
- **Status:** Schema pushed and seeded with 5 sample pages

## Verification

After adding the environment variable, trigger a new deployment. The build logs should show:
```
@repo/database:test:  RUN  v4.1.2 /vercel/path0/packages/database
@repo/database:test:  ✓ Database Queries > should create and retrieve a page
@repo/database:test:  ✓ Database Queries > should update a page
@repo/database:test:  ✓ Database Queries > should delete a page
```
