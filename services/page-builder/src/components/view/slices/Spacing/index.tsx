import { Box } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";

type Props = {
  sliceStyle?: {
    height?: number,
    backgroundColor?: string,
  }
};

export const SpacingSlice: React.FC<Props> = ({ sliceStyle }: Props) => {
  const {
    height = 16,
    backgroundColor = vars.colors.$static.light.color.white,
  } = sliceStyle ?? {};

  return (
    <Box
      style={{ width: '100%', height: height, backgroundColor, }}
    />
  );
};
