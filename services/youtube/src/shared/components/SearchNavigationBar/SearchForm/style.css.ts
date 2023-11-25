import { f } from "@/src/shared/styles/functions";
import { responsiveStyle } from "@/src/shared/styles/functions/layout.css";
import { vars } from "@fastcampus/themes";
import { style } from "@vanilla-extract/css";

export const FORM_HEIGHT = '40px';

export const form = style([
  f.flex,
  f.wFull,
  {
    maxWidth: "692px",
    height: FORM_HEIGHT,
  },
  responsiveStyle({
    sm: {
      padding: "0 8px",
    },
    md: {
      padding: "0 4px",
    },
  }),
]);

export const input = style([
  f.wFull,
  f.color.scale.gray[900],
  {
    outline: "none",
    padding: "8px 12px",
    height: FORM_HEIGHT,
    background: vars.colors.$scale.gray[50],
    border: `1px solid ${vars.colors.$scale.gray[300]}`,
    borderRadius: "20px 0 0 20px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,

    selectors: {
      "&:focus": {
        border: `1px solid ${vars.colors.$scale.blue[300]}`,
      },
      "&::placeholder": {
        color: vars.colors.$scale.gray[400],
      },
    },
  },
]);

export const button = style({
  width: "64px",
  height: FORM_HEIGHT,
  background: vars.colors.$scale.gray[200],
  border: `1px solid ${vars.colors.$scale.gray[300]}`,
  borderLeft: "none",
  borderRadius: '0 20px 20px 0',
  cursor: 'pointer',
});
