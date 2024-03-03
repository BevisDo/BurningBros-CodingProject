import { GET_PRODUCTS_PARAMS } from "../../constants/defaultParams/product";
import { ProductsResponse } from "../../constants/interfaces/product";
import axiosInstant from "./axiosInstant";

interface IParamsGetAll {
  limit: number;
  skip: number;
}
export interface IParamsSearch {
  q: string;
}

const url = {
  getAll: "products",
  search: "products/search",
};

const productApi = {
  getAll: async (params: IParamsGetAll): Promise<ProductsResponse> => {
    return await axiosInstant.get(url.getAll, {
      params: { ...GET_PRODUCTS_PARAMS, ...params },
    });
  },
  search: async (params: IParamsSearch): Promise<ProductsResponse> => {
    return await axiosInstant.get(url.search, {
      params,
    });
  },
};
export default productApi;
