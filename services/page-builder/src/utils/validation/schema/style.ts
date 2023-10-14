import { vars } from "@fastcampus/themes";
import { z } from "zod";

const spacingKeys = Object.keys(vars.box.spacing).map(
  (key) => z.literal(parseInt(key)),
);

// @ts-ignore
const spacingSchema = z.union([...spacingKeys]);

export const commonSliceStyleSchema = z.object({
  padding: spacingSchema.optional(),
  paddingX: spacingSchema.optional(),
  paddingY: spacingSchema.optional(),
  backgroundColor: z.string().optional(),
});
