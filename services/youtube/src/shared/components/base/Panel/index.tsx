import clsx from "clsx";
import * as s from "./style.css";

type Props = React.HTMLAttributes<HTMLDivElement>;

export const Panel = (props: Props) => (
  <div {...props} className={clsx([props.className, s.wrapper])} />
);
