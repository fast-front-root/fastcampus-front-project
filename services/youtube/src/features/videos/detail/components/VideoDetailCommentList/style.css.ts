import { f } from "@/src/shared/styles/functions";
import { responsiveStyle } from "@/src/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style([
  f.wFull,
  responsiveStyle({
    md: {
      padding: "0.75rem 0 1.5rem",
    },
    sm: {
      padding: "0.5rem 1rem 0.75rem",
    },
  }),
]);

export const title = style([
  f.wFull,
  f.color.scale.gray[900],
  responsiveStyle({
    md: {
      paddingBottom: "1.5rem",
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: 700,
    },
    sm: {
      paddingBottom: "0.75rem",
      fontSize: "16px",
      lineHeight: 1.2,
      fontWeight: 700,
    },
  }),
]);

export const listWrapper = style([
  f.wFull,
  f.flex,
  f.directionColumn,
  {
    gap: "1rem",
  },
]);
