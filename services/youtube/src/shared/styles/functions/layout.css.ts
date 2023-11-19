import { StyleRule } from "@vanilla-extract/css"

type gridResponsiveStyleParams = {
  twoXl?: StyleRule,
  xl?: StyleRule,
  lg?: StyleRule,
  md?: StyleRule,
  sm?: StyleRule,
};

export const gridResponsiveStyle = ({
  twoXl = {},
  xl = {},
  lg = {},
  md = {},
  sm = {},
}: gridResponsiveStyleParams) => ({
  "@media": {
    "screen and (min-width: 1600px)": twoXl,
    "screen and (min-width: 1340px) and (max-width: 1599px)": xl,
    "screen and (min-width: 1010px) and (max-width: 1339px)": lg,
    "screen and (min-width: 684px) and (max-width: 1009px)": md,
    "screen and (max-width: 683px)": sm,
  },
});
