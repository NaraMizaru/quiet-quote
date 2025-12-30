import type {Theme, Tone} from "./options.ts";

export const themeContext: Record<Theme, string> = {
    life: "life, personal growth, and quiet self-reflection",
    work: "work, purpose, responsibility, and long-term effort",
    discipline: "discipline, consistency, self-control, and inner strength",
    coding: "coding, problem-solving, focus, and building things slowly",
    confused: "emotional confusion, longing, uncertainty, and unspoken feelings",
};

export const toneContext: Record<Tone, string> = {
    calm: "calm, grounded, and emotionally steady",
    honest: "honest, raw, and emotionally real",
    hopeful: "quietly hopeful without being overly optimistic",
    dark: "dark, introspective, and slightly melancholic without being dramatic",
    sadness: "soft sadness, emotional vulnerability, and quiet heaviness without despair",
};
