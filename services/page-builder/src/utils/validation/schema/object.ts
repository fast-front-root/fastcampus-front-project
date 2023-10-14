import { z } from "zod";

export const ImageSchema = z.object({
  imageUrl: z.string().url(),
  alt: z.string(),
});

export const AccordionContentSchema = z.object({
  key: z.string(),
  title: z.string(),
  content: z.string(),
});
