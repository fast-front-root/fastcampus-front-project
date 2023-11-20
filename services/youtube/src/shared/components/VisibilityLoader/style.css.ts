import { style } from "@vanilla-extract/css";
import { f } from "@/src/shared/styles/functions";

export const wrapper = style([
  f.wFull,
  f.flex,
  f.justifyCenter, 
  {
    padding: '1rem 0.75rem'
  }
])
