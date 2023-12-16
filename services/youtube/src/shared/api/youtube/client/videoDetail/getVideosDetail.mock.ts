import { HttpHandler, HttpResponse, http } from "msw";
import { getVideosDetailURL } from "./getVideosDetail";

export const getMockVideosDetail: HttpHandler = http.get(
  getVideosDetailURL,
  () => {
    const videoType = new URLSearchParams(window.location.search).get(
      "videoType",
    );

    if (videoType === "short") {
    return HttpResponse.json(GET_MOCK_VIDEOS_DETAIL.success.short);
    }

    return HttpResponse.json(GET_MOCK_VIDEOS_DETAIL.success.long);
  },
);

export const GET_MOCK_VIDEOS_DETAIL = {
  success: {
    long: {
      detail: {
        videoType: "long",
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
        viewCount: 4293270,
        viewCountDisplayText: "429만",
        likeCount: 42757,
        likeCountDisplayText: "4만",
        dislikeCount: 0,
        dislikeCountDisplayText: "0",
        commentCount: 2127,
        commentCountDisplayText: "2,127",
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
          subscriberCount: 6000000,
          subscriberCountDisplayText: "600만",
          hiddenSubscriberCount: false,
        },
      },
    },
    short: {
      detail: {
        videoType: "short",
        videoId: "_TIEmFpzJKw",
        title: "나무에 18000V 전기를 연결하면 그림이 그려진다",
        description:
          "#shorts \n인테리어각\n-\n🏠 긱블 홈페이지 👉 https://bit.ly/Geekble_Official\n🎓 긱블 에듀 👉 https://bit.ly/Geekble_Edu\n📷 긱블 인스타그램 👉 https://bit.ly/Geekble_Insta\n-\n📬 긱블팬이라면 모두!\n긱블이랑 “카카오 플친” 맺기 👉 https://pf.kakao.com/_dWPQK\n-\n🎨긱블러 인스타그램",
        channelId: "UCp94pzrtA5wPyZazbDq0CXA",
        channelTitle: "긱블 Geekble",
        thumbnail: {
          url: "https://i.ytimg.com/vi/_TIEmFpzJKw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-12-12T22:00:14Z",
        publishedAtDisplayText: "3일 전",
        viewCount: 186111,
        viewCountDisplayText: "18만",
        likeCount: 2216,
        likeCountDisplayText: "2,216",
        dislikeCount: 0,
        dislikeCountDisplayText: "0",
        commentCount: 98,
        commentCountDisplayText: "98",
        channelInfo: {
          title: "긱블 Geekble",
          description:
            "저희는 쓸모없는 작품만 만듭니다.\n쓸모있는 물건은 이마트에서 찾으시는게 좋습니다,,\n공대생들이 모인 과학/공학 콘텐츠 제작소, 긱블\n재밌게 봐주세요!\n\n🏠 긱블 공식 홈페이지\nhttps://bit.ly/Geekble_Official\n\n🎓 누구든 긱블러가 될 수 있는 긱블에듀\nhttps://bit.ly/Geekble_Edu\n\n\n✉ 비즈니스 문의 메일 contact@geekble.kr\n",
          customUrl: "@geekblekr",
          thumbnail: {
            url: "https://yt3.ggpht.com/Zrm5qBvSK1RXvayJB5SZwTFSIgJf0_ks8wS3yzuhrB3WMLhD7K7Gc6v6VIGO1qQBOdi-1UaL=s240-c-k-c0x00ffffff-no-rj",
            width: 240,
            height: 240,
          },
          viewCount: 566096904,
          viewCountDisplayText: "5억",
          subscriberCount: 1160000,
          subscriberCountDisplayText: "116만",
          hiddenSubscriberCount: false,
        },
      },
    },
  },
};
