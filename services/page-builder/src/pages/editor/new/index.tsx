import { DesktopFirstLayout } from "@/src/components/Common/Layouts/DesktopFirstLayout";
import { DesktopFirstBody } from "@/src/components/Common/Layouts/DesktopFirstLayout/Body";
import { EditorNewFormGlobalNavBar } from "@/src/components/Features/EditorNewFormPage/GlobalNavBar";
import { EditorNewFormSideNavBar } from "@/src/components/Features/EditorNewFormPage/SideNavBar";
import { EditorNewViewSchemaForm } from "@/src/components/Features/EditorNewFormPage/ViewSchemaForm";
import { useViewSchemaForm } from "@/src/hooks/useViewSchemaForm";
import { Box, Flex } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import ShortUniqueId from "short-unique-id";

const EditorNewFormPage: React.FC = () => {
  const { randomUUID } = new ShortUniqueId({ length: 10 });
  const [viewId] = useState(randomUUID());

  const formMethods = useViewSchemaForm();

  return (
    <FormProvider {...formMethods}>
      <DesktopFirstLayout>
        <EditorNewFormGlobalNavBar viewId={viewId} />
        <DesktopFirstBody padding={0}>
          <EditorNewFormSideNavBar />
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
              <EditorNewViewSchemaForm />
            </Box>
          </Flex>
        </DesktopFirstBody>
      </DesktopFirstLayout>
    </FormProvider>
  );
}

export default EditorNewFormPage;
