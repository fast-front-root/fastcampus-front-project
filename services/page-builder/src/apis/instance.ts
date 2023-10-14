import axios, { AxiosInstance, CreateAxiosDefaults } from "axios";

export const initFetchInstance = (config?: CreateAxiosDefaults): AxiosInstance => {
  const instance = axios.create({
    timeout: 10000,
    ...config,
    headers: {
      "Content-Type": "application/json",
      ...config?.headers,
    },
  });

  return instance;
};
