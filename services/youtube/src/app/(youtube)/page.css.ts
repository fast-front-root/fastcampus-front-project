import { style } from "@vanilla-extract/css";
import { f } from "@/src/shared/styles/functions";
import { vars } from "@fastcampus/themes";

export const main = style([
  f.flexCenterBox,
  f.directionColumn,
  f.hScreen,
  f.wScreen,
  f.color.scale.gray[900],
  {
    backgroundColor: vars.colors.$scale.gray[50],
  },
]);

