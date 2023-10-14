import { Box, BoxProps } from "@fastcampus/react-components-layout";

type Props = BoxProps;

export const DesktopFirstBody = (props: Props) => {
  const { children, padding = 2, className, ...rest } = props;

  const currentClassName = ["w-full min-h-screen relative top-0 pt-[56px]", className].join(" ");

  return (
    <Box {...rest} padding={padding} className={currentClassName}>
      {children}
    </Box>
  );
};
