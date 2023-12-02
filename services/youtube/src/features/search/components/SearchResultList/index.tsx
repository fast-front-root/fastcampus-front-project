"use client";

import { useSearchParams } from "next/navigation";
import { useGetSearchVideosList } from "../../hooks/useGetSearchVideosList";
import * as s from "./style.css";
import { SearchOrder } from "../../api/getSearchVideosList";
import { SearchResultListItem } from "./ListItem";
import { VisibilityLoader } from "@/src/shared/components/VisibilityLoader";
import { flattenInfinityListData } from "@/src/shared/utils/data";

export const SearchResultList = () => {
  const searchParams = useSearchParams();

  const searchQuery = {
    q: searchParams.get("q") ?? "",
    order: (searchParams.get("order") ?? "relevance") as SearchOrder,
  };

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetSearchVideosList(searchQuery);

  const flatData = flattenInfinityListData(data);

  return (
    <>
      <section className={s.container}>
        <div className={s.wrapper}>
          {flatData.map((data) => (
            <SearchResultListItem key={data?.videoId} video={data} />
          ))}
        </div>
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
