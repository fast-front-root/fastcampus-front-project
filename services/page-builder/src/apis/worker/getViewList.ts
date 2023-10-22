import { WORKER_BASE_PATH, workerInstance } from "."
import { ViewMetadata } from "./type";

const getGetViewListPath = () => WORKER_BASE_PATH;

export type ViewKeyData = {
  name: string;
  metadata: ViewMetadata;
};

export type ViewListResponseData = {
  keys: ViewKeyData[];
};

export const getViewList = async () => {
  const response = await workerInstance(getGetViewListPath());

  const responseData = {
    keys: response.data.data.keys,
  };

  return responseData as ViewListResponseData;
}
