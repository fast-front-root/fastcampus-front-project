import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";
import { vars } from "@fastcampus/themes";
import { useEffect } from "react";
import { SliceFieldTitleNavBar } from "../Common/SliceFieldTitleNavBar";

type Props = {
  fieldIndex: number;
};

export const ViewSchemaFormSliceSpacingFields = ({ fieldIndex }: Props) => {
  const { register, setValue } = useViewSchemaFormContext();

  useEffect(() => {
    setValue(`slices.${fieldIndex}.sliceName`, "SpacingSlice");
  }, []);


  return (
    <FormFieldSection
      title={
        <SliceFieldTitleNavBar
          title={`${fieldIndex}. Spacing`}
          fieldIndex={fieldIndex}
        />
      }
    >
      <InputField
        label="height"
        type="number"
        defaultValue={16}
        {...register(`slices.${fieldIndex}.data.sliceStyle.height`)}
      />
      <InputField
        label="height"
        type="color"
        defaultValue={vars.colors.$static.light.gray[300]}
        {...register(`slices.${fieldIndex}.data.sliceStyle.backgroundColor`)}
      />
    </FormFieldSection>
  );
};
