import { Panel } from "@/src/shared/components/base/Panel";
import { VideoDetailPageParams } from "../../types";
import clsx from "clsx";
import * as s from './style.css';
import { useGetVideosDetail } from "../../hooks/useGetVideosDetail";
import { useMemo, useState } from "react";
import { vars } from "@fastcampus/themes";

type Props = VideoDetailPageParams["params"] &
  React.HTMLAttributes<HTMLDivElement>;

export const VideoDetailDescription = ({ videoId, ...props }: Props) => {
  const {
    data: { detail: videoDetail },
  } = useGetVideosDetail({ videoId });

  const {
    viewCountDisplayText,
    viewCount,
    publishedAtDisplayText,
    description,
    publishedAt,
  } = videoDetail;

  const [showMore, setShowMore] = useState(false);

  const publishedAtDate = publishedAt.split("T")[0];
  const info = useMemo(() => {
        if (showMore)
          return `조회수 ${viewCount}회 최초 공개: ${publishedAtDate}`;

        return `조회수 ${viewCountDisplayText}회 ${publishedAtDisplayText}`;
  }, [showMore]);

  return (
    <Panel
      {...props}
      className={clsx([props.className, s.wrapper])}
      onClick={() => {
        setShowMore(true);
      }}
      style={{
        ...props.style,
        cursor: showMore ? "auto" : "pointer",
      }}
    >
      <p>{info}</p>
      <p className={s.description({ showMore })}>{description}</p>
      <p
        onClick={(event) => {
          event.stopPropagation();
          setShowMore(!showMore);
        }}
        style={{
          color: vars.colors.$scale.gray[600],
          marginTop: showMore ? "1.25rem" : 0,
          cursor: "pointer",
        }}
      >
        {showMore ? "간략히" : "더보기"}
      </p>
    </Panel>
  );
}
