// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { relations, sql } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgTableCreator,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `tre1-saas-t3_${name}`);

export const images = createTable(
  "image",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", { length: 1024 }).notNull(),

    userId: varchar("userId", { length: 256 }).notNull(),

    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

export const quizzes = createTable(
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

export const questions = createTable(
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

export const questionAnswers = createTable(
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
