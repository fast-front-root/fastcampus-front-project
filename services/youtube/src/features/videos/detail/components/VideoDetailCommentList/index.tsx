"use client";

import { flattenInfinityListData } from "@/src/shared/utils/data";
import { useGetVideosDetail } from "../../hooks/useGetVideosDetail";
import { useGetVideosDetailCommentList } from "../../hooks/useGetVideosDetailCommentList";
import { VideoDetailPageParams } from "../../types";
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
