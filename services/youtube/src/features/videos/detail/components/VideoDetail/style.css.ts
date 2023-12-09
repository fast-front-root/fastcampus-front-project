import { f } from "@/src/shared/styles/functions";
import { responsiveStyle } from "@/src/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style([
  f.wFull,
]);

export const videoWrapper = style([
  f.wFull,
  {
    aspectRatio: "16 / 9",
    overflow: "hidden",
  },
  responsiveStyle({
    md: {
      borderRadius: "0.75rem",
    },
    sm: {
      borderRadius: "0",
    },
  }),
]);

export const video = style([f.wFull, f.hFull]);

export const contentsWrapper = style([
  f.wFull,
  responsiveStyle({
    md: {
      padding: "12px 0 24px",
    },
    sm: {
      padding: "12px 16px 8px",
    },
  }),
]);

export const title = style([
  f.wFull,
  f.truncate2,
  f.color.scale.gray[900],
  responsiveStyle({
    md: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: 700,
      maxHeight: "56px",
    },
    sm: {
      fontSize: "18px",
      lineHeight: "26px",
      fontWeight: 500,
      maxHeight: "none",
    },
  }),
]);
