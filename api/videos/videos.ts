import { createAsyncThunk } from "@reduxjs/toolkit";
import { api_instance } from "../instance";

export const fetchrandomVideos = createAsyncThunk(
    "videos/fetchVideos",
    async () => {
      const response = await api_instance.get("/api/videos/getallvideosrandom");
      console.log(response);
  
      return response.data.findallvideos;
    }
  );