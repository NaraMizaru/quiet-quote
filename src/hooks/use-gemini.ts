import type {GenerateOptions} from "../types/gemini";
import {useState} from "react";
import {geminiModel} from "../lib/gemini";

const useGemini = () => {
    const [result, setResult] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const generate = async ({language, theme, tone}: GenerateOptions) => {
        setLoading(true);
        setError(null);
        setResult("");

        const prompt = `
            Generate a short inspirational quote.
            Language: ${language === "id" ? "Indonesian" : "English"}
            Theme: ${theme}
            Tone: ${tone}
            Length: 1–2 sentences.
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
