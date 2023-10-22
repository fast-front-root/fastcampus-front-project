import { WORKER_BASE_PATH, workerInstance } from ".";
import { ViewMetadata } from "./type";

type ViewDetailRequestData = {
  value: string;
  metadata: ViewMetadata;
};

const getPutViewDetailPath = (viewId: string) =>
  `${WORKER_BASE_PATH}/${viewId}`;

type Params = {
  viewId: string;
  data: ViewDetailRequestData;
};

export const putViewDetail = async ({ viewId, data }: Params) => {
  await workerInstance.put(getPutViewDetailPath(viewId), data);
};
