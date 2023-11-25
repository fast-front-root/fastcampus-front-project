import { StyleRule } from "@vanilla-extract/css"

type responsiveStyleParams = {
  twoXl?: StyleRule;
  xl?: StyleRule;
  lg?: StyleRule;
  md?: StyleRule;
  sm?: StyleRule;
};

export const responsiveStyle = ({
  twoXl = {},
  xl = {},
  lg = {},
  md = {},
  sm = {},
}: responsiveStyleParams) => ({
  "@media": {
    "screen and (min-width: 1px)": sm,
    "screen and (min-width: 684px)": md,
    "screen and (min-width: 1010px)": lg,
    "screen and (min-width: 1340px)": xl,
    "screen and (min-width: 1600px)": twoXl,
  },
});
