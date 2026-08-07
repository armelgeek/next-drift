CREATE TYPE "public"."application_status" AS ENUM('applied', 'interviewing', 'rejected', 'offer', 'archived');--> statement-breakpoint
CREATE TYPE "public"."job_type" AS ENUM('CDI', 'Stage', 'Contract', 'Freelance');--> statement-breakpoint
CREATE TABLE "applications" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"discovered_job_id" uuid,
	"job_title" varchar(255) NOT NULL,
	"company" varchar(255) NOT NULL,
	"job_posting_text" text NOT NULL,
	"optimized_cv" text,
	"cv_match_score" integer,
	"interview_questions" jsonb,
	"status" "application_status" DEFAULT 'applied' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "cv_analyses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" text NOT NULL,
	"uploaded_cv" text NOT NULL,
	"feedback" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "discovered_jobs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"google_job_id" varchar(255) NOT NULL,
	"title" varchar(255) NOT NULL,
	"company" varchar(255) NOT NULL,
	"job_posting_text" text NOT NULL,
	"salary_min" integer,
	"salary_max" integer,
	"job_type" "job_type" NOT NULL,
	"location" varchar(255) NOT NULL,
	"job_url" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"expires_at" timestamp NOT NULL,
	CONSTRAINT "discovered_jobs_google_job_id_unique" UNIQUE("google_job_id")
);
--> statement-breakpoint
CREATE TABLE "job_search_cache" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"query_hash" varchar(255) NOT NULL,
	"serpapi_response" jsonb NOT NULL,
	"fetched_at" timestamp DEFAULT now() NOT NULL,
	"expires_at" timestamp NOT NULL,
	CONSTRAINT "job_search_cache_query_hash_unique" UNIQUE("query_hash")
);
--> statement-breakpoint
ALTER TABLE "applications" ADD CONSTRAINT "applications_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "applications" ADD CONSTRAINT "applications_discovered_job_id_discovered_jobs_id_fk" FOREIGN KEY ("discovered_job_id") REFERENCES "public"."discovered_jobs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cv_analyses" ADD CONSTRAINT "cv_analyses_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "applications_user_id_idx" ON "applications" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "applications_status_idx" ON "applications" USING btree ("status");--> statement-breakpoint
CREATE INDEX "cv_analyses_user_id_idx" ON "cv_analyses" USING btree ("user_id");--> statement-breakpoint
CREATE INDEX "discovered_jobs_google_job_id_idx" ON "discovered_jobs" USING btree ("google_job_id");--> statement-breakpoint
CREATE INDEX "discovered_jobs_expires_at_idx" ON "discovered_jobs" USING btree ("expires_at");--> statement-breakpoint
CREATE INDEX "job_search_cache_query_hash_idx" ON "job_search_cache" USING btree ("query_hash");--> statement-breakpoint
CREATE INDEX "job_search_cache_expires_at_idx" ON "job_search_cache" USING btree ("expires_at");