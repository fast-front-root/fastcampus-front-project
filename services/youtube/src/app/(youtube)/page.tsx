import { VideosPopularList } from '@/src/features/main/components/VideosPopularList';
import * as s from '../(youtube)/page.css';

export default function Home() {
  return <main className={s.main}>
    <h1 style={{ padding: '12px' }}>타이틀</h1>
    <VideosPopularList />
  </main>;
}
