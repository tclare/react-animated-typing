import React, { FunctionComponent } from 'react';

interface AnimatedTyperProps {
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
type StyleIndexFunction = (i: number) => React.CSSProperties | undefined;
type AnimatedTyperStyle = React.CSSProperties | StyleIndexFunction;
declare const AnimatedTyper: FunctionComponent<AnimatedTyperProps>;

export { AnimatedTyper };
