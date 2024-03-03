const ProductCardSkeleton = () => {
  return (
    <div className="border-2 my-4 rounded-2xl p-4 flex gap-6 animate-pulse">
      <div className="bg-slate-300 w-[400px] h-[220px] rounded-2xl"></div>
      <div className="flex flex-col w-full gap-2">
        <div className="w-[400px] h-[32px] bg-slate-300 rounded-lg"></div>
        <div className="w-full h-[32px] bg-slate-300 rounded-lg"></div>
        <div className="w-full h-[32px] bg-slate-300 rounded-lg"></div>
        <div className="w-full h-[32px] bg-slate-300 rounded-lg"></div>
        <div className="w-[400px] h-[32px] bg-slate-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
