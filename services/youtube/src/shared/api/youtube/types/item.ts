export type Thumbnail = {
  url: string,
  width?: number,
  height?: number,
}

export type VideoStatistics = {
  viewCount: number;
  viewCountDisplayText: string;
  likeCount: number;
  likeCountDisplayText: string;
  dislikeCount: number;
  dislikeCountDisplayText: string;
  commentCount: number;
  commentCountDisplayText: string;
};

export type Channel = {
  title: string;
  description: string;
  customUrl: string;
  thumbnail: Thumbnail;
};

export type ChannelStatistics = {
  viewCount: number;
  viewCountDisplayText: string;
  subscriberCount: number;
  subscriberCountDisplayText: string;
  hiddenSubscriberCount: boolean;
};
