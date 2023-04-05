import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { channeldetails } from "../../api/user/user";
import { RootState } from "../../redux/rootReducers";

import {
  channelType,
  channelVideoType,
} from "../../components/Channel/Channel";

import Link from "next/link";
import VideoTag from "../../components/yourvideos/VideoTag";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

const Yourvideos = () => {
  const { user } = useSelector((store: RootState) => store.activeUser);
  // const { channelDetails } = useSelector((store: RootState) => store.channel);

  // const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   dispatch(channelDetails2(user.username));
  // }, [user]);

  return (
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

          {user?.videos?.length === 0 ? (
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
              {user?.videos?.map((video: channelVideoType, index: number) => {
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
