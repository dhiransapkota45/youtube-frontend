import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { Data } from "../upload/UploadVideo";

type Prop = {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
};
const DragandDropVideo = ({ data, setData }: Prop) => {
  const [video, setVideo] = useState<any>(null);
  const [videoLoading, setVideoLoading] = useState<boolean>(false);
  const [percent, setPercent] = useState<number>(0);

  const [dargActive, setDragActive] = useState<any>(null);

  const onFileChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.DragEvent<HTMLDivElement>
      | any
  ) => {
    e.preventDefault();
    const file = e.target.files?.[0] || e.dataTransfer.files[0];
    // const file = e.dataTransfer.files[0];
    setData({ ...data, video: file });

    if (file) {
      const reader: FileReader = new FileReader();

      reader.onprogress = (e) => {
        setVideoLoading(true);
        if (e.lengthComputable) {
          const percent = Math.round((e.loaded / e.total) * 100);
          setPercent(percent);
        }
      };

      reader.addEventListener("load", () => {
        setVideoLoading(false);
        setVideo(reader.result);
      });
      reader.readAsDataURL(file);
    }
  };

  const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const onDragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
  };

  return (
    <div className=" flex flex-col  gap-y-4 my-10">
      <div className="">
        <label htmlFor="video" className=" ">
          <div className="bg-gray-500 text-center font-semibold text-white rounded-md w-60 p-2 cursor-pointer h-full">
            Upload a Video
          </div>
        </label>
        <input
          type="file"
          onChange={onFileChangeHandler}
          className=" w-0 h-0"
          id="video"
        />
      </div>

      <div
        onDragOver={onDragOverHandler}
        onDragLeave={onDragLeaveHandler}
        // onDragEnter={dragEnterHandler}
        onDrop={onFileChangeHandler}
        className="w-full  h-80 overflow-hidden"
      >
        {videoLoading ? (
          <div className=" w-full h-full flex flex-col justify-center items-center ">
            <div className=" spinner"></div>
            <div className=" font-semibold ">loading...{percent}%</div>
          </div>
        ) : (
          <div className=" w-full h-full">
            {video ? (
              <video
                src={video}
                className="w-full h-full rounded-xl"
                controls
              />
            ) : (
              <div
                className={`${
                  dargActive ? "bg-gray-200" : ""
                }  w-full h-80 border-2 border-dotted rounded-xl overflow-hidden flex justify-center items-center font-semibold text-gray-600`}
              >
                Drag and Drop Video
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DragandDropVideo;
