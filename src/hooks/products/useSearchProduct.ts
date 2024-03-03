import { useQuery } from "@tanstack/react-query";
import productApi, { IParamsSearch } from "../../services/apis/product";
import { QueryKeyFn } from "../../constants/types/queryKey";

const useSearchProduct = (params: IParamsSearch) => {
  const { data, isLoading } = useQuery([QueryKeyFn.GET_PRODUCT, params], () =>
    productApi.search(params)
  );
  const dataProducts = data?.products ?? [];
  return { data: dataProducts, isLoading };
};

export default useSearchProduct;
