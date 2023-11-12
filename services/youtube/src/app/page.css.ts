import { style } from "@vanilla-extract/css";
import { f } from "@/src/shared/styles/functions";
import { vars } from "@fastcampus/themes";

export const main = style([
  f.flexCenterBox,
  f.hScreen,
  f.wScreen,
  {
    backgroundColor: vars.colors.$scale.gray[50],
  },
]);

export const typo = style([
  f.color.scale.gray[600],
  {
    fontSize: '24px',
  }
])
