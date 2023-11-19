import { f } from "@/src/shared/styles/functions";
import { gridResponsiveStyle } from "@/src/shared/styles/functions/layout.css";
import { vars } from "@fastcampus/themes";
import { style } from "@vanilla-extract/css";

export const wrapper = style([
  f.wFull,
  {
    display: "grid",
    padding: "1.5rem 1rem",
    gridAutoRows: "minmax(auto)",
  },
  gridResponsiveStyle({
    twoXl: {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
    xl: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    lg: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    md: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    sm: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  }),
]);

export const item = style([
  f.wFull,
  {
    height: "400px",
    padding: "0 0.5rem 2.5rem",
  },
]);

export const itemWrapper = style([
  f.wFull,
  {
    height: "100%",
    background: vars.colors.$scale.orange[700],
  },
]);
