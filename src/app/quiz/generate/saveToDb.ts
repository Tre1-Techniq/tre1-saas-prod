import { db } from "~/server/db";
import { quizzes, questions as dbQuestions, questionAnswers } from "~/server/db/schema";
import { InferInsertModel } from "drizzle-orm";

type Quiz = InferInsertModel<typeof quizzes>;
type Question = InferInsertModel<typeof dbQuestions>;
type Answer = InferInsertModel<typeof questionAnswers>;

interface SaveQuizData extends Quiz {
    questions: Array<Question & { answers?: Answer[]}>;
}

export default async function saveQuiz(quizData: SaveQuizData ) {
    const { name, description, questions } = quizData;

    const newQuiz = await db
    .insert(quizzes)
    .values({
        name,
        description
    })
    .returning({ insertedId: quizzes.id});

    const quizId = newQuiz[0]?.insertedId;

    await db.transaction(async(tx) => {
        for (const question of questions) {
            const result = await tx
            .insert(dbQuestions)
            .values({
                questionText: question.questionText,
                quizId
            })
            .returning({questionId: dbQuestions.id});

            const questionId = result[0]?.questionId; // Use optional chaining to access questionId

            if (questionId && question.answers && question.answers.length > 0) {
                await tx.insert(questionAnswers).values(
                    question.answers.map((answer) => ({
                        answerText: answer.answerText,
                        isCorrect: answer.isCorrect,
                        questionId
                    }))
                )
            }
        }
    })
    
    return { quizId } ;
}