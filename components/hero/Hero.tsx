import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducers";
import Loader from "./interior/Loader";
import VideoCard from "./interior/VideoCard";

const Hero = () => {
  const { loading, error, videos } = useSelector(
    (store: RootState) => store.videos
  );
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {loading
          ? arr.map((item) => <Loader key={item} />)
          : videos.map((video) => {
              return <VideoCard key={video._id} video={video} />;
            })}
      </div>
    </>
  );
};

export default Hero;

{
  /* <div className=" border-2 rounded-md p-4 max-w-sm w-full mx-auto">
<div className="animate-pulse flex space-x-4">
  <div className="rounded-full bg-slate-700 h-10 w-10"></div>
  <div className="flex-1 space-y-6 py-1">
    <div className="h-2 bg-slate-700 rounded"></div>
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-4">
        <div className="h-2 bg-slate-700 rounded col-span-2"></div>
        <div className="h-2 bg-slate-700 rounded col-span-1"></div>
      </div>
      <div className="h-2 bg-slate-700 rounded"></div>
    </div>
  </div>
</div>
</div> */
}
