import type {Options} from "../types/options";

export type Theme = "life" | "work" | "discipline" | "coding" | "confused";
export type Tone = "calm" | "honest" | "hopeful" | "dark" | "sadness";
export type Language = "en" | "id";

export const themes: Options[] = [
    {value: "life", label: "Life"},
    {value: "work", label: "Work"},
    {value: "discipline", label: "Discipline"},
    {value: "coding", label: "Coding"},
    {value: "confused", label: "Confused"},
]

export const tones: Options[] = [
    {value: "calm", label: "Calm"},
    {value: "sadness", label: "Sadness"},
    {value: "honest", label: "Honest"},
    {value: "hopeful", label: "Hopeful"},
    {value: "dark", label: "Dark"},
]

export const languages: Options[] = [
    {value: "en", label: "English Quote"},
    {value: "id", label: "Indonesian Quote"},
]


