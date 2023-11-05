
import { Select, SelectProps } from "@fastcampus/react-components-select";
import {
  FormFieldWrapper,
  FormFieldWrapperProps,
} from "../Layouts/FormFieldWrapper";
import { Ref, forwardRef } from "react";

type Props = Pick<FormFieldWrapperProps, "label"> & SelectProps;

export const SelectField = forwardRef(
  (props: Props, ref: Ref<HTMLSelectElement>) => {
    const { label, isRequired, ...inputRest } = props;
    const { variant = "filled", size = "sm" } = inputRest;

    return (
      <FormFieldWrapper label={label} isRequired={isRequired}>
        <Select
          ref={ref}
          {...inputRest}
          isRequired={isRequired}
          variant={variant}
          // @ts-ignore
          size={size}
        />
      </FormFieldWrapper>
    );
  },
);
