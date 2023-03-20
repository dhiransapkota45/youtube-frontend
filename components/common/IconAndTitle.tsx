import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducers";
import { useRouter } from "next/router";

type Prop = {
  path: string;
  name: string;
  icon: JSX.Element;
};

const IconAndTitle = ({ path, icon, name }: Prop) => {
  const { sidebarCollapsed } = useSelector((state: RootState) => state.mode);
  const router = useRouter();

  return (
    <Link
      className={`${
        router.pathname === path && "bg-bg-secondary "
      } w-full my-2 rounded-md p-2 py-3  flex gap-x-4 bg-primary  hover:bg-bg-secondary `}
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
