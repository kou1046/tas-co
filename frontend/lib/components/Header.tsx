import { ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className="mx-auto flex flex-col items-center  bg-gray-200 p-3 text-center sm:flex-row sm:justify-between">
        {children}
      </header>
    </>
  );
};

Header.Left = function headerLeft({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
};

Header.Right = function headerRight({ children }: { children: ReactNode }) {
  return <div className="items-center space-x-4">{children}</div>;
};

export default Header;
