import { FunctionComponent, useEffect, useState, useContext } from "react"
import { AnimatedTyperProps, TypingContext } from "../App"

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

    useEffect(() => {

        if (isSpelling) {
            setTimeout(() => {
                if (goingForward) {
                    setCharacterIndex(characterIndex+1); 
                    if (characterIndex >= wordLength) {
                        console.log("detected character index bigger than word length")
                        setIsSpelling(false);
                        setGoingForward(false);
                    }
                } else {
                    setCharacterIndex(characterIndex - 1);
                    if (characterIndex <= 0) {
                        setGoingForward(true);
                        setSpelloutIndex(spelloutIndex + 1);
                    }
                }
            }, spelloutDuration / wordLength) 
        } 

        else {
            setTimeout(() => {
                setIsSpelling(true);
            }, waitingDuration)
        }
    });

    return (
        <span style={props.textStyles}>{props.text[phraseIndex].slice(0, characterIndex + 1)}</span>
    )
}