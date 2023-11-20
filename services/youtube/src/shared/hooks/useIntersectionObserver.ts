import { useEffect } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

export type UseIntersectionObserverProps = {
  callback: () => void;
  intersectionOptions?: IntersectionOptions;
};

export const useIntersectionObserver = ({
  callback,
  intersectionOptions = { threshold: 0.3 },
}: UseIntersectionObserverProps) => {
  const { ref, inView } = useInView(intersectionOptions);

  useEffect(() => {
    if (inView) {
      callback();
    }
  }, [callback, inView])

  return { ref, inView }
};
