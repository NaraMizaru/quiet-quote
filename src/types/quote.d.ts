export interface Quote {
    id: string;
    text: string;
    theme: string;
    tone: string;
    language: "en" | "id";
    source: "manual" | "ai";
    created_at: number;
}