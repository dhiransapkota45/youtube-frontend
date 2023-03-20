import Image from "next/image";
import React, { useState } from "react";
import { video } from "../../../redux/videoSlice";
import { SlOptionsVertical } from "react-icons/sl";
import Modal from "../../common/Modal";
import { useRouter } from "next/router";

type Prop = {
  video: video;
};

const VideoCard = ({ video }: Prop) => {
  const router = useRouter();
  const { _id, thumbnail, title, uploader } = video;
  const [openModal, setOpenModel] = useState(false);

  return (
    <div
      onClick={() => router.push(`/video/${_id}`)}
      className=" rounded-lg shadow cursor-pointer "
    >
      <div className="w-full h-60 relative ">
        <Image
          src={`${process.env.BACKEND_URL}/thumbnails/${thumbnail}`}
          alt="thumbnail"
          fill
        />
      </div>
      <div className=" flex px-2 my-2 relative">
        <div className=" w-12 h-12 rounded-full mr-4 overflow-hidden relative">
          <Image
            src={`${process.env.BACKEND_URL}/images/${uploader.profile_pic}`}
            alt="profile_pic"
            fill
          />
        </div>

        <div>
          <div className=" font-bold">{title}</div>
          <div>{uploader.fullname}</div>
          <div>views, date</div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpenModel(!openModal);
          }}
          className=" hover:bg-bg-secondary animation z-30 p-2 rounded-full absolute top-2 right-3"
        >
          <SlOptionsVertical />
          <div className=" absolute ">
            <Modal openModal={openModal} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
