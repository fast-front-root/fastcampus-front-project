import { HttpHandler, HttpResponse, http } from "msw";
import { getSearchVideosListURL } from "./getSearchVideosList";

export const getMockSearchVideosList: HttpHandler = http.get(getSearchVideosListURL, () => {
  return HttpResponse.json(GET_MOCK_SEARCH_VIDEOS_LIST.success);
});

export const GET_MOCK_SEARCH_VIDEOS_LIST = {
  success: {
    lists: [
      {
        videoId: "B8CywnDtivY",
        title:
          "(최초공개) 뉴욕 최대 아울렛으로 데이트 간 권상우 손태영의 쇼핑 클라스",
        description:
          "안녕하세요 손태영입니다:) 오늘은 남편이랑 아울렛가서 쇼핑하면서 데이트 했어요~^^ 그리고 남편의 최애 햄버거집인 우드버리 ...",
        channelId: "UCsNnS3gNL32tICAhgGs2JSg",
        channelTitle: "Mrs.뉴저지 손태영",
        thumbnail: {
          url: "https://i.ytimg.com/vi/B8CywnDtivY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-12-01T10:30:06Z",
        publishedAtDisplayText: "1일 전",
      },
      {
        videoId: "86RDHHLMNew",
        title:
          "[뉴욕 일상 브이로그] 🎀 크리스마스 오너먼트 쇼핑 &amp; 트리 꾸미기 • 눈돌아가는 우드버리아울렛 연말세일 - 마르지엘라, 로에베, 디올, 셀린..🛍️ • 뉴욕 캠핑 autocamp",
        description:
          "아닛.. 12월이라니...☃️ (감기 조심하세요!) 여러분 저 인스타그램 만들었어요 @tephnewyork 앞으로 인스타로 실시간 업로드 더 ...",
        channelId: "UCF2nA0fq9ouJEnGN9EqMULg",
        channelTitle: "teph in ny 테프인뉴욕",
        thumbnail: {
          url: "https://i.ytimg.com/vi/86RDHHLMNew/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-12-01T22:46:41Z",
        publishedAtDisplayText: "13시간 전",
      },
      {
        videoId: "V-ap0ZQZFOE",
        title:
          "뉴욕 연말느낌 막스마라 코트 보고 오너먼트 언박싱 크리스마스 트리 점등식 삭스 라이팅쇼 일상브이로그",
        description:
          "안녕하세요☺️   오늘 영상에서는 지난번에 버그도프 백화점에서 구매한 크리스마스 트리 오너먼트를 언박싱하고, 막스마라 매장에 ...",
        channelId: "UCW3TCP1GmoC-uE-9v1YFhGQ",
        channelTitle: "올리비아 뷰욬 Olivia Viewyork",
        thumbnail: {
          url: "https://i.ytimg.com/vi/V-ap0ZQZFOE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-12-01T10:02:00Z",
        publishedAtDisplayText: "1일 전",
      },
      {
        videoId: "hkmefyMPNFo",
        title:
          "🇺🇸 #6 뉴욕 여행하며 직접 경험한 미친 물가.. 그래도 행복한 낭만의 뉴욕여행기",
        description:
          "본 영상은 유료광고를 포함하고 있습니다. (     제작 지원: 미국관광청 및 트리플) [트리플] 미국 여행 필수 투어 티켓 최대 39% 할인 ...",
        channelId: "UCugz3-UlkX2P77PtK1Ju0RA",
        channelTitle: "쏘이Soy The World",
        thumbnail: {
          url: "https://i.ytimg.com/vi/hkmefyMPNFo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-10-10T11:00:26Z",
        publishedAtDisplayText: "1개월 전",
      },
      {
        videoId: "KFqS-20zJLQ",
        title:
          "[sub] EP.6 | 뉴욕 여행 막바지! 정유미의 쇼핑쇼핑부터 부동산 투어까지 l 🗽이서진의 뉴욕뉴욕2",
        description:
          "이제부터 이 프로그램은 유미 겁니다 (아님) #채널십오야 #이서진의뉴욕뉴욕2 #이서진 #유료광고포함.",
        channelId: "UCQ2O-iftmnlfrBuNsUUTofQ",
        channelTitle: "채널십오야",
        thumbnail: {
          url: "https://i.ytimg.com/vi/KFqS-20zJLQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-10-13T09:00:11Z",
        publishedAtDisplayText: "1개월 전",
      },
      {
        videoId: "FWKA9BgfvNs",
        title:
          "[sub] EP.1 | 4년 만에 더 다운그레이드(?) 되어 돌아왔습니다 l 🗽이서진의 뉴욕뉴욕2",
        description:
          "대단히 반갑습니다 상당히 고맙습니다 4년 전 대작 유튜브로 돌아왔습니다 이번엔 더 나불나불 대보려고요 그래서 우리가 이번에 어디 ...",
        channelId: "UCQ2O-iftmnlfrBuNsUUTofQ",
        channelTitle: "채널십오야",
        thumbnail: {
          url: "https://i.ytimg.com/vi/FWKA9BgfvNs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-09-08T09:00:11Z",
        publishedAtDisplayText: "2개월 전",
      },
      {
        videoId: "gvRvYyYbFj0",
        title:
          "[sub] EP.7 | 뇩뇩 마지막 만찬과 오타니와 함께한 메츠 경기 l 🗽이서진의 뉴욕뉴욕2",
        description:
          "최애 영접 유미, 슈퍼스타 영석, 그리고 서진이는 서운해 #채널십오야 #이서진의뉴욕뉴욕2 #이서진 #유료광고포함.",
        channelId: "UCQ2O-iftmnlfrBuNsUUTofQ",
        channelTitle: "채널십오야",
        thumbnail: {
          url: "https://i.ytimg.com/vi/gvRvYyYbFj0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-10-20T09:00:28Z",
        publishedAtDisplayText: "1개월 전",
      },
      {
        videoId: "EsoPT3EJMPc",
        title:
          "&#39;한국 부동산 와장창 깨진다&#39; 미국에서 시작된 경고 (뉴욕생명자산운용 윤제성 CIO)",
        description:
          "월가에서 가장 성공한 한국인 윤제성 CIO님이 들려주실 이야기 ✔️ 전세계가 경고한 경기침체, 현재 상황은? ✔️ 미국 금리가 올라 ...",
        channelId: "UCDSj40X9FFUAnx1nv7gQhcA",
        channelTitle: "월급쟁이부자들TV",
        thumbnail: {
          url: "https://i.ytimg.com/vi/EsoPT3EJMPc/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-12-01T03:05:00Z",
        publishedAtDisplayText: "1일 전",
      },
      {
        videoId: "g5MBp04Nu0M",
        title:
          "뉴욕의 한 지하실로 갈 곳 없는 한인 노숙자들이 모여들었다. &#39;길위의 뉴요커&#39;가 된 그들의 사연은? (KBS 20180517 방송)",
        description:
          "뉴욕의 홈리스로 전락한 사람들의 삶 뉴욕, 6만여 명의 홈리스 중 150여 명이 한국인이다. 70,80년대 태평양을 건넜던 젊은이들.",
        channelId: "UC4LW3sOslC14Vn5bcoNUBkg",
        channelTitle: "KBS 다큐",
        thumbnail: {
          url: "https://i.ytimg.com/vi/g5MBp04Nu0M/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-11-03T11:00:12Z",
        publishedAtDisplayText: "0개월 전",
      },
      {
        videoId: "uIIvAkrz664",
        title:
          "[sub] EP.3 | 드디어 서지니형의 생가 탐방 in 브루클린 l 🗽이서진의 뉴욕뉴욕2",
        description:
          "여러분은 지금 브루클린 출신 무비스타 '이서진' 님의 생가를 보고 계십니다 #채널십오야 #이서진의뉴욕뉴욕2 #이서진 #유료광고 ...",
        channelId: "UCQ2O-iftmnlfrBuNsUUTofQ",
        channelTitle: "채널십오야",
        thumbnail: {
          url: "https://i.ytimg.com/vi/uIIvAkrz664/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-09-22T09:00:49Z",
        publishedAtDisplayText: "2개월 전",
      },
      {
        videoId: "le1QF3uoQNg",
        title: "Theme From New York, New York (2008 Remastered)",
        description:
          "Provided to YouTube by Universal Music Group Theme From New York, New York (2008 Remastered) · Frank Sinatra Nothing But ...",
        channelId: "UC1zsfp3OD8qWQ0HfLbz2TXg",
        channelTitle: "Frank Sinatra - Topic",
        thumbnail: {
          url: "https://i.ytimg.com/vi/le1QF3uoQNg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2018-12-12T11:31:53Z",
        publishedAtDisplayText: "4년 전",
      },
      {
        videoId: "o85yUsOGU-c",
        title:
          "[sub] EP.5 | 청춘 로맨스 그 잡채 1박 2일 in 몬탁  l 🗽이서진의 뉴욕뉴욕2",
        description:
          "어이 젊은 친구(?) 몬탁 현지인처럼 행동해 #채널십오야 #이서진의뉴욕뉴욕2 #이서진 #유료광고포함.",
        channelId: "UCQ2O-iftmnlfrBuNsUUTofQ",
        channelTitle: "채널십오야",
        thumbnail: {
          url: "https://i.ytimg.com/vi/o85yUsOGU-c/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-10-06T09:00:37Z",
        publishedAtDisplayText: "1개월 전",
      },
      {
        videoId: "xOCQEJ1ZNrw",
        title: "New York City",
        description:
          "Provided to YouTube by Entertainment One Distribution US New York City · The Peter Malick Group New York City ℗ 2000 Koch ...",
        channelId: "UCxRuL2yOu2ydTJNZuYdU0qg",
        channelTitle: "Norah Jones - Topic",
        thumbnail: {
          url: "https://i.ytimg.com/vi/xOCQEJ1ZNrw/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2014-11-08T17:15:31Z",
        publishedAtDisplayText: "9년 전",
      },
      {
        videoId: "Fg9O_17A16w",
        title:
          "[sub] EP.2 | 둘째 날 아침 7시부터 반수면 상태로 뉴욕의 김밥천국 방문 l 🗽이서진의 뉴욕뉴욕2",
        description:
          "둘째 날 아침 7시부터 뉴욕 김천에서 잘 먹은 후기. 중간에 출연자가 사라져도 놀라지 마세요. #채널십오야 #이서진의뉴욕뉴욕2 ...",
        channelId: "UCQ2O-iftmnlfrBuNsUUTofQ",
        channelTitle: "채널십오야",
        thumbnail: {
          url: "https://i.ytimg.com/vi/Fg9O_17A16w/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-09-15T09:00:10Z",
        publishedAtDisplayText: "2개월 전",
      },
      {
        videoId: "KFU7DddUDCU",
        title:
          "[sub] EP.4 | 수상할정도로 70년대 영화에 강한 이서진의 무비무비 l 🗽이서진의 뉴욕뉴욕2",
        description:
          "대부 시리즈와 어벤져스 그 사이 어딘가의 합의점을 찾아서… 출발! 이서진 여행 렛츠고 #채널십오야 #이서진의뉴욕뉴욕2 #이서진 ...",
        channelId: "UCQ2O-iftmnlfrBuNsUUTofQ",
        channelTitle: "채널십오야",
        thumbnail: {
          url: "https://i.ytimg.com/vi/KFU7DddUDCU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-09-29T09:00:13Z",
        publishedAtDisplayText: "2개월 전",
      },
      {
        videoId: "V33NQNIrtm0",
        title: "sub)VLOG 🇺🇸뉴욕은 처음이라 너무 떨려…! 뉴욕지하철,베이글,도적",
        description:
          "그래쓰 #NEWYORK GRASS in NEWYORK  ep.1 *이번 에피소드는 트리플과 미국 관광청의 간접광고가 포함되어 있습니다. 흐흐흐.",
        channelId: "UClZYXrFXxFGu-mif_fGrIhQ",
        channelTitle: "It's me GRASS 그래쓰",
        thumbnail: {
          url: "https://i.ytimg.com/vi/V33NQNIrtm0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-10-03T12:21:58Z",
        publishedAtDisplayText: "1개월 전",
      },
      {
        videoId: "0sG0AaPYuuI",
        title: "뉴욕은 어떤 도시일까?",
        description:
          "미국 #뉴욕 #뉴욕여행 #미국여행 #건축 뉴욕 타임스 스퀘어가 세계의 광장이 된 이유 : 미국 뉴욕 여행 EP1 00:00 건축가의 미국 여행 ...",
        channelId: "UC7uDyFIqExDnfXAIZqumFrQ",
        channelTitle: "셜록현준",
        thumbnail: {
          url: "https://i.ytimg.com/vi/0sG0AaPYuuI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-03-28T12:57:48Z",
        publishedAtDisplayText: "8개월 전",
      },
      {
        videoId: "onweidjXIRs",
        title:
          "[#걸어서세계속으로 Full📺] 초고층 빌딩 사이 자연이 숨어있는 콘크리트 정글, 미국 뉴욕 겨울여행 Trip to New york (KBS_20170218)",
        description:
          "[518회] 콘크리트 정글, 뉴욕_편집본 미국 최대의 도시, 뉴욕(New York)! 그 속에서 피어나는 예술과 문화, 그리고 도시의 낭만이 있는 ...",
        channelId: "UCFw4M1BJYYdN1YtS8SzlDzg",
        channelTitle: "KBS여행 걸어서 세계속으로",
        thumbnail: {
          url: "https://i.ytimg.com/vi/onweidjXIRs/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2021-12-01T09:00:09Z",
        publishedAtDisplayText: "2년 전",
      },
      {
        videoId: "vk6014HuxcE",
        title: "JAY-Z - Empire State Of Mind ft. Alicia Keys",
        description:
          "Music video by JAY-Z performing Empire State Of Mind. © 2014 S. Carter Enterprises, LLC., Distributed by Roc Nation Records, ...",
        channelId: "UC_Bf08Y-3m6CMAvTms3EkKg",
        channelTitle: "JayZVEVO",
        thumbnail: {
          url: "https://i.ytimg.com/vi/vk6014HuxcE/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2021-12-04T05:00:17Z",
        publishedAtDisplayText: "1년 전",
      },
      {
        videoId: "XNaQkutOMTk",
        title:
          "🇺🇸11월 겨울의 시작, 일주일간 뉴욕에서 입은 것과 먹은 것들🧣🧤ㅣ갑자기 길어진 여친 머리,, 연하 일벙 남친의 반응은?ㅋ (ft.깜짝카메라 성공?)ㅣ미국슈퍼 장보기ㅣ레코드샵",
        description:
          "이 영상은 온앤온의 유료광고를 포함합니다* [W컨셉] 토모토모 with 온앤온 23Winter 기획전 URL ...",
        channelId: "UCoQy2wS5aiKCk-rUXiLS-vQ",
        channelTitle: "토모토모TomoTomo",
        thumbnail: {
          url: "https://i.ytimg.com/vi/XNaQkutOMTk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        publishedAt: "2023-11-12T11:54:45Z",
        publishedAtDisplayText: "2주 전",
      },
    ],
    nextPageToken: "CBQQAA",
    totalResults: 1000000,
  },
};
