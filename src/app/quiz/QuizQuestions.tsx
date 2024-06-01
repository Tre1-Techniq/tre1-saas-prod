"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Button } from '~/components/ui/button';
import QuizMasterAi from "/public/images/quiz/quiz-master-ai-mascot.png";
import ProgressBar from './ProgressBar';
import QuizSubmission from "./QuizSubmission"
import { ChevronLeft, X } from 'lucide-react';
import ResultCard from './ResultCard';
import { questionAnswers, questions as DbQuestions, quizzes } from "~/server/db/schema";
import { InferSelectModel } from 'drizzle-orm';
import { useRouter } from "next/navigation";

type Answer = InferSelectModel<typeof questionAnswers>;
type Question = InferSelectModel<typeof DbQuestions> & { answers: Answer[]};
type Quiz = InferSelectModel<typeof quizzes> & { questions: Question[] };

type Props = {
    quiz: Quiz,
}

export default function QuizQuestions(props: Props) {
    const { questions } = props.quiz;
    const [started, setStarted] = useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<{ questionId: number, answerId: number }[]>([]);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const router = useRouter();

    const handleNext = () => {
        if (!started) {
            setStarted(true);
            return;
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setSubmitted(true);
            return;
        }
    }

    const handleAnswer = (answer: Answer, questionId: number) => {
        const newUserAnswersArr = [...userAnswers, {
            answerId: answer.id,
            questionId
        }];

        setUserAnswers(newUserAnswersArr);

        const isCurrentCorrect = answer.isCorrect;

        if (isCurrentCorrect) {
            setScore(score + 1);
        }
    }

    const handlePressPrev = () => {
        if (currentQuestion !== 0) {
            setCurrentQuestion(prevCurrentQuestion => prevCurrentQuestion - 1)
        }
    }

    const handleExit = () => {
        router.push('/dashboard');
    }

    const scorePercentage: number = Math.round((score / questions.length) * 100);
    const selectedAnswer: number | null | undefined = userAnswers.find((item) => item.questionId === questions[currentQuestion]?.id)?.answerId;
    const isCorrect: boolean | null | undefined = selectedAnswer !== undefined
        ? questions[currentQuestion]?.answers.find((answer) => answer.id === selectedAnswer)?.isCorrect
        : null;

    if (submitted) {
        return (
            <QuizSubmission
                score={score}
                scorePercentage={scorePercentage}
                totalQuestions={questions.length}
            />
        )
    }

    return (
        <div className='min-h-screen flex flex-col justify-center flex-1'>
            <main className='flex justify-center flex-1'>
                {!started ? (
                    <div className='w-full sm:w-1/2'>
                        <h2 className='text-5xl font-bold pb-6 text-center'>Your Quiz is Ready</h2>
                        <div className="flex justify-center">
                            <Image
                                src={QuizMasterAi}
                                alt="QuizMaster AI Mascot Image"
                                width={500}
                                height={400}
                            />
                        </div>
                        <p className='text-left text-sm text-subdued pt-4'>I prepared a custom quiz for you, based on the information in the document that you uploaded. Press the button below to get started!</p>
                    </div> ) : (
                        <div className="w-full sm:w-3/4">
                            <div className='position-sticky top-0 z-10 pb-4 shadow-md w-full'>
                                <header className='grid grid-cols-[auto,1fr,auto] grid-flow-col items-center justify-between py2 gap-2'>
                                    <Button size={"icon"} variant={"outline"} onClick={handlePressPrev}><ChevronLeft /></Button>
                                    <ProgressBar value={(currentQuestion / questions.length) * 100} />
                                    <Button size={"icon"} variant={"outline"} onClick={handleExit}><X /></Button>
                                </header>
                                <div className='w-full flex justify-center'>
                                    <p>Question <span>{currentQuestion + 1}</span> of <span>{questions.length}</span></p>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-start sm:justify-center w-full py-4 sm:py-6">
                                <div className="w-full">
                                    <h2 className='text-3xl font-bold'>{questions[currentQuestion]?.questionText}</h2>
                                    <div className='grid grid-cols-1 gap-6 mt-6'>
                                        {questions[currentQuestion]?.answers.map(answer => {
                                            const variant = selectedAnswer === answer.id ? (answer.isCorrect ? "neoSuccess" : "neoDanger") : "outline";
                                            return (
                                                <Button key={answer.id} disabled={!!selectedAnswer} variant={variant} onClick={() => handleAnswer(answer, questions[currentQuestion].id)}><p className='whitespace-normal'>{answer.answerText}</p></Button>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </main>
            <div className="w-full flex justify-center items-center">
                {!started ? (
                <div>
                    <p>QuizMasterAI Prompt</p>
                </div>
                ) : (
                <div>
                    <div className='py-4'>
                        <ResultCard
                            isCorrect={isCorrect}
                            correctAnswer={questions[currentQuestion]?.answers.find(answer => answer.isCorrect === true)?.answerText || ""}
                        />
                    </div>
                </div>
                )}
            </div>
            <div className="flex flex-col justify-center flex-1 items-center">
                <div className='bg-neutral-900 grid grid-flow-row grid-cols-1 mb-24 px-0 relative w-3/4'>
                    <Button variant="neo" size={"lg"} className='w-full' onClick={handleNext}>
                        {!started ? 'Get Started' : (currentQuestion === questions.length - 1 && selectedAnswer !== null) ? 'Submit' : 'Next'}
                    </Button>
                </div>
            </div>
        </div>
    )
}
