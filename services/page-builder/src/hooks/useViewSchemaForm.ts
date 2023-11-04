import { FieldArrayPath, FieldPath, useFieldArray, useForm, useFormContext } from "react-hook-form";
import { ViewSchemaProps } from "@/src/utils/validation/schema/types";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { zodResolver } from "@hookform/resolvers/zod";
import { ViewSchema } from "@/src/utils/validation/schema/view";

export type ViewSchemaFieldPath = FieldPath<ViewSchemaProps>;
export type ViewSchemaFieldArrayPath = FieldArrayPath<ViewSchemaProps>;

export const useViewSchemaForm = () => useForm<ViewSchemaProps>({
    defaultValues: ViewSliceSchemaSnippet.init,
    resolver: zodResolver(ViewSchema),
  });

export const useViewSchemaFormContext = () => useFormContext<ViewSchemaProps>();

export const useViewSchemaFormFieldArray = <T extends ViewSchemaFieldArrayPath>(
  name: T,
) => {
  const { control } = useViewSchemaFormContext();

  return useFieldArray({
    control,
    name,
  });
};
