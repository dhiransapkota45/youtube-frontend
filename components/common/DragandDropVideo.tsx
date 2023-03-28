import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";

const DragandDropVideo = () => {
  const [video, setVideo] = useState<any>(null);
  const [videoLoading, setVideoLoading] = useState<boolean>(false);
  const [percent, setPercent] = useState<number>(0);

  const onFileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

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
  return (
    <div className=" flex flex-col items-center gap-y-4 my-10">
      <div className="">
        <label htmlFor="video" className=" ">
          <div className="bg-red-500 text-center font-semibold text-white rounded-md w-60 p-2 cursor-pointer h-full">
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

      <div className="w-full h-80 overflow-hidden">
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
              <div className=" w-full h-80 border-2 border-dotted rounded-xl overflow-hidden flex justify-center items-center">
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
