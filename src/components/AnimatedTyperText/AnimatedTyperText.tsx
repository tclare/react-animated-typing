import { FunctionComponent, useEffect, useState, useContext } from "react"
import { AnimatedTyperProps } from "../AnimatedTyper/AnimatedTyper";
import { parseAnimatedTyperStyleProp } from "../../utils";
import { TypingContext } from "../../context";

export const AnimatedTyperText: FunctionComponent<AnimatedTyperProps> = (props) => {

    const { 
        isSpellingState: { isSpelling, setIsSpelling },
        spelloutIndexState: {spelloutIndex, setSpelloutIndex }
    } = useContext(TypingContext);

    const [characterIndex, setCharacterIndex] = useState(0);
    const [goingForward, setGoingForward] = useState(true);
    const spelloutDuration = props.spelloutDuration ?? 1000;
    const waitingDuration = props.waitingDuration ?? 2000;
    const numPhrases = props.text.length;
    const phraseIndex = spelloutIndex % numPhrases;
    const wordLength = props.text[phraseIndex].length;
    const textStyles = parseAnimatedTyperStyleProp(phraseIndex, props.textStyles);

    useEffect(() => {

        if (isSpelling) {
            setTimeout(() => {
                setCharacterIndex(goingForward ? characterIndex + 1 : characterIndex - 1);
                setGoingForward(!goingForward && characterIndex <= 0 ? true : goingForward && characterIndex >= wordLength ? false : goingForward);
                setSpelloutIndex(!goingForward && characterIndex <= 0 ? spelloutIndex + 1 : spelloutIndex);
                setIsSpelling(goingForward && characterIndex >= wordLength ? false : isSpelling);
            }, spelloutDuration / wordLength) 
        } 

        else {
            setTimeout(() => {
                setIsSpelling(true);
            }, waitingDuration)
        }
    });

    return (
        <span style={textStyles}>{props.text[phraseIndex].slice(0, characterIndex + 1)}</span>
    );
}