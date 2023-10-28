import { Input, InputProps } from "@fastcampus/react-components-input";
import { FormFieldWrapper, FormFieldWrapperProps } from "../Layouts/FormFieldWrapper";
import { Ref, forwardRef } from "react";

type Props = Pick<FormFieldWrapperProps, "label"> & InputProps;

export const InputField = forwardRef((props: Props, ref: Ref<HTMLInputElement>) => {
  const { label, isRequired, ...inputRest } = props;
  const { variant = "filled", size = "sm" } = inputRest;

  return (
    <FormFieldWrapper label={label} isRequired={isRequired}>
      <Input
        ref={ref}
        {...inputRest}
        isRequired={isRequired}
        variant={variant}
        // @ts-ignore
        size={size}
      />
    </FormFieldWrapper>
  );
});
