import { UseIntersectionObserverProps, useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { Spinner } from "../base/Spinner";
import * as s from "./style.css";

type Props = {
  children?: React.ReactNode;
} & UseIntersectionObserverProps;

export const VisibilityLoader = ({
  children = <Spinner />,
  ...observerProps
}: Props) => {
  const { ref } = useIntersectionObserver(observerProps);

  return (
    <div ref={ref} className={s.wrapper}>
      <div>{children}</div>
    </div>
  );
};
