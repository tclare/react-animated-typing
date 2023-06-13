import React, { FunctionComponent, createContext, useState } from 'react';
import { AnimatedTyperText } from '../AnimatedTyperText';
import { AnimatedTyperCursor } from '../AnimatedTyperCursor';
import { TypingContext } from '../../context';

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

export type StyleIndexFunction = (i: number) => React.CSSProperties | undefined;
export type AnimatedTyperStyle = React.CSSProperties | StyleIndexFunction;

const defaultTextStyles: React.CSSProperties = {
  color: "black",
  fontFamily: "Georgia",
  fontWeight: "bold",
  fontSize: 48
};

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
