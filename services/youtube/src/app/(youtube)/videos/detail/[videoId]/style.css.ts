import { f } from "@/src/shared/styles/functions";
import { responsiveStyle } from "@/src/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

export const container = style([
  f.wFull,
  f.flex,
  f.justifyCenter,
  responsiveStyle({
    md: {
      padding: "24px",
    },
    sm: {
      padding: "0 0 24px 0",
    },
  }),
]);

export const wrapper = style([
  f.wFull,
  f.flex,
  f.directionColumn,
  {
    maxWidth: "1096px",
  },
]);
