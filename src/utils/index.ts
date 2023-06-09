import { AnimatedTyperStyle } from "../App";

export function parseAnimatedTyperStyleProp(
    idx: number,
    style?: AnimatedTyperStyle, 
) {
    return (typeof style === "function") 
        ? style(idx)
        : (Array.isArray(style))
        ? style[idx % style.length]
        : style;
}