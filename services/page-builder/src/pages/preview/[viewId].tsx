import { MobileFirstLayout } from "@/src/components/layout/MobileFirstLayout";
import { useViewSchemaSlices } from "@/src/hooks/useViewSchemaSlices";
import { ViewSliceSchemaSnippet } from "@/src/utils/jsonEditor/ViewSchemaSnippet";
import { previewStorage } from "@/src/utils/storage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PreviewPage = () => {
  const router = useRouter();
  const { viewId } = router.query;
  const [viewSchema, setViewSchema] = useState(ViewSliceSchemaSnippet.init);

  useEffect(() => {
    if (!viewId) return;

    const stringifiedViewSchema = previewStorage.get(viewId as string);
    
    if (stringifiedViewSchema) {
      setViewSchema(JSON.parse(stringifiedViewSchema));
    }

  }, [viewId]);

const slices = useViewSchemaSlices(viewSchema);

return (
  <MobileFirstLayout>
    {slices}
  </MobileFirstLayout>
);
}

export default PreviewPage;
