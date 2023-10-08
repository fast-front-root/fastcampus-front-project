import { vars } from "@fastcampus/themes";
import { CDN_BASE_URL } from "../constants";
import { MobileFirstLayout } from "../components/view/MobileFirstLayout";

const PlaygroundPage = () => {
  return (
    <MobileFirstLayout>
      <h1>{vars.colors.$scale.gray[900]}</h1>
      <img src={`${CDN_BASE_URL}/test/hero_mobile.webp`} alt="" />
    </MobileFirstLayout>
  );
};

export default PlaygroundPage;
