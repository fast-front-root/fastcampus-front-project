import { MetadataSliceSchema } from "@/src/utils/validation/schema/slices";
import { SchemaProps } from "@/src/utils/validation/schema/types";
import Head from "next/head";

type Props = SchemaProps<typeof MetadataSliceSchema>;

export const MetadataSlice: React.FC<Props> = ({
  title,
  ogTitle,
  ogDescription,
}: Props) => {
  const currentOGTitle = ogTitle ?? title;

  return (
    <Head>
      {title && <title>{title}</title>}
      {currentOGTitle && <meta property="og:title" content={currentOGTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
    </Head>
  );
};
