"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Button } from '~/components/ui/button';
import QuizMasterAi from "../../../../public/images/quiz/quiz-master-ai-mascot.png";
import ProgressBar from './ProgressBar';
import QuizSubmission from "./QuizSubmission"
import { ChevronLeft, X } from 'lucide-react';
import ResultCard from './ResultCard';

type Props = {
    questionText: string;
    value: number;
}

export default function QuizMasterUI(props: Props) {
    const [started, setStarted] = useState<boolean>(false);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [submitted, setSubmitted] = useState<boolean>(false);

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

        setSelectedAnswer(null);
        setIsCorrect(null);
    }

    const handleAnswer = (answer: { id: any; isCorrect: any; }) => {
        setSelectedAnswer(answer?.id);
        const isCurrentCorrect = answer.isCorrect;

        if (isCurrentCorrect) {
            setScore(score + 1);
        }

        setIsCorrect(isCurrentCorrect);
    }

    const questions = [
        {
            questionText: "What is React?",
            answers: [
                { 
                    answerText: "A library for building User Interfaces.",
                    isCorrect: true,
                    id: 1
                },
                { 
                    answerText: "A front-end framework.",
                    isCorrect: false,
                    id: 2
                },
                { 
                    answerText: "A back-end framework.",
                    isCorrect: false,
                    id: 3
                },
                { 
                    answerText: "A database.",
                    isCorrect: false,
                    id: 4
                },
            ]
        },
        {
            questionText: "What is JSX?",
            answers: [
                { 
                    answerText: "Javascript and HTML.",
                    isCorrect: false,
                    id: 1
                },
                { 
                    answerText: "Javascript XML.",
                    isCorrect: true,
                    id: 2
                },
                { 
                    answerText: "Javascript and HTML.",
                    isCorrect: false,
                    id: 3
                },
                { 
                    answerText: "Javascript.",
                    isCorrect: false,
                    id: 4
                },
            ]
        },
        {
            questionText: "What is the Virtual DOM?",
            answers: [
                { 
                    answerText: "A real DOM.",
                    isCorrect: false,
                    id: 1
                },
                { 
                    answerText: "A virtual representation of the server.",
                    isCorrect: false,
                    id: 2
                },
                { 
                    answerText: "A virtual representation of the DOM.",
                    isCorrect: true,
                    id: 3
                },
                { 
                    answerText: "A virtual representation of the browser.",
                    isCorrect: false,
                    id: 4
                },
            ]
        }
    ]

    const scorePercentage: number = Math.round((score / questions.length) * 100);

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
        <div className='flex flex-col justify-center flex-1'>
            <main className='flex justify-center flex-1'>
                {!started ? 
                    <div className='px:6 lg:px-12 w-full lg:w-2/3 xl:w-1/2'>
                        <h2 className='text-5xl font-bold pb-6'>Your Quiz is Ready</h2>
                        <div className="flex justify-center">
                            <Image 
                                src={QuizMasterAi}
                                alt="QuizMaster AI Mascot Image"
                                width={500}
                                height={400}
                            />
                        </div>
                        <p className='text-center text-sm text-[#c8c8c8] py-4 px-12 w-3/4'>I prepared a custom quiz for you, based on the information in the document that you uploaded. Press the button below to get started!</p>
                    </div> : (
                    <div className="hidden lg:flex ">
                        <div className='position-sticky top-0 z-10 pb-12 shadow-md w-full'>
                            <header className='grid grid-cols-[auto,1fr,auto] grid-flow-col items-center justify-between py2 gap-2'>
                                <Button size={"icon"} variant={"outline"}><ChevronLeft /></Button>
                                <ProgressBar value={(currentQuestion / questions.length) * 100} />
                                <Button size={"icon"} variant={"outline"}><X /></Button>
                            </header>
                        </div>
                        <h2 className='text-3xl font-bold'>{questions[currentQuestion]?.questionText}</h2>
                        <div className='grid grid-cols-1 gap-6 mt-6'>
                            {questions[currentQuestion]?.answers.map(answer => {
                                const variant = selectedAnswer === answer.id ? (answer.isCorrect ? "neoSuccess" : "neoDanger") : "secondary";
                                return (
                                    <Button key={answer.id} variant={variant} onClick={() => handleAnswer(answer)}>{answer.answerText}</Button>
                                )
                            })}
                        </div>
                    </div>
                )}
            </main>
            <div className="flex flex-col justify-center flex-1 items-center">
                <footer className='bg-neutral-900 grid grid-flow-row grid-cols-1 footer pb-0 px-0 relative mb-0 w-1/3 mt-8'>
                    <ResultCard 
                        isCorrect={isCorrect} 
                        correctAnswer={questions[currentQuestion]?.answers.find(answer => answer.isCorrect === true)?.answerText || ''} 
                    />
                    <Button variant={"neo"} size={"lg"} className='w-full' onClick={handleNext}>
                        {!started ? 'Get Started' : (currentQuestion === questions.length - 1 && selectedAnswer !== null) ? 'Submit' : 'Next'}
                    </Button>
                </footer>
            </div>
        </div>
    )
}
