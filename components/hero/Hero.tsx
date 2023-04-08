import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducers";
import Loader from "./interior/Loader";
import VideoCard from "./interior/VideoCard";

const Hero = () => {
  const { loading, error, videos } = useSelector(
    (store: RootState) => store.videos
  );
  const [openModal, setOpenModal] = useState<null | number | string>(null);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <div className=" grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {loading
          ? arr.map((item) => <Loader key={item} />)
          : videos?.map((video, index) => {
              return (
                <VideoCard
                  key={video._id}
                  index={video._id}
                  video={video}
                  openModal={openModal}
                  handleModal={(indexIndivisual) =>
                    setOpenModal(
                      openModal === null
                        ? indexIndivisual
                        : openModal === indexIndivisual
                        ? null
                        : indexIndivisual
                    )
                  }
                />
              );
            })}
      </div>
    </>
  );
};

export default Hero;
