import { useInView } from "react-intersection-observer";
import { AppFlatList } from "./components/AppFlatList";
import ProductCard from "./components/ProductCard";
import useGetInfinityProducts from "./hooks/products/useGetInfinityProducts";
import { useEffect, useState } from "react";
import ProductCardSkeleton from "./components/ProductCardSkeleton";
import useSearchProduct from "./hooks/products/useSearchProduct";

function App() {
  const { inView, ref } = useInView();

  const [searchQuery, setSearchQuery] = useState("");

  const { data: dataSearch } = useSearchProduct({ q: searchQuery });

  const { data, isLoading, total, fetchNextPage, isFetchingNextPage } =
    useGetInfinityProducts();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div className="container flex flex-col gap-2">
      <div>
        <p>Candidate: Đỗ Anh Tuấn</p>
        <p>Tech Stack: ReactJS, ReactQuery, TailwindCSS </p>
        <p>Time: From 9:00PM/3-3-2024 to 2:00AM/4-3-2024</p>
      </div>

      <div>
        <p className="text-5xl font-bold">Products List</p>
      </div>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products..."
        className="mb-4 p-2 border rounded"
      />

      {searchQuery.trim() !== "" ? (
        <div>
          {dataSearch?.map((item, index) => {
            return <ProductCard {...item} key={index} />;
          })}
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default App;
