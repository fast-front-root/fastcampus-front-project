import { youtube_v3 } from "googleapis";
import { GetVideosDetailRequestParams } from "./getVideosDetail";
import { CommentListItem, ListResponse } from "@/src/shared/api/youtube/types/list";
import { API_BASE_URL } from "@/src/shared/api/constants";

export type GetVideosDetailCommentListRequestParams = GetVideosDetailRequestParams &
  Pick<youtube_v3.Params$Resource$Commentthreads$List, "pageToken">;

export type VideosDetailCommentListItem = CommentListItem & {
  totalReplyCount: number;
};

export type GetVideosDetailCommentListResponse =
  ListResponse<VideosDetailCommentListItem>;

export const getVideosDetailCommentListURL = `${API_BASE_URL}/api/videos/detail/:videoId/comment-list`;

export const getVideosDetailCommentList = async (params: GetVideosDetailCommentListRequestParams): Promise<GetVideosDetailCommentListResponse> => {
  const url = getVideosDetailCommentListURL.replace(":videoId", params.videoId);

  const response = await fetch(url);

  return await response.json();
};
