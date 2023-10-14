import { z } from 'zod';
import { AccordionSliceSchema, ImageSliceSchema, ImageSliderSectionSliceSchema, ImageSliderSliceSchema, MetadataSliceSchema, SpacingSliceSchema, TextSliceSchema } from './slices';

export const ViewSchema = z.object({
  slug: z.string(),
  metadata: MetadataSliceSchema,
  slices: z.array(
    AccordionSliceSchema.or(ImageSliceSchema)
      .or(ImageSliderSliceSchema)
      .or(ImageSliderSectionSliceSchema)
      .or(SpacingSliceSchema)
      .or(TextSliceSchema),
  ),
});
