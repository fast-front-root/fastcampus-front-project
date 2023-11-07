import { deleteViewDetail } from "@/src/apis/worker/deleteViewDetail";
import { getViewDetail } from "@/src/apis/worker/getViewDetail";
import { ViewKeyData } from "@/src/apis/worker/getViewList";
import { putViewDetail } from "@/src/apis/worker/putViewDetail";
import { usePage } from "@/src/hooks/usePage";
import { formatDate } from "@/src/utils/date/format";
import { formatObjectToJson } from "@/src/utils/jsonEditor";
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

  const handleItemPublish = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    viewId: string,
    isDraft?: boolean,
  ) => {
    event.preventDefault();

    const { value, metadata } = await getViewDetail({ viewId });

    const message = isDraft
      ? "정말 발행하시겠습니까?"
      : "정말 대기중으로 변경하시겠습니까?";
    
    const confirm = window.confirm(message);

    if (!confirm) return;

    await putViewDetail({
      viewId,
      data: {
        value: formatObjectToJson(value),
        metadata: {
          ...metadata,
          isDraft: !isDraft,
        }
      }
    })
    
    refresh();
  };

  const handleItemRemove = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    viewId: string,
  ) => {
    event.preventDefault();

    const confirm = window.confirm("정말 삭제하시겠습니까?");

    if (!confirm) return;

    await deleteViewDetail({ viewId });
    refresh();
  };

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
        {sortedLastedDateViewList.map(({ name: viewId, metadata }) => (
          <a
            href={metadata.isDraft ? `/preview/${viewId}` :`/view/${viewId}`}
            target="_blank"
            key={viewId}
            rel="noreferrer"
          >
            <li className="p-2 flex hover:bg-gray-100">
              <div className="w-full">
                <Text
                  fontSize="sm"
                  style={{ fontWeight: vars.typography.fontWeight[600] }}
                >
                  {metadata.title ?? viewId}
                </Text>
                <Text
                  fontSize="xs"
                  style={{ color: vars.colors.$static.light.gray[500] }}
                >
                  {formatDate(metadata.createAt)}
                </Text>
              </div>
              <div className="min-w-fit flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="xs"
                  color={metadata.isDraft ? "gray" : "green"}
                  onClick={(event) =>
                    handleItemPublish(event, viewId, metadata.isDraft)
                  }
                >
                  {metadata.isDraft ? "대기중" : "발행중"}
                </Button>
                <Button
                  variant="ghost"
                  size="xs"
                  color="red"
                  onClick={(event) => handleItemRemove(event, viewId)}
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
