import { Spacing } from "@/src/components/Common/Spacing";
import { ViewSchemaFormCommonFields } from "./ViewSchemaFormCommonFields";
import { ViewSchemaFormMetadataFields } from "./ViewSchemaFormMetadataFields";

export const EditorNewViewSchemaForm = () => {
  return (
    <form>
      <ViewSchemaFormCommonFields />
      <Spacing />
      <ViewSchemaFormMetadataFields />
    </form>
  );
};
