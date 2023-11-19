import { InfiniteData, UseSuspenseInfiniteQueryResult, useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { GetVideosPopularListRequestParams, GetVideosPopularListResponse, getVideosPopularList, getVideosPopularListPath } from "../api/getVideosPopularList";


type Params = Pick<GetVideosPopularListRequestParams, 'maxResults'> & { initPageToken?: string }; 

export const useGetVideosPopularList = ({ maxResults, initPageToken }: Params): UseSuspenseInfiniteQueryResult<InfiniteData<GetVideosPopularListResponse>, Error> => {
  return useSuspenseInfiniteQuery({
    queryKey: ["videos", getVideosPopularListPath, maxResults, initPageToken],
    queryFn: async ({ pageParam = initPageToken }) => {
      return await getVideosPopularList({ maxResults, pageToken: pageParam });
    },
    initialPageParam: initPageToken,
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
    getPreviousPageParam: (firstPage) => firstPage.prevPageToken,
  });
};
