import React from "react";
import { video } from "../../redux/videoSlice";
import Image from "next/image";
import { toaster } from "../common/custom/toaster";

type Prop = {
  index: number;
  video: video;
};

const VideoTag = ({ video, index }: Prop) => {
  const oneditHandler = () => {
    toaster("error", "feature currently not available");
  };
  return (
    <tr className=" w-full even:bg-bg-secondary items-center py-3 text-center grid  grid-cols-12">
      <td className=" col-span-1  ">{index + 1}</td>
      <td className="col-span-2  flex justify-center ">
        <div className="  relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={`${process.env.BACKEND_URL}/thumbnails/${video.thumbnail}`}
            alt="thumbnail"
            fill
          />
        </div>
      </td>

      <td className=" overflow-hidden col-span-4">{video.title}</td>
      <td className=" col-span-1">{video.views}</td>
      <td className=" col-span-4 flex gap-x-2  items-center justify-center">
        <button
          onClick={oneditHandler}
          className=" bg-yellow-600 text-white rounded-3xl font-semibold py-1 px-4"
        >
          edit
        </button>
        <button className="bg-red-600 text-white rounded-3xl font-semibold py-1 px-4">
          delete
        </button>
      </td>
    </tr>
  );
};

export default VideoTag;
