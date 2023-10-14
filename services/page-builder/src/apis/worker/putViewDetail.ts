import { WORKER_BASE_PATH, workerInstance } from ".";

type ViewDetailRequestData = {
  value: string;
  metadata: Object;
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
