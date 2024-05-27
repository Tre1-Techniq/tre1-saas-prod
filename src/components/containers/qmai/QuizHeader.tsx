import Link from "next/link"

const QuizHeader = () => {
    return (
        <header>
            <nav className="px-4 py-2.5 flex gap-2">
                <Link className="underline" href={"/quiz"}>Sample Quiz</Link>
                <Link className="underline" href={"/quiz/new"}>New Quiz</Link>
            </nav>
        </header>
    )
}

export default QuizHeader;