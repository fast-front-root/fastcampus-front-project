import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { SelectField } from "@/src/components/Common/Form/Field/SelectField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray";
import { Button } from "@fastcampus/react-components-button";
import { Divider } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";
import { useEffect } from "react";
import { ImagesFields } from "./ImagesFields";

type Props = {
  fieldIndex: number;
};

export const ViewSchemaFormSliceImageSliderFields = ({ fieldIndex }: Props) => {
  const { register, setValue } = useViewSchemaFormContext();
  const { remove } = useViewSchemaFormSliceFieldArray();

  useEffect(() => {
    setValue(`slices.${fieldIndex}.sliceName`, "ImageSliderSlice");
  }, []);

  const handleRemove = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    remove(fieldIndex);
  };


  return (
    <FormFieldSection
      title={
        <>
          {fieldIndex}. ImageSlider{" "}
          <Button
            size="xs"
            variant="outline"
            color="red"
            onClick={handleRemove}
          >
            삭제
          </Button>
        </>
      }
    >
      <ImagesFields fieldIndex={fieldIndex} />
      <Divider />
      <InputField
        label="backgroundColor"
        type="color"
        defaultValue="transparent"
        {...register(`slices.${fieldIndex}.data.sliceStyle.backgroundColor`)}
      />
      <SelectField
        label="paddingX"
        {...register(`slices.${fieldIndex}.data.sliceStyle.paddingX`)}
      >
        {Object.keys(vars.box.spacing).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </SelectField>
      <InputField
        label="imageItemWidth"
        type="number"
        defaultValue={280}
        {...register(`slices.${fieldIndex}.data.sliceStyle.imageItemWidth`)}
      />
      <InputField
        label="spaceBetween"
        type="number"
        defaultValue={16}
        {...register(`slices.${fieldIndex}.data.sliceStyle.spaceBetween`)}
      />
    </FormFieldSection>
  );
}
