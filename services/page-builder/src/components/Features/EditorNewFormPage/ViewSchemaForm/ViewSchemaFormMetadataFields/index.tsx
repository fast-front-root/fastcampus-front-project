import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";

export const ViewSchemaFormMetadataFields = () => {
  const { register } = useViewSchemaFormContext();

  return (
    <FormFieldSection title="metadata">
      <InputField label="title" {...register("metadata.title")} />
      <InputField label="ogTitle" {...register("metadata.ogTitle")} />
      <InputField
        label="ogDescription"
        {...register("metadata.ogDescription")}
      />
    </FormFieldSection>
  );
}
