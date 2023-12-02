import { InfiniteData } from '@tanstack/react-query';
import { ListResponse } from '../../api/youtube/types/list';

export const flattenInfinityListData = <T extends {}>(
  data: InfiniteData<ListResponse<T>>,
): T[] => {
  return data.pages.map((page) => page?.lists ?? []).flat();
};
