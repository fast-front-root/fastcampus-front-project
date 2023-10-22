import { ViewKeyData } from "@/src/apis/worker/getViewList";
import { formatDate } from "@/src/utils/date/format";
import { Box, Divider, Text } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";

type Props = {
  viewList: ViewKeyData[];
};

export const ViewList = ({ viewList }: Props) => {
  const sortedLastedDateViewList = [...viewList].sort((current, prev) => {
    const currentDate = new Date(current.metadata.createAt);
    const prevDate = new Date(prev.metadata.createAt);

    return prevDate.getTime() - currentDate.getTime();
  })

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
        {sortedLastedDateViewList.map(({ name, metadata }) => (
          <a href={`/view/${name}`} target="_blank" key={name} rel="noreferrer">
            <li className="p-2 hover:bg-gray-100">
              <Text
                fontSize="sm"
                style={{ fontWeight: vars.typography.fontWeight[600] }}
              >
                {metadata.title ?? name}
              </Text>
              <Text
                fontSize="xs"
                style={{ color: vars.colors.$static.light.gray[500] }}
              >
                {formatDate(metadata.createAt)}
              </Text>
            </li>
            <Divider />
          </a>
        ))}
      </ul>
    </Box>
  );
};
