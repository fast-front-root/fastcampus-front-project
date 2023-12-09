import { GetSearchVideosListRequestParams } from "@/src/features/search/api/getSearchVideosList";
import { VideoDetailPageParams } from "@/src/features/videos/detail/types";
import queryString from "query-string";

type SearchPageQueryParams = Pick<GetSearchVideosListRequestParams, 'order' | 'q'>;
export const getSearchPageLink = (params: SearchPageQueryParams) => {
  const parsedParams = queryString.parse(location.search);

  if (params.q) parsedParams.q = params.q;
  if (params.order) parsedParams.order = params.order;  

  return `/search?${queryString.stringify(parsedParams)}`;
};

export const getMainPageLink = () => {
  return '/';
}

export const getVideoDetailPageLink = (params: VideoDetailPageParams["params"]) => {
  return `/videos/detail/${params.videoId}`;
};
