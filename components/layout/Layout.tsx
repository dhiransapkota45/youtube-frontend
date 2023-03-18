import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducers";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  const { mode, sidebarCollapsed } = useSelector(
    (state: RootState) => state.mode
  );
  return (
    <div className={`h-screen flex flex-col  ${mode && "dark"}`}>
      <div className="sticky top-0">
        <Navbar />
      </div>

      <div className=" flex-1 flex overflow-hidden  h-full ">
        <div
          className={`bg-primary animation dark:bg-darkPrimary ${
            sidebarCollapsed ? "basis-16" : "basis-80"
          }  overflow-auto`}
        >
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
