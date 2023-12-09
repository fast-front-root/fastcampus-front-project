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
