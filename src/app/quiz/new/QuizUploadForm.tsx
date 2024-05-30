"use client"

import { useState } from "react";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation"

const QuizUploadForm = () => {
    const [document, setDocument] = useState<Blob | File | null | undefined>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!document) {
            setError("Please upload a PDF first!");
            return;
        };

        setIsLoading(true);
        // console.log(document);

        const formData = new FormData();

        formData.append("pdf", document as Blob);

        try {
            const res = await fetch("/api/quiz/generate", {
                method: "POST",
                body: formData
            });

            if (res.status === 200) {
                const data = await res.json();
                const quizId = data.quizId;

                router.push(`/quiz/${quizId}`);
            };
        } catch (e) {
            console.log("Error While Generating Quiz!", e);
        };

        setIsLoading(false);
    }

    return (
        <div className="w-full mt-8 py-4">
            {isLoading ? <p>Loading...</p> : <form className="w-full" onSubmit={handleSubmit}>
                <label className="bg-secondary w-full flex h-24 rounded-md border-2 border-dashed border-primary relative" htmlFor="quiz-pdf">
                    <div className="absolute inset-0 m-auto flex justify-center items-center text-[#848484]">
                        {document && 'name' in document ? (document as File).name : "Drag and Drop Your File or Click HERE"}
                    </div>
                    <input type="file" id="quiz-pdf" className="relative block w-full h-full z-50 opacity-0" onChange={(e) => setDocument(e?.target?.files?.[0])}></input>
                </label>
                {error ? <p className="text-red-500 pt-2">{error}</p> : null}
                <Button variant={"neo"} size="lg" className="mt-12" type="submit">Generate Your Quiz!</Button>
            </form>}
        </div>
    )
}

export default QuizUploadForm;