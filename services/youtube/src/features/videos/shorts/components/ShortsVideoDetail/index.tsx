"use client";

import { VideoDetailPageParams } from "../../../detail/types";
import { useHandleInvalidShortsVideoType } from "../../hooks/useHandleInvalidShortsVideoType";

type Props = VideoDetailPageParams["params"];

export const ShortsVideoDetail = ({ videoId }: Props) => {
  useHandleInvalidShortsVideoType({ videoId });

  return <div></div>;
};
