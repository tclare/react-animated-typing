import { FunctionComponent, useContext, useEffect, useState } from "react";
import { AnimatedTyperProps, TypingContext } from "../App";
import "./AnimatedTyperCursor.css";
import classNames from "classnames";

export const AnimatedTyperCursor: FunctionComponent<AnimatedTyperProps> = (props) => {
    const { 
        isSpellingState: { isSpelling },
        spelloutIndexState: { spelloutIndex }
    } = useContext(TypingContext);
    
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowCursor(isSpelling || !showCursor);
        }, 500);
    }, [isSpelling, showCursor]);

    const contributors = props.contributors ?? [];
    const contributorIndex = contributors ? spelloutIndex % contributors.length : 0;

    const cursorBlockStyles = (typeof props.cursorBoxStyles === "function") 
        ? props.cursorBoxStyles(contributorIndex)
        : props.cursorBoxStyles;
    const cursorLineStyles = (typeof props.cursorLineStyles === "function") 
        ? props.cursorLineStyles(contributorIndex)
        : props.cursorLineStyles;
    
    return (
        <div style={cursorLineStyles} className={classNames(
            "animated-typer__cursor-line",
            { "animated-typer__cursor-line--invisible": !isSpelling && !showCursor }
        )}>
            <div style={cursorBlockStyles} className={classNames(
                "animated-typer__cursor-box",
                { "animated-typer__cursor-box--invisible": !isSpelling && !showCursor }
            )}>
                <span>{contributors[contributorIndex]}</span>
            </div>
        </div>
    )
}