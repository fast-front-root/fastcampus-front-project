import { f } from "@/src/shared/styles/functions";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const wrapper = style([f.wFull]);

export const description = recipe({
  base: [
    f.wFull,
    {
      whiteSpace: "pre-wrap",
    },
  ],
  variants: {
    showMore: {
      true: {},
      false: [f.truncate2],
    },
  },
  defaultVariants: {
    showMore: false,
  },
});
