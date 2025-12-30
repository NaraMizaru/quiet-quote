import Header from "../components/Header.tsx";
import QuoteGenerator from "../components/QuoteGenerator.tsx";
import QuoteCard from "../components/QuoteCard.tsx";
import {useQuotes} from "../hooks/use-quotes.ts";

const Home = () => {
    const {quotes, addQuote, removeQuote} = useQuotes();

    return (
        <>
            <Header/>
            <QuoteGenerator onSave={addQuote}/>

            <section className="max-w-2xl mx-auto px-4 py-6">
                <h2 className="mb-4 text-sm font-medium text-neutral-500">
                    Saved Quotes
                </h2>

                <div className="grid gap-4">
                    {quotes && quotes.length > 0 ? (
                        quotes.map((quote) => (
                            <QuoteCard
                                key={quote.id}
                                text={quote.text}
                                theme={quote.theme}
                                tone={quote.tone}
                                language={quote.language}
                                mode={quote.source}
                                onDelete={() => removeQuote(quote)}
                            />
                        ))
                    ) : (
                        <div className="rounded-2xl border border-dashed bg-neutral-50 p-8 text-center">
                            <p className="text-sm text-neutral-500">
                                No quotes saved yet.
                            </p>
                            <p className="mt-1 text-xs text-neutral-400">
                                Generate one or write your own.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default Home