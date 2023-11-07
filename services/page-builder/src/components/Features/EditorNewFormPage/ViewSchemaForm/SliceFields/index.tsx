import { Spacing } from "@/src/components/Common/Spacing"
import { Box, Flex, Heading } from "@fastcampus/react-components-layout"
import { vars } from "@fastcampus/themes"
import { ViewSchemaFormSliceSpacingFields } from "./SpacingFields"
import { useViewSchemaFormSliceFieldArray } from "@/src/hooks/useViewSchemaFormSliceFieldArray"
import { ViewSchemaFormSliceTextFields } from "./TextFields"
import { ViewSchemaFormSliceImageFields } from "./ImageFields"
import { ViewSchemaFormSliceImageSliderFields } from "./ImageSliderFields"
import { ViewSchemaFormSliceAccordionFields } from "./AccordionFields"
import { Button } from "@fastcampus/react-components-button"

export const ViewSchemaFormSliceFields = () => {
  const { fields, swap } = useViewSchemaFormSliceFieldArray();

  // @ts-ignore
  const renderSliceFields = (field, index) => {
    let component;

    switch (field.sliceName) {
      case "SpacingSlice": {
        component = <ViewSchemaFormSliceSpacingFields fieldIndex={index} />;
        break;
      }
      case "TextSlice": {
        component = <ViewSchemaFormSliceTextFields fieldIndex={index} />;
        break;
      }
      case "ImageSlice": {
        component = <ViewSchemaFormSliceImageFields fieldIndex={index} />;
        break;
      }
      case "ImageSliderSlice": {
        component = <ViewSchemaFormSliceImageSliderFields fieldIndex={index} />;
        break;
      }
      case "AccordionSlice": {
        component = <ViewSchemaFormSliceAccordionFields fieldIndex={index} />;
        break;
      }
      default:
    }

    const handleSwapUp = () => {
      swap(index, index - 1);
    };

    const handleSwapDown = () => {
      swap(index, index + 1);
    };

    return (
      <Flex gap={4}>
        <Box>
          <Button
            isDisabled={index <= 0}
            variant="ghost"
            size="xs"
            onClick={handleSwapUp}
          >
            🔼
          </Button>
          <Button
            isDisabled={index >= fields.length - 1}
            variant="ghost"
            size="xs"
            onClick={handleSwapDown}
          >
            🔽
          </Button>
        </Box>
        {component}
      </Flex>
    );
  }

  return (
    <>
      <Heading
        fontSize="lg"
        style={{ fontWeight: vars.typography.fontWeight[600] }}
      >
        Slice
      </Heading>
      <Spacing />
      {fields.map(renderSliceFields)}
    </>
  );
}
