import React, { useEffect } from "react";
import { videoModal } from "../../data/videoModal";

interface Prop {
  openModal: null | number | string;
  index: number | string;
}

const Modal = ({ openModal, index }: Prop) => {

  console.log(openModal, index);
  
  return (
    <>
      {/* <div className="fixed top-0 left-0 w-screen h-screen z-10"></div> */}

      {openModal === index && (
        <div className=" z-50  bg-bg-tertiary p-4 rounded-lg flex flex-col gap-2 ">
          {videoModal.map((item, index) => {
            return (
              <div key={item.name} className=" w-48 flex items-center">
                <div className=" text-xl mr-2">{item.icon}</div>
                <div className=" font-semibold capitalize">{item.name}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Modal;
