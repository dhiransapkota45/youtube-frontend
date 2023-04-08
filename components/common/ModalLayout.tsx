import React from "react";

type Prop = {
  modal: boolean;
  closeModal: () => void;
  children?: React.ReactNode;
};

const ModalLayout = ({ modal, closeModal, children }: Prop) => {
  return (
    <div
      onClick={closeModal}
      className={`fixed top-0 left-0 w-screen h-screen duration-500 flex justify-center items-center bg-black bg-opacity-30 ${
        modal ? " opacity-100 z-10 " : " opacity-0 -z-10   "
      }`}
    >
      <div
        className={` duration-500   w-36  transition-all  ${
          modal ? "translate-y-0" : "-translate-y-10"
        }  `}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalLayout;
