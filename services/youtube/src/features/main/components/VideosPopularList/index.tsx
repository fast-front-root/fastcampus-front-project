'use client';

import * as s from './index.css';
import { useGetVideosPopularList } from "../../hooks/useGetVideosPopularList";

export const VideosPopularList = () => {
  const { data } = useGetVideosPopularList({});

  const flatData = data.pages.map((page) => page?.lists ?? []).flat();

  return (
    <section className={s.wrapper}>
      {
        flatData.map((item) => (
          <div key={item.videoId} className={s.item}>
            <div className={s.itemWrapper} />
          </div>
        ))
      }
    </section>
  );
};
