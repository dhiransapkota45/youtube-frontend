import React, { useEffect } from "react";
import { activeVideo } from "../../../api/videos/activeVideo";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { RootState } from "../../../redux/rootReducers";
import Image from "next/image";
import Cookies from "js-cookie";
import { toaster } from "../../common/custom/toaster";

import {
  AiFillDislike,
  AiFillLike,
  AiOutlineDislike,
  AiOutlineLike,
} from "react-icons/ai";




const VideoDetails = () => {
  const { loading, data, error } = useSelector(
    (store: RootState) => store.activeVideo
  );
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  
  const newdate = new Date(data.createdAt).toLocaleDateString();

  const onActionHandler = (action: string) => {
    if (!Cookies.get("accessToken")) {
      toaster("error", `Please login to ${action} this video`);
    } else {
      console.log("liked");
      toaster("success", "implement logic for like");
    }
  };

  const onsubmithandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onActionHandler("comment");
  };

  useEffect(() => {
    dispatch(activeVideo(router.query.videoid as string));
  }, [router.query.videoid]);

  return (
    <div>
      {/* {error && <div>{error}</div>} */}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className=" font-bold text-text-primary text-2xl my-2">
            {data.title}
          </div>

          <div className=" flex items-center">
            <div className=" w-12 h-12 mr-4 rounded-full overflow-hidden relative">
              <Image
                src={`${process.env.BACKEND_URL}/images/${data.uploader?.profile_pic}`}
                alt="uploader"
                fill
              />
            </div>

            <div className="flex flex-col mr-8 ">
              <div className=" font-semibold text-text-primary text-xl">
                {data.uploader?.fullname}
              </div>
              <div className=" text-text-secondary text-sm font-medium">
                {data.uploader?.subscribers} subscribers
              </div>
            </div>

            <button className=" bg-red-500 rounded-3xl font-semibold text-white px-6 py-2">
              Subscribe
            </button>

            <div className=" ml-8 bg-bg-secondary rounded-xl flex">
              <button
                onClick={() => onActionHandler("like")}
                className=" flex gap-3 py-2 px-4"
              >
                <AiOutlineLike className="text-2xl" />
                <span>{data.likes}</span>
              </button>

              <div className=" divide-x border border-bg-primary"></div>

              <button
                onClick={() => onActionHandler("dislike")}
                className=" flex gap-3 py-2 px-4"
              >
                <AiOutlineDislike className="text-2xl" />
                <span>{data.dislikes}</span>
              </button>
            </div>
          </div>

          <div className=" mt-3 text-sm font-semibold">
            <div className=" flex gap-x-5">
              <div>{data.views} views</div>
              <div>{newdate}</div>
            </div>

            <div className=" bg-gray-100 rounded-md p-4 my-4">
              {data.description}
            </div>
          </div>

          <form onSubmit={onsubmithandler}>
            <input
              type="text"
              name=""
              id=""
              placeholder="comment here"
              className="w-full border rounded p-2"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default VideoDetails;
