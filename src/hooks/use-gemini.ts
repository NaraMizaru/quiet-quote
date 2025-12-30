import type {GenerateOptions} from "../types/gemini";
import {useState} from "react";
import {geminiModel} from "../lib/gemini";
import {themeContext, toneContext} from "../lib/prompt-context.ts";

const useGemini = () => {
    const [result, setResult] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const generate = async ({language, theme, tone}: GenerateOptions) => {
        setLoading(true);
        setError(null);
        setResult("");


        const prompt = `
            You are a thoughtful quote writer.
            
            Write a short, original quote meant to be saved and reread.
            Avoid clichés and motivational language.
            The quote should feel human, reflective, and emotionally grounded.
            
            Context:
            - Language: ${language === "id" ? "Indonesian" : "English"}
            - Theme focus: ${themeContext[theme] ?? theme}
            - Emotional tone: ${toneContext[tone] ?? tone}
            
            Rules:
            - Length: 1–2 sentences
            - No emojis
            - No hashtags
            - No quotation marks
            - Not poetic or rhyming
            - No explanations or introductions
            
            Output only the quote text.
        `;

        try {
            const res = await geminiModel.generateContent(prompt);
            const text = res.response.text();
            setResult(text.trim());
        } catch {
            setError("Failed to generate quote. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return {
        result,
        loading,
        error,
        generate,
    };
};

export default useGemini;
