import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Layout = () => {
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
          <div>hello</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
