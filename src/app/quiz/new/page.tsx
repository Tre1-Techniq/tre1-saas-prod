import QuizUploadForm from "./QuizUploadForm";

const quizUploadPage = () =>  {
    return (
        <div className="flex flex-col flex-1 min-h-screen">
            <div className="flex flex-col flex-1 text-center gap-4 items-center">
                <div className="w-full sm:w-1/2">
                    <h2 className="text-5xl font-bold pb-4">What is your quiz topic?</h2>
                    <p className="text-left pb-8 border-b border-secondary">Use the form below to upload a PDF and I will build a quiz based on the information in your document.</p>
                    <QuizUploadForm />
                </div>
            </div>
        </div>
    )
};

export default quizUploadPage;