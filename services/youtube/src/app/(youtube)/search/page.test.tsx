import { mockRouter } from "@/src/shared/utils/test/mockNextNavigation";
import { render, screen, fireEvent } from "@/src/shared/utils/test/testUtils";
import { describe, it, beforeEach, expect } from "vitest";
import Layout from "@/src/app/(youtube)/layout";
import Page from "./page";

describe("검색 페이지 통합 테스트", () => {
  beforeEach(() => {
    const defaultQuery = "?q=test&order=relevance";

    mockRouter.memoryRouter.setCurrentUrl(`/search${defaultQuery}`);

    window.location = {
      ...window.location,
      search: defaultQuery,
    };
  });

  it("검색창에 '뉴욕'을 입력하고 Submit 시 URL에 q 쿼리가 업데이트 되는가", async () => {
    render(
      <Layout>
        <Page />
      </Layout>,
    );

    expect(mockRouter.memoryRouter).toMatchObject({
      query: {
        q: "test",
        order: "relevance",
      },
    });

    const searchKeyword = "뉴욕";

    const input = screen.getByPlaceholderText("검색");
    fireEvent.change(input, { target: { value: searchKeyword } });

    const formButton = await screen.getByText("🔍");
    fireEvent.click(formButton);

    expect(mockRouter.memoryRouter).toMatchObject({
      query: {
        q: searchKeyword,
        order: "relevance",
      },
    });
  });

  it("검색 필터 클릭 시 URL에 order가 업데이트 되는가", async () => {
    render(
      <Layout>
        <Page />
      </Layout>,
    );

    expect(mockRouter.memoryRouter).toMatchObject({
      query: {
        q: "test",
        order: "relevance",
      },
    });

    const filterButton = screen.getByText("조회수 높은 순");
    fireEvent.click(filterButton);

    expect(mockRouter.memoryRouter).toMatchObject({
      query: {
        q: "test",
        order: "viewCount",
      },
    });
  });
});
