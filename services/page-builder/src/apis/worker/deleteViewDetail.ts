import { workerInstance } from ".";
import { getViewDetailPath } from "./getViewDetail";

type params = {
  viewId: string;
}

export const deleteViewDetail = async ({ viewId }: params) => {
  await workerInstance.delete(getViewDetailPath(viewId));
};
