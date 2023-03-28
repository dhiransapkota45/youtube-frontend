import React, { useEffect, useState } from "react";
import { createVideo } from "../../api/videos/videos";
import DragandDropVideo from "../common/DragandDropVideo";

export type Data = {
  title: string;
  description: string;
  thumbnail: File | null;
  video: File | null;
};

const UploadVideo = () => {
  const [thumbnail, setThumbnail] = useState<File | null | any>(null);
  const [disable, setDisable] = useState<boolean>(true);

  const [data, setData] = useState<Data>({
    title: "",
    description: "",
    thumbnail: null,
    video: null,
  });

  const disableSubmit = () => {
    if (
      data.title === "" ||
      data.description === "" ||
      data.thumbnail === null ||
      data.video === null
    ) {
      // return true;
      setDisable(true);
    } else {
      // return false;
      setDisable(false);
    }
  };

  const onThumbHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //read the file
    const file = e.target.files![0];
    setData({ ...data, thumbnail: file });
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setThumbnail(reader.result);
    };
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createVideo(data)
  };

  useEffect(() => {
    disableSubmit();
  }, [data]);

  return (
    <form onSubmit={onSubmitHandler}>
      <div className=" max-w-2xl mx-auto">
        <DragandDropVideo data={data} setData={setData} />
      </div>

      <div className=" w-full mb-10">
        <div className=" flex  flex-col gap-y-4 max-w-2xl mx-auto ">
          <div className=" font-semibold text-gray-600 dark:text-gray-400 text-xl mt-4 mb-3">
            Details
          </div>
          <div className=" ">
            <input
              name="title"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
              type="text"
              placeholder="Title for video"
              className=" p-2 bg-bg-primary  w-full border-2 placeholder:font-semibold focus:border-blue-500 outline-none rounded-lg duration-200 "
            />
          </div>

          <div className="">
            <textarea
              placeholder=" Description for video"
              name="description"
              value={data.description}
              onChange={(e) =>
                setData({ ...data, description: e.target.value })
              }
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
            <button
              type="submit"
              disabled={disable}
              className={`p-2 ${
                disable ? "bg-red-200" : "bg-red-500"
              }  rounded text-white my-4 font-semibold px-10`}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UploadVideo;
