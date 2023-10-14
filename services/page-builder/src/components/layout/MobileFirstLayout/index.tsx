type Props = {
  children: React.ReactNode;
}

export const MobileFirstLayout = ({ children }: Props) => {
  return (
    <div className="w-screen h-full min-h-screen flex justify-center bg-color-white dark:bg-color-black text-color-black dark:text-color-white">
      <div className="max-w-xl w-full">{children}</div>
    </div>
  );
};
