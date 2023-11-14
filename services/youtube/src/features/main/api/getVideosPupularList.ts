import { VideoThumbnail } from "@/src/shared/api/youtube/types/item";
import { ListPageApiInfo } from "@/src/shared/api/youtube/types/list";
import { youtube_v3 } from "googleapis";

export type GetVideosPopularListRequestParams = Pick<youtube_v3.Params$Resource$Videos$List, 'maxResults' | 'pageToken'>;

export type PopularListItem = {
  videoId: string;
  title: string;
  description: string;
  channelId: string;
  channelTitle: string;
  thumbnail: VideoThumbnail;
  publishedAt: string;
  publishedAtDisplayText: string; // 1개월 전
  viewCount: number;
  viewCountDisplayText: string; // 23만
};

export type GetVideosPopularListResponse = {
  lists: PopularListItem[];
} & ListPageApiInfo;
