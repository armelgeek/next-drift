# Account Management Pages Design

**Date:** 2026-08-01  
**Status:** Approved  
**Approach:** Sub-pages with Zod + react-hook-form + Server Actions

## Executive Summary

Build a complete account management interface with 5 sub-pages: Profile, Security, Billing, Team, Preferences. Each page is a self-contained form using consistent patterns (Zod schemas, react-hook-form, Server Actions). Fully integrated with Better Auth for auth/2FA and Stripe for billing.

---

## Context & Constraints

**Current state:**
- Better Auth configured with Stripe plugin
- Stripe customers auto-created on signup
- User authentication in place
- Organizations with member roles supported

**Requirements:**
- Users can edit their profile (name, email, avatar, bio, company, location)
- Users can change password, enable 2FA, view active sessions
- Users can view/manage subscription, payment method, invoices
- Org admins can manage team members and roles
- All data changes use Server Actions
- All forms use Zod + react-hook-form
- Role-based access control

**Architecture:**
- Build directly in `apps/app/account/` (not a package yet)
- 5 sub-routes under `/account`
- Reuse patterns from auth forms
- Extract to package later if shared with other apps

---

## Database Schema

### New Tables

**user_profiles** - Custom user fields
```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES user(id),
  bio TEXT,
  company VARCHAR(255),
  location VARCHAR(255),
  updated_at TIMESTAMP DEFAULT now()
);
```

**user_preferences** - User settings
```sql
CREATE TABLE user_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES user(id),
  email_notifications BOOLEAN DEFAULT true,
  marketing_emails BOOLEAN DEFAULT false,
  two_factor_enabled BOOLEAN DEFAULT false,
  preferred_theme VARCHAR(20) DEFAULT 'system', -- light/dark/system
  language VARCHAR(10) DEFAULT 'en',
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);
```

**Existing Tables Used:**
- `user` (Better Auth) - email, name, image
- `organization` (Better Auth) - org data
- `organizationMember` (Better Auth) - roles

### Relationships
```
user (1) ──→ (1) user_profiles
user (1) ──→ (1) user_preferences
user (1) ──→ (M) organizationMember
organizationMember ──→ (1) organization
```

---

## Page Structure

### Overview

```
/account (Layout)
├── /profile       Profile management
├── /security      Password, 2FA, sessions
├── /billing       Subscription, invoices, payment
├── /team          Team members, invites, roles
└── /preferences   Notifications, theme, language
```

### Layout (`apps/app/account/layout.tsx`)
- Sidebar navigation (desktop) / Mobile hamburger
- Links to all 5 pages with icons
- Current page highlight
- User info card (avatar, name, email)
- Logout button

### /profile

**Route:** `apps/app/account/profile/page.tsx`

**Form Fields:**
- name (text input)
- email (read-only, informational)
- avatar (file upload)
- bio (textarea)
- company (text input)
- location (text input)

**Schema:**
```typescript
profileSchema = z.object({
  name: z.string().min(1, "Name required"),
  bio: z.string().max(500).optional(),
  company: z.string().max(100).optional(),
  location: z.string().max(100).optional(),
  avatar: z.instanceof(File).optional(),
});
```

**Server Action:** `updateProfile(data: ProfileInput)`
- Validate with schema
- Update `users` table (name, image if avatar)
- Update `user_profiles` table
- Return success/error

**UX:**
- Show current profile data pre-filled
- Avatar preview before upload
- Save button disabled during submit
- Success toast on save

---

### /security

**Route:** `apps/app/account/security/page.tsx`

**Three sections:**

#### 1. Change Password
**Form Fields:**
- currentPassword (password input)
- newPassword (password input)
- confirmPassword (password input)

**Schema:**
```typescript
passwordSchema = z.object({
  currentPassword: z.string().min(8),
  newPassword: z.string().min(8).refine(p => p !== c, "Same as current"),
  confirmPassword: z.string(),
}).refine(d => d.newPassword === d.confirmPassword, "Mismatch");
```

**Server Action:** `changePassword(data: PasswordInput)`
- Verify current password with Better Auth
- Update password via Better Auth
- Clear all sessions
- Return success/error

#### 2. Two-Factor Authentication
**Toggle:** Enable/Disable 2FA

**Server Action:** `toggleTwoFactor(enabled: boolean)`
- If enabling: generate secret, show QR code, require confirmation
- If disabling: require password confirmation
- Update `user_preferences.two_factor_enabled`

#### 3. Active Sessions
**Table:**
- Device info (browser, OS)
- Last active time
- Revoke button per session

**Server Action:** `revokeSession(sessionId: string)`
- Delete session from Better Auth
- Clear cookies
- Redirect to login

---

### /billing

**Route:** `apps/app/account/billing/page.tsx`

**Three sections:**

#### 1. Current Subscription
**Display:**
- Current plan name
- Price / billing cycle
- Next billing date
- Status (active/cancelled)
- Manage button (opens Stripe portal)

**Server Action:** `getSubscription()`
- Fetch from Stripe via `stripe.subscriptions.list()`
- Return plan details

#### 2. Payment Method
**Display:**
- Card brand, last 4 digits, expiry
- Update button

**Form Fields (if editing):**
- Use Stripe Elements or Stripe hosted form

**Server Action:** `updatePaymentMethod()`
- Redirect to Stripe hosted page or use Stripe JS

#### 3. Invoices
**Table:**
- Invoice date
- Amount
- Status (paid/pending)
- Download link

**Server Action:** `downloadInvoice(invoiceId: string)`
- Fetch PDF from Stripe
- Stream to user

---

### /team

**Route:** `apps/app/account/team/page.tsx`

**Two sections:**

#### 1. Invite Members
**Form Fields:**
- email (text input)
- role (select: member/admin/owner)

**Schema:**
```typescript
inviteSchema = z.object({
  email: z.string().email(),
  role: z.enum(['member', 'admin', 'owner']),
});
```

**Server Action:** `inviteMember(data: InviteInput, orgId: string)`
- Check user is org owner/admin
- Create invitation
- Send email via Resend
- Return success/error

#### 2. Members List
**Table:**
- Name, email
- Role (badge)
- Joined date
- Remove button (owner/admin only)
- Role update dropdown (owner/admin only)

**Server Actions:**
- `updateMemberRole(memberId: string, role: string, orgId: string)`
- `removeMember(memberId: string, orgId: string)`

---

### /preferences

**Route:** `apps/app/account/preferences/page.tsx`

**Form Fields:**
- emailNotifications (toggle)
- marketingEmails (toggle)
- preferredTheme (select: light/dark/system)
- language (select: en/fr/etc.)

**Schema:**
```typescript
preferencesSchema = z.object({
  emailNotifications: z.boolean(),
  marketingEmails: z.boolean(),
  preferredTheme: z.enum(['light', 'dark', 'system']),
  language: z.enum(['en', 'fr']),
});
```

**Server Action:** `updatePreferences(data: PreferencesInput)`
- Update `user_preferences` table
- Apply theme client-side
- Return success

---

## File Structure

```
apps/app/account/
├── layout.tsx              (sidebar + nav)
├── schemas.ts              (all Zod schemas)
├── actions.ts              (all server actions)
├── components/
│   ├── sidebar.tsx         (navigation sidebar)
│   └── header.tsx          (page header)
├── profile/
│   ├── page.tsx
│   ├── components/
│   │   └── profile-form.tsx
│   └── actions.ts          (profile-specific actions)
├── security/
│   ├── page.tsx
│   ├── components/
│   │   ├── password-form.tsx
│   │   ├── two-factor.tsx
│   │   └── sessions-table.tsx
│   └── actions.ts
├── billing/
│   ├── page.tsx
│   ├── components/
│   │   ├── subscription-card.tsx
│   │   ├── payment-method.tsx
│   │   └── invoices-table.tsx
│   └── actions.ts
├── team/
│   ├── page.tsx
│   ├── components/
│   │   ├── invite-form.tsx
│   │   └── members-table.tsx
│   └── actions.ts
└── preferences/
    ├── page.tsx
    ├── components/
    │   └── preferences-form.tsx
    └── actions.ts
```

---

## Integration Points

### Better Auth
- `auth()` for session in all pages
- `currentUser()` for user data
- `toggleTwoFactor()` for 2FA
- Password change via Better Auth
- Session management via Better Auth

### Stripe
- Subscription data via `stripe.subscriptions.list()`
- Payment methods via `stripe.paymentMethods.list()`
- Invoices via `stripe.invoices.list()`
- Customer ID from `user.privateMetadata.stripeCustomerId`

### Database
- `user_profiles` for custom fields
- `user_preferences` for settings
- `organizationMember` for roles

---

## Authentication & Authorization

**Page Access:**
- All `/account/*` routes require authenticated user
- Redirect to sign-in if not authenticated

**Data Access:**
- Users can only view/edit their own data
- Server actions verify `auth().user.id` matches requested userId
- Org management only for org owners/admins

**Middleware Protection:**
```typescript
// apps/app/middleware.ts
const protectedRoutes = /^\/account/;
if (protectedRoutes.test(pathname)) {
  const session = await auth();
  if (!session) redirect('/sign-in');
}
```

---

## Form Pattern (Reuses From Auth)

**Every form follows:**
1. Zod schema in `schemas.ts`
2. react-hook-form + resolver in component
3. Server action in `actions.ts`
4. Per-field error display
5. Loading state during submit
6. Success toast on completion

**Example:**
```typescript
// schemas.ts
export const profileSchema = z.object({ ... });
export type ProfileInput = z.infer<typeof profileSchema>;

// profile-form.tsx
const form = useForm<ProfileInput>({
  resolver: zodResolver(profileSchema),
});

// actions.ts
export async function updateProfile(data: ProfileInput) {
  const session = await auth();
  if (!session) throw new Error("Not authenticated");
  // ... update DB
}
```

---

## Success Criteria

- [ ] All 5 sub-pages built and working
- [ ] Forms use Zod + react-hook-form consistently
- [ ] Server actions validate and protect data
- [ ] Better Auth integration (auth, 2FA, password)
- [ ] Stripe integration (subscription, invoices, payment)
- [ ] Role-based access control (org members)
- [ ] Error handling and success messages
- [ ] Mobile-responsive layout
- [ ] All tests pass

---

## Timeline & Effort

| Phase | Tasks | Effort | Days |
|-------|-------|--------|------|
| Setup | Schemas, DB, layout | 0.5 | 0.5 |
| Profile | Form, upload, display | 1 | 1 |
| Security | Password, 2FA, sessions | 2 | 1.5 |
| Billing | Stripe integration, invoices | 1.5 | 1.5 |
| Team | Invites, members, roles | 1.5 | 1 |
| Preferences | Settings, theme, language | 0.5 | 0.5 |
| Testing & Polish | Tests, edge cases, mobile | 1 | 1 |
| **Total** | | **8** | **7 days** |

---

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Data consistency with Stripe | Fetch fresh from Stripe on each page load |
| Permission bypass | Verify user ID in every server action |
| Password reset UX | Clear all sessions on password change |
| 2FA setup UX | Show QR code + manual entry option |
| File upload size | Validate size server-side, compress avatar |

---

## Notes

- All forms reuse patterns from auth refactor (Zod + react-hook-form)
- Can extract to `@repo/account` package later if needed by other apps
- Stripe portal link for subscription management (Stripe-hosted)
- Consider resend email service for invites (already in codebase)
