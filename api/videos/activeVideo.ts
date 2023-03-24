import { api_instance } from "../instance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toaster } from "../../components/common/custom/toaster";
import { likevideo } from "../../redux/activeVideoSlice";

export const activeVideo = createAsyncThunk(
  "video/activeVideo",
  async (videoId: string) => {
    const response = await api_instance.get(
      `/api/videos/getvideodetails/${videoId}`
    );
    console.log(response);
    return response.data.findvideo;
  }
);

export const likeOneVideo = async (
  videoid: number | undefined,
  activeuser: any,
  dispatch: any
) => {
  try {
    const response = await api_instance.post(
      `/api/videos/likevideo/${videoid}`
    );
    console.log(response);
    
    dispatch(likevideo({ msg: response.data.msg, activeuser }));
  } catch (error: any) {
    toaster("error", error.response.data.message);
  }
};
