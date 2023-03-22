import { createSlice } from "@reduxjs/toolkit";
import { activeUser } from "../api/user/activeUser";

interface User {
  _id: number;
  fullname: string;
  username: string;
  profile_pic: string;
  // subscribers: any;
  subscriptions: any;
  description: string;
  videos: any;
  total_views: number;
  liked_videos: any;
  disliked_videos: any;
}

interface IinitialState {
  loading: boolean;
  error: string | null | any;
  user: User;
}

const initialState: IinitialState = {
  loading: false,
  error: null,
  user: {} as User,
};

const activeUserSlice = createSlice({
  name: "activeUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(activeUser.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(activeUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      }),
      builder.addCase(activeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default activeUserSlice.reducer;
