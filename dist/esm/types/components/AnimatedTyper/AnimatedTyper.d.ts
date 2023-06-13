import React, { FunctionComponent } from 'react';
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
export declare const AnimatedTyper: FunctionComponent<AnimatedTyperProps>;
export {};
