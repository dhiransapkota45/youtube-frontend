import { Hamburger, Notification, Search } from "@/assets/icons";
import React from "react";
import Image from "next/image";
import YTLogo from "../../src/assets/logos/yt-logo.png";

const Navbar = () => {
  const [search, setSearch] = React.useState<boolean>(false);
  return (
    <div className=" flex justify-between bg-green-300 h-full py-2 ">
      <div className=" flex items-center gap-x-4 ">
        <Hamburger className="text-3xl" />
        <Image src={YTLogo} alt="logo" width={100} height={100} />
      </div>

      <div className=" flex items-center ">
        <div
          className={`border flex  items-center w-96 rounded-3xl overflow-hidden ${
            search && "border-blue-500"
          }`}
        >
          <input
            onFocus={(e) => {
              setSearch(true);
            }}
            onBlur={(e) => {
              setSearch(false);
            }}
            className="p-2 flex-1 outline-none pl-5 bg-transparent text-black"
            placeholder="Search"
            type="text"
          />
          <button className=" px-6">
            <Search className=" text-xl" />
          </button>
        </div>
      </div>
      <div className=" flex items-center">
        <Notification />
        <div>profile</div>
      </div>
    </div>
  );
};

export default Navbar;
  