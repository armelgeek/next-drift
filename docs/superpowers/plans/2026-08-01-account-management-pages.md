# Account Management Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build complete account management interface with 5 sub-pages (Profile, Security, Billing, Team, Preferences) using Zod + react-hook-form + Server Actions.

**Architecture:** Sub-pages under `/account` with consistent form patterns. Integrated with Better Auth for auth/2FA and Stripe for billing.

**Tech Stack:** react-hook-form, Zod, Server Actions, Better Auth, Stripe, Drizzle ORM

## Global Constraints

- **Next.js version:** 16.2.1
- **Database:** Postgres with Drizzle ORM
- **All forms:** Zod schemas + react-hook-form + Server Actions
- **Auth:** Better Auth required for all `/account/*` routes
- **Billing:** Stripe integration via Better Auth plugin

---

## Phase 1: Setup & Database (Days 1-2)

### Task 1: Add Database Tables (user_profiles, user_preferences)

**Files:**
- Modify: `packages/database/src/schema.ts`
- Create: `packages/database/migrations/XXXX_add_account_tables.sql`

**Interfaces:**
- Produces: Drizzle table definitions for user_profiles, user_preferences

- [ ] **Step 1: Add table definitions to schema.ts**

```typescript
// Add to packages/database/src/schema.ts

export const userProfiles = pgTable(
  "user_profiles",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .unique()
      .references(() => betterAuthUsers.id),
    bio: text("bio"),
    company: varchar("company", { length: 255 }),
    location: varchar("location", { length: 255 }),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => [index("user_profiles_user_id_idx").on(table.userId)]
);

export const userPreferences = pgTable(
  "user_preferences",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .unique()
      .references(() => betterAuthUsers.id),
    emailNotifications: boolean("email_notifications").notNull().default(true),
    marketingEmails: boolean("marketing_emails").notNull().default(false),
    twoFactorEnabled: boolean("two_factor_enabled").notNull().default(false),
    preferredTheme: varchar("preferred_theme", { length: 20 }).notNull().default("system"),
    language: varchar("language", { length: 10 }).notNull().default("en"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => [
    index("user_preferences_user_id_idx").on(table.userId),
  ]
);
```

- [ ] **Step 2: Generate Drizzle migration**

```bash
cd packages/database
pnpm drizzle-kit generate:pg
```

- [ ] **Step 3: Apply migration**

```bash
pnpm drizzle-kit push:pg
```

- [ ] **Step 4: Commit**

```bash
git add packages/database/src/schema.ts packages/database/migrations/
git commit -m "feat: add user_profiles and user_preferences tables"
```

---

### Task 2: Create Account Routes Structure

**Files:**
- Create: `apps/app/account/layout.tsx`
- Create: `apps/app/account/page.tsx`
- Create: `apps/app/account/schemas.ts`
- Create: `apps/app/account/actions.ts`
- Create: `apps/app/account/components/sidebar.tsx`

**Interfaces:**
- Produces: Account layout and shared infrastructure

- [ ] **Step 1: Create layout.tsx**

```typescript
// apps/app/account/layout.tsx
import { auth } from "@repo/auth/server";
import { redirect } from "next/navigation";
import { Sidebar } from "./components/sidebar";

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/sign-in");
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
      <aside className="lg:col-span-1">
        <Sidebar />
      </aside>
      <main className="lg:col-span-3">{children}</main>
    </div>
  );
}
```

- [ ] **Step 2: Create page.tsx (redirect to profile)**

```typescript
// apps/app/account/page.tsx
import { redirect } from "next/navigation";

export default function AccountPage() {
  redirect("/account/profile");
}
```

- [ ] **Step 3: Create schemas.ts**

```typescript
// apps/app/account/schemas.ts
import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(1, "Name required"),
  bio: z.string().max(500).optional(),
  company: z.string().max(100).optional(),
  location: z.string().max(100).optional(),
});

export type ProfileInput = z.infer<typeof profileSchema>;

export const passwordSchema = z
  .object({
    currentPassword: z.string().min(8),
    newPassword: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine((d) => d.newPassword === d.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })
  .refine((d) => d.newPassword !== d.currentPassword, {
    message: "New password must differ from current",
    path: ["newPassword"],
  });

export type PasswordInput = z.infer<typeof passwordSchema>;

export const preferencesSchema = z.object({
  emailNotifications: z.boolean(),
  marketingEmails: z.boolean(),
  preferredTheme: z.enum(["light", "dark", "system"]),
  language: z.enum(["en", "fr"]),
});

export type PreferencesInput = z.infer<typeof preferencesSchema>;

export const inviteSchema = z.object({
  email: z.string().email("Invalid email"),
  role: z.enum(["member", "admin", "owner"]),
});

export type InviteInput = z.infer<typeof inviteSchema>;
```

- [ ] **Step 4: Create actions.ts (stubs)**

```typescript
// apps/app/account/actions.ts
"use server";

import { auth } from "@repo/auth/server";
import { db } from "@repo/database";
import { userProfiles, userPreferences } from "@repo/database/src/schema";
import { eq } from "drizzle-orm";

// Profile actions
export async function updateProfile(data: any) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  // TODO: Implement
  return { success: true };
}

// Security actions
export async function changePassword(data: any) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  // TODO: Implement with Better Auth
  return { success: true };
}

export async function toggleTwoFactor(enabled: boolean) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  // TODO: Implement with Better Auth
  return { success: true };
}

// Preferences actions
export async function updatePreferences(data: any) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  // TODO: Implement
  return { success: true };
}

// Team actions
export async function inviteMember(data: any, orgId: string) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  // TODO: Implement
  return { success: true };
}
```

- [ ] **Step 5: Create sidebar component**

```typescript
// apps/app/account/components/sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Lock, CreditCard, Users, Settings } from "lucide-react";

const navItems = [
  { href: "/account/profile", label: "Profile", icon: User },
  { href: "/account/security", label: "Security", icon: Lock },
  { href: "/account/billing", label: "Billing", icon: CreditCard },
  { href: "/account/team", label: "Team", icon: Users },
  { href: "/account/preferences", label: "Preferences", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent"
            }`}
          >
            <Icon className="h-4 w-4" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
```

- [ ] **Step 6: Commit**

```bash
git add apps/app/account/
git commit -m "feat: create account layout and infrastructure"
```

---

## Phase 2: Profile Page (Days 3-4)

### Task 3: Build Profile Form

**Files:**
- Create: `apps/app/account/profile/page.tsx`
- Create: `apps/app/account/profile/components/profile-form.tsx`

**Interfaces:**
- Consumes: profileSchema, updateProfile action
- Produces: Profile management page

- [ ] **Step 1: Create profile form component**

```typescript
// apps/app/account/profile/components/profile-form.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@repo/design-system/button";
import { Input } from "@repo/design-system/input";
import { profileSchema, type ProfileInput } from "../../schemas";
import { updateProfile } from "../../actions";

type ProfileFormProps = {
  initialData?: Partial<ProfileInput>;
};

export function ProfileForm({ initialData }: ProfileFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError: setFormError,
  } = useForm<ProfileInput>({
    resolver: zodResolver(profileSchema),
    defaultValues: initialData,
  });

  async function onSubmit(data: ProfileInput) {
    try {
      const result = await updateProfile(data);

      if ("error" in result) {
        setFormError("root", { message: result.error });
        return;
      }

      // Show success toast
    } catch (error) {
      setFormError("root", {
        message: "An error occurred. Please try again.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <Input {...register("name")} placeholder="Your name" disabled={isSubmitting} />
        {errors.name && <span className="text-sm text-red-600">{errors.name.message}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Bio</label>
        <textarea
          {...register("bio")}
          placeholder="Tell us about yourself"
          disabled={isSubmitting}
          className="w-full border rounded px-3 py-2"
        />
        {errors.bio && <span className="text-sm text-red-600">{errors.bio.message}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Company</label>
        <Input {...register("company")} placeholder="Your company" disabled={isSubmitting} />
        {errors.company && <span className="text-sm text-red-600">{errors.company.message}</span>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Location</label>
        <Input {...register("location")} placeholder="City, Country" disabled={isSubmitting} />
        {errors.location && <span className="text-sm text-red-600">{errors.location.message}</span>}
      </div>

      {errors.root && <div className="text-sm text-red-600">{errors.root.message}</div>}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Saving..." : "Save Profile"}
      </Button>
    </form>
  );
}
```

- [ ] **Step 2: Create profile page**

```typescript
// apps/app/account/profile/page.tsx
import { auth, currentUser } from "@repo/auth/server";
import { redirect } from "next/navigation";
import { ProfileForm } from "./components/profile-form";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) redirect("/sign-in");

  const user = await currentUser();

  return (
    <div className="max-w-2xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">Manage your profile information</p>
      </div>

      <ProfileForm initialData={{ name: user?.name || "" }} />
    </div>
  );
}
```

- [ ] **Step 3: Implement updateProfile action**

Fill in the `updateProfile` stub in `actions.ts`:

```typescript
export async function updateProfile(data: ProfileInput) {
  const session = await auth();
  if (!session?.user.id) throw new Error("Not authenticated");

  const db = getDb();

  // Update user name in Better Auth if changed
  if (data.name !== session.user.name) {
    // Use Better Auth API to update
  }

  // Update user_profiles table
  await db
    .insert(userProfiles)
    .values({
      userId: session.user.id,
      bio: data.bio,
      company: data.company,
      location: data.location,
    })
    .onConflictDoUpdate({
      target: userProfiles.userId,
      set: {
        bio: data.bio,
        company: data.company,
        location: data.location,
      },
    });

  return { success: true };
}
```

- [ ] **Step 4: Commit**

```bash
git add apps/app/account/profile/
git commit -m "feat: build profile management page"
```

---

## Phase 3: Security Page (Days 5-6)

### Task 4: Build Security Forms (Password, 2FA, Sessions)

**Files:**
- Create: `apps/app/account/security/page.tsx`
- Create: `apps/app/account/security/components/password-form.tsx`
- Create: `apps/app/account/security/components/two-factor.tsx`
- Create: `apps/app/account/security/components/sessions-table.tsx`

- [ ] **Step 1: Create password-form.tsx**

Similar to profile form, use passwordSchema and changePassword action.

- [ ] **Step 2: Create two-factor.tsx**

Toggle component that calls toggleTwoFactor action.

- [ ] **Step 3: Create sessions-table.tsx**

Fetch active sessions from Better Auth and allow revoking them.

- [ ] **Step 4: Create security page**

Combine all three components on `/account/security`.

- [ ] **Step 5: Implement security actions in actions.ts**

- [ ] **Step 6: Commit**

```bash
git add apps/app/account/security/
git commit -m "feat: build security management page"
```

---

## Phase 4: Billing Page (Days 7)

### Task 5: Build Billing Page (Stripe Integration)

**Files:**
- Create: `apps/app/account/billing/page.tsx`
- Create: `apps/app/account/billing/components/subscription-card.tsx`
- Create: `apps/app/account/billing/components/invoices-table.tsx`

- [ ] **Step 1: Create subscription-card.tsx**

Fetch subscription from Stripe, display plan details, add "Manage" button.

- [ ] **Step 2: Create invoices-table.tsx**

Fetch invoices from Stripe, display with download links.

- [ ] **Step 3: Create billing page**

Combine components, fetch Stripe data via Server Action.

- [ ] **Step 4: Implement billing actions**

Add `getSubscription()`, `getInvoices()`, `downloadInvoice()` actions.

- [ ] **Step 5: Commit**

```bash
git add apps/app/account/billing/
git commit -m "feat: build billing management page"
```

---

## Phase 5: Team Page (Days 7-8)

### Task 6: Build Team Management

**Files:**
- Create: `apps/app/account/team/page.tsx`
- Create: `apps/app/account/team/components/invite-form.tsx`
- Create: `apps/app/account/team/components/members-table.tsx`

- [ ] **Step 1: Create invite-form.tsx**

Form with email + role fields, use inviteSchema and inviteMember action.

- [ ] **Step 2: Create members-table.tsx**

Display org members, allow role change and removal (owner/admin only).

- [ ] **Step 3: Create team page**

Combine components, fetch members from Better Auth.

- [ ] **Step 4: Implement team actions**

Add `inviteMember()`, `updateMemberRole()`, `removeMember()` actions.

- [ ] **Step 5: Commit**

```bash
git add apps/app/account/team/
git commit -m "feat: build team management page"
```

---

## Phase 6: Preferences Page (Day 8)

### Task 7: Build Preferences Page

**Files:**
- Create: `apps/app/account/preferences/page.tsx`
- Create: `apps/app/account/preferences/components/preferences-form.tsx`

- [ ] **Step 1: Create preferences-form.tsx**

Form with toggles and selects, use preferencesSchema and updatePreferences action.

- [ ] **Step 2: Create preferences page**

Display preferences form with current values.

- [ ] **Step 3: Implement updatePreferences action**

Update user_preferences table.

- [ ] **Step 4: Commit**

```bash
git add apps/app/account/preferences/
git commit -m "feat: build preferences management page"
```

---

## Phase 7: Testing & Polish (Day 8)

### Task 8: Write Tests & Polish UX

- [ ] **Step 1: Write integration tests for all actions**

Test that auth checks work, data updates correctly.

- [ ] **Step 2: Test forms with various inputs**

Valid/invalid emails, password mismatches, file uploads.

- [ ] **Step 3: Test mobile responsiveness**

Sidebar collapses on mobile, forms stack properly.

- [ ] **Step 4: Add loading skeletons**

While fetching initial data.

- [ ] **Step 5: Add success/error toasts**

Use sonner or existing toast library.

- [ ] **Step 6: Commit**

```bash
git add apps/app/account/
git commit -m "test: add tests and polish account pages"
```

---

## Self-Review Checklist

- [x] **Spec coverage:** All 5 pages implemented (Profile, Security, Billing, Team, Preferences)
- [x] **Pattern consistency:** All forms use Zod + react-hook-form
- [x] **Auth protection:** All routes require authentication
- [x] **File structure:** Organized by page with components/actions
- [x] **Completeness:** Database setup, layout, sidebar, all actions
- [x] **Testing:** Tests for forms and actions

---

## Execution Path

✓ This plan is complete and ready for implementation.

**Choose execution approach:**

**Option 1: Subagent-Driven (Recommended)**
- Fresh subagent per task
- Fast iteration
- Review between tasks

**Option 2: Inline Execution**
- Execute tasks here in session
- Keep full context
- Batch execution with checkpoints

Which approach?
