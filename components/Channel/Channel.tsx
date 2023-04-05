import React, { useEffect } from "react";
import Banner from "./interior/Banner";

import { channeldetails, channelDetails2 } from "../../api/user/user";
import { useRouter } from "next/router";
import ChannelVideoCard from "./interior/ChannelVideoCard";

export type channelVideoType = {
  _id: string;
  title: string;
  likes: any;
  dislikes: any;
  views: number;
  thumbnail: string;
};

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
  videos: channelVideoType[];
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

      <div className=" mt-20 mb-5 flex gap-x-8 text-lg ml-3  font-medium capitalize">
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
                  } absolute bottom-0 h-0.5 rounded-lg  bg-gray-400 `}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {activeroute === "vidoes" && (
        <div className=" grid grid-cols-3 gap-4 my-2">
          {channel.videos?.map((video) => {
            return (
              <div key={video._id}>
                <ChannelVideoCard video={video} />
              </div>
            );
          })}
        </div>
      )}

      {activeroute === "subscriptions" && (
        <div>
          {channel.subscriptions.length === 0 ? (
            <div>No subscription</div>
          ) : (
            <div></div>
          )}
        </div>
      )}

      {activeroute === "about" && (
        <div>
          <div className="text-lg font-medium">About</div>
          <div className="text-gray-800 font-semibold dark:text-gray-400">
            Full Name:
            <span className=" text-gray-700 font-medium capitalize ml-3 ">
              {channel.fullname}
            </span>
          </div>
          <div className="text-gray-800 font-semibold dark:text-gray-400">
            Username:
            <span className=" text-gray-700 font-medium capitalize ml-3 ">
              {channel.username}
            </span>
          </div>
          <div className="text-lg font-medium mt-6">Description</div>

          <div className="text-gray-500 dark:text-gray-400">
            {channel.description}
          </div>

          <div className="text-lg font-medium mt-6">Social Handles</div>
          <div className="text-gray-500">No social handles provided</div>
        </div>
      )}
    </div>
  );
};

export default Channel;
