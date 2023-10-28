import { InputField } from "@/src/components/Common/Form/Field/InputField";
import { FormFieldSection } from "@/src/components/Common/Form/Layouts/FormFieldSection";
import { DesktopFirstLayout } from "@/src/components/Common/Layouts/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/Common/Layouts/DesktopFirstLayout/Body";
import { DesktopFirstNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/Nav";
import { DesktopFirstSideNav } from "@/src/components/Common/Layouts/DesktopFirstLayout/SideNav";
import { Spacing } from "@/src/components/Common/Spacing";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { getValidateFormErrorMessages } from "@/src/utils/validation/error";
import { ViewSchemaProps } from "@/src/utils/validation/schema/types";
import { ViewSchema } from "@/src/utils/validation/schema/view";
import { Button } from "@fastcampus/react-components-button";
import { Box, Flex } from "@fastcampus/react-components-layout";
import { useToast } from "@fastcampus/react-components-toast";
import { vars } from "@fastcampus/themes";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const EditorNewFormPage: React.FC = () => {
  const { toast } = useToast();

  const { reset, register, handleSubmit } = useForm<ViewSchemaProps>({
    defaultValues: ViewSliceSchemaSnippet.init,
    resolver: zodResolver(ViewSchema),
  });

  const handleReset = () => {
    reset();
  };
  const handlePreview = handleSubmit((formData) => {
    console.log('preview_success', formData);
  }, (formError) => {
    const errors = getValidateFormErrorMessages(formError);
    const firstError = errors[0];

    if (firstError) {
      return toast({
        payload: {
          message: `[${firstError.key}] ${firstError.message}`,
        },
      });
    };
  });

  const handlePublish = handleSubmit((formData) => {
    console.log('publish', formData);
  }, (formError) => {
    const errors = getValidateFormErrorMessages(formError);
    const firstError = errors[0];

    if (firstError) {
      return toast({
        payload: {
          message: `[${firstError.key}] ${firstError.message}`,
        },
      });
    };
  });

  return (
    <DesktopFirstLayout>
      <DesktopFirstNav gap={8}>
        <Button variant="outline" size="md" color="red" onClick={handleReset}>
          초기화
        </Button>
        <Button
          variant="outline"
          size="md"
          color="gray"
          onClick={handlePreview}
        >
          미리보기
        </Button>
        <Button size="md" color="green" onClick={handlePublish}>
          배포하기
        </Button>
      </DesktopFirstNav>
      <DesktopFirstBody padding={0}>
        <DesktopFirstSideNav>사이드 네비게이션 바</DesktopFirstSideNav>
        <Flex
          className="w-full min-h-screen relative top-0 pt-[16px]"
          background="gray"
          justify="center"
        >
          <Box
            paddingX={8}
            paddingY={6}
            className="max-w-[600px] w-full"
            boxShadow="base"
            style={{ background: vars.colors.$static.light.color.white }}
          >
            <form>
              <FormFieldSection title="common">
                <InputField isRequired label="slug" {...register("slug")} />
              </FormFieldSection>
              <Spacing />
              <FormFieldSection title="metadata">
                <InputField label="title" {...register("metadata.title")} />
                <InputField label="ogTitle" {...register("metadata.ogTitle")} />
                <InputField
                  label="ogDescription"
                  {...register("metadata.ogDescription")}
                />
              </FormFieldSection>
            </form>
          </Box>
        </Flex>
      </DesktopFirstBody>
    </DesktopFirstLayout>
  );
}

export default EditorNewFormPage;
