import { f } from "@/src/shared/styles/functions";
import { createVar, keyframes, style } from "@vanilla-extract/css";

export const sizeVar = createVar();
export const wrapper = style([
  f.pRelative,
  {
    display: "inline-block",
    width: sizeVar,
    height: sizeVar,
  },
]);

const spinKeyframes = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

export const innerBorderColorVar = createVar();
export const inner = style([
  f.wFull,
  f.pAbsolute,
  {
    boxSizing: "border-box",
    display: "block",
    height: "100%",
    borderRadius: "50%",
    border: `3px solid ${innerBorderColorVar}`,
    borderTopColor: "transparent",
    animation: `${spinKeyframes} 1s linear infinite`,
  },
]);
