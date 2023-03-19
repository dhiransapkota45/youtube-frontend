import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { api_instance } from "../api/instance";
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

// export const fetchrandomVideos = createAsyncThunk(
//   "videos/fetchVideos",
//   async () => {
//     const response = await api_instance.get("/api/videos/getallvideosrandom");
//     console.log(response);

//     return response.data.findallvideos;
//   }
// );

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
