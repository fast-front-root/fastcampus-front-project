import { GetVideosDetailRequestParams, GetVideosDetailResponse, getVideosDetail } from "@/src/shared/api/youtube/client/videoDetail/getVideosDetail";
import { UseSuspenseQueryResult, useSuspenseQuery } from "@tanstack/react-query";

type Params = GetVideosDetailRequestParams;

export const useGetVideosDetail = (
  params: Params,
): UseSuspenseQueryResult<GetVideosDetailResponse> => {
  return useSuspenseQuery({
    queryKey: ["videoDetail", params.videoId],
    queryFn: async () => await getVideosDetail(params),
  });
};
