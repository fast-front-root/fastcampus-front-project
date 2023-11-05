import { ImageURLInput } from "@/src/components/Common/Form/Input/ImageURL";
import { useViewSchemaFormContext, useViewSchemaFormFieldArray } from "@/src/hooks/useViewSchemaForm";
import { Button } from "@fastcampus/react-components-button";
import { Input } from "@fastcampus/react-components-input";
import { Text, Box, Flex } from "@fastcampus/react-components-layout";

type Props = {
  fieldIndex: number;
};

export const ImagesFields = ({ fieldIndex }: Props) => {
  const { fields, append, remove } = useViewSchemaFormFieldArray(`slices.${fieldIndex}.data.images`);
  const { register, setValue } = useViewSchemaFormContext();

  const handleAdd = () => {
    append({
      imageUrl: "",
      alt: "",
    });
  }

  const handleRemove = (index: number) => {
    remove(index);
  }

  const handleImageURLChange = (index: number, value: string) => {
    setValue(`slices.${fieldIndex}.data.images.${index}.imageUrl`, value)
  };

  return (
    <Box>
      <Flex className="w-full" justify="space-between" paddingY={4}>
        <Text fontSize="md">Images</Text>
        <Button size="xs" variant="outline" onClick={handleAdd}>
          추가
        </Button>
      </Flex>
      <Flex className="overflow-y-hidden overflow-x-auto" gap={16}>
        {fields.map((field, index) => (
          <Flex key={field.id} direction="column" gap={8} marginY={4}>
            <Flex className="w-full" justify="space-between">
              <Text fontSize="sm">{index}. image</Text>
              <Button
                className="min-w-fit"
                size="xs"
                variant="outline"
                color="red"
                onClick={() => {
                  handleRemove(index);
                }}
              >
                삭제
              </Button>
            </Flex>
            <ImageURLInput
              onChange={(value) => {
                handleImageURLChange(index, value);
              }}
            />
            <Input
              size="sm"
              variant="filled"
              placeholder="Alt"
              {...register(`slices.${fieldIndex}.data.images.${index}.alt`)}
            />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
