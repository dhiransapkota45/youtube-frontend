import { api_instance } from "../instance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const activeVideo = createAsyncThunk(
  "video/activeVideo",
  async (videoId: string) => {
    const response = await api_instance.get(`/api/videos/getvideodetails/${videoId}`);
    console.log(response);
    return response.data.findvideo;
  }
);
