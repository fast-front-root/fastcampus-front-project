"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { SearchOrder } from '../../api/getSearchVideosList';
import * as s from './style.css';
import { useState } from 'react';
import { getSearchPageLink } from '@/src/shared/utils/link/page';

const SEARCH_ORDER_TYPO: Record<SearchOrder, string> = {
  relevance: "관련 순",
  date: "최신 순",
  viewCount: "조회수 높은 순",
};

export const SearchFilter = () => {
  const searchParams = useSearchParams();
    const router = useRouter();
    
  const [order, setOrder] = useState<SearchOrder>((searchParams.get('order') ?? 'relevance') as SearchOrder);

  const filterItems = Object.entries(SEARCH_ORDER_TYPO);

  const handleClick = (order: SearchOrder) => {
    setOrder(order);
    
    router.push(getSearchPageLink({ order }));
  }

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        {filterItems.map(([key, value]) => (
          <div
            key={key}
            className={s.chip({ active: key === order })}
            onClick={() => {
              if (key !== order) handleClick(key as SearchOrder);
            }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}
