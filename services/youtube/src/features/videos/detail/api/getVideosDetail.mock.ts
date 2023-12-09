import { HttpHandler, HttpResponse, http } from "msw";
import { getVideosDetailURL } from "./getVideosDetail";

export const getMockVideosDetail: HttpHandler = http.get(
  getVideosDetailURL,
  () => {
    return HttpResponse.json(GET_MOCK_VIDEOS_DETAIL.success);
  },
);

export const GET_MOCK_VIDEOS_DETAIL = {
  success: {
    detail: {
      videoId: "nYJH2lChijE",
      title: "[sub] 옥상으로 따라와 고기 먹게 | 🔥나영석의 지글지글",
      description:
        "황정민 정우성이랑 옥상에서 삼겹살 먹은 썰 푼다 (이왜진)\n\n#채널십오야 #지글지글 #유료광고포함\n#황정민 #정우성 #서울의봄",
      channelId: "UCQ2O-iftmnlfrBuNsUUTofQ",
      channelTitle: "채널십오야",
      thumbnail: {
        url: "https://i.ytimg.com/vi/nYJH2lChijE/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      publishedAt: "2023-11-24T09:00:43Z",
      publishedAtDisplayText: "2주 전",
      viewCount: 4284654,
      viewCountDisplayText: "428만",
      likeCount: 42679,
      likeCountDisplayText: "4만",
      dislikeCount: 0,
      dislikeCountDisplayText: "0",
      channelInfo: {
        title: "채널십오야",
        description:
          "채널십오야는 다양한 창작자들의 ‘달나라’가는 꿈같은 콘텐츠들이 업로드 됩니다. 꽉찬 보름달 같은 많은 사랑 부탁 드립니다. #사랑합니다구독감사합니다\n\n",
        customUrl: "@15ya.fullmoon",
        thumbnail: {
          url: "https://yt3.ggpht.com/dHOrOd1AIHn0xb6mJsy9VuDuQkqcYOFJtdgEyII1fuR-0UKMfJnMYHWuwuROYpuSZ2iqQJ2i_w=s240-c-k-c0x00ffffff-no-rj",
          width: 240,
          height: 240,
        },
        viewCount: 1807697427,
        viewCountDisplayText: "18억",
        subscriberCount: 5990000,
        subscriberCountDisplayText: "599만",
        hiddenSubscriberCount: false,
      },
    },
  },
};
