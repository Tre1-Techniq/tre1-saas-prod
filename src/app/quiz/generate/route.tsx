import { NextRequest, NextResponse } from "next/server";

import { ChatOpenAI } from "@langchain/openai";
import { HumanMessage } from "@langchain/core/messages";

import { WebPDFLoader } from "~/app/quiz-upload/WebPDFLoader";
import { JsonOutputFunctionsParser } from "langchain/output_parsers";

import saveQuiz from "./saveToDb";

// Define the type of the result object
type Result = {
    quiz?: any; // Replace 'any' with the actual type of the 'quiz' property
    // Add other properties if needed
};

export async function POST(req: NextRequest) {
    const body = await req.formData();
    const document = body.get("pdf");

    try {
        const pdfLoader = new WebPDFLoader(document as Blob, {
            parsedItemSeparator: " ",
            splitPages:false,
        });

        const docs = await pdfLoader.load();

        const selectedDocuments = docs.filter((doc) => doc.pageContent !== undefined);
        const texts = selectedDocuments.map((doc) => doc.pageContent);

        const prompt = "given the text which is a summary of the document, generate a quiz based on the text. Return json only that contains a quizzes object with fields: name, description, questions. The questions is an array of objects with fields: questionText, answers. The answers is an array of objects with fields: answerText, isCorrect."

        if (!process.env.OPENAI_API_KEY) {
            return NextResponse.json({ error: "OpenAI API Key Not Provided!" }, { status: 200 });
        }

        const model = new ChatOpenAI({
            apiKey: process.env.OPENAI_API_KEY,
            modelName: "gpt-4-1106-preview"
        });

        const parser = new JsonOutputFunctionsParser();

        const extractionFunctionSchema = {
            name: "extractor",
            description: "Extracts fields from the input.",
            parameters: {
              type: "object",
              properties: {
                quizzes: {
                    type: "object",
                    properties: {
                        name: {type: "string"},
                        description: {type: "string"},
                        questions: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    questionText: {type: "string"},
                                    answers: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                answerText: {type: "string"},
                                                isCorrect: {type: "boolean"},
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
              },
            }
        };

        // Create a new runnable, bind the function to the model, and pipe the output through the parser
        const runnable = model
            .bind({
            functions: [extractionFunctionSchema],
            function_call: { name: "extractor" },
            })
            .pipe(parser);

        const message = new HumanMessage({
            content: [
                {
                   type: "text",
                   text:  prompt + "\n" + texts.join("\n")
                }
            ]
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