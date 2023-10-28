import { deleteViewDetail } from "@/src/apis/worker/deleteViewDetail";
import { ViewKeyData } from "@/src/apis/worker/getViewList";
import { usePage } from "@/src/hooks/usePage";
import { formatDate } from "@/src/utils/date/format";
import { Button } from "@fastcampus/react-components-button";
import { Box, Divider, Text } from "@fastcampus/react-components-layout";
import { vars } from "@fastcampus/themes";

type Props = {
  viewList: ViewKeyData[];
};

export const ViewList = ({ viewList }: Props) => {
  const { refresh } = usePage();

  const sortedLastedDateViewList = [...viewList].sort((current, prev) => {
    const currentDate = new Date(current.metadata.createAt);
    const prevDate = new Date(prev.metadata.createAt);

    return prevDate.getTime() - currentDate.getTime();
  });

  const handleViewItemClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, viewId: string) => {
    event.preventDefault();

    const confirm = window.confirm("정말 삭제하시겠습니까?");

    if (!confirm) return;

    await deleteViewDetail({ viewId });
    refresh();
  }

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
            <li className="p-2 flex hover:bg-gray-100">
              <div className="w-full">
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
              </div>
              <div className="min-w-fit flex items-center">
                <Button
                  variant="ghost"
                  size="xs"
                  color="red"
                  onClick={(event) => handleViewItemClick(event, name)}
                >
                  삭제
                </Button>
              </div>
            </li>
            <Divider />
          </a>
        ))}
      </ul>
    </Box>
  );
};
