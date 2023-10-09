import { MobileFirstLayout } from "@/src/components/view/MobileFirstLayout";
import { AccordionSlice } from "@/src/components/view/slices/Accordion";
import { ImageSlice } from "@/src/components/view/slices/Image";
import { ImageSliderSectionSlice } from "@/src/components/view/slices/ImageSliderSection";
import { SpacingSlice } from "@/src/components/view/slices/Spacing";
import { TextSlice } from "@/src/components/view/slices/Text";
import { useMemo } from "react";

type Schema = {
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

const JSON_SCHEMA: Schema = {
  slices: [
    {
      sliceName: "TextSlice",
      data: {
        text: "⚠ 본 이벤트는 종료되었습니다 (~8/6)",
        sliceStyle: {
          textColor: "#fff",
          textWeight: 700,
          textSize: 16,
          backgroundColor: "#000",
        },
      },
    },
    {
      sliceName: "ImageSlice",
      data: {
        imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/hero_mobile.webp`,
        alt: "온라인 강의 단돈 100원 이벤트 안내",
        sliceStyle: {
          paddingX: 8,
          backgroundColor: "#FFD951",
        },
      },
    },
    {
      sliceName: "SpacingSlice",
      data: {
        sliceStyle: {
          height: 60,
          backgroundColor: "#000",
        },
      },
    },
    {
      sliceName: "ImageSlice",
      data: {
        imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/coin_mobile.webp`,
        alt: "100원 그림 일러스트",
        sliceStyle: {
          width: "90px",
          backgroundColor: "#000",
        },
      },
    },
    {
      sliceName: "TextSlice",
      data: {
        text: "공부 시작하려고 결심한 강의\n100원만 더 내고 이 모든 혜택 가져가세요!",
        highlightTexts: ["100원만"],
        sliceStyle: {
          textWeight: 700,
          textSize: 24,
          textColor: "#fff",
          backgroundColor: "#000",
          highlightTextColor: "#FFD64B",
        },
      },
    },
    {
      sliceName: "TextSlice",
      data: {
        text: "원하는 강의 골라 결제 시 100원만 더 내면 이 모든 혜택을 드립니다!",
        sliceStyle: {
          textWeight: 700,
          textSize: 14,
          textColor: "#fff",
          backgroundColor: "#000",
        },
      },
    },
    {
      sliceName: "ImageSlice",
      data: {
        imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/benefit_mobile.webp`,
        alt: "주요 행사 강의 목록 및 일자 안내 이미지, 강의 하나 구매 시 추가 강의는 100원에 구매 가능",
        sliceStyle: {
          paddingX: 8,
          backgroundColor: "#000",
        },
      },
    },
    {
      sliceName: "SpacingSlice",
      data: {
        sliceStyle: {
          height: 60,
          backgroundColor: "#171923",
        },
      },
    },
    {
      sliceName: "TextSlice",
      data: {
        text: `100원에 만나볼 수 있는\nBEST 강의 라인업`,
        highlightTexts: ["BEST 강의"],
        sliceStyle: {
          textWeight: 700,
          textSize: 24,
          textColor: "#fff",
          backgroundColor: "#171923",
          highlightTextColor: "#FFD64B",
        },
      },
    },
    {
      sliceName: "TextSlice",
      data: {
        text: `100일간 내 마음대로 무제한 수강 가능한\n카테고리별 BEST 강의 라인업을 아래에서 확인해보세요!`,
        sliceStyle: {
          textSize: 14,
          textColor: "#fff",
          backgroundColor: "#171923",
        },
      },
    },
    {
      sliceName: "SpacingSlice",
      data: {
        sliceStyle: {
          height: 32,
          backgroundColor: "#171923",
        },
      },
    },
    {
      sliceName: "ImageSliderSectionSlice",
      data: {
        text: "🖥️ 프로그래밍",
        images: [
          {
            imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/lineup_programming_1.webp`,
            alt: "강의 라인업 1 프로그래밍: 강의 1",
          },
          {
            imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/lineup_programming_2.webp`,
            alt: "강의 라인업 1 프로그래밍: 강의 2",
          },
          {
            imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/lineup_programming_3.webp`,
            alt: "강의 라인업 1 프로그래밍: 강의 3",
          },
          {
            imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/lineup_programming_4.webp`,
            alt: "강의 라인업 1 프로그래밍: 강의 4",
          },
          {
            imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/lineup_programming_5.webp`,
            alt: "강의 라인업 1 프로그래밍: 강의 5",
          },
          {
            imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/lineup_programming_6.webp`,
            alt: "강의 라인업 1 프로그래밍: 강의 6",
          },
          {
            imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/lineup_programming_7.webp`,
            alt: "강의 라인업 1 프로그래밍: 강의 7",
          },
        ],
        sliceStyle: {
          textColor: "#32BFA1",
          paddingX: 8,
          backgroundColor: "#171923",
        },
      },
    },
    {
      sliceName: "SpacingSlice",
      data: {
        sliceStyle: {
          height: 32,
          backgroundColor: "#171923",
        },
      },
    },
    {
      sliceName: "ImageSliderSectionSlice",
      data: {
        text: "🖥️ 디자인/일러스트",
        images: [
          {
            imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/lineup_design_1.webp`,
            alt: "강의 라인업 2 디자인: 강의 1",
          },
          {
            imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/lineup_design_2.webp`,
            alt: "강의 라인업 2 디자인: 강의 2",
          },
          {
            imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/lineup_design_3.webp`,
            alt: "강의 라인업 2 디자인: 강의 3",
          },
          {
            imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/lineup_design_4.webp`,
            alt: "강의 라인업 2 디자인: 강의 4",
          },
          {
            imageUrl: `https://pub-c9ce5a5c62a34b8980880aaabdf8b0b5.r2.dev/test/lineup_design_5.webp`,
            alt: "강의 라인업 2 디자인: 강의 5",
          },
        ],
        sliceStyle: {
          textColor: "#32BFA1",
          paddingX: 8,
          backgroundColor: "#171923",
        },
      },
    },
    {
      sliceName: "SpacingSlice",
      data: {
        sliceStyle: {
          height: 32,
          backgroundColor: "#171923",
        },
      },
    },
    {
      sliceName: "SpacingSlice",
      data: {
        sliceStyle: {
          height: 80,
          backgroundColor: "#E2E8F0",
        },
      },
    },
    {
      sliceName: "TextSlice",
      data: {
        text: "100원딜 이벤트 주의사항",
        sliceStyle: {
          backgroundColor: "#E2E8F0",
          textSize: 24,
          textWeight: 700,
        },
      },
    },
    {
      sliceName: "SpacingSlice",
      data: {
        sliceStyle: {
          height: 16,
          backgroundColor: "#E2E8F0",
        },
      },
    },
    {
      sliceName: "AccordionSlice",
      data: {
        accordionContents: [
          {
            key: "1",
            title: "1. 이벤트 기간",
            content: `2021년 7월 26일(월) ~ 8월 6일(금) 23:59\n\n※ 이벤트 기간 중 100원딜 강의를 구매하면 100일간 무제한 수강 가능합니다.`,
          },
          {
            key: "2",
            title: "2. 이벤트 주의사항",
            content: `– [100원딜] 상품 구매 시 네이버페이 1만원권 상품권(모바일)을 증정해 드립니다.\n– 네이버페이 상품권은 한정 수량으로 소진 시 조기 소진될 수 있습니다.\n– 구매 후 소진으로 인한 미증정 시 별도 안내됩니다.\n– 네이버페이 상품권은 8월 29(화)이후 문자로 일괄 발송됩니다.`,
          },
        ],
        openedAccordion: true,
        sliceStyle: {
          titleTextColor: "#171923",
          titleTextWeight: 600,
          titleTextSize: 16,
          contentTextColor: "#2D3748",
          contentTextSize: 14,
          paddingX: 2,
          backgroundColor: "#E2E8F0",
        },
      },
    },
    {
      sliceName: "SpacingSlice",
      data: {
        sliceStyle: {
          height: 120,
          backgroundColor: "#E2E8F0",
        },
      },
    },
  ],
};

const ViewPage = () => {

  const slices = useMemo(() => {
    const sliceList = [] as React.ReactNode[];

    JSON_SCHEMA.slices.forEach(({ sliceName, data }) => {
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
    })
    
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
