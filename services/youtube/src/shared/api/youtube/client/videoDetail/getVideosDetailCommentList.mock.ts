import { HttpHandler, HttpResponse, http } from "msw";
import { getVideosDetailCommentListURL } from "./getVideosDetailCommentList";

export const getMockVideosDetailCommentList: HttpHandler = http.get(
  getVideosDetailCommentListURL,
  () => {
    return HttpResponse.json(GET_MOCK_VIDEOS_DETAIL_COMMENT_LIST.success);
  },
);

export const GET_MOCK_VIDEOS_DETAIL_COMMENT_LIST = {
  success: {
    lists: [
      {
        commentId: "Ugyekte0Rbn682WTvrF4AaABAg",
        textDisplay:
          "황정민은 대화를 하거나 말거나 홍보를 하거나 말거나 삼겹살과 식사에 대한 집념이 대단하네 ㅋㅋㅋㅋㅋㅋㅋ 넘 인간적 ㅋㅋㅋㅋ",
        authorDisplayName: "@yamnyami",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/APkrFKaP7dDffVxMeWuFjhimgCPe6em4JkBRj5VpBp8yad4=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 2030,
        likeCountDisplayText: "2,030",
        publishedAt: "2023-11-24T09:58:12Z",
        publishedAtDisplayText: "2주 전",
        isUpdated: false,
        totalReplyCount: 9,
      },
      {
        commentId: "Ugwn9Hf7ikXpH6dCKsp4AaABAg",
        textDisplay:
          "토크에 빠져서 눈치못챘는데, 초반지나고나서부턴, 대주님은 주방만 들락날락거리고, 우성님은 고기굽기 담당이 되어있고, 정민님은 고기굽기 서브가 되어있고, 나피디님은 먹기만하네 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ",
        authorDisplayName: "@youngjin1383",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/APkrFKbClefVm9HQnvSpUDjNllIeROiCXOP7ZH-3Yw=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 2478,
        likeCountDisplayText: "2,478",
        publishedAt: "2023-11-24T18:06:21Z",
        publishedAtDisplayText: "2주 전",
        isUpdated: false,
        totalReplyCount: 17,
      },
      {
        commentId: "Ugyy1sCmAH73dp2bIDh4AaABAg",
        textDisplay:
          "나피디님도 은근 손많이 가는 스타일인듯 ㅋㅋㅋㅋ 형님들이 너무 야무지게 고기 구우신다 ㅋㅋ",
        authorDisplayName: "@bluejay769",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/APkrFKYGEu4iZg-2W3SA5Pmr0qC3rHVKAYJ5tW9_7w=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 472,
        likeCountDisplayText: "472",
        publishedAt: "2023-11-25T09:36:07Z",
        publishedAtDisplayText: "2주 전",
        isUpdated: false,
        totalReplyCount: 3,
      },
      {
        commentId: "Ugwf76zycnRJ-9-QE1F4AaABAg",
        textDisplay:
          "서울의 봄 보고 왔는데 두분 일상 속에선 이렇게 수수하신 분들인데 와... 진짜 연기를 너무 잘하셔서  2시간 내내 시간 가는 줄 모르고 봤어요ㅠㅠㅠ 영화 대박나길!!!",
        authorDisplayName: "@user-ro4xd6sx4n",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/APkrFKbPnMt_JEeyNu4vm7OOqRYVvnlUMkSBH9_kZRErNQ=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 591,
        likeCountDisplayText: "591",
        publishedAt: "2023-11-25T08:27:27Z",
        publishedAtDisplayText: "2주 전",
        isUpdated: false,
        totalReplyCount: 6,
      },
      {
        commentId: "Ugzyg2GwuB_J95fzQb14AaABAg",
        textDisplay:
          "와.. 황정민  배우님 진짜 잘드신닼ㅋㅋㅋㅋㅋㅋ 고기 굽기 시작해서 처음부터 끝까지 고기를 계속 드시고 계시넼ㅋㅋ",
        authorDisplayName: "@Kim-zw6fr",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/colOvBpuduJ9MsaNBHtbIGY6qLxRwMt8_dp8cbkzaW5o7nVMPJ4FL8ofVegRDxmFYdh1rokfzpM=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 139,
        likeCountDisplayText: "139",
        publishedAt: "2023-11-27T13:15:08Z",
        publishedAtDisplayText: "1주 전",
        isUpdated: false,
        totalReplyCount: 2,
      },
      {
        commentId: "UgxLN2MQJQj8pFzcAlR4AaABAg",
        textDisplay:
          "나영석감독님은 진짜 미래에서 온 느낌이에여 ㅋㅋㅋ 유튜브 기세로 콩콩팥팥도 뭔가 유튭 재질이고, 홍보할려고 게스트를 초대해도 사람냄새 나게끔 편안하게 촬영해서 보는 사람도 뭔가 마음이 편~안해지네여 ㅋㅋ",
        authorDisplayName: "@bbinggoi8747",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/APkrFKbrtELUSnJ-_6iKZQYiX4nRbVRO7-Ax9PHTKQ=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 340,
        likeCountDisplayText: "340",
        publishedAt: "2023-11-25T04:11:56Z",
        publishedAtDisplayText: "2주 전",
        isUpdated: false,
        totalReplyCount: 4,
      },
      {
        commentId: "UgziCQrLzVxegGaF7Wx4AaABAg",
        textDisplay:
          "스탭들 없이 딱 4명이서 토크하니까 진짜 편한 분위기에 대화가 이어지는듯 ㅋㅋㅋㅋ",
        authorDisplayName: "@user-ke3sr8qe4p",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/APkrFKZ24e2p2mdIJnBeSkfJBGId-cIBN_U5NKdZMQ=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 2039,
        likeCountDisplayText: "2,039",
        publishedAt: "2023-11-24T10:07:58Z",
        publishedAtDisplayText: "2주 전",
        isUpdated: false,
        totalReplyCount: 11,
      },
      {
        commentId: "Ugzgko7PqViP3a0R76d4AaABAg",
        textDisplay: "아 정우성님 말투 너무 다정하고 뾰족한 곳 없어 너무 좋다",
        authorDisplayName: "@chee-se",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/APkrFKa5U-fbqJRAyY69TCtaGMg7gq0RxkPJpeF7EQ=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 102,
        likeCountDisplayText: "102",
        publishedAt: "2023-12-01T01:33:55Z",
        publishedAtDisplayText: "1주 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "Ugw28NPwaaK_JFwSAsh4AaABAg",
        textDisplay:
          "정우성... 된장찌개 받을때 고마워요... 진짜 몸에 베어있네 매너가 그리고 영화 반응 간만에 좋던데 황정민님 기분 좋으실듯ㅋㅋㅋㅋ 저도 예매하러 갑니다",
        authorDisplayName: "@ggglue2868",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/APkrFKaVKTKq5dGUmF2tCDRrclutlid5PQFV98Lrqbi_iA=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 560,
        likeCountDisplayText: "560",
        publishedAt: "2023-11-24T17:03:50Z",
        publishedAtDisplayText: "2주 전",
        isUpdated: true,
        totalReplyCount: 1,
      },
      {
        commentId: "UgxCUqlkF2BBhwDFJAp4AaABAg",
        textDisplay:
          "아 진짜ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ이 조합 너무 좋다 <br>나중에 또 두 배우분들이랑 지글지글 찍어주셨으면ㅋㅋ",
        authorDisplayName: "@agustd13_",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/-vVsTdnW6f2YEMx_XR_GxHbezzvONuuS5KpKuRcz4TpJcmg3YuhjxPczd7rRFYOmzmCcJajvxA=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 173,
        likeCountDisplayText: "173",
        publishedAt: "2023-11-25T04:16:00Z",
        publishedAtDisplayText: "2주 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "UgzSh65CdnjSUwOhLbB4AaABAg",
        textDisplay:
          "정우성은 사람들  옆에서 얘기 잘들어주면서<br>고기도 잘구워주는 친절한 사람같아보이네...",
        authorDisplayName: "@hiyo4954",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/VIJ5ztFQTDvaPXWlhmH0SXIwg3iXMo1KtNBCOw24IqJg_jcxd4SqZHtFVSBK73luu_-OKe_7ZQ=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 87,
        likeCountDisplayText: "87",
        publishedAt: "2023-11-26T05:54:04Z",
        publishedAtDisplayText: "1주 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "Ugz02J9iErH8qW3UWq54AaABAg",
        textDisplay:
          "젊었을때 정우성 멋있는줄 몰랐는데 나이 먹으면서의 모습이 진짜 멋지네요",
        authorDisplayName: "@DDD-pb7sx",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/LG4UVLczHfQTWE6Rih2q9peTQMFWTF9N5vn2UsSogedKaYMDFLVnomXGLS2YxHqy0acRraVd-g=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 71,
        likeCountDisplayText: "71",
        publishedAt: "2023-12-02T09:08:39Z",
        publishedAtDisplayText: "1주 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "Ugw_RcM66reTxueXzTV4AaABAg",
        textDisplay:
          "지금까지 나불나불(1명 나옴), 와글와글(여러명 나옴), 지글지글(고기 구워먹음)이 나왔으니까 혼자서 브이로그 느낌으로 나영석의 중얼중얼 해보는 거 어떱니까<br><br>채널 십오야에서 이걸 보고 아이디어를 생각해도 될 정도로 대댓글이 달렸다...<br>영석이 형이 이걸 봐줬으면...",
        authorDisplayName: "@iamOxQ",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/APkrFKYT7mJ61_Ihxs8w084QhShcF1M4ZSRhTovQA50VmQ=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 4258,
        likeCountDisplayText: "4,258",
        publishedAt: "2023-11-24T11:07:32Z",
        publishedAtDisplayText: "2주 전",
        isUpdated: true,
        totalReplyCount: 48,
      },
      {
        commentId: "Ugx97_GBB4oHwb7thPN4AaABAg",
        textDisplay:
          "잠깐 작가 일어나니깐 고기 흐름 안끊어지게 자연스레 집게를 드시는 우성옵❤ 항상 배려가 베어있으심 오늘 영화 보러가요^^ 담주에 또 볼께요 천만 가즈아~~~~~~~~~~",
        authorDisplayName: "@style-writer",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/Nk4YykkIpXAuaXrk37b5G_N4TfmP92_F0lcdJQH6kiZAySAkY_vRN42h-LGO36Ox-2lSr3PKRw=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 128,
        likeCountDisplayText: "128",
        publishedAt: "2023-11-25T01:42:42Z",
        publishedAtDisplayText: "2주 전",
        isUpdated: true,
        totalReplyCount: 0,
      },
      {
        commentId: "UgwRQQPahSeEzjkQMEd4AaABAg",
        textDisplay:
          "영석님 평소엔 조연출, 작가들이 다 챙겨서 스텝들 없으면 실생활 안되는거 넘 웃김 ㅋㅋㅋㅋ",
        authorDisplayName: "@user-di9ui1dy4z",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/pzYqAHp4MBuf28YfeHUUG7_j2NVOZLDX1POmuQNixqZOKSmr6FEv3NmDJTjJd5RfOTUF_fUa=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 105,
        likeCountDisplayText: "105",
        publishedAt: "2023-11-25T09:26:02Z",
        publishedAtDisplayText: "2주 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "Ugz2KqJWMOL1OwL3eQl4AaABAg",
        textDisplay:
          "9시간이 궁금해꼭 봐야하는 보이지않는 압박감ㅋㅋ 진짜 갈수록편해지는 토크~~대박나세요 지글지글",
        authorDisplayName: "@user-dh9sf9mq8i",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/6QlA-Dgr2HfMsO4799jv_9klxb5twltAL40cc-xCM3stVnJBUnQtJ1SmlKS2SMC3pEFS6uBD85Q=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 64,
        likeCountDisplayText: "64",
        publishedAt: "2023-11-25T02:59:22Z",
        publishedAtDisplayText: "2주 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "Ugzflz6paXRn0k5DYy14AaABAg",
        textDisplay: "정우성오빠 배려와 말하는센스와 얼굴 진짜 넘사벽❤",
        authorDisplayName: "@floraly7075",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/APkrFKbvUiz5HGeLYkNsycPYvbNQYTEwbsRBnIlwWfsX5A=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 103,
        likeCountDisplayText: "103",
        publishedAt: "2023-11-26T03:36:06Z",
        publishedAtDisplayText: "1주 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "UgwibAISIZHMKgWce_Z4AaABAg",
        textDisplay:
          "이 짧은 영상속에서도 정우성의 섬세한 배려와 매너가 느껴진다. 좋아하지 않을 수가 없다.",
        authorDisplayName: "@user-jf1uo6gn3g",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/193UqHxHyFmJiF53r25ndJJKNF--qZrnELsort4pKIgphpl4ryPWlLvz3tvNR25vPSeiYYwd8A=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 30,
        likeCountDisplayText: "30",
        publishedAt: "2023-11-27T19:34:42Z",
        publishedAtDisplayText: "1주 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
      {
        commentId: "UgyT4o6JNooAeNEcz6Z4AaABAg",
        textDisplay:
          "황정민님은 진짜 ㅋㅋㅋ옥상 세팅 보자마자 앉으란 말에 바로 그냥 턱 자리잡는거부터, 고기 굽는과정에 진심에, 고기 칭찬에, 잘 드시는거 모두 진짜 사람 같네요.ㅎㅎ",
        authorDisplayName: "@thejinari",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/ytc/APkrFKaQYGcHDz3moeRKmypI0aVruD7vSIA7TYnETw=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 1856,
        likeCountDisplayText: "1,856",
        publishedAt: "2023-11-24T09:23:22Z",
        publishedAtDisplayText: "2주 전",
        isUpdated: false,
        totalReplyCount: 14,
      },
      {
        commentId: "Ugwp9lCs0-j-za2ZvIJ4AaABAg",
        textDisplay:
          "일반적인 인터뷰보다 이런 리얼리티하고 와일드한게 왤케 좋지 ㅋㅋ 오히려 부담감 없이 편하게 듣고 시간 지나간거 같음",
        authorDisplayName: "@user-zb7mo8bo7p",
        authorProfileImageUrl:
          "https://yt3.ggpht.com/kj77WIe682C1MAHtWig45l6ma8NHiCG2E9uFIFAeYa57gns6UmRfypdwIGU2FSQlZJnyspOQug=s48-c-k-c0x00ffffff-no-rj",
        likeCount: 77,
        likeCountDisplayText: "77",
        publishedAt: "2023-11-27T03:00:01Z",
        publishedAtDisplayText: "1주 전",
        isUpdated: false,
        totalReplyCount: 0,
      },
    ],
    nextPageToken:
      "Z2V0X3JhbmtlZF9zdHJlYW1zLS1DcVlCQ0lBRUZSZTMwVGdhbXdFS2xnRUkyRjhRZ0FRWUJ5S0xBVnNYaUdab01fTFB0eFl3MFoyRHRvTmtJUkVDYUVLdXItSkI3TUQ4ZHRBWnBrX3h0Q213MUxlTkxHUURoY1NUSTVheEs4LW90T1dNa3JmS2luc2tGSzhHQ2JOQ0N2R0ljLUsydmlEbUdKR0xNVnd3Sk9jNnpRZk1uakdqYThLSENEWVlBczY5THdtajlwQkNOdWoteEFwYUFKWTVYSXlTeV9tWWdYZUlMUEJOaGdZSlNacURNRXhKQ0FNUUZCSUZDSWNnR0FBU0J3aVhJQkFRR0FFU0J3aUZJQkFQR0FFU0JRaUdJQmdBRWdVSWlDQVlBQklIQ0lRZ0VCUVlBUklGQ0lrZ0dBQVlBQQ==",
    totalResults: 20,
  },
};
