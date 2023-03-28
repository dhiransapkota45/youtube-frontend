import React, { useState } from "react";
import DragandDropVideo from "../common/DragandDropVideo";

const UploadVideo = () => {
  const [thumbnail, setThumbnail] = useState<File | null | any>(null);
  const onThumbHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //read the file
    const file = e.target.files![0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      setThumbnail(reader.result);
    };
  };

  return (
    <div>
      <div className=" max-w-2xl mx-auto">
        <DragandDropVideo />
      </div>

      <div className=" w-full mb-10">
        <div className=" flex  flex-col gap-y-4 max-w-2xl mx-auto ">
          <div className=" font-semibold text-gray-600 dark:text-gray-400 text-xl mt-4 mb-3">
            Details
          </div>
          <div className=" ">
            <input
              type="text"
              placeholder="Title for video"
              className=" p-2 bg-bg-primary  w-full border-2 placeholder:font-semibold focus:border-blue-500 outline-none rounded-lg duration-200 "
            />
          </div>

          <div className="">
            <textarea
              placeholder=" Description for video"
              name=""
              id=""
              cols={30}
              rows={5}
              className=" block p-2  w-full bg-bg-primary border-2 resize-none placeholder:font-semibold focus:border-blue-500 outline-none rounded-lg duration-200"
            />
          </div>

          <div className=" w-30 h-56 overflow-hidden">
            <label htmlFor="thumbnail" className=" ">
              {!thumbnail ? (
                <div className="w-full font-semibold text-gray-600 border-2 h-full flex   rounded cursor-pointer justify-center items-center">
                  Upload Thumbnail
                </div>
              ) : (
                <div className=" overflow-hidden">
                  <img src={thumbnail} alt="thumbnail" />
                </div>
              )}
            </label>
            <input
              onChange={onThumbHandler}
              type="file"
              id="thumbnail"
              className=" w-0 h-0"
            />
          </div>

          <div>
            <button className=" p-2 bg-red-500 rounded text-white my-4 font-semibold px-10">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;
