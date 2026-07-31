import {
  pgTable,
  serial,
  varchar,
  text,
  boolean,
  timestamp,
  index,
  foreignKey,
  uuid,
} from "drizzle-orm/pg-core";

export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
});

// Better Auth tables
export const betterAuthUsers = pgTable(
  "user",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull().unique(),
    emailVerified: boolean("emailVerified").notNull().default(false),
    name: text("name"),
    image: text("image"),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  },
  (table) => [index("user_email_idx").on(table.email)]
);

export const betterAuthSessions = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expiresAt").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt").notNull().defaultNow(),
    ipAddress: text("ipAddress"),
    userAgent: text("userAgent"),
    userId: text("userId").notNull(),
  },
  (table) => [
    foreignKey({ columns: [table.userId], foreignColumns: [betterAuthUsers.id] }),
    index("session_userId_idx").on(table.userId),
  ]
);

export const betterAuthAccounts = pgTable(
  "account",
  {
    id: text("id").primaryKey(),
    accountId: text("accountId").notNull(),
    providerId: text("providerId").notNull(),
    userId: text("userId").notNull(),
    accessToken: text("accessToken"),
    refreshToken: text("refreshToken"),
    idToken: text("idToken"),
    accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
    refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
    updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  },
  (table) => [
    foreignKey({ columns: [table.userId], foreignColumns: [betterAuthUsers.id] }),
    index("account_userId_idx").on(table.userId),
  ]
);

export const betterAuthOrganizations = pgTable(
  "organization",
  {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    slug: text("slug").notNull().unique(),
    logo: text("logo"),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
    metadata: text("metadata"),
  },
  (table) => [index("organization_slug_idx").on(table.slug)]
);

export const betterAuthOrganizationMembers = pgTable(
  "organizationMember",
  {
    id: text("id").primaryKey(),
    organizationId: text("organizationId").notNull(),
    userId: text("userId").notNull(),
    role: text("role").notNull().default("member"),
    createdAt: timestamp("createdAt").notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.organizationId],
      foreignColumns: [betterAuthOrganizations.id],
    }),
    foreignKey({ columns: [table.userId], foreignColumns: [betterAuthUsers.id] }),
    index("organizationMember_organizationId_idx").on(table.organizationId),
    index("organizationMember_userId_idx").on(table.userId),
  ]
);

export const betterAuthVerifications = pgTable(
  "verification",
  {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expiresAt").notNull(),
    createdAt: timestamp("createdAt").defaultNow(),
    updatedAt: timestamp("updatedAt").defaultNow(),
  },
  (table) => [index("verification_identifier_idx").on(table.identifier)]
);

// Account management tables
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
  (table) => [index("user_preferences_user_id_idx").on(table.userId)]
);
