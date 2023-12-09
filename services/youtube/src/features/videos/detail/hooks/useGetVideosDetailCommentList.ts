import { InfiniteData, UseSuspenseInfiniteQueryResult, useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { GetVideosDetailCommentListRequestParams, GetVideosDetailCommentListResponse, getVideosDetailCommentList } from "../api/getVideosDetailCommentList";

type Params = Pick<GetVideosDetailCommentListRequestParams, "videoId"> & {
  initPageToken?: string;
};

export const useGetVideosDetailCommentList = ({
  videoId,
  initPageToken,
}: Params): UseSuspenseInfiniteQueryResult<InfiniteData<GetVideosDetailCommentListResponse>, Error> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["videoDetail", "commentList", videoId, initPageToken],
    queryFn: async ({ pageParam = initPageToken }) =>
      await getVideosDetailCommentList({ videoId, pageToken: pageParam }),
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
  });
};
