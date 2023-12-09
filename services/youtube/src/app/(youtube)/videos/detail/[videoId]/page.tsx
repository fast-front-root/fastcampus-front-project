import { VideoDetailPageParams } from "@/src/features/videos/detail/types";
import * as s from "./style.css";
import { Suspense } from "react";
import { VideoDetail } from "@/src/features/videos/detail/components/VideoDetail";

export default function VideoDetailPage({ params }: VideoDetailPageParams) {
  const { videoId } = params;

  return (
    <main>
      <div className={s.container}>
        <div className={s.wrapper}>
          <Suspense fallback={<div></div>}>
            <VideoDetail videoId={videoId} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
