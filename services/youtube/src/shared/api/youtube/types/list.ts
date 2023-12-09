import { Thumbnail } from "./item";

export type ListPageApiInfo = {
  nextPageToken?: string,
  prevPageToken?: string,
  totalResults: number,
}

export type VideoListItem = {
  videoId: string;
  title: string;
  description: string;
  channelId: string;
  channelTitle: string;
  thumbnail: Thumbnail;
  publishedAt: string;
  publishedAtDisplayText: string; // 1개월 전
};

export type CommentListItem = {
  commentId: string;
  textDisplay: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  likeCount: number;
  likeCountDisplayText: string;
  publishedAt: string;
  publishedAtDisplayText: string;
  isUpdated: boolean;
};

export type ListResponse<T> = {
  lists: T[];
} & ListPageApiInfo;
