import { Hamburger, Notification, Search } from "@/assets/icons";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import YTLogo from "../../src/assets/logos/yt-logo.png";
import { setMode, setSideCollapsed } from "../../redux/modeSlice";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducers";

import { IoNotificationsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import Cookies from "js-cookie";
import { activeUser } from "../../api/user/activeUser";
import { AppDispatch } from "../../redux/store";
import Link from "next/link";
// import Cookies from "js-cookie";

const Navbar = () => {
  const [search, setSearch] = React.useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { error, loading, user } = useSelector(
    (store: RootState) => store.activeUser
  );
  const darkmodeHandler = () => {
    dispatch(setMode());
  };

  useEffect(() => {
    if (Cookies.get("accessToken")) {
      console.log("got it");
      dispatch(activeUser());
    }
  }, []);
  return (
    <div className={` flex justify-between animation h-full py-2 p-3  `}>
      <div className=" flex items-center gap-x-4 ">
        <button onClick={() => dispatch(setSideCollapsed())}>
          <GiHamburgerMenu className="text-3xl" />
        </button>
        <Link href="/">
          <Image src={YTLogo} alt="logo" width={100} height={100} />
        </Link>
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
            className="p-2 flex-1 outline-none pl-5 bg-transparent"
            placeholder="Search"
            type="text"
          />
          <button className=" px-6">
            <Search className=" text-xl" />
          </button>
        </div>
      </div>
      <div className=" flex items-center gap-x-6 ">
        <button onClick={darkmodeHandler}>Dark mode</button>
        <IoNotificationsOutline className="text-2xl" />
        <div>
          {loading ? (
            "loading"
          ) : Object.keys(user).length === 0 ? (
            <div>Login</div>
          ) : (
            "user details"
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
