// import { createSlice } from "@reduxjs/toolkit";
// import { channelDetails2 } from "../api/user/user";

// type channelVideoType = {
//   _id: string;
//   title: string;
//   likes: any;
//   dislikes: any;
//   views: number;
//   thumbnail: string;
// };

// type channelType = {
//   _id: string;
//   username: string;
//   fullname: string;
//   profile_pic: string;
//   description: string;
//   subscribersLength: number;
//   subscriptionLength: number;
//   subscriptions: any;
//   subscribers: any;
//   videos: channelVideoType[];
// };

// const initialState = {
//   channelDetails: {} as channelType,
// };

// const channelSlice = createSlice({
//   name: "channel",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(channelDetails2.fulfilled, (state, action) => {
//       console.log(action.payload);
//       state.channelDetails = action.payload.channeldetails;
//     });
//   },
// });

// export default channelSlice.reducer;
// export const {} = channelSlice.actions;
