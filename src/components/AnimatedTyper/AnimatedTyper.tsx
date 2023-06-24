import React, { FunctionComponent, createContext, useState } from 'react';
import { AnimatedTyperText } from '../AnimatedTyperText';
import { AnimatedTyperCursor } from '../AnimatedTyperCursor';
import { TypingContext } from '../../context';
import './AnimatedTyper.css';
import { parseAnimatedTyperStyleProp } from '../../utils';

export interface AnimatedTyperProps {
  text: string[];
  contributors?: string[];
  loopForever?: boolean;
  spelloutDuration?: number;
  waitingDuration?: number;
  blinkDuration?: number;
  containerStyles?: React.CSSProperties;
  textStyles?: AnimatedTyperStyle;
  cursorLineStyles?: AnimatedTyperStyle;
  cursorBoxStyles?: AnimatedTyperStyle;
}

export type StyleIndexFunction = (i: number) => React.CSSProperties | undefined;
export type AnimatedTyperStyle = React.CSSProperties | React.CSSProperties[] | StyleIndexFunction;

const defaultContainerStyle: React.CSSProperties = {
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
      <div className="animated-typer__container" style={{...defaultContainerStyle, ...props.containerStyles}}>
        <AnimatedTyperText {...props }/>
        <AnimatedTyperCursor {...props}/>
      </div>
    </TypingContext.Provider>
  );
};

export {};
