import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducers";

type Prop = {
  path: string;
  name: string;
  icon: JSX.Element;
};

const IconAndTitle = ({ path, icon, name }: Prop) => {
  const { sidebarCollapsed } = useSelector((state: RootState) => state.mode);

  return (
    <Link
      className=" w-full my-2 rounded-md p-2 py-3  animation flex gap-x-4 bg-primary dark:bg-darkPrimary text-darkPrimary dark:text-tertiary hover:bg-secondary dark:hover:bg-darkSecondary hover:text-darkSecondary dark:hover:text-secondary"
      href={path}
    >
      <div className=" text-2xl">{icon}</div>
      <div
        className={`capitalize font-bold  ${
          sidebarCollapsed ? "hidden" : "block"
        } `}
      >
        {name}
      </div>
    </Link>
  );
};

export default IconAndTitle;
