import { db } from "~/server/db";
import { quizzes, questions as dbQuestions, questionAnswers } from "~/server/db/schema";
import { InferInsertModel } from "drizzle-orm";

type Quiz = InferInsertModel<typeof quizzes>;
type Question = InferInsertModel<typeof dbQuestions>;
type Answer = InferInsertModel<typeof questionAnswers>;

interface SaveQuizData extends Quiz {
    name: string;
    description: string;
    questions: {
        id?: number;
        questionText?: string | null;
        quizId?: number | null;
        answers: {
            answerText?: string | null;
            isCorrect?: boolean | null;
            id?: number;
            questionId?: number | null;
        }[];
    }[];
}

export default async function saveQuiz(quizData: SaveQuizData) {
    const { name, description, questions } = quizData;

    const newQuiz = await db
        .insert(quizzes)
        .values({ name, description })
        .returning({ insertedId: quizzes.id });

    const quizId = newQuiz[0]?.insertedId;

    await db.transaction(async (tx) => {
        for (const question of questions) {
            const [questionId] = await tx
                .insert(dbQuestions)
                .values({ questionText: question.questionText, quizId })
                .returning({ questionId: dbQuestions.id });

            if (question.answers && question.answers.length > 0) {
                await tx.insert(questionAnswers).values(
                    question.answers.map((answer) => ({
                        answerText: answer.answerText,
                        isCorrect: answer.isCorrect,
                        questionId: questionId?.questionId, // Updated to use the correct questionId
                    }))
                );
            }
        }
    });

    return { quizId };
}
