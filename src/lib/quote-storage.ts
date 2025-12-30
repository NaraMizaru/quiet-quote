import type {Quote} from "../types/quote";

const STORAGE_KEY = "quotes";

export const getQuotes = (): Quote[] => {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
}

export const saveQuote = (quote: Quote): void => {
    const quotes = getQuotes();
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...quotes, quote])
    )
}