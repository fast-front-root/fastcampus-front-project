import { GET_MOCK_VIDEOS_DETAIL } from "@/src/shared/api/youtube/client/videoDetail/getVideosDetail.mock";
import { mockRouter } from "@/src/shared/utils/test/mockNextNavigation";
import { MemoryRouterProvider } from "next-router-mock/dist/MemoryRouterProvider";
import { describe, expect, it } from "vitest";
import { ShortsVideoDetail } from ".";
import { render, waitFor, screen, fireEvent } from "@/src/shared/utils/test/testUtils";
import { Suspense } from "react";
import { GET_MOCK_VIDEOS_DETAIL_COMMENT_LIST } from "@/src/shared/api/youtube/client/videoDetail/getVideosDetailCommentList.mock";

describe("ShortVideoDetail 컴포넌트 테스트", () => {
  it("videoType이 short가 아니면 video/detail 페이지로 이동하는가?", async () => {
    const videoId = GET_MOCK_VIDEOS_DETAIL.success.long.detail.videoId;

    // MSW에서는 url query params에 ?videoType=short를 붙이면 videoType이 short로 내려옴.
    mockRouter.memoryRouter.setCurrentUrl(`/videos/shorts/${videoId}`);
    window.location = {
      ...window.location,
      search: "",
    };

    render(
      <MemoryRouterProvider>
        <Suspense>
          <ShortsVideoDetail videoId={videoId} />
        </Suspense>
      </MemoryRouterProvider>,
    );

    await waitFor(() => {
      expect(mockRouter.memoryRouter).toMatchObject({
        pathname: `/videos/detail/${videoId}`,
      });
    });
  });

  it("videoType이 short이면 shorts URL이 그대로 유지 되는지?", async () => {
    const videoId = GET_MOCK_VIDEOS_DETAIL.success.long.detail.videoId;

    // MSW에서는 url query params에 ?videoType=short를 붙이면 videoType이 short로 내려옴.
    mockRouter.memoryRouter.setCurrentUrl(`/videos/shorts/${videoId}`);
    window.location = {
      ...window.location,
      search: "?videoType=short",
    };

    render(
      <MemoryRouterProvider>
        <Suspense>
          <ShortsVideoDetail videoId={videoId} />
        </Suspense>
      </MemoryRouterProvider>,
    );

    await waitFor(() => {
      expect(mockRouter.memoryRouter).toMatchObject({
        pathname: `/videos/shorts/${videoId}`,
      });
    });
  });


  it("video의 댓글 클릭 시 댓글 내용이 잘 보여지는가?", async () => {
    const videoId = GET_MOCK_VIDEOS_DETAIL.success.long.detail.videoId;

    // MSW에서는 url query params에 ?videoType=short를 붙이면 videoType이 short로 내려옴.
    mockRouter.memoryRouter.setCurrentUrl(`/videos/shorts/${videoId}`);
    window.location = {
      ...window.location,
      search: "?videoType=short",
    };

    render(
      <MemoryRouterProvider>
        <Suspense>
          <ShortsVideoDetail videoId={videoId} />
        </Suspense>
      </MemoryRouterProvider>,
    );

    const commentButton = await screen.findAllByText("댓글");
    fireEvent.click(commentButton[0]);

    const comment = GET_MOCK_VIDEOS_DETAIL_COMMENT_LIST.success.lists[0].textDisplay;
    await screen.findByText(comment);
    expect(screen.getByText(comment)).toBeInTheDocument();
  });
});
