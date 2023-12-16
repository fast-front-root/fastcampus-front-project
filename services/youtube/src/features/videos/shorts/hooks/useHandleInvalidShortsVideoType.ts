import { useEffect } from "react";
import { useGetVideosDetail } from "../../detail/hooks/useGetVideosDetail";
import { VideoDetailPageParams } from "../../detail/types";
import { useRouter } from "next/navigation";

type Params = VideoDetailPageParams["params"];

export const useHandleInvalidShortsVideoType = ({ videoId }: Params) => {
  const {
    data: { detail: videoDetail },
    isLoading,
  } = useGetVideosDetail({ videoId });

  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    const isShortVideo = videoDetail.videoType === "short";

    if (!isShortVideo) {
      router.replace(`/videos/detail/${videoId}`);
    }
  }, [isLoading]);
};
