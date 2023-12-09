import { GetVideosDetailCommentListRequestParams, GetVideosDetailCommentListResponse } from "@/src/features/videos/detail/api/getVideosDetailCommentList";
import { VideoDetailPageParams } from "@/src/features/videos/detail/types";
import { youtubeServerInstance } from "@/src/shared/api/youtube/server/instance";
import { formatKoreanTextCompareDatesFromNow } from "@/src/shared/utils/format/date";
import { formatNumberToKoreanText } from "@/src/shared/utils/format/number";
import { youtube_v3 } from "googleapis";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest, { params }: VideoDetailPageParams) => {
  try {
    const videoId = params.videoId;
    const queryParams = parseQueryParams(request.nextUrl.searchParams);

    const { data } = await youtubeServerInstance.commentThreads.list({
      part: ["snippet"],
            order: "relevance",
      videoId,
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
): Omit<GetVideosDetailCommentListRequestParams, 'videoId'> => {
  return {
    pageToken: params.get("pageToken") ?? undefined,
  };
};

const mappingResponse = (
  data: youtube_v3.Schema$CommentThreadListResponse,
): GetVideosDetailCommentListResponse => {
  const lists =
    data?.items?.map(({ snippet }) => {
      const comment = snippet?.topLevelComment ?? {};
      const likeCount = comment?.snippet?.likeCount ?? 0;
      const publishedAt = comment?.snippet?.publishedAt ?? "";

      return {
        commentId: comment?.id ?? "",
        textDisplay: comment?.snippet?.textDisplay ?? "",
        authorDisplayName: comment?.snippet?.authorDisplayName ?? "",
        authorProfileImageUrl: comment?.snippet?.authorProfileImageUrl ?? "",
        likeCount,
        likeCountDisplayText: formatNumberToKoreanText(likeCount),
        publishedAt,
        publishedAtDisplayText:
          formatKoreanTextCompareDatesFromNow(publishedAt),
        isUpdated:
          comment?.snippet?.updatedAt !== comment?.snippet?.publishedAt,
        totalReplyCount: snippet?.totalReplyCount ?? 0,
      };
    }) ?? [];

  return {
    lists,
    nextPageToken: data.nextPageToken ?? undefined,
    totalResults: data.pageInfo?.totalResults ?? 0,
  };
};
