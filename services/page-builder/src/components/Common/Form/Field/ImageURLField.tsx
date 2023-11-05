import { Box } from "@fastcampus/react-components-layout";
import { ImageURLInput, ImageURLInputProps } from "../Input/ImageURL";
import { FormFieldWrapper, FormFieldWrapperProps } from "../Layouts/FormFieldWrapper";

type Props = ImageURLInputProps & FormFieldWrapperProps;

export const ImageURLField = (props: Props) => {
  const { label, isRequired, ...inputRest } = props;
  
  return (
    <FormFieldWrapper label={label} isRequired={isRequired}>
      <Box style={{ width: '100%' }}>
        <ImageURLInput {...inputRest} />
      </Box>
    </FormFieldWrapper>
  );
}
