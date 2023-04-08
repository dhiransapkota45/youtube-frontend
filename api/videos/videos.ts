import { createAsyncThunk } from "@reduxjs/toolkit";
import { toaster } from "../../components/common/custom/toaster";
import { api_instance } from "../instance";

export const fetchrandomVideos = createAsyncThunk(
  "videos/fetchVideos",
  async () => {
    const response = await api_instance.get("/api/videos/getallvideosrandom");
    console.log(response);

    return response.data.findallvideos;
  }
);

export const createVideo = async (video: any) => {
  try {
    const formData = new FormData();
    const formDataForThumbnail = new FormData();
    formData.append("title", video.title);
    formData.append("description", video.description);
    formData.append("video", video.video as Blob);
    formDataForThumbnail.append("thumbnail", video.thumbnail as Blob);

    const response = await api_instance.post(
      "/api/videos/uploadvideo",
      formData
    );
    console.log(response);

    try {
      const responseForThumbnail = await api_instance.post(
        `/api/videos/thumbnailupload/${response.data.createvideo._id}`,
        formDataForThumbnail
      );
      if (responseForThumbnail.status === 200) {
        toaster("success", "Video uploaded successfully");
      }
    } catch (error: any) {
      console.log(error);
    }
  } catch (error: any) {
    console.log(error);
  }
};
