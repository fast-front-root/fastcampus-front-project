import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";

export const ViewSchemaFormCommonFields = () => {
  const { register } = useViewSchemaFormContext();
    
  return (
    <FormFieldSection title="common">
      <InputField isRequired label="slug" {...register("slug")} />
    </FormFieldSection>
  );
}
