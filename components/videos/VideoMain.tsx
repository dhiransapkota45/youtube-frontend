import React from "react";
import { useRouter } from "next/router";
import VideoStream from "./interior/VideoStream";
import VideoDetails from "./interior/VideoDetails";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducers";
import VideoCard from "../hero/interior/VideoCard";

const VideoMain = () => {
  const router = useRouter();
  const { videos } = useSelector((store: RootState) => store.videos);

  return (
    <div className=" grid lg:grid-cols-12">
      {/* video related content */}
      <div className=" col-span-9">
        <VideoStream />
        <VideoDetails />
      </div>

      {/* recommendations */}
      <div className=" col-span-3  ">
        <div className="mx-4 sticky top-0 grid grid-cols-1 gap-y-6">
          {videos.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoMain;
