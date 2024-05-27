import { db } from "../../../server/db";

import { quizzes } from "../../../server/db/schema";
import { eq } from "drizzle-orm";
import QuizQuestions from "../QuizQuestions";


const quizDynamicPage = async ({ params }: {
    params: {
        quizId: string;
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
    })

    if (!quizId || !quiz || quiz.questions.length === 0) {
        return <div>Quiz Not Found!</div>
    };

    return (
        <div><QuizQuestions quiz={quiz} /></div>
    )
};

export default quizDynamicPage;

