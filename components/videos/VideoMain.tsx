import React from "react";
import { useRouter } from "next/router";
import VideoStream from "./interior/VideoStream";
import VideoDetails from "./interior/VideoDetails";

const VideoMain = () => {
  const router = useRouter();

  return (
    <div className=" grid lg:grid-cols-12">
      {/* video related content */}
      <div className=" col-span-9">
        <VideoStream />
        <VideoDetails />
      </div>

      {/* recommendations */}
      <div className=" col-span-3">other video recommendations</div>
    </div>
  );
};

export default VideoMain;
