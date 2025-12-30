import {useState} from "react";
import type {Quote} from "../types/quote";
import {getQuotes, saveQuote} from "../lib/quote-storage";

export const useQuotes = () => {
    const [quotes, setQuotes] = useState<Quote[]>(() => getQuotes());

    const addQuote = (quote: Quote) => {
        saveQuote(quote);
        setQuotes((prev) => [quote, ...prev]);
    };

    const removeQuote = (quote: Quote) => {
        const updatedQuotes = quotes.filter(q => q.id !== quote.id);
        localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
        setQuotes(updatedQuotes);
    }

    return {
        quotes,
        addQuote,
        removeQuote
    };
};
