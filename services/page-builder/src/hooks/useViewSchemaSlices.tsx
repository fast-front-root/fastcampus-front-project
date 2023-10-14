import { useMemo } from "react";
import { MetadataSlice } from "../components/view/slices/Metadata";
import { TextSlice } from "../components/view/slices/Text";
import { ImageSlice } from "../components/view/slices/Image";
import { SpacingSlice } from "../components/view/slices/Spacing";
import { ImageSliderSectionSlice } from "../components/view/slices/ImageSliderSection";
import { AccordionSlice } from "../components/view/slices/Accordion";
import { ViewSchemaProps } from "../utils/validation/schema/types";

export const useViewSchemaSlices = (viewSchema: ViewSchemaProps) => {
  const slices = useMemo(() => {
    const sliceList = [] as React.ReactNode[];

    if (viewSchema.metadata) {
      sliceList.push(<MetadataSlice {...viewSchema.metadata} />);
    }

    viewSchema.slices.forEach(({ sliceName, data }) => {
      switch (sliceName) {
        case "TextSlice": {
          sliceList.push(<TextSlice {...data} />);
          break;
        }
        case "ImageSlice": {
          sliceList.push(<ImageSlice {...data} />);
          break;
        }
        case "SpacingSlice": {
          sliceList.push(<SpacingSlice {...data} />);
          break;
        }
        case "ImageSliderSectionSlice": {
          sliceList.push(<ImageSliderSectionSlice {...data} />);
          break;
        }

        case "AccordionSlice": {
          sliceList.push(<AccordionSlice {...data} />);
          break;
        }
      }
    });

    return sliceList;
  }, [viewSchema]);

  return slices;
};
