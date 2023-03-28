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

const Yourvideos = () => {
  const [videos, setVideos] = React.useState<channelType>({} as channelType);
  const { user } = useSelector((store: RootState) => store.activeUser);

  console.log(videos);

  useEffect(() => {
    channeldetails(user.username, setVideos);
  }, [user]);

  return (
    <div className=" grid grid-cols-3 gap-x-6">
      {videos?.videos?.length === 0 ? (
        <div>
          <div>No videos of yours</div>
          <div>
            Create some form <Link className=" text-blue-500 underline" href="/createvideo"> here </Link>
          </div>
        </div>
      ) : (
        videos.videos?.map((video: channelVideoType) => {
          return (
            <div key={video._id}>
              <VideoCard video={video} />
            </div>
          );
        })
      )}
    </div>
  );
};

export default Yourvideos;
