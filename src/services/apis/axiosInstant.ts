import axios, { AxiosError } from "axios";
// import * as process from "process";

const axiosInstant = axios.create({
  baseURL: `https://dummyjson.com/`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstant.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error: AxiosError) {
    return Promise.reject(error.response?.data);
  }
);

export const setAuthHeaderToken = (token?: string) => {
  if (token) {
    axiosInstant.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

export const removeAuthHeaderToken = () =>
  delete axiosInstant.defaults.headers.common["Authorization"];

export default axiosInstant;
