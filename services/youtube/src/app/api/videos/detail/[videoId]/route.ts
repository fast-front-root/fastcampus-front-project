import { GetVideosDetailResponse } from "@/src/shared/api/youtube/client/videoDetail/getVideosDetail";
import { VideoDetailPageParams } from "@/src/features/videos/detail/types";
import { youtubeServerInstance } from "@/src/shared/api/youtube/server/instance";
import { formatKoreanTextCompareDatesFromNow } from "@/src/shared/utils/format/date";
import { formatNumberToKoreanText } from "@/src/shared/utils/format/number";
import { youtube_v3 } from "googleapis";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest, { params }: VideoDetailPageParams) => {
  try {
    const videoId = params.videoId;

    const [isShortVideo, { data: videoData }] = await Promise.all([
      isShort(videoId),
      youtubeServerInstance.videos.list({
        part: ["snippet", "statistics"],
        id: [videoId],
      }),
    ]);

    if (!videoData?.items?.length) {
      return new Response(JSON.stringify({ message: "Not Found" }), {
        status: 404,
      });
    }

    const rawVideoDetail = videoData.items[0];

    const { data: channelData } = await youtubeServerInstance.channels.list({
      part: ["snippet", "statistics"],
      id: [rawVideoDetail.snippet?.channelId ?? ""]
    });

    if (!channelData?.items?.length) {
      return new Response(JSON.stringify({ message: "Not Found" }), {
        status: 404,
      });
    }

    const rawChannelDetail = channelData.items[0];

    const mappedData = mappingResponse({
      videoData: rawVideoDetail,
      channelData: rawChannelDetail,
      isShortVideo,
    });

    return Response.json(mappedData);
  } catch {
    // 에러를 간단하게 처리
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}


type Params = {
  videoData: youtube_v3.Schema$Video;
  channelData: youtube_v3.Schema$Channel;
  isShortVideo: boolean;
};
const mappingResponse = ({
  videoData,
  channelData,
  isShortVideo,
}: Params): GetVideosDetailResponse => {
  const videoPublishedAt = videoData.snippet?.publishedAt ?? "";
  const videoParsedViewCount = parseInt(videoData.statistics?.viewCount ?? "0");
  const videoLikeCount = parseInt(videoData.statistics?.likeCount ?? "0");
  const videoDislikeCount = parseInt(videoData.statistics?.dislikeCount ?? "0");
  const videoCommentCount = parseInt(videoData.statistics?.commentCount ?? "0");

  const channelViewCount = parseInt(channelData.statistics?.viewCount ?? "0");
  const channelSubscriberCount = parseInt(
    channelData.statistics?.subscriberCount ?? "0",
  );

  return {
    detail: {
      videoType: isShortVideo ? "short" : "long",
      videoId: videoData.id ?? "",
      title: videoData.snippet?.title ?? "",
      description: videoData.snippet?.description ?? "",
      channelId: videoData.snippet?.channelId ?? "",
      channelTitle: videoData.snippet?.channelTitle ?? "",
      thumbnail: {
        url: videoData.snippet?.thumbnails?.medium?.url ?? "",
        width: videoData.snippet?.thumbnails?.medium?.width ?? undefined,
        height: videoData.snippet?.thumbnails?.medium?.height ?? undefined,
      },
      publishedAt: videoPublishedAt,
      publishedAtDisplayText:
        formatKoreanTextCompareDatesFromNow(videoPublishedAt),
      viewCount: videoParsedViewCount,
      viewCountDisplayText: formatNumberToKoreanText(
        videoParsedViewCount,
        true,
      ),
      likeCount: videoLikeCount,
      likeCountDisplayText: formatNumberToKoreanText(videoLikeCount, true),
      dislikeCount: videoDislikeCount,
      dislikeCountDisplayText: formatNumberToKoreanText(
        videoDislikeCount,
        true,
      ),
      commentCount: videoCommentCount,
      commentCountDisplayText: formatNumberToKoreanText(
        videoCommentCount,
        true,
      ),
      channelInfo: {
        title: channelData.snippet?.title ?? "",
        description: channelData.snippet?.description ?? "",
        customUrl: channelData.snippet?.customUrl ?? "",
        thumbnail: {
          url: channelData.snippet?.thumbnails?.medium?.url ?? "",
          width: channelData.snippet?.thumbnails?.medium?.width ?? undefined,
          height: channelData.snippet?.thumbnails?.medium?.height ?? undefined,
        },
        viewCount: channelViewCount,
        viewCountDisplayText: formatNumberToKoreanText(channelViewCount, true),
        subscriberCount: channelSubscriberCount,
        subscriberCountDisplayText: formatNumberToKoreanText(
          channelSubscriberCount,
          true,
        ),
        hiddenSubscriberCount:
          channelData.statistics?.hiddenSubscriberCount ?? false,
      },
    },
  };
};

const isShort = async (videoId: string): Promise<boolean> => {
  const url = "https://www.youtube.com/shorts/" + videoId;

  try {
    const response = await fetch(url, { method: "HEAD" });
    if (response.ok) {
      const responseUrl = response.url;
      console.log("shorts", responseUrl);

      // responseURL이 "/shorts/videoId" 이면 true
      // responseURL이 "/watch?=videoId" 이면 false
      return responseUrl.includes("/shorts/");
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
