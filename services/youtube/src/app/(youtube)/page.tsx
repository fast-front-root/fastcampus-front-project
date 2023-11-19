import { VideosPopularList } from '@/src/features/main/components/VideosPopularList';
import * as s from '../(youtube)/page.css';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className={s.main}>
      <h1 style={{ padding: "12px" }}>타이틀</h1>
      <Suspense fallback={<div>🤔</div>}>
        <VideosPopularList />
      </Suspense>
    </main>
  );
}
