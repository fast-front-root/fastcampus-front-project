import { f } from "@/src/shared/styles/functions";
import { responsiveStyle } from "@/src/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style([f.wFull, f.flex, f.justifyStart, f.alignCenter]);

export const image = style([
  {
    borderRadius: "50%",
    marginRight: "0.75rem",
  },
  responsiveStyle({
    md: {
      width: "2.5rem",
      height: "2.5rem",
    },
    sm: {
      width: "2rem",
      height: "2rem",
    },
  }),
]);

export const contentsWrapper = style([
  f.flex,
  responsiveStyle({
    md: {
      flexDirection: "column",
      gap: 0,
    },
    sm: {
      flexDirection: "row",
      gap: "8px",
    },
  }),
]);

export const title = style([
  f.truncate1,
  f.color.scale.gray[900],
  responsiveStyle({
    md: {
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: 500,
    },
    sm: {
      fontSize: "14px",
      lineHeight: 1.25,
      fontWeight: 500,
    },
  }),
]);

export const description = style([
  f.color.scale.gray[600],
  f.truncate1,
  {
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: 400,
  },
]);
