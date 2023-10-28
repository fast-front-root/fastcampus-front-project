import { vars } from "@fastcampus/themes";
import { ImageSliderSlice } from "../ImageSlider";
import { TextSlice } from "../Text";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { ImageSliderSectionSliceSchema } from "@/src/utils/validation/schema/slices";

type Props = SliceSchemaProps<typeof ImageSliderSectionSliceSchema>;

export const ImageSliderSectionSlice: React.FC<Props> = ({ text, images, sliceStyle }: Props) => {
  const {
    paddingX = 8,
    textColor = vars.colors.$static.light.color.black,
    backgroundColor = vars.colors.$static.light.color.white,
    imageItemWidth = 280,
  } = sliceStyle ?? {};

  return (
    <>
      <TextSlice
        text={text}
        sliceStyle={{
          textSize: 20,
          textColor,
          backgroundColor,
          textAlign: "left",
          paddingX,
          textWeight: 700,
        }}
      />
      <ImageSliderSlice
        images={images}
        sliceStyle={{
          paddingX,
          imageItemWidth,
          backgroundColor,
        }}
      />
    </>
  );
};
