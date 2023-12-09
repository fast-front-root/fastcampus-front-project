import { API_BASE_URL } from "@/src/shared/api/constants";
import { Channel, ChannelStatistics, VideoStatistics } from "@/src/shared/api/youtube/types/item";
import { VideoListItem } from "@/src/shared/api/youtube/types/list";

export type GetVideosDetailRequestParams = {
  videoId: string;
}

export type VideoDetail = VideoListItem &
  VideoStatistics & {
    channelInfo: Channel & ChannelStatistics;
  };

export type GetVideosDetailResponse = {
  detail: VideoDetail;
};

export const getVideosDetailURL = `${API_BASE_URL}/api/videos/detail/:videoId`;

export const getVideosDetail = async (params: GetVideosDetailRequestParams): Promise<GetVideosDetailResponse> => {
  const url = getVideosDetailURL.replace(":videoId", params.videoId);

  const response = await fetch(url);

  return await response.json();
};
