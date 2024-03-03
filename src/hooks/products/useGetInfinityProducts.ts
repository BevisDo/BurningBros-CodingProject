import { useInfiniteQuery } from "@tanstack/react-query";
import { QueryKeyFn } from "../../constants/types/queryKey";
import productApi from "../../services/apis/product";

const useGetInfinityProducts = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      [QueryKeyFn.GET_PRODUCTS],
      ({ pageParam = 0 }) => productApi.getAll({ skip: pageParam, limit: 20 }),
      {
        getNextPageParam: (lastPage) => {
          const nextSkip = lastPage.skip + lastPage.limit;
          return nextSkip < lastPage.total ? nextSkip : undefined;
        },
      }
    );

  const dataProducts = data?.pages?.flatMap((page) => page.products) ?? [];

  return {
    data: dataProducts,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    total: data?.pages?.[0]?.total ?? 0,
  };
};

export default useGetInfinityProducts;
