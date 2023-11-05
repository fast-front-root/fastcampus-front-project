import { FormFieldWrapper } from "@/src/components/Common/Form/Layouts/FormFieldWrapper";
import { Spacing } from "@/src/components/Common/Spacing";
import { useViewSchemaFormContext, useViewSchemaFormFieldArray } from "@/src/hooks/useViewSchemaForm";
import { Button } from "@fastcampus/react-components-button";
import { Input } from "@fastcampus/react-components-input";
import { Box, Flex } from "@fastcampus/react-components-layout";

type Props = {
  label: string,
  register: ReturnType<typeof useViewSchemaFormContext>["register"],
  fieldIndex: number,
};

export const ViewSchemaFormSliceTextHighlightFields = ({
  label,
  register,
  fieldIndex,
}: Props) => {
  // @ts-ignore
  const { fields, append } = useViewSchemaFormFieldArray(`slices.${fieldIndex}.data.highlightTexts`);

  const handleAdd = () => {
    // @ts-ignore
    append("");
  }

  return (
    <FormFieldWrapper label={label}>
      <Flex className="w-full" direction="column" gap={4}>
        <Box>
          <Button size="xs" variant="outline" onClick={handleAdd}>
            ➕ 추가하기
          </Button>
        </Box>
        <Spacing height={8} />
        {
          fields.map((field, index) => (
            <Input
              key={field.id}
              variant="filled"
              // @ts-ignore
              size="sm"
              {...register(`slices.${fieldIndex}.data.highlightTexts.${index}`)}
            />
          ))
        }
      </Flex>
    </FormFieldWrapper>
  );
}
