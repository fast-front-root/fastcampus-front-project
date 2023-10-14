import { z } from "zod";
import { commonSliceStyleSchema } from "./style";
import { AccordionContentSchema, ImageSchema } from "./object";

export const MetadataSliceSchema = z.object({
  title: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().url().optional(),
});


export const AccordionSliceSchema = z.object({
  sliceName: z.literal("AccordionSlice"),
  data: z.object({
    accordionContents: z.array(AccordionContentSchema),
    openedAccordion: z.boolean().optional(),
    sliceStyle: commonSliceStyleSchema
      .extend({
        titleTextColor: z.string().optional(),
        titleTextSize: z.number().optional(),
        titleTextWeight: z.number().optional(),
        contentTextColor: z.string().optional(),
        contentTextSize: z.number().optional(),
        contentTextWeight: z.number().optional(),
      })
      .optional(),
  }),
});

export const ImageSliceSchema = z.object({
  sliceName: z.literal("ImageSlice"),
  data: ImageSchema.extend({
    sliceStyle: commonSliceStyleSchema
      .extend({
        width: z.string().optional(),
      })
      .optional(),
  }),
});

export const ImageSliderSliceSchema = z.object({
  sliceName: z.literal("ImageSliderSlice"),
  data: z.object({
    images: z.array(ImageSchema),
    sliceStyle: commonSliceStyleSchema
      .extend({
        imageItemWidth: z.number().optional(),
        spaceBetween: z.number().optional(),
      })
      .optional(),
  }),
});

export const ImageSliderSectionSliceSchema = z.object({
  sliceName: z.literal("ImageSliderSectionSlice"),
  data: z.object({
    text: z.string(),
    images: z.array(ImageSchema),
    sliceStyle: commonSliceStyleSchema
      .extend({
        textColor: z.string().optional(),
        imageItemWidth: z.number().optional(),
      })
      .optional(),
  }),
});

export const SpacingSliceSchema = z.object({
  sliceName: z.literal("SpacingSlice"),
  data: z.object({
    sliceStyle: z
      .object({
        height: z.number().optional(),
        backgroundColor: z.string().optional(),
      })
      .optional(),
  }),
});

export const TextSliceSchema = z.object({
  sliceName: z.literal("TextSlice"),
  data: z.object({
    text: z.string(),
    highlightTexts: z.array(z.string()).optional(),
    sliceStyle: commonSliceStyleSchema
      .extend({
        textColor: z.string().optional(),
        textSize: z.number().optional(),
        textWeight: z.number().optional(),
        textAlign: z
          .union([z.literal("left"), z.literal("center"), z.literal("right")])
          .optional(),
        highlightTextColor: z.string().optional(),
        highlightTextWeight: z.number().optional(),
      })
      .optional(),
  }),
});

