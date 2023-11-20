import { VideosPopularList } from '@/src/features/main/components/VideosPopularList';
import { VideosPopularListSkeleton } from '@/src/features/main/components/VideosPopularList/Skeleton';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<VideosPopularListSkeleton />}>
        <VideosPopularList />
      </Suspense>
    </main>
  );
}
