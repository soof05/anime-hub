import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  data: T[];
  pagination?: {
    has_next_page: boolean
  }
}

const axiosInstance = axios.create({
  baseURL: "https://api.jikan.moe/v4",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data)
  }
}

export default APIClient;