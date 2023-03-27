import React, { useEffect } from "react";

import Image from "next/image";
import { channelType } from "../Channel";
type Prop = {
  channel: channelType;
};

const Banner = ({ channel }: Prop) => {
  return (
    <div>
      {/* for channer banner and profile picture */}
      <div className=" w-full h-56 bg-bg-secondary relative">
        <div className="  absolute -bottom-16 left-6 ">
          <div className="relative w-36 h-36 rounded-full border-2 border-bg-tertiary overflow-hidden">
            <Image
              src={`${process.env.BACKEND_URL}/images/${channel.profile_pic}`}
              alt="channel_banner"
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


{/* <div className=" absolute -bottom-16 flex flex-col leading-5 w-full items-center">
<div className=" font-semibold text-[20px] capitalize">
  {channel.fullname}
</div>
<div className=" text-gray-500 dark:text-gray-400">
  {channel.username}
</div>
<div className=" font-medium text-gray-600 dark:text-gray-400 ">
  {channel.subscribersLength} Subscribers
</div>
</div> */}