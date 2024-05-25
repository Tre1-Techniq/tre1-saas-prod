// QuizMaster AI Main Page. Signed-Out defaults to QMAI Landing Page w/promo funnel

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import QuizMasterUI from "~/components/containers/qmai/QuizMasterUI";

type Props = {
    questionText: string;
    value: number;
}

export default async function QuizMasterAiPage({value, questionText}: Props) {
  return (
    <main className="flex flex-wrap justify-center gap-4 padding-12 mt-12">
      <SignedOut>
        <div className="h-full w-full text-center font-lg">
          <h3>QuizMaster AI Landing Page</h3>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="h-full w-full text-center font-lg">
            <QuizMasterUI value={value} questionText={questionText} />
        </div>
      </SignedIn>
    </main>
  );
}