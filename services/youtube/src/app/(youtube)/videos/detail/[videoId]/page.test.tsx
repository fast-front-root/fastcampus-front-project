import { mockRouter } from "@/src/shared/utils/test/mockNextNavigation";
import { describe, expect, it } from "vitest";

import MainPage from "../../../page";
import SearchPage from "../../../search/page";
import { fireEvent, render, screen } from "@/src/shared/utils/test/testUtils";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";
import { GET_MOCK_VIDEOS_POPULAR_LIST } from "@/src/features/main/api/getVideosPopularList.mock";
import { GET_MOCK_SEARCH_VIDEOS_LIST } from "@/src/features/search/api/getSearchVideosList.mock";

describe("비디오 상세 페이지 이동 테스트", () => {
  it("메인 페이지에서 비디오 클릭 시 상세 페이지로 잘 이동 되는지?", async () => {
    mockRouter.memoryRouter.setCurrentUrl("/");
    window.location = {
      ...window.location,
      search: "",
    };

    render(
      <MemoryRouterProvider>
        <MainPage />
      </MemoryRouterProvider>,
    );

    const title = GET_MOCK_VIDEOS_POPULAR_LIST.success.lists[0].title;
    await screen.findByText(title);

    const videoLink = screen.getByText(title).closest("a") as HTMLAnchorElement;

    fireEvent.click(videoLink);

    expect(mockRouter.memoryRouter).toMatchObject({
      pathname: `/videos/detail/${GET_MOCK_VIDEOS_POPULAR_LIST.success.lists[0].videoId}`,
    });
  });

  it("검색 페이지에서 비디오 클릭 시 상세 페이지로 잘 이동 되는지?", async () => {
    const defaultQuery = "?q=test&order=relevance";
    mockRouter.memoryRouter.setCurrentUrl(`/search${defaultQuery}`);
    window.location = {
      ...window.location,
      search: defaultQuery,
    };

    render(
      <MemoryRouterProvider>
        <SearchPage />
      </MemoryRouterProvider>,
    );

    const title = GET_MOCK_SEARCH_VIDEOS_LIST.success.lists[0].title;
    await screen.findByText(title);

    const videoLink = screen.getByText(title).closest("a") as HTMLAnchorElement;
    fireEvent.click(videoLink);

    expect(mockRouter.memoryRouter).toMatchObject({
      pathname: `/videos/detail/${GET_MOCK_SEARCH_VIDEOS_LIST.success.lists[0].videoId}`,
    });
  });
});
