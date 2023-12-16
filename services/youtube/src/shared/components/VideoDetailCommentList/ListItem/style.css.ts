import { f } from "@/src/shared/styles/functions";
import { responsiveStyle } from "@/src/shared/styles/functions/layout.css";
import { style } from "@vanilla-extract/css";

export const wrapper = style([
  f.wFull,
  f.flex,
  f.justifyStart,
  f.alignStart,
  {
    gap: "8px",
  },
]);

export const image = style([
  {
    borderRadius: "50%",
    objectFit: "cover",
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

export const contentsWrapper = style([f.wFull]);

export const titleWrapper = style([f.flex, f.justifyStart, f.alignCenter]);

export const title = style([
  f.color.scale.gray[700],
  f.truncate1,
  {
    fontSize: "13px",
    fontWeight: 500,
    lineHeight: "18px",
  },
]);

export const label = style([
  f.truncate1,
  f.color.scale.gray[500],
  {
    fontSize: "12px",
    fontWeight: 400,
    marginLeft: "4px",
  },
]);

export const description = style([
  f.color.scale.gray[800],
  {
    marginTop: "0.25rem",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.25rem",
  },
]);

export const info = style([
  f.truncate1,
  f.color.scale.gray[500],
  {
    fontSize: "12px",
    fontWeight: 400,
    marginTop: "4px",
  },
]);

