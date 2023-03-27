import Image from "next/image";
import Link from "next/link";
import React from "react";
import { channelVideoType } from "../Channel";

type Prop = {
  video: channelVideoType;
};

const ChannelVideoCard = ({ video }: Prop) => {
  console.log(`${process.env.BACKEND_URL}/thumbnails/${video.thumbnail}`);

  return (
    <div className=" shadow">
      <Link href={`/video/${video._id}`}>
        <div className=" relative w-full h-52">
          <Image
            src={`${process.env.BACKEND_URL}/thumbnails/${video.thumbnail}`}
            alt="video_thumbnail"
            fill
          />
        </div>
        <div className=" p-3">
          <div className=" font-semibold text-[18px]  mt-1  leading-5">
            {video.title}
          </div>
          <div className=" text-[14px] text-gray-500 font-medium  leading-5">
            {video.views} views
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ChannelVideoCard;
