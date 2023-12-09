import { f } from "@/src/shared/styles/functions";
import { vars } from "@fastcampus/themes";
import { style } from "@vanilla-extract/css";

export const wrapper = style([
  f.color.scale.gray[900],
  {
    borderRadius: "0.75rem",
    padding: "0.75rem",
    backgroundColor: vars.colors.$scale.gray[200],
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: 400,
  },
]);
