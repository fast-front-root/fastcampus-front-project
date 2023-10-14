import { Box } from "@fastcampus/react-components-layout";

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { convertSpacingRemToPx } from "@/src/utils/size";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { ImageSliderSliceSchema } from "@/src/utils/validation/schema/slices";

type Props = SliceSchemaProps<typeof ImageSliderSliceSchema>;

export const ImageSliderSlice: React.FC<Props> = ({ images, sliceStyle }: Props) => {
  const {
    backgroundColor = "transparent",
    imageItemWidth = 280,
    spaceBetween = 16,
    paddingX = 8,
  } = sliceStyle ?? {};

  const offset = convertSpacingRemToPx(paddingX);

  return (
    <Box style={{ backgroundColor }}>
      <Swiper
        slidesPerView={"auto"}
        slidesOffsetBefore={offset}
        spaceBetween={spaceBetween}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {images.map(({ imageUrl, alt }, index) => (
          <SwiperSlide
            key={`${imageUrl}-${index}`}
            style={{ width: imageItemWidth }}
          >
            <img src={imageUrl} alt={alt} style={{ width: imageItemWidth }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
