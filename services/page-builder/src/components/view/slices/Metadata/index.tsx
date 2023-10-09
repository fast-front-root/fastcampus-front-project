import Head from "next/head";

export type MetadataSliceProps = {
  title?: string;
  ogTitle?: string;
  ogDescription?: string;
};

export const MetadataSlice: React.FC<MetadataSliceProps> = ({
  title,
  ogTitle,
  ogDescription,
}: MetadataSliceProps) => {
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
