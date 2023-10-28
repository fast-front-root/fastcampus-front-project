import { Flex, FlexProps } from "@fastcampus/react-components-layout";

type Props = FlexProps;

export const DesktopFirstBody = (props: Props) => {
  const { children, padding = 2, className, ...rest } = props;

  const currentClassName = ["w-full min-h-screen relative top-0 pt-[56px]", className].join(" ");

  return (
    <Flex {...rest} padding={padding} className={currentClassName}>
      {children}
    </Flex>
  );
};
