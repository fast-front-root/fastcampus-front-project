type Props = {
  height?: number;
};

export const Spacing = ({ height = 16 }: Props) => (
  <div className="w-full" style={{ height: `${height}px` }} />
);
