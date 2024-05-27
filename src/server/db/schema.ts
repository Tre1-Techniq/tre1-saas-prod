// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  serial,
  boolean,
  pgEnum,
} from "drizzle-orm/pg-core";
// import type { AdapterAccount } from "@auth/core/adapters";
import { relations } from "drizzle-orm";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
// export const createTable = pgTableCreator((name) => `tre1-saas-t3_${name}`);

export const quizzes = pgTable(
  "quizzes",
  {
    id: serial("id").primaryKey(),
    name: text("name"),
    description: text("description"),
    userId: text("userId"),

  }
);

export const quizzesRelations = relations(quizzes, ({many, one}) => ({
  questions: many(questions),
}));

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
