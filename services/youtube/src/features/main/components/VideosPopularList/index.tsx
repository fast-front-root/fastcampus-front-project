'use client';

import * as s from './style.css';
import { useGetVideosPopularList } from "../../hooks/useGetVideosPopularList";
import { VideosPopularListItem } from './ListItem';
import { VisibilityLoader } from '@/src/shared/components/VisibilityLoader';
import { flattenInfinityListData } from '@/src/shared/utils/data';

export const VideosPopularList = () => {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetVideosPopularList({});

  const flatData = flattenInfinityListData(data);

  return (
    <>
      <section className={s.wrapper}>
        {flatData.map((item) => (
          <VideosPopularListItem key={item.videoId} video={item} />
        ))}
      </section>
      {hasNextPage && (
        <VisibilityLoader
          callback={() => {
            !isFetchingNextPage && fetchNextPage();
          }}
        />
      )}
    </>
  );
};
