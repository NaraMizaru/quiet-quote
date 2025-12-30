import {languages, themes, tones} from "../lib/options.ts";
import {useState} from "react";
import useGemini from "../hooks/use-gemini.ts";
import type {Quote} from "../types/quote";

type Mode = "ai" | "manual";
type QuoteGeneratorProps = {
    onSave: (quote: Quote) => void;
}

const QuoteGenerator = ({onSave}: QuoteGeneratorProps) => {
    const [theme, setTheme] = useState<string>("life");
    const [tone, setTone] = useState<string>("calm");
    const [language, setLanguage] = useState<string>("en");

    const [mode, setMode] = useState<Mode>("ai");
    const [manualText, setManualText] = useState("");

    const {result, loading, error, generate} = useGemini();

    const handleSave = () => {
        const text = mode === "manual" ? manualText : result;
        if (!text) return;

        const newQuote: Quote = {
            id: crypto.randomUUID(),
            text,
            theme,
            tone,
            language: language as "en" | "id",
            source: mode,
            created_at: Date.now(),
        }

        onSave(newQuote);
        setManualText("")
    }

    return (
        <section className="max-w-2xl mx-auto px-4 py-6">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="mb-6">
                    <h2 className="text-xl font-semibold tracking-tight">
                        Add a Quote
                    </h2>
                    <p className="mt-1 text-sm text-neutral-500">
                        Save your own words or generate one with AI.
                    </p>
                </div>

                <div className="mb-6 inline-flex rounded-xl border bg-neutral-50 p-1 text-sm">
                    <button
                        className={`rounded-lg px-4 py-1.5 transition cursor-pointer ${
                            mode === "manual"
                                ? "bg-neutral-900 shadow text-neutral-100"
                                : "text-neutral-500"
                        }`}
                        onClick={() => setMode("manual")}
                    >
                        Manual
                    </button>
                    <button
                        className={`rounded-lg px-4 py-1.5 transition cursor-pointer ${
                            mode === "ai"
                                ? "bg-neutral-900 shadow text-neutral-100"
                                : "text-neutral-500"
                        }`}
                        onClick={() => setMode("ai")}
                    >
                        AI
                    </button>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        className="rounded-lg border px-3 py-2 text-sm cursor-pointer"
                    >
                        {themes.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>

                    <select
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                        className="rounded-lg border px-3 py-2 text-sm cursor-pointer"
                    >
                        {tones.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>

                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value as "en" | "id")}
                        className="rounded-lg border px-3 py-2 text-sm cursor-pointer"
                    >
                        {languages.map((item) => (
                            <option key={item.value} value={item.value}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div key={mode} className={'animate-fade-in duration-200'}>
                    {mode === "manual" && (
                        <textarea
                            rows={4}
                            placeholder="Write a quote you want to remember…"
                            className="mt-6 w-full resize-none rounded-xl border p-4 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-neutral-300"
                            value={manualText}
                            onChange={(e) => setManualText(e.target.value)}
                        />
                    )}

                    {mode === "ai" && (
                        <div className="mt-6">
                            <button
                                onClick={() => {
                                    generate({
                                        language: language as "en" | "id",
                                        theme,
                                        tone,
                                    })
                                }}
                                disabled={loading}
                                className="w-full rounded-xl bg-neutral-900 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800 transition-all duration-150 ease-out active:scale-[0.97] disabled:opacity-60 disabled:pointer-events-none cursor-pointer"
                            >
                                {loading ? "Generating..." : "Generate Quote with AI"}
                            </button>

                            {loading && (
                                <div
                                    className="mt-4 rounded-xl bg-neutral-50 p-4 animate-pulse text-center text-neutral-400">
                                    Thinking…
                                </div>
                            )}

                            {!result && !error && !loading && (
                                <div className="mt-4 rounded-xl bg-neutral-50 p-4 text-center italic text-neutral-700">
                                    “Your AI-generated quote will appear here.”
                                </div>
                            )}

                            {error && (
                                <div className="mt-4 text-sm text-red-500 text-center">
                                    {error}
                                </div>
                            )}

                            {result && !loading && (
                                <div
                                    key={result}
                                    className="mt-4 rounded-xl bg-neutral-50 p-4 text-center italic text-neutral-700 animate-fade-in slide-in-from-bottom-1 duration-300"
                                >
                                    “{result}”
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <button
                    className="mt-6 w-full rounded-xl border px-4 py-2 text-sm hover:bg-neutral-100 cursor-pointer"
                    onClick={handleSave}
                >
                    Save Quote
                </button>
            </div>
        </section>
    )
}

export default QuoteGenerator;