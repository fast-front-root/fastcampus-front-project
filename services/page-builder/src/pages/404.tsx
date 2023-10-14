import { Flex, Heading, Text } from "@fastcampus/react-components-layout";

const Error404Page = () => (
  <div className="w-screen h-screen flx justify-center">
    <Flex className="pt-[200px]" direction="column" align="center" gap={8}>
      <Heading fontSize="2xl">Not Found</Heading>
      <Text fontSize="lg">길을 잃었다~ 어딜 가야 할까</Text>
    </Flex>
  </div>
);

export default Error404Page;
