import { z } from "zod";
import { ViewSchema } from "./view";

export type SchemaProps<T extends z.ZodObject<any>> = z.infer<T>;
export type ViewSchemaProps = SchemaProps<typeof ViewSchema>;

export type SliceSchemaProps<T extends z.ZodObject<any>> = z.infer<T>["data"];
