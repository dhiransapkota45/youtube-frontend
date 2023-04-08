import Image from "next/image";
import React, { useState } from "react";
import { video } from "../../../redux/videoSlice";
import { SlOptionsVertical } from "react-icons/sl";
import Modal from "../../common/Modal";
import { useRouter } from "next/router";

type Prop = {
  video: video;
  index: number | string;
  openModal: null | number | string;
  handleModal: (index: number | string) => void;
};

//yesma profile ma thichda prpofule ma janaparxa

// need to show date also in the VideoCard
const VideoCard = ({ video, index, handleModal, openModal }: Prop) => {
  const router = useRouter();
  const { _id, thumbnail, title, uploader, createdAt, views } = video;

  return (
    <div
      onClick={() => router.push(`/video/${_id}`)}
      className=" hover:scale-105 hover:shadow-2xl hover:z-10 rounded-lg shadow cursor-pointer "
    >
      <div className="w-full h-60 relative ">
        <Image
          src={`${process.env.BACKEND_URL}/thumbnails/${thumbnail}`}
          alt="thumbnail"
          fill
        />
      </div>
      <div className=" flex px-2 my-2 relative">
        {uploader && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/channel/${uploader?.username}`);
            }}
            className=" w-12 h-12 rounded-full mr-4 overflow-hidden relative"
          >
            <Image
              src={`${process.env.BACKEND_URL}/images/${uploader?.profile_pic}`}
              alt="profile_pic"
              fill
            />
          </button>
        )}

        <div>
          <div className=" font-bold">{title}</div>
          <div>{uploader?.fullname}</div>
          <div>{views} views</div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleModal(index);
            // setActivemodalIndex(activemodelIndex === null ? video._id : _id);
          }}
          className=" hover:bg-bg-secondary  z-30 p-2 rounded-full absolute top-2 right-3"
        >
          <SlOptionsVertical />
          <div className=" absolute  ">
            <Modal index={index} openModal={openModal} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
