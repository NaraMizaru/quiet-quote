type QuoteCardProps = {
    text: string;
    theme: string;
    tone: string;
    language: "en" | "id";
};

const QuoteCard = ({text, theme, tone, language}: QuoteCardProps) => {
    return (
        <div className="rounded-xl border bg-white p-4 shadow-sm">
            <p className="italic text-neutral-800">“{text}”</p>

            <div className="mt-3 flex items-center justify-between text-xs text-neutral-500">
                <span>
                  {theme} · {tone}
                </span>
                <span className="rounded bg-neutral-100 px-2 py-0.5 uppercase">
                  {language}
                </span>
            </div>
        </div>
    )
}

export default QuoteCard;