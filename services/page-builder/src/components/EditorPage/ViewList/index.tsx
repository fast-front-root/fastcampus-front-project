import { ViewKeyData } from "@/src/apis/worker/getViewList";
import { Box, Divider, Text } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";

type Props = {
  viewList: ViewKeyData[];
};

export const ViewList = ({ viewList }: Props) => {
  return (
    <Box
      marginY={14}
      paddingX={8}
      paddingY={6}
      className="max-w-[600px] w-full"
      boxShadow="base"
      style={{
        background: vars.colors.$static.light.color.white,
      }}
    >
      <ul>
        {viewList.map(({ name, metadata }) => (
          <a href={`/view/${name}`} target="_blank" key={name} rel="noreferrer">
            <li className="py-2">
              <Text
                fontSize="sm"
                style={{ fontWeight: vars.typography.fontWeight[600] }}
              >
                {name}
              </Text>
              <Text
                fontSize="xs"
                style={{ color: vars.colors.$static.light.gray[500] }}
              >
                {metadata.createAt}
              </Text>
            </li>
            <Divider />
          </a>
        ))}
      </ul>
    </Box>
  );
};
