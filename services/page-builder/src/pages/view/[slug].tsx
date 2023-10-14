import { MobileFirstLayout } from "@/src/components/layout/MobileFirstLayout";
import { AccordionSlice } from "@/src/components/view/slices/Accordion";
import { ImageSlice } from "@/src/components/view/slices/Image";
import { ImageSliderSectionSlice } from "@/src/components/view/slices/ImageSliderSection";
import { SpacingSlice } from "@/src/components/view/slices/Spacing";
import { TextSlice } from "@/src/components/view/slices/Text";
import { useMemo } from "react";

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { CDN_BASE_URL } from "@/src/constants";
import { MetadataSlice, MetadataSliceProps } from "@/src/components/view/slices/Metadata";

type Schema = {
  id: string;
  slug: string;
  metadata?: MetadataSliceProps;
  slices: {
    sliceName:
      | "TextSlice"
      | "ImageSlice"
      | "SpacingSlice"
      | "ImageSliderSectionSlice"
      | "AccordionSlice";
    data: any;
  }[];
};

const ViewPage = ({ jsonSchema }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const slices = useMemo(() => {
    const sliceList = [] as React.ReactNode[];

    if (jsonSchema.metadata) {
      sliceList.push(<MetadataSlice {...jsonSchema.metadata} />);
    };

    jsonSchema.slices.forEach(({ sliceName, data }) => {
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
  }, []);

  return (
    <MobileFirstLayout>
      {/* JSON SCHEMA 기반으로 컴포넌트가 동적 생성 */}
      {slices}
    </MobileFirstLayout>
  );
};

export default ViewPage;

export const getStaticProps: GetStaticProps<{ jsonSchema: Schema }> = async (context) => {
  const slug = (context.params?.slug as string) ?? "";

  // slug - '패스트캠퍼스-온라인-강의-프로모션-100원-이벤트-${viewId}'

  const slicedSlug = slug.split("-");
  const viewId = slicedSlug[slicedSlug.length - 1];

  const response = await fetch(`${CDN_BASE_URL}/view/${viewId}.json`);

  if (response.status === 200) {
    const jsonData = await response.json();

    return {
      props: {
        jsonSchema: jsonData,
      },
      revalidate: 10,
    }
  }

  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [],
      fallback: "blocking",
    };
};
