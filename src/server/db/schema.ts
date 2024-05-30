// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  timestamp,
  pgTable,
  text,
  varchar,
  primaryKey,
  integer,
  serial,
  boolean,
  pgEnum,
} from "drizzle-orm/pg-core";
// import type { AdapterAccount } from "@auth/core/adapters";
import { relations } from "drizzle-orm";


// Define the users table
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  clerkUserId: text('id').notNull().primaryKey(),
  email: text('primary_email_address').notNull(),
  phone: text("primary_phone_number"),
  avatar: text("image_url"),
  createdAt: timestamp('created_at').defaultNow(),
  firstName: text('first_name'),
  lastName: text('last_name'),
  updatedAt: timestamp('updated_at'),
  app_metadata: text('unsafe_metadata'),
  userHasImage: boolean('has_image'),
  user_metadata: text('public_metadata'),
});

export const usersRelations = relations(users, ({ many }) => ({
  quizzes: many(quizzes),
}));

// QuizMaster AI Tables
export const quizzes = pgTable( 
  "quizzes",
  {
    id: serial("id").primaryKey(),
    name: text("name"),
    description: text("description"),
    userId: text("userId").references(() => users.clerkUserId),
  }
);

export const quizzesRelations = relations(quizzes, ({many, one}) => ({
  questions: many(questions),
}));

export const sessions = pgTable("session", {
  expires: timestamp("expires", { mode: "date"}).notNull(),
});

export const questions = pgTable(
  "questions",
  {
    id: serial("id").primaryKey(),
    questionText: text("question_text"),
    quizId: integer("quiz_id"),
  }
);

export const questionRelations = relations(questions, ({one, many}) => ({
  quiz: one(quizzes, {
    fields: [questions.quizId],
    references: [quizzes.id]
  }),
  answers: many(questionAnswers),
}));

export const questionAnswers = pgTable(
  "questionAnswers",
  {
    id: serial("id").primaryKey(),
    questionId: integer("question_id"),
    answerText: text("answer_text"),
    isCorrect: boolean("is_correct"),
  }
);

export const questionAnswerRelations = relations(questionAnswers, ({one}) => ({
  question: one(questions, {
    fields: [questionAnswers.questionId],
    references: [questions.id]
  }),
}));
