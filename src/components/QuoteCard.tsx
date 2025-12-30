type QuoteCardProps = {
    text: string;
    theme: string;
    tone: string;
    mode: string;
    language: "en" | "id";
    onDelete: () => void;
};

const QuoteCard = ({
                       text,
                       theme,
                       tone,
                       language,
                       mode,
                       onDelete,
                   }: QuoteCardProps) => {
    return (
        <div
            className=" group relative rounded-2xl border bg-white p-4 shadow-sm transition-all duration-200 ease-out hover:-translate-y-[1px] hover:shadow-md"
        >
            <button
                onClick={onDelete}
                className="absolute right-3 top-3 rounded-md px-2 py-1 text-xs text-neutral-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-150 hover:bg-red-50 cursor-pointer"
                aria-label="Delete quote"
            >
                ✕
            </button>

            <p className="mb-2 text-sm italic text-neutral-800">
                “{text}”
            </p>

            <div className="flex gap-2 text-xs text-neutral-500">
                <span>{theme}</span>
                <span>•</span>
                <span>{tone}</span>
                <span>•</span>
                <span>{language}</span>
                <span>•</span>
                <span>{mode}</span>
            </div>
        </div>
    );
};

export default QuoteCard;
