import { UseSelectProps } from "@fastcampus/react-hooks-select";
import { vars } from "@fastcampus/themes";

type Size = "lg" | "md" | "sm" | "xs";
type Color = keyof typeof vars.colors.$scale;

export type SelectProps = UseSelectProps & {
  color?: Color;
  size?: Size;
  variant?: "outline" | "filled";
  errorBorderColor?: string;
  focusBorderColor?: string;
};
