import { HttpHandler, HttpResponse, http } from "msw";
import { getShortsVideosListURL } from "./getShortsVideosList";

export const getMockShrotsVideosList: HttpHandler = http.get(getShortsVideosListURL, () => {
  return HttpResponse.json(GET_MOCK_SHORTS_VIDEOS_LIST.success);
});

export const GET_MOCK_SHORTS_VIDEOS_LIST = {
  success: {
    lists: [
      {
        videoId: "zuEjYtzxEqM",
      },
      {
        videoId: "_FI-K943oU0",
      },
      {
        videoId: "ByHo4W6uAOc",
      },
      {
        videoId: "xsQzk6gi3So",
      },
      {
        videoId: "h1B4sDNWBmE",
      },
      {
        videoId: "fdc1QA2Gb10",
      },
      {
        videoId: "B-uE4rbJZp0",
      },
      {
        videoId: "LMYELeFmXdY",
      },
      {
        videoId: "EFdw-4B_hqk",
      },
      {
        videoId: "LZzoPKOmoMo",
      },
    ],
    nextPageToken: "CAoQAA",
    totalResults: 1000000,
  },
};
