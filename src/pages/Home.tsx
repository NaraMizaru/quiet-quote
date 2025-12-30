import Header from "../components/Header.tsx";
import QuoteGenerator from "../components/QuoteGenerator.tsx";
import QuoteCard from "../components/QuoteCard.tsx";

const Home = () => {
    return (
        <>
            <Header/>
            <QuoteGenerator/>

            <section className="max-w-2xl mx-auto px-4 py-12">
                <h2 className="mb-4 text-sm font-medium text-neutral-500">
                    Saved Quotes
                </h2>

                <div className="grid gap-4">
                    <QuoteCard
                        text="Discipline is choosing what matters over what feels good."
                        theme="discipline"
                        tone="calm"
                        language="en"
                    />
                </div>
            </section>
        </>
    )
}

export default Home