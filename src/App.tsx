import React, { FunctionComponent, createContext, useState } from 'react';
import { AnimatedTyperText } from './components/AnimatedTyperText';
import { AnimatedTyperCursor } from './components/AnimatedTyperCursor';
import "./App.css";
export interface AnimatedTyperProps {
  text: string[];
  contributors?: string[];
  loopForever?: boolean;
  spelloutDuration?: number;
  waitingDuration?: number;
  blinkDuration?: number;
  textStyles?: AnimatedTyperStyle;
  cursorLineStyles?: AnimatedTyperStyle;
  cursorBoxStyles?: AnimatedTyperStyle;
}

export type StyleIndexFunction = (i: number) => React.CSSProperties;
export type AnimatedTyperStyle = React.CSSProperties | StyleIndexFunction;

const defaultTextStyles: React.CSSProperties = {
  color: "black",
  fontFamily: "Georgia",
  fontWeight: "bold",
  fontSize: 48
};

const defaultCursorLineStyles: React.CSSProperties = {

};

const defaultCursorBoxStyles: React.CSSProperties = {

}

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

export const AnimatedTyper: FunctionComponent<AnimatedTyperProps> = (props) => {

  const [spelloutIndex, setSpelloutIndex] = useState(0);
  const [isSpelling, setIsSpelling ] = useState(true);
  const contextValue = {
    isSpellingState: { isSpelling, setIsSpelling },
    spelloutIndexState: { spelloutIndex, setSpelloutIndex }
  }

  return (
    <TypingContext.Provider value={contextValue}>
      <div className="animated-typer__container" style={defaultTextStyles}>
        <AnimatedTyperText {...props }/>
        <AnimatedTyperCursor {...props}/>
      </div>
    </TypingContext.Provider>
  );
};

export {};
