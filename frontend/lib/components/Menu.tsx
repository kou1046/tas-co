import { ReactNode } from "react";

const Menu = ({ children }: { children: ReactNode }) => {
  return <div className="grid h-full w-full grid-cols-10">{children}</div>;
};

Menu.Left = function left({ children }: { children: ReactNode }) {
  return <div className="col-span-3 flex flex-col items-center shadow-xl">{children}</div>;
};

Menu.Content = function content({ children, onClick }: { children: ReactNode; onClick?: (e: any) => void }) {
  return (
    <div
      onClick={onClick}
      className="w-full cursor-pointer border-b-[1px] py-5 text-center transition hover:bg-gray-100"
    >
      {children}
    </div>
  );
};

Menu.Right = function right({ children }: { children: ReactNode }) {
  return <div className="col-span-7 overflow-auto">{children}</div>;
};

export default Menu;
