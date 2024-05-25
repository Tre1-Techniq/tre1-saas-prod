CREATE TABLE IF NOT EXISTS "tre1-saas-t3_image" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"url" varchar(1024) NOT NULL,
	"userId" varchar(256) NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updatedAt" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tre1-saas-t3_questionAnswers" (
	"id" serial PRIMARY KEY NOT NULL,
	"question_id" integer,
	"answer_text" text,
	"is_correct" boolean
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tre1-saas-t3_questions" (
	"id" serial PRIMARY KEY NOT NULL,
	"question_text" text,
	"quiz_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tre1-saas-t3_quizzes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text,
	"description" text,
	"userId" text
);
--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "tre1-saas-t3_image" ("name");