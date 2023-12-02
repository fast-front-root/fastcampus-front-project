import { GetSearchVideosListRequestParams, GetSearchVideosListResponse, SearchOrder } from "@/src/features/search/api/getSearchVideosList";
import { youtubeServerInstance } from "@/src/shared/api/youtube/server/instance";
import { formatKoreanTextCompareDatesFromNow } from "@/src/shared/utils/format/date";
import { youtube_v3 } from "googleapis";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    // Params Validation 생략
    const queryParams = parseQueryParams(request.nextUrl.searchParams);

    const { data } = await youtubeServerInstance.search.list({
      part: ["snippet"],
      type: ["video"],
      regionCode: "KR",
      maxResults: 20,
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
): GetSearchVideosListRequestParams => {
  return {
    q: params.get("q") ?? "",
    order: (params.get("order") ?? "relevance") as SearchOrder,
    pageToken: params.get("pageToken") ?? undefined,
  };
};

const mappingResponse = (
  data: youtube_v3.Schema$SearchListResponse,
): GetSearchVideosListResponse => {
  const lists =
    data?.items?.map(({ id, snippet }) => {
      const publishedAt = snippet?.publishedAt ?? "";

      return {
        videoId: id?.videoId ?? "",
        title: snippet?.title ?? "",
        description: snippet?.description ?? "",
        channelId: snippet?.channelId ?? "",
        channelTitle: snippet?.channelTitle ?? "",
        thumbnail: {
          url: snippet?.thumbnails?.medium?.url ?? "",
          width: snippet?.thumbnails?.medium?.width ?? undefined,
          height: snippet?.thumbnails?.medium?.height ?? undefined,
        },
        publishedAt,
        publishedAtDisplayText:
          formatKoreanTextCompareDatesFromNow(publishedAt),
      };
    }) ?? [];

  return {
    lists,
    prevPageToken: data.prevPageToken ?? undefined,
    nextPageToken: data.nextPageToken ?? undefined,
    totalResults: data.pageInfo?.totalResults ?? 0,
  };
};

