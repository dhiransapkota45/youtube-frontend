import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { channeldetails } from "../../api/user/user";
import { RootState } from "../../redux/rootReducers";

import {
  channelType,
  channelVideoType,
} from "../../components/Channel/Channel";

import VideoCard from "../../components/hero/interior/VideoCard";
import Link from "next/link";
import VideoTag from "../../components/yourvideos/VideoTag";

const Yourvideos = () => {
  const [videos, setVideos] = React.useState<channelType>({} as channelType);
  const { user } = useSelector((store: RootState) => store.activeUser);

  console.log(videos);

  useEffect(() => {
    channeldetails(user.username, setVideos);
  }, [user]);

  return (
    // <div className=" grid grid-cols-3 gap-x-6">
    //   {videos?.videos?.length === 0 ? (
    //     <div>
    //       <div>No videos of yours</div>
    //       <div>
    //         Create some form <Link className=" text-blue-500 underline" href="/createvideo"> here </Link>
    //       </div>
    //     </div>
    //   ) : (
    //     videos.videos?.map((video: channelVideoType) => {
    //       return (
    //         <div key={video._id}>
    //           <VideoCard video={video} />
    //         </div>
    //       );
    //     })
    //   )}
    // </div>
    <>
      <div className=" w-full overflow-x-auto">
        <table className="  min-w-max border  ">
          <thead className="  ">
            <tr className=" grid grid-cols-12 items-center bg-bg-tertiary">
              <th className="  col-span-1 p-4">S. No.</th>
              <th className="col-span-2 ">Thumbnail</th>
              <th className=" col-span-4 ">Video Title</th>
              <th className=" col-span-1 ">Views</th>
              <th className=" col-span-4 ">Actions</th>
            </tr>
          </thead>

          {videos?.videos?.length === 0 ? (
            <div>
              <div>No videos of yours</div>
              <div>
                Create some form
                <Link className=" text-blue-500 underline" href="/createvideo">
                  here
                </Link>
              </div>
            </div>
          ) : (
            <tbody>
              {videos.videos?.map((video: channelVideoType, index) => {
                return <VideoTag key={video._id} index={index} video={video} />;
              })}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default Yourvideos;

{
  /* <tbody className=" w-full">
<tbody className=" bg-red-200 w-full"> */
}
