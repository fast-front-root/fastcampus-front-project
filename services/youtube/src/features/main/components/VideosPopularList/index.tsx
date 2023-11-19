'use client';

import * as s from './style.css';
import { useGetVideosPopularList } from "../../hooks/useGetVideosPopularList";
import { VideosPopularListItem } from './ListItem';

export const VideosPopularList = () => {
  const { data } = useGetVideosPopularList({});

  const flatData = data.pages.map((page) => page?.lists ?? []).flat();

  return (
    <section className={s.wrapper}>
      {flatData.map((item) => (
        <VideosPopularListItem key={item.videoId} video={item} />
      ))}
    </section>
  );
};
