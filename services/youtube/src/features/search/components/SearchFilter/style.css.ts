import { f } from "@/src/shared/styles/functions";
import { vars } from "@fastcampus/themes";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style([
  f.wFull,
  f.flex,
  f.justifyCenter,
  {
    padding: "0.5rem 1.5rem",
  },
]);

export const wrapper = style([
  f.wFull,
  f.flex,
  f.justifyStart,
  f.alignCenter,
  {
    maxWidth: "68.5rem",
    gap: "0.5rem",
  },
]);

export const chip = recipe({
  base: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    padding: "0.375rem 0.75rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
  },
  variants: {
    active: {
      true: {
        backgroundColor: vars.colors.$scale.gray[900],
        color: vars.colors.$scale.gray[50],
      },
      false: {
        backgroundColor: vars.colors.$scale.gray[200],
        color: vars.colors.$scale.gray[900],

        selectors: {
          "&:hover": {
            backgroundColor: vars.colors.$scale.gray[300],
          },
        },
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});
