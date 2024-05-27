import { NextRequest, NextResponse } from "next/server";
import { ChatOpenAI } from "@langchain/openai";
import { JsonOutputFunctionsParser } from "langchain/output_parsers";
import { HumanMessage } from "@langchain/core/messages";
import { PDFLoader } from "~/app/quiz/new/BufferLoader";
import saveQuiz from "./saveToDb";

interface Answer {
    answerText: string;
    isCorrect: boolean;
}

interface Question {
    questionText: string;
    answers: Answer[];
}

interface Quiz {
    name: string;
    description: string;
    questions: Question[];
}

// Define the type of the result object
type Result = {
    quiz?: Quiz;
};

export async function POST(req: NextRequest) {
    const body = await req.formData();
    const document = body.get("pdf");

    try {
        const pdfLoader = new PDFLoader(document as File, { parsedItemSeparator: " ", splitPages: false });
        const docs = await pdfLoader.load();
        const selectedDocuments = docs.filter((doc) => doc.pageContent !== undefined);
        const texts = selectedDocuments.map((doc) => doc.pageContent);

        const prompt = `Given the text which is a summary of the document, generate a quiz based on the text. Return JSON only that contains a quiz object with fields: name, description, questions. The questions is an array of objects with fields: questionText, answers. The answers is an array of objects with fields: answerText, isCorrect. Be sure to parse answers as nested objects of question and answerText as a nested object of answers. I also need the isCorrect field to be associated with each answerText, denoting if the answer is true or false.`;

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json({ error: "OpenAI API Key Not Provided!" }, { status: 500 });
        }

        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY,
            modelName: "gpt-4-1106-preview",
        });

        const parser = new JsonOutputFunctionsParser();

        const extractionFunctionSchema = {
            name: "extractor",
            description: "Extracts fields from the output.",
            parameters: {
                type: "object",
                properties: {
                    quiz: {
                        type: "object",
                        properties: {
                            name: { type: "string" },
                            description: { type: "string" },
                            questions: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        questionText: { type: "string" },
                                        answers: {
                                            type: "array",
                                            items: {
                                                type: "object",
                                                properties: {
                                                    answerText: { type: "string" },
                                                    isCorrect: { type: "boolean" },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                required: ["quiz"],
            },
        };

        const runnable = model
            .bind({
                functions: [extractionFunctionSchema],
                function_call: { name: "extractor" },
            })
            .pipe(parser);

        const message = new HumanMessage({
            content: prompt + "\n" + texts.join("\n"),
        });

        const result: Result = await runnable.invoke([message]);
        console.log("RESULT: ", result);

        if (result.quiz) {
            const { quizId } = await saveQuiz(result.quiz);
            return NextResponse.json({ quizId }, { status: 200 });
        } else {
            return NextResponse.json({ error: "Quiz data not found in the result" }, { status: 200 });
        }
    } catch (e: any) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
