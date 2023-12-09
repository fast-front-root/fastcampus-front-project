import * as mockRouter from "next-router-mock";

const useRouter = mockRouter.useRouter;

export const MockNextNavigation = {
  ...mockRouter,
  notFound: vi.fn(),
  redirect: vi.fn().mockImplementation((url: string) => {
    mockRouter.memoryRouter.setCurrentUrl(url);
  }),
  usePathname: () => {
    const router = useRouter();
    return router.asPath;
  },
  useSearchParams: () => {
    const router = useRouter();
    const path = router.query;
    return new URLSearchParams(path as any);
  },
};

export { mockRouter };
