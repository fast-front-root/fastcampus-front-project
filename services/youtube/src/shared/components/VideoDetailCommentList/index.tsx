"use client";

import { flattenInfinityListData } from "@/src/shared/utils/data";
import { useGetVideosDetail } from "../../../features/videos/detail/hooks/useGetVideosDetail";
import { useGetVideosDetailCommentList } from "../../../features/videos/detail/hooks/useGetVideosDetailCommentList";
import { VideoDetailPageParams } from "../../../features/videos/detail/types";
import * as s from "./style.css";
import { VideoDetailCommentListItem } from "./ListItem";
import { VisibilityLoader } from "@/src/shared/components/VisibilityLoader";

type Props = VideoDetailPageParams["params"];

export const VideoDetailCommentList = ({ videoId }: Props) => {
  const {
    data: { detail: videoDetail },
  } = useGetVideosDetail({ videoId });

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useGetVideosDetailCommentList({ videoId });
  const flatData = flattenInfinityListData(data);

  return (
    <>
      <section className={s.wrapper}>
        <h4 className={s.title}>
          댓글 {videoDetail.commentCountDisplayText}개
        </h4>
        <div className={s.listWrapper}>
          {flatData.map((item) => (
            <VideoDetailCommentListItem key={item.commentId} comment={item} />
          ))}
        </div>
      </section>
      {hasNextPage && (
        <VisibilityLoader
          callback={() => {
            !isFetchingNextPage && fetchNextPage();
          }}
        />
      )}
    </>
  );
};
