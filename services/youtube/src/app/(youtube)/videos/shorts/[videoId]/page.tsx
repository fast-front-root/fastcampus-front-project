import { VideoDetailPageParams } from "@/src/features/videos/detail/types";
import * as s from "./style.css";
import { Suspense } from "react";
import { ShortsVideoList } from "@/src/features/videos/shorts/components/ShortsVideoList";

export default function ShortsVideoDetailPage({ params }: VideoDetailPageParams) {
  const { videoId } = params;

  return (
    <main>
      <div className={s.container}>
        <div className={s.wrapper}>
          <Suspense fallback={<div></div>}>
            <ShortsVideoList videoId={videoId} />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
