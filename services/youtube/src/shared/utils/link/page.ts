import { GetSearchVideosListRequestParams } from "@/src/features/search/api/getSearchVideosList";
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

type VideoDetailPageParams = {
  videoId: string;
}
export const getVideoDetailPageLink = (params: VideoDetailPageParams) => {
  return '/';
};
