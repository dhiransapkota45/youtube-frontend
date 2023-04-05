import React from "react";
import { AiFillDelete } from "react-icons/ai";

const DeleteModal = () => {
  return (
    <div className=" w-96 mx-auto flex flex-col items-center justify-center  rounded-md gap-y-3 py-16 bg-bg-secondary ">
      <div className=" text-3xl text-red-600">
        <AiFillDelete />
      </div>
      <div className=" text-3xl font-semibold ">Delete Video</div>
      <div>Are you sure you want to delete this video?</div>

      <div className=" flex justify-around gap-x-10 mt-4">
        <button className="bg-red-600 text-white rounded-3xl font-semibold py-1 px-4">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
