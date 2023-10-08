import { Box } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";
import { CDN_BASE_URL } from "../constants";

const PlaygroundPage = () => {
  return (
    <Box padding={3}>
      <h1>{vars.colors.$scale.gray[900]}</h1>
      <img src={`${CDN_BASE_URL}/test/hero_mobile.webp`} alt="" />
    </Box>
  );
};

export default PlaygroundPage;
