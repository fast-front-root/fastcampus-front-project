import { Spacing } from "@/src/components/Common/Spacing";
import { ViewSchemaFormCommonFields } from "./CommonFields";
import { ViewSchemaFormMetadataFields } from "./MetadataFields";
import { ViewSchemaFormSliceFields } from "./SliceFields";

export const EditorNewViewSchemaForm = () => {
  return (
    <form>
      <ViewSchemaFormCommonFields />
      <Spacing />
      <ViewSchemaFormMetadataFields />
      <Spacing />
      <ViewSchemaFormSliceFields />
    </form>
  );
};
