import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducers";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  const { mode } = useSelector((state: RootState) => state.mode);
  
  return (
    <div className=" h-screen flex flex-col">
      <div className="sticky top-0">
        <Navbar />
      </div>

      <div className=" flex-1 flex overflow-hidden bg-green-500 h-full ">
        <div className=" basis-80 bg-red-400 overflow-auto">
          <SideBar />
        </div>

        <div className=" flex-1 overflow-auto ">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
