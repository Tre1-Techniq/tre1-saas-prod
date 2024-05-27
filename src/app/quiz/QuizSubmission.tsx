import Image from "next/image";

import Bar from "./Bar";
import WellDone from "/public/images/quiz/quiz-master-ai-well-done.png"

type Props = {
    scorePercentage: number,
    score: number,
    totalQuestions: number,
}

const QuizSubmission = (props: Props) => {
    const { scorePercentage, score, totalQuestions } = props;

    return (
        <div className='flex flex-col flex-1'>
            <main className='flex flex-col gap-4 items-center flex-1'>
                <h2 className="text-5xl text-[#ff9000]font-bold">Quiz Completed!</h2>
                <p>You Scored: <span className="text-2xl font-bold text-primary px-4">{scorePercentage}%</span></p>
                {scorePercentage === 100 ? 
                    <div className="flex justify-center">
                        <Image 
                            src={WellDone} 
                            alt="Graduation Robot Image"
                            width={500}
                            height={400}
                    />
                    </div>
                    :
                    <>
                        <div className="flex flex-row gap-8 mt-6">
                            <Bar percentage={scorePercentage} color="green" />
                            <Bar percentage={100 - scorePercentage} color="red" />
                        </div>
                        <div className="flex flex-row gap-8">
                            <p className="px-2"><span className="font-xl font-bold text-[#ff9000]">{score}</span>{" "}Correct</p>
                            <p className="px-2"><span className="font-xl font-bold text-[#ff9000]">{totalQuestions - score}</span>{" "} Incorrect</p>
                        </div>
                    </>
                }
                
            </main>
        </div>
    )
};

export default QuizSubmission;