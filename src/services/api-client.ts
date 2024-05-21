import axios, { AxiosRequestConfig } from "axios";
import { Promo } from "../entities/AnimePromo";

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

  get = (id: number) => {
    return axiosInstance
      .get(this.endpoint + '/' + id.toString())
      .then((res) => res.data)
  }

  getVideos = (id: number) => {
    return axiosInstance
      .get<{data: { promo: Promo[]}}>(this.endpoint + '/' + id.toString() + '/videos')
      .then((res) => res.data.data.promo)
  }
}

export default APIClient;