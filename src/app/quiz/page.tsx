import { auth, currentUser } from "@clerk/nextjs/server";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import SampleQuiz from "~/components/containers/qmai/SampleQuiz";
// import Image from "next/image";
// import Link from "next/link";

type Props = {
    questionText: string;
    value: number;
}

export default async function QuizMasterAiLandingPage({value, questionText}: Props) {
    const { userId } = auth();

    if (userId) {
        const user = await currentUser();
    
        return (
            <div>
                <div className="h-full w-full text-center font-lg mt-12">
                    <h2 className='text-3xl font-bold'>Hello, {user?.firstName}</h2>
                    <p>What are we going to study today?</p>
                </div>
            </div>
        );
    } else if (!userId) {
        return (
            <div className="flex flex-wrap text-center justify-center gap-4 padding-12 mt-12">
                <SampleQuiz value={value} questionText={questionText} />
            </div>
        );
    }
}