import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { deleteVideo } from "../../../api/yourvideos/yourvideos";

import { useDispatch } from "react-redux";
import { deleteVideoLocal } from "../../../redux/activeUser";

type Prop = {
  videoId: string;
};
const DeleteModal = ({ videoId }: Prop) => {
  const dispatch = useDispatch()
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false);
  const deleteHandler = () => {
    setDeleteLoading(true);
    deleteVideo(videoId, setDeleteLoading, dispatch, deleteVideoLocal);
  };
  return (
    <div className=" w-96 mx-auto flex flex-col items-center justify-center  rounded-md gap-y-3 py-16 bg-bg-secondary ">
      <div className=" text-3xl text-red-600">
        <AiFillDelete />
      </div>
      <div className=" text-3xl font-semibold ">Delete Video</div>
      <div>Are you sure you want to delete this video?</div>

      <div className=" flex justify-around gap-x-10 mt-4">
        <button
          onClick={deleteHandler}
          className="bg-red-600 text-white rounded-3xl font-semibold py-1 px-4"
        >
          {deleteLoading ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
