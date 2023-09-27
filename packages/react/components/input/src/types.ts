import { UseInputProps } from '@fastcampus/react-hooks-input';
import { vars } from '@fastcampus/themes';

type Size = 'lg' | 'md' | 'sm' | 'xs';
type Color = keyof typeof vars.colors.$scale;

export type InputProps = UseInputProps & {
  color?: Color;
  size?: Size;
  variant?: "outline" | "filled";
  errorBorderColor?: string;
  focusBorderColor?: string;
};
