import React, { FunctionComponent } from 'react';

export interface AnimatedTyperProps {
  text: string[];
  loopForever?: boolean;
  spelloutDuration?: number;
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

export const AnimatedTyper: FunctionComponent<AnimatedTyperProps> = (props) => {

  return (
    <div className="animated-typer-container" style={defaultTextStyles}>
      {props.text}
    </div>
  );
};

export {};
