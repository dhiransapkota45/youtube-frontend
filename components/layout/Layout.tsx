import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducers";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};
const Layout = ({ children }: Props) => {
  const { mode, sidebarCollapsed } = useSelector(
    (state: RootState) => state.mode
  );

  const router = useRouter();
  return (
    <div
      className={`h-screen flex flex-col  ${
        mode && "dark"
      } bg-bg-primary text-text-primary duration-300 `}
    >
      {!router.pathname.includes("/login") && (
        <div className="sticky top-0">
          <Navbar />
        </div>
      )}

      <div className=" flex-1 flex overflow-hidden  h-full ">
        {!(
          router.pathname.includes("/video") ||
          router.pathname.includes("/login")
        ) && (
          <div
            className={`bg-primary  ${
              sidebarCollapsed ? "basis-16" : "basis-80"
            }  overflow-auto`}
          >
            <SideBar />
          </div>
        )}

        <div className=" flex-1 overflow-auto duration-300 p-4 ">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
