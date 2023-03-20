import { createSlice } from "@reduxjs/toolkit";
import { fetchuser } from "../api/user/user";

export interface IUser {
  _id: number;
  fullname: string;
  username: string;
  profile_pic: string;
  subscriptions: IUser[];
  subscribers: IUser[];
  description: string;
  videos: any;
  total_views: number;
  liked_videos: any;
  disliked_videos: any;
}

interface InitialState {
  loading: boolean;
  error: boolean | string | any;
  user: {} | IUser;
}

const initialState: InitialState = {
  loading: false,
  error: false,
  user: {},
};

const userSlice = createSlice({
  name: "userdetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchuser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchuser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchuser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
