import { API_BASE_URL } from "@/src/shared/api/constants";
import { ListResponse } from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";
import queryString from "query-string";

export type GetShortsVideosListRequestParams =
  Pick<youtube_v3.Params$Resource$Search$List, 'pageToken'>;

export type GetShortsVideosListResponse = ListResponse<{ videoId: string }>;

export const getShortsVideosListURL = `${API_BASE_URL}/api/videos/shorts`;

export const getShortsVideosList = async (
  params: GetShortsVideosListRequestParams,
) => {
    const queryParams = queryString.stringify(params);

    const url = `${getShortsVideosListURL}?${queryParams}`;

    const response = await fetch(url);

    return await response.json();
};
