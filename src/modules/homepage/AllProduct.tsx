import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { AppFlatList } from "../../components/AppFlatList";
import ProductCard from "../../components/ProductCard";
import ProductCardSkeleton from "../../components/ProductCardSkeleton";
import useGetInfinityProducts from "../../hooks/products/useGetInfinityProducts";

const AllProduct = () => {
  const { inView, ref } = useInView();
  const { data, isLoading, total, fetchNextPage, isFetchingNextPage } =
    useGetInfinityProducts();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  return (
    <div>
      <AppFlatList
        data={data}
        renderItem={(item, index) => {
          return <ProductCard {...item} key={index} />;
        }}
        isLoading={isLoading}
        ListSkeletonComponent={[1, 2, 3, 4, 5].map((_, index: number) => (
          <ProductCardSkeleton key={index} />
        ))}
        ListEmptyComponent={() => <div>Empty</div>}
        totalData={total}
        isFetchingNextPage={isFetchingNextPage}
        ref={ref}
      />
    </div>
  );
};

export default AllProduct;
