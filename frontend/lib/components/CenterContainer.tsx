import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const CenterContainer = ({ children }: Props) => {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">{children}</div>;
    </>
  );
};

export default CenterContainer;
