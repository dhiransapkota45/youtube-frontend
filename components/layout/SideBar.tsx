import React from "react";
import { useSelector } from "react-redux";
import { routes } from "../../data/route";
import { RootState } from "../../redux/rootReducers";
import IconAndTitle from "../common/IconAndTitle";

const SideBar = () => {

  return (
    <div className=" p-2 ">
      {routes.map((route) => (
        <IconAndTitle key={route.path} {...route} />
      ))}
    </div>
  );
};

export default SideBar;
