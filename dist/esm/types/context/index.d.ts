/// <reference types="react" />
export declare const TypingContext: import("react").Context<{
    isSpellingState: {
        isSpelling: boolean;
        setIsSpelling: (s: boolean) => void;
    };
    spelloutIndexState: {
        spelloutIndex: number;
        setSpelloutIndex: (n: number) => void;
    };
}>;
