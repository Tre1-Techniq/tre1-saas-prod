import { db } from "../../server/db";

import { quizzes } from "../../server/db/schema";
import { eq } from "drizzle-orm";
import QuizQuestions from "./QuizQuestions";

const quizLandingPage = async ({ params }: {
    params: {
        quizId: string,
    }
}) => {
    const quizId = params.quizId;
    const quiz = await db.query.quizzes.findFirst({
        where: eq(quizzes.id, parseInt(quizId)),
        with: {
            questions: {
                with: {
                    answers: true
                }
            }
        }
    });

    console.log("QUIZ w/ PARSED QUIZ ID: ", quiz);

    if (!quizId || !quiz || quiz.questions.length === 0) {
        return <div>Quiz Not Found!</div>
    }

    return (
        <div><QuizQuestions quiz={quiz} /></div>
    )
};

export default quizLandingPage;

