import { z } from "zod";
import { commonSliceStyleSchema } from "./style";
import { AccordionContentSchema, ImageSchema } from "./object";

export const MetadataSliceSchema = z.object({
  title: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
});

export const AccordionSliceSchema = z.object({
  sliceName: z.literal("AccordionSlice"),
  hideSlice: z.preprocess(
    (char) =>
      z
        .enum(["true", "false"])
        .transform((char) => JSON.parse(char))
        .catch(char)
        .parse(char),
    z.boolean().optional(),
  ),
  data: z.object({
    accordionContents: z.array(AccordionContentSchema),
    openedAccordion: z.preprocess(
      (char) =>
        z
          .enum(["true", "false"])
          .transform((char) => JSON.parse(char))
          .catch(char)
          .parse(char),
      z.boolean().optional(),
    ),
    sliceStyle: commonSliceStyleSchema
      .extend({
        titleTextColor: z.string().optional(),
        titleTextSize: z.preprocess(
          (char) =>
            typeof char === "string" ? parseInt(z.string().parse(char)) : char,
          z.number().optional(),
        ),
        titleTextWeight: z.preprocess(
          (char) =>
            typeof char === "string" ? parseInt(z.string().parse(char)) : char,
          z.number().optional(),
        ),
        contentTextColor: z.string().optional(),
        contentTextSize: z.preprocess(
          (char) =>
            typeof char === "string" ? parseInt(z.string().parse(char)) : char,
          z.number().optional(),
        ),
        contentTextWeight: z.preprocess(
          (char) =>
            typeof char === "string" ? parseInt(z.string().parse(char)) : char,
          z.number().optional(),
        ),
      })
      .optional(),
  }),
});

export const ImageSliceSchema = z.object({
  sliceName: z.literal("ImageSlice"),
  hideSlice: z.preprocess(
    (char) =>
      z
        .enum(["true", "false"])
        .transform((char) => JSON.parse(char))
        .catch(char)
        .parse(char),
    z.boolean().optional(),
  ),
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
  hideSlice: z.preprocess(
    (char) =>
      z
        .enum(["true", "false"])
        .transform((char) => JSON.parse(char))
        .catch(char)
        .parse(char),
    z.boolean().optional(),
  ),
  data: z.object({
    images: z.array(ImageSchema),
    sliceStyle: commonSliceStyleSchema
      .extend({
        imageItemWidth: z.preprocess(
          (char) =>
            typeof char === "string" ? parseInt(z.string().parse(char)) : char,
          z.number().optional(),
        ),
        spaceBetween: z.preprocess(
          (char) =>
            typeof char === "string" ? parseInt(z.string().parse(char)) : char,
          z.number().optional(),
        ),
      })
      .optional(),
  }),
});

export const ImageSliderSectionSliceSchema = z.object({
  sliceName: z.literal("ImageSliderSectionSlice"),
  hideSlice: z.preprocess(
    (char) =>
      z
        .enum(["true", "false"])
        .transform((char) => JSON.parse(char))
        .catch(char)
        .parse(char),
    z.boolean().optional(),
  ),
  data: z.object({
    text: z.string(),
    images: z.array(ImageSchema),
    sliceStyle: commonSliceStyleSchema
      .extend({
        textColor: z.string().optional(),
        imageItemWidth: z.preprocess(
          (char) =>
            typeof char === "string" ? parseInt(z.string().parse(char)) : char,
          z.number().optional(),
        ),
      })
      .optional(),
  }),
});

export const SpacingSliceSchema = z.object({
  sliceName: z.literal("SpacingSlice"),
  hideSlice: z.preprocess(
    (char) =>
      z
        .enum(["true", "false"])
        .transform((char) => JSON.parse(char))
        .catch(char)
        .parse(char),
    z.boolean().optional(),
  ),
  data: z.object({
    sliceStyle: z
      .object({
        height: z.preprocess(
          (char) =>
            typeof char === "string" ? parseInt(z.string().parse(char)) : char,
          z.number().optional(),
        ),
        backgroundColor: z.string().optional(),
      })
      .optional(),
  }),
});

export const TextSliceSchema = z.object({
  sliceName: z.literal("TextSlice"),
  hideSlice: z.preprocess(
    (char) =>
      z
        .enum(["true", "false"])
        .transform((char) => JSON.parse(char))
        .catch(char)
        .parse(char),
    z.boolean().optional(),
  ),
  data: z.object({
    text: z.string(),
    highlightTexts: z.array(z.string()).optional(),
    sliceStyle: commonSliceStyleSchema
      .extend({
        textColor: z.string().optional(),
        textSize: z.preprocess(
          (char) =>
            typeof char === "string" ? parseInt(z.string().parse(char)) : char,
          z.number().optional(),
        ),
        textWeight: z.preprocess(
          (char) =>
            typeof char === "string" ? parseInt(z.string().parse(char)) : char,
          z.number().optional(),
        ),
        textAlign: z
          .union([z.literal("left"), z.literal("center"), z.literal("right")])
          .optional(),
        highlightTextColor: z.string().optional(),
        highlightTextWeight: z.preprocess(
          (char) =>
            typeof char === "string" ? parseInt(z.string().parse(char)) : char,
          z.number().optional(),
        ),
      })
      .optional(),
  }),
});

