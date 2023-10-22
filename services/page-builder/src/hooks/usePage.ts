import { useRouter } from "next/router";

export const usePage = () => {
  const router = useRouter();

  const refresh = () => {
    router.replace(router.asPath);
  };

  return {
    refresh,
  }
};
