import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchrandomVideos } from "../api/videos/videos";

export interface video {
  _id: string;
  thumbnail: string;
  title: string;
  uploader: {
    _id: string;
    fullname: string;
    profile_pic: string;
  };
  views: number;
  createdAt: Date;
}

interface VideoState {
  loading: boolean;
  error: any;
  videos: video[];
}

const initialState: VideoState = {
  loading: false,
  error: null,
  videos: [],
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchrandomVideos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchrandomVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.videos = action.payload;
    });
    builder.addCase(fetchrandomVideos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default videoSlice.reducer;
