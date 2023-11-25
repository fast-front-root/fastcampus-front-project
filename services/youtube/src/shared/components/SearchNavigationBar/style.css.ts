import { f } from "@/src/shared/styles/functions";
import { responsiveStyle } from "@/src/shared/styles/functions/layout.css";
import { vars } from "@fastcampus/themes";
import { style } from "@vanilla-extract/css";

export const NAVIGATION_BAR_HEIGHT = "56px";

export const navigationBar = style([
  f.wFull,
  f.flex,
  f.justifyBetween,
  f.alignCenter,
  {
    position: "fixed",
    zIndex: 9000,
    top: 0,
    left: 0,
    height: NAVIGATION_BAR_HEIGHT,
    backgroundColor: vars.colors.$scale.gray[50],
  },
  responsiveStyle({
    sm: {
      padding: 0,
    },
    md: {
      padding: "0 1rem",
    },
  }),
]);

export const startWrapper = style([
  f.flex,
  f.justifyStart,
  f.alignCenter,
  f.hFull,
  {
    flex: 1,
  },
]);

export const centerWrapper = style([
  f.flex,
  f.justifyCenter,
  f.alignCenter,
  f.hFull,
  {
    flex: 3,
  },
]);

export const endWrapper = style([
  f.flex,
  f.justifyEnd,
  f.alignCenter,
  f.hFull,
  responsiveStyle({
    sm: {
      flex: 0,
    },
    md: {
      flex: 1,
    },
  }),
]);

export const logo = style({
  boxSizing: "content-box",
  width: "90px",
  height: "20px",
  padding: "0 14px",
  fill: vars.colors.$scale.gray[900],
});
