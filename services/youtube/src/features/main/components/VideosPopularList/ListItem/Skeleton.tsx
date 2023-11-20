import { Skeleton } from '@/src/shared/components/base/Skeleton';
import * as s from './style.css';

export const VideosPopularListItemSkeleton = () => (
  <div className={s.wrapper}>
    <div className={s.link}>
      <div className={s.thumbnailWrapper}>
        <Skeleton style={{ height: "100%", borderRadius: "0.75rem" }} />
      </div>
      <div className={s.contentsWrapper}>
        <Skeleton style={{ marginTop: "4px", width: "95%" }} />
        <div className={s.metadataWrapper}>
          <Skeleton style={{ width: "80%" }} />
        </div>
      </div>
    </div>
  </div>
);
