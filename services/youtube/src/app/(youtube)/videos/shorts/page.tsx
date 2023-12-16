import { RedirectRandomShortsVideo } from "@/src/features/videos/shorts/components/RedirectRandomShortsVideo";
import { Suspense } from "react";

export default function ShortsVideosPage() {
  return (
    <main>
      <Suspense fallback={<div></div>}>
        <RedirectRandomShortsVideo />
      </Suspense>
    </main>
  )
}
