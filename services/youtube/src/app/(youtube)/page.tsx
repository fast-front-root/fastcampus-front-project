import { VideosPopularList } from '@/src/features/main/components/VideosPopularList';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>🤔</div>}>
        <VideosPopularList />
      </Suspense>
    </main>
  );
}
