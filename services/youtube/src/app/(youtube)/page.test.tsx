import { render, screen } from "@/src/shared/utils/test/testUtils";
import { describe, expect, it } from "vitest";
import Page from "./page";
import { GET_MOCK_VIDEOS_POPULAR_LIST } from "@/src/features/main/api/getVideosPopularList.mock";
import { server } from "@/src/shared/mocks/server";
import { HttpResponse, http } from "msw";
import { getVideosPopularListUrl } from "@/src/features/main/api/getVideosPopularList";

describe("YoutubeMainPage data fetching", () => {
  it("페이지 init시 불러올 데이터가 없다면 스켈레톤이 잘 노출 되는가", () => {
    render(<Page />);

    expect(screen.getByTestId("VideosPopularListSkeleton")).toBeInTheDocument();
  });

  it("페이지 init 이후 데이터가 불러와지면 스켈레톤이 사라지고 리스트 항목이 잘 보여지는가", async () => {
    server.use(
      http.get(getVideosPopularListUrl, () => {
        return HttpResponse.json({
          ...GET_MOCK_VIDEOS_POPULAR_LIST.success,
          nextPageToken: undefined,
        });
      }),
    );

    render(<Page />);

    await screen.findByText(
      GET_MOCK_VIDEOS_POPULAR_LIST.success.lists[0].title,
    );

    expect(
      screen.queryByTestId("VideosPopularListSkeleton"),
    ).not.toBeInTheDocument();
    expect(
      screen.getByText(GET_MOCK_VIDEOS_POPULAR_LIST.success.lists[0].title),
    ).toBeInTheDocument();
  });

  it("페이지 로드 이후 추가로 불러올 데이터가 있다면 VisibilityLoader가 잘 노출되는가?", async () => {
    server.use(
      http.get(getVideosPopularListUrl, () => {
        return HttpResponse.json({
          ...GET_MOCK_VIDEOS_POPULAR_LIST.success,
          nextPageToken: "nextPageToken",
        });
      }),
    );

    render(<Page />);

    await screen.findByText(
      GET_MOCK_VIDEOS_POPULAR_LIST.success.lists[0].title,
    );

    expect(screen.queryByTestId("VisibilityLoader")).toBeInTheDocument();
  });
});
