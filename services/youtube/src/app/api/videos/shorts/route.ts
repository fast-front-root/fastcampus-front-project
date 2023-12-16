
import { GetShortsVideosListRequestParams, GetShortsVideosListResponse } from "@/src/features/videos/shorts/api/getShortsVideosList";
import { youtubeServerInstance } from "@/src/shared/api/youtube/server/instance";
import { youtube_v3 } from "googleapis";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    // Params Validation 생략
    const queryParams = parseQueryParams(request.nextUrl.searchParams);

    const { data } = await youtubeServerInstance.search.list({
      part: ["snippet"],
      type: ["video"],
      order: "date",
      relevanceLanguage: "ko",
      regionCode: "KR",
      maxResults: 10,
      q: "#shorts 유행",
      ...queryParams,
    });

    const mappedData = mappingResponse(data);

    return Response.json(mappedData);
  } catch {
    // 에러를 간단하게 처리
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};

const parseQueryParams = (
  params: URLSearchParams,
): GetShortsVideosListRequestParams => {
  return {
    pageToken: params.get("pageToken") ?? undefined,
  };
};

const mappingResponse = (
  data: youtube_v3.Schema$SearchListResponse,
): GetShortsVideosListResponse => {
  const lists =
    data?.items?.map(({ id }) => {
      return {
        videoId: id?.videoId ?? "",
      };
    }) ?? [];

  return {
    lists,
    prevPageToken: data.prevPageToken ?? undefined,
    nextPageToken: data.nextPageToken ?? undefined,
    totalResults: data.pageInfo?.totalResults ?? 0,
  };
};
