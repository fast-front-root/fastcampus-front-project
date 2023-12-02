import { VideosPopularListItemSkeleton } from "./ListItem/Skeleton";
import * as s from "./style.css";

export const VideosPopularListSkeleton = () => {
  const items = Array.from({ length: 10 }, (_, i) => <VideosPopularListItemSkeleton key={i} />);

  return (
    <section data-testid="VideosPopularListSkeleton" className={s.wrapper}>
      {items}
    </section>
  );
};
