import { AccordionSliceSchema } from "@/src/utils/validation/schema/slices";
import { SliceSchemaProps } from "@/src/utils/validation/schema/types";
import { Accordion, AccordionButton, AccordionItem, AccordionPanel } from "@fastcampus/react-components-accordion";
import { Box, Text } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";

type Props = SliceSchemaProps<typeof AccordionSliceSchema>;

export const AccordionSlice: React.FC<Props> = ({
  accordionContents,
  openedAccordion,
  sliceStyle,
}: Props) => {
  const {
    padding = 0,
    paddingX = 2,
    paddingY = 0,
    backgroundColor = vars.colors.$scale.gray[200],
    titleTextColor = vars.colors.$scale.gray[900],
    titleTextSize = 16,
    titleTextWeight = 600,
    contentTextColor = vars.colors.$scale.gray[600],
    contentTextSize = 14,
    contentTextWeight = 400,
  } = sliceStyle ?? {};

  const defaultActiveItems = openedAccordion ? accordionContents.map(({ key }) => key) : [];

  return (
    <Box
      padding={padding}
      paddingX={paddingX}
      paddingY={paddingY}
      style={{
        backgroundColor,
      }}
    >
      <Accordion defaultActiveItems={defaultActiveItems}>
        {accordionContents.map(({ key, title, content }) => (
          <AccordionItem key={key} itemName={key}>
            <AccordionButton>
              <Text
                fontSize="xl"
                style={{
                  color: titleTextColor,
                  fontWeight: titleTextWeight,
                  fontSize: titleTextSize,
                  whiteSpace: "pre-wrap",
                }}
              >
                {title}
              </Text>
            </AccordionButton>
            <AccordionPanel>
              <Text
                fontSize="md"
                style={{
                  color: contentTextColor,
                  fontWeight: contentTextWeight,
                  fontSize: contentTextSize,
                  whiteSpace: "pre-wrap",
                }}
              >
                {content}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};
