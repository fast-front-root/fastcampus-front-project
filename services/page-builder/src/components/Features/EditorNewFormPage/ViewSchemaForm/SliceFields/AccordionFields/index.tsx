import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { SelectField } from "@/src/components/Common/Form/Field/SelectField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { useViewSchemaFormContext } from "@/src/hooks/useViewSchemaForm";
import { Divider } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";
import { useEffect } from "react";
import { AccordionContentsFields } from "./AccordionContentsFields";
import { SliceFieldTitleNavBar } from "../Common/SliceFieldTitleNavBar";

type Props = {
  fieldIndex: number;
}

export const ViewSchemaFormSliceAccordionFields = ({ fieldIndex }: Props) => {
    const { register, setValue } = useViewSchemaFormContext();

    useEffect(() => {
      setValue(`slices.${fieldIndex}.sliceName`, "AccordionSlice");
    });

    return (
      <FormFieldSection
        title={
          <SliceFieldTitleNavBar
            title={`${fieldIndex}. ImageSlider`}
            fieldIndex={fieldIndex}
          />
        }
      >
        <SelectField
          label="openedAccordion"
          defaultValue="true"
          {...register(`slices.${fieldIndex}.data.openedAccordion`)}
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </SelectField>
        <AccordionContentsFields fieldIndex={fieldIndex} />
        <Divider />
        <SelectField
          label="padding"
          {...register(`slices.${fieldIndex}.data.sliceStyle.padding`)}
        >
          {Object.keys(vars.box.spacing).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </SelectField>
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
        <SelectField
          label="paddingY"
          {...register(`slices.${fieldIndex}.data.sliceStyle.paddingY`)}
        >
          {Object.keys(vars.box.spacing).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </SelectField>
        <InputField
          label="backgroundColor"
          type="color"
          defaultValue={vars.colors.$static.light.gray[50]}
          {...register(`slices.${fieldIndex}.data.sliceStyle.backgroundColor`)}
        />
        <InputField
          label="titleTextColor"
          type="color"
          defaultValue={vars.colors.$static.light.gray[900]}
          {...register(`slices.${fieldIndex}.data.sliceStyle.titleTextColor`)}
        />
        <InputField
          label="titleTextSize"
          type="number"
          defaultValue={16}
          {...register(`slices.${fieldIndex}.data.sliceStyle.titleTextSize`)}
        />
        <InputField
          label="titleTextWeight"
          type="number"
          defaultValue={700}
          {...register(`slices.${fieldIndex}.data.sliceStyle.titleTextWeight`)}
        />
        <InputField
          label="contentTextColor"
          type="color"
          defaultValue={vars.colors.$static.light.gray[900]}
          {...register(`slices.${fieldIndex}.data.sliceStyle.contentTextColor`)}
        />
        <InputField
          label="contentTextSize"
          type="number"
          defaultValue={16}
          {...register(`slices.${fieldIndex}.data.sliceStyle.contentTextSize`)}
        />
        <InputField
          label="contentTextWeight"
          type="number"
          defaultValue={400}
          {...register(
            `slices.${fieldIndex}.data.sliceStyle.contentTextWeight`,
          )}
        />
      </FormFieldSection>
    );
};
