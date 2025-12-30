import type {Theme, Tone} from "../lib/options.ts";

export interface GenerateOptions {
    language: "en" | "id";
    theme: Theme;
    tone: Tone;
}