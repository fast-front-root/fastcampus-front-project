import { ValidateViewSchemaProps } from "@/src/hooks/useViewSchemaValidation";
import { formatObjectToJson } from "@/src/utils/jsonEditor";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { Button } from "@fastcampus/react-components-button";
import { Divider } from "@fastcampus/react-components-layout";
import { useToast } from "@fastcampus/react-components-toast";
import { Fragment } from "react";

type Props = {
  schema: string;
  setSchema: (schema: string) => void;
  validateViewSchema: (props: ValidateViewSchemaProps) => void;
};

type Preset = {
  name: string;
  snippet: object;
};

export const JsonPresetList = ({ schema, setSchema, validateViewSchema }: Props) => {
  const { toast } = useToast();

  const presets: Preset[] = [
    {
      name: "TextSlice",
      snippet: ViewSliceSchemaSnippet.textSlice,
    },
    {
      name: "ImageSlice",
      snippet: ViewSliceSchemaSnippet.imageSlice,
    },
    {
      name: "ImageSliderSectionSlice",
      snippet: ViewSliceSchemaSnippet.imageSliderSectionSlice,
    },
    {
      name: "SpacingSlice",
      snippet: ViewSliceSchemaSnippet.spacingSlice,
    },
    {
      name: "accordionSlice",
      snippet: ViewSliceSchemaSnippet.accordionSlice,
    },
  ];

  return (
    <>
      {presets.map(({ name, snippet }) => {
        const handleClick = () => {
          validateViewSchema({
            viewSchema: schema,
            onSuccess: () => {
              const objectifiedSchema = JSON.parse(schema);
              objectifiedSchema.slices.push(snippet);

              setSchema(formatObjectToJson(objectifiedSchema));
            },
            onError: ({ message }) => {
              toast({
                payload: {
                  message,
                },
              });
            },
          });
        };

        return (
          <Fragment key={name}>
            <Button
              style={{ borderRadius: "0", width: "100%" }}
              variant="ghost"
              onClick={handleClick}
            >
              {name}
            </Button>
            <Divider />
          </Fragment>
        );
      })}
      
    </>
  );
};
