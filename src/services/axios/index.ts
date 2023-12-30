import axios, { AxiosError } from "axios";

const $apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

const handleError = (error: Error | AxiosError) => {
  if (axios.isAxiosError(error) && !!error.response?.data?.message) {
    if (error.response.status === 401) {
      console.log("-------");
    }
    return Promise.reject(error.response.data);
  } else {
    return Promise.reject(error);
  }
};

$apiClient.interceptors.request.use((config: any) => {
  if (config.headers) {
    config.headers["Content-Type"] = "application/json";
  }
  return config;
}, handleError);

$apiClient.interceptors.response.use(
  (response: any) => response.data,
  handleError
);

export default $apiClient;
