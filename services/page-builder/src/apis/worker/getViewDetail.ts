import { ViewSchemaProps } from "@/src/utils/validation/schema/types";
import { WORKER_BASE_PATH, workerInstance } from ".";
import { ViewMetadata } from "./type";

const getGetViewDetailPath = (viewId: string) =>
  `${WORKER_BASE_PATH}/${viewId}`;

type Params = {
  viewId: string;
};

type ViewDetailResponseData = {
  value: ViewSchemaProps;
  metadata: ViewMetadata;
};

export const getViewDetail = async ({ viewId }: Params) => {
  const response = await workerInstance.get(getGetViewDetailPath(viewId));

  const responseData = {
    value: JSON.parse(response.data.data.value),
    metadata: response.data.data.metadata,
  }

  return responseData as ViewDetailResponseData;
}
