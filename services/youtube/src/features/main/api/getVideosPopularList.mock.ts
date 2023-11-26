import { HttpHandler, HttpResponse, http } from "msw";
import { getVideosPopularListUrl } from "./getVideosPopularList";

export const getMockVideosPopularList: HttpHandler = http.get(getVideosPopularListUrl, () => {
  return HttpResponse.json(GET_MOCK_VIDEOS_POPULAR_LIST.success);
});

export const GET_MOCK_VIDEOS_POPULAR_LIST = {
  success: {
    lists: [
      {
        videoId: "nYJH2lChijE",
        title: "옥상으로 따라와 고기 먹게 | 🔥나영석의 지글지글",
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
        publishedAtDisplayText: "1일 전",
        viewCount: 2189821,
        viewCountDisplayText: "218만",
      },
      {
        videoId: "U_-csilw6XA",
        title:
          "[무대풀버젼] 골든걸스 - Good-Bye Baby (미쓰에이) [골든걸스] | KBS 방송",
        description:
          "✨[무대풀버젼] 골든걸스 - Good-Bye Baby (미쓰에이)✨\n\n\n\n감히 레전드 무대라고 자신있게 말씀드립니다.\n\n\n\n#골든걸스 #goldengirls #jyp #박진영 #인순이 #박미경 #신효범 #이은미 #god #스트레이키즈 #원더걸스 #비 #박지윤 #itzy #nmixx #량현량하 #kbs #kpop #twice #수지 #아니고 #수니 #미쓰에이 #MissA #무대풀버젼 #레전드\n\n#골든걸스 #goldengirls #jyp #박진영 #인순이 #박미경 #신효범 #이은미 #god #스트레이키즈 #원더걸스 #비 #박지윤 #itzy #nmixx #량현량하 #kbs #kpop #twice #Goldengirls \n\n----------------------------------------------\n        ▶ Homepage : https://www.kbs.co.kr/\n        ▶ Wavve : https://www.wavve.com/\n        ▶ Youtube : https://www.youtube.com/@KBSgoldengirls\n----------------------------------------------",
        channelId: "UC5HpbZB-E-DzFpWZmVlcV9A",
        channelTitle: "KBS 골든걸스",
        thumbnail: {
          url: "https://i.ytimg.com/vi/U_-csilw6XA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-11-24T15:34:13Z",
        publishedAtDisplayText: "1일 전",
        viewCount: 880302,
        viewCountDisplayText: "88만",
      },
      // {
      //   videoId: "eU0aKyZ70Cg",
      //   title:
      //     "미노이 팀 VS 기안84 팀🔥 피 튀기는 AOMG 게임 현장!ㅣ미노미노이 워크샵 EP.2",
      //   description:
      //     "미노미노이 워크샵ㅣEP.2\n\n😼미노미노이 워크샵\n💚EP.2: 맞짱 제대로 뜬 AOMG\n_\n#미노이 #MEENOI  #미노미노이워크샵\n#MEENOIworkshop\n#AOMG\n_\nBusiness Contact : miribang@aomgofficial.com\n_\n◆ Official AOMG\nInstagram : https://instagram.com/AOMGOFFICIAL\nTwitter : https://twitter.com/AOMGOFFICIAL\nYouTube : https://youtube.com/AOMGOFFICIAL\nFacebook : https://facebook.com/AOMGOFFICIAL\n\n▪︎ 본 콘텐츠와 무관한 댓글과 출연자에 대한 무분별한 욕설, 비난, 조롱 등의 악의적인 댓글은 무통보 삭제될 수 있습니다",
      //   channelId: "UCW5gbSGTGIukUDsPt2sdhGw",
      //   channelTitle: "AOMGOFFICIAL",
      //   thumbnail: {
      //     url: "https://i.ytimg.com/vi/eU0aKyZ70Cg/mqdefault.jpg",
      //     width: 320,
      //     height: 180,
      //   },
      //   publishedAt: "2023-11-25T03:00:17Z",
      //   publishedAtDisplayText: "1일 전",
      //   viewCount: 479156,
      //   viewCountDisplayText: "47만",
      // },
      // {
      //   videoId: "z-FGKPVGv9s",
      //   title: "빵빵이의 흑화 ~!",
      //   description:
      //     "기획/대본: 이주용, 장예빈\n애니메이션: 이주용, 허영현, 하현준, 김민석, 윤준식\n배경/3D: 추헌주\n도움: 황보현정, 강민주",
      //   channelId: "UCI2T1_bAtgnKKzfhw3Qib9w",
      //   channelTitle: "빵빵이의 일상",
      //   thumbnail: {
      //     url: "https://i.ytimg.com/vi/z-FGKPVGv9s/mqdefault.jpg",
      //     width: 320,
      //     height: 180,
      //   },
      //   publishedAt: "2023-11-23T11:18:53Z",
      //   publishedAtDisplayText: "2일 전",
      //   viewCount: 2558387,
      //   viewCountDisplayText: "255만",
      // },
      // {
      //   videoId: "zp59ZEyjkuM",
      //   title:
      //     '"저 영감 나오면 안 되는데" 호텔 같은 새 집과 김영옥 남편 공개까지😲? [#모던패밀리] | MBN 20200327 방송',
      //   description:
      //     '"저 영감 나오면 안 되는데" 호텔 같은 새 집과 김영옥 남편 공개까지😲? [#모던패밀리] | MBN 20200327 방송\n\n☑ MPLAY 구독하기  ☞  https://bit.ly/2oPbtbN\n#MPLAY #MBN #엠플레이 #김영옥 #진성 #류필립 #미나 #이재용 #최준용 #이수근 #김정난',
      //   channelId: "UC84IlgY5HIzxKBZOt8XM5UA",
      //   channelTitle: "MPLAY : 엠플레이",
      //   thumbnail: {
      //     url: "https://i.ytimg.com/vi/zp59ZEyjkuM/mqdefault.jpg",
      //     width: 320,
      //     height: 180,
      //   },
      //   publishedAt: "2023-11-24T05:00:36Z",
      //   publishedAtDisplayText: "2일 전",
      //   viewCount: 554960,
      //   viewCountDisplayText: "55만",
      // },
      // {
      //   videoId: "3iDdSsoybxQ",
      //   title: "BABYMONSTER - 'BATTER UP' M/V TEASER",
      //   description:
      //     "#BABYMONSTER #베이비몬스터 #DigitalSingle #BATTER_UP #MV_TEASER #20231127_0AM #YG\n\nMore about BABYMONSTER @\nOfficial YouTube https://www.youtube.com/@BABYMONSTER\nOfficial Instagram https://www.instagram.com/babymonster_ygofficial\nOfficial Facebook https://www.facebook.com/BABYMONSTER.ygofficial\nOfficial Twitter https://twitter.com/YGBABYMONSTER_\nOfficial TikTok https://tiktok.com/@babymonster_yg_tiktok\nOfficial Weibo https://weibo.com/u/7811488144\nOfficial bilibili https://space.bilibili.com/3493127232948989",
      //   channelId: "UCqwUnggBBct-AY2lAdI88jQ",
      //   channelTitle: "BABYMONSTER",
      //   thumbnail: {
      //     url: "https://i.ytimg.com/vi/3iDdSsoybxQ/mqdefault.jpg",
      //     width: 320,
      //     height: 180,
      //   },
      //   publishedAt: "2023-11-23T15:00:04Z",
      //   publishedAtDisplayText: "2일 전",
      //   viewCount: 8643969,
      //   viewCountDisplayText: "864만",
      // },
      // {
      //   videoId: "ernXYWmI-9U",
      //   title:
      //     "태연 절친 김제로 등장. 알고보니 필라테스 천재견 [강형욱의개스트쇼] EP.22",
      //   description:
      //     "제로도 태연 님도 3일치 체력 소진 하고 감🤣\n\n영상 내 번역 자막은 유튜브 번역 No.1, 자메이크에서 제작하였습니다. \n유튜브 채널 성장의 시작은 자메이크 (https://bit.ly/Bodeumofficial)\n\n#강형욱 #태연 #강아지 #제로 \nCopyright ⓒ 2023 Studio Episode - All Rights Reserved",
      //   channelId: "UCee1MvXr6E8qC_d2WEYTU5g",
      //   channelTitle: "강형욱의 보듬TV",
      //   thumbnail: {
      //     url: "https://i.ytimg.com/vi/ernXYWmI-9U/mqdefault.jpg",
      //     width: 320,
      //     height: 180,
      //   },
      //   publishedAt: "2023-11-25T03:00:19Z",
      //   publishedAtDisplayText: "1일 전",
      //   viewCount: 572241,
      //   viewCountDisplayText: "57만",
      // },
      // {
      //   videoId: "_dszNONCiQ4",
      //   title: "중국 선수 안아주고 중국 관중에게 인사하고! '손흥민 클래스'",
      //   description:
      //     "중국과 북중미 월드컵 지역예선 2차전에서 2골 1도움 기록하며 3대0 대승 이끈 손흥민. 경기 후 패배한 중국 선수들에게 먼저 다가가 일일이 안아주고 손 맞잡으며 인사 나눴는데요. 경기 내내 성나 있던 중국 관중들고 손흥민이 손 흔들며 인사하자 박수로 화답했습니다. '손흥민 클래스'를 그대로 보여준 놀라운 장면 엠빅스포츠에서 확인하시죠.\n\n#손흥민 #대한민국중국 #중국관중",
      //   channelId: "UCYRrUD5v5j_Ei8sKOo7mhoQ",
      //   channelTitle: "엠빅뉴스",
      //   thumbnail: {
      //     url: "https://i.ytimg.com/vi/_dszNONCiQ4/mqdefault.jpg",
      //     width: 320,
      //     height: 180,
      //   },
      //   publishedAt: "2023-11-22T03:05:25Z",
      //   publishedAtDisplayText: "4일 전",
      //   viewCount: 2442689,
      //   viewCountDisplayText: "244만",
      // },
      // {
      //   videoId: "QorpJomX66o",
      //   title:
      //     "김장철 집에 많은 배추로 이렇게 해드세요. 달달한 알배추로 다이어트  맛있게하세요.",
      //   description:
      //     "#배추말이 #배추 #남은배추\n\n-재료\n물 200ml, 배추 12장, 대파 1대, 양파 1/4개\n청고추 1개, 파프리카 반개, 불린 표고버섯 3개\n진간장 1스푼, 식초 반스푼, 고춧가루 반스푼, 설탕 1티스푼\n식용유 1스푼, 들기름 1스푼, 다진마늘 반스푼, 계란 2개\n진간장 반스푼, 굴소스 1스푼, 후춧가루 약간, 두부 230g\n\n-레시피\n1. 냄비에 물 200ml만 넣고 배추 12장 5분 쪄주세요.\n2. 대파 1대, 양파 1/4개, 청고추 1개, 파프리카 반개, 불린 표고버섯 3개를 다져주세요.\n3. 진간장 1스푼, 식초 반스푼, 고춧가루 반스푼, 설탕 1티스푼 섞어서 소스를 만들어주세요.\n4. 배추를 건져서 물기를 짜주세요.\n5. 배추 줄기부분을 잘라서 채 썰어주세요.\n6. 식용유 1스푼, 들기름 1스푼 두르고 대파, 양파, 다진마늘 반스푼 볶아주세요.\n7. 자른 배추, 채소를 다 넣고 볶아주세요.\n8. 진간장 반스푼, 굴소스 1스푼, 후춧가루 약간 넣고 볶아주세요.\n9. 두부를 으깨서 같이 볶아주세요.\n10. 배추를 물기를 짜서 볶은 재료를 1스푼씩 떠서 배추를 말아주세요.\n11. 계란 2개 풀어서 배추말이를 묻혀서 구워주세요.",
      //   channelId: "UCkxvX8lNP_TkiLde378oHUg",
      //   channelTitle: "뚝딱Tooktak",
      //   thumbnail: {
      //     url: "https://i.ytimg.com/vi/QorpJomX66o/mqdefault.jpg",
      //     width: 320,
      //     height: 180,
      //   },
      //   publishedAt: "2023-11-24T00:00:19Z",
      //   publishedAtDisplayText: "2일 전",
      //   viewCount: 186344,
      //   viewCountDisplayText: "18만",
      // },
      // {
      //   videoId: "ZvW6yS3BNmI",
      //   title:
      //     "(SUB) 에스파 내에서 논란이라는 ‘나는 드라마 보고 따라한다’ vs ‘부끄럽다 안 한다’ 솔직히 따라해보지 않나? 차암나 / [문명특급 EP.319]",
      //   description:
      //     "“야 너도?” 각자 방에서 거울 보고 드라마 명대사 따라해본다는\n카리나 지젤 닝닝 그리고 혼자 외로운 윈터\n\n#에스파 #드라마 #Drama\n\n총괄 기획/하현종  진행/이은재  기획/이규희  구성/이은재 이규희 이세정  촬영/다올미디어 박상현  동시녹음/Z1P Sound  브랜드디자인/김하경  CG/박도이  담당 인턴/박혜원 정서영  행정/유연석 이수아  마케팅/홍솔비  자막/윤가은  프리뷰/강현주  외부 편집/김소담 김은영 최현진 홍민영 김유진  연출/홍민지 권나영  제작/SBS디지털뉴스랩 크리에이티브 사업부문\n\nCopyright Ⓒ SBS. All rights reserved. 무단 전재, 재배포 및 AI학습 이용 금지",
      //   channelId: "UCUyfkq9e9ZfPzxOW5WQ9rzQ",
      //   channelTitle: "문명특급 - MMTG",
      //   thumbnail: {
      //     url: "https://i.ytimg.com/vi/ZvW6yS3BNmI/mqdefault.jpg",
      //     width: 320,
      //     height: 180,
      //   },
      //   publishedAt: "2023-11-23T08:00:08Z",
      //   publishedAtDisplayText: "2일 전",
      //   viewCount: 734535,
      //   viewCountDisplayText: "73만",
      // },
    ],
    nextPageToken: "CAoQAA",
    totalResults: 200,
  },
};
