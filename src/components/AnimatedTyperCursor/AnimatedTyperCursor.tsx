import { FunctionComponent, useContext, useEffect, useState } from "react";
import { AnimatedTyperProps } from "../AnimatedTyper";
import { TypingContext } from "../../context"; 
import "./AnimatedTyperCursor.css";
import classNames from "classnames";
import { parseAnimatedTyperStyleProp } from "../../utils";

const defaultColoringStyles = [
    { backgroundColor: "green"},
    { backgroundColor: "orange"},
    { backgroundColor: "dodgerblue"},
    { backgroundColor: "purple"}
];

export const AnimatedTyperCursor: FunctionComponent<AnimatedTyperProps> = (props) => {
    const { 
        isSpellingState: { isSpelling },
        spelloutIndexState: { spelloutIndex }
    } = useContext(TypingContext);
    
    const [showCursor, setShowCursor] = useState(true);
    const blinkDuration = props.blinkDuration ?? 500;

    useEffect(() => {
        setTimeout(() => {
            setShowCursor(isSpelling || !showCursor);
        }, blinkDuration);
    }, [isSpelling, showCursor, blinkDuration]);

    const contributors = props.contributors ?? ["Tony", "Rachel", "Jesse", "Dillon"];
    const contributorIndex = contributors.length ? spelloutIndex % contributors.length : 0;
    const cursorBlockStyles = parseAnimatedTyperStyleProp(contributorIndex, props.cursorBoxStyles) ?? defaultColoringStyles;
    const cursorLineStyles = parseAnimatedTyperStyleProp(contributorIndex, props.cursorLineStyles) ?? defaultColoringStyles;
    
    return (
        <div style={cursorLineStyles} className={classNames(
            "animated-typer__cursor-line",
            { "animated-typer__cursor-line--invisible": !isSpelling && !showCursor }
        )}>
            { 
                contributors.length 
                ? (
                    <div style={cursorBlockStyles} className={classNames(
                        "animated-typer__cursor-box",
                        { "animated-typer__cursor-box--invisible": !isSpelling && !showCursor }
                    )}>
                        <span>{contributors[contributorIndex]}</span>
                    </div>
                ) : null
            }
        </div>
    )
}
