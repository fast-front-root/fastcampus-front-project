import { Editor, EditorProps } from "@monaco-editor/react";

type Props = EditorProps;

export const JsonEditor = (props: Props) => {
  const { defaultLanguage = 'json', height = '90vh', options, ...rest} = props;

  return (
    <Editor
      {...rest}
      height={height}
      defaultLanguage={defaultLanguage}
      options={{ fontSize: 16, formatOnPaste: true, ...options }}
    />
  );
}
