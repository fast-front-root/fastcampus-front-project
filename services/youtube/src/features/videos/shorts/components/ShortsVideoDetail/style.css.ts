import { f } from "@/src/shared/styles/functions";
import { style } from "@vanilla-extract/css";

export const container = style([f.wFull, f.flex, f.justifyCenter]);

export const wrapper = style([
  f.flex,
  {
    width: "fit-content",
    overflow: "hidden",
    borderRadius: "12px",
  },
]);

export const videoWrapper = style([f.flex, f.pRelative]);
