import { SpacingSliceSchema } from "@/src/utils/validation/schema/slices";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { Box } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";

type Props = SliceSchemaProps<typeof SpacingSliceSchema>;

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
