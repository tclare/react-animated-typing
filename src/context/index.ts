import { createContext } from "react";

const isSpellingDefaults = {
    isSpelling: true,
    setIsSpelling: (s: boolean) => {}
  };
  
  const spelloutIndexDefaults = {
    spelloutIndex: 0,
    setSpelloutIndex: (n: number) => {}
  }
  
  const defaultContextState = {
    isSpellingState: isSpellingDefaults,
    spelloutIndexState: spelloutIndexDefaults
  };
  

export const TypingContext = createContext(defaultContextState);
