import React, { useEffect } from "react";
import Banner from "./interior/Banner";

import { channeldetails } from "../../api/user/user";
import { useRouter } from "next/router";
import VideoCard from "../hero/interior/VideoCard";

export type channelType = {
  _id: string;
  username: string;
  fullname: string;
  profile_pic: string;
  description: string;
  subscribersLength: number;
  subscriptionLength: number;
  subscriptions: any;
  subscribers: any;
  videos: {
    _id: string;
    title: string;
    likes: any;
    dislikes: any;
    views: number;
    thumbnail: string;
  };
};

const routes = ["vidoes", "subscriptions", "about"];

const Channel = () => {
  const [activeroute, setActiveroute] = React.useState<string>(routes[0]);
  const router = useRouter();
  const [channel, setChannel] = React.useState<channelType>({} as channelType);

  useEffect(() => {
    channeldetails(router.query.username, setChannel);
  }, [router.query.username]);
  return (
    <div>
      <div className=" ">
        <Banner channel={channel} />
      </div>

      <div className=" mt-20 flex gap-x-8 text-lg ml-3  font-medium capitalize">
        {routes.map((route) => {
          return (
            <div key={route} className="relative ">
              <div
                onClick={() => setActiveroute(route)}
                className={`  py-1 overflow-hidden relative cursor-pointer ${
                  activeroute === route
                    ? "dark:text-white text-black"
                    : "text-gray-500"
                } `}
              >
                {route}
                <div
                  className={`${
                    route === activeroute ? "w-full" : " w-0"
                  } absolute bottom-0 h-0.5 rounded-lg  bg-gray-400 duration-300`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {
        activeroute === "vidoes" && (
          <div>
            {/* <VideoCard video={} /> */}
          </div>
        )

      }
    </div>
  );
};

export default Channel;
