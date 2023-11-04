import { useForm, useFormContext } from "react-hook-form";
import { ViewSchemaProps } from "@/src/utils/validation/schema/types";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { zodResolver } from "@hookform/resolvers/zod";
import { ViewSchema } from "@/src/utils/validation/schema/view";

export const useViewSchemaForm = () => useForm<ViewSchemaProps>({
    defaultValues: ViewSliceSchemaSnippet.init,
    resolver: zodResolver(ViewSchema),
  });

export const useViewSchemaFormContext = () => useFormContext<ViewSchemaProps>();
