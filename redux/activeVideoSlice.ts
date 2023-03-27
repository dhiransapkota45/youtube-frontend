import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { activeVideo } from "../api/videos/activeVideo";

interface IndivisualVideo {
  _id: number;
  title: string;
  description: string;
  likes: any;
  dislikes: any;
  comments: any;
  views: number;
  uploader: {
    _id: number;
    fullname: string;
    username: string;
    profile_pic: string;
    subscribers: any;
  };
  isliked: boolean;
  isSubscribed: boolean;
  createdAt: Date;
}
interface IinitialState {
  loading: boolean;
  error: string | null | any;
  data: IndivisualVideo;
}

// --------------------------------------------
const initialState: IinitialState = {
  loading: true,
  error: null,
  data: {} as IndivisualVideo,
};

const activeVideoSlice = createSlice({
  name: "activeVideo",
  initialState,
  reducers: {
    likevideo: (state, { payload }) => {
      const { msg, activeuser } = payload;
      if (msg === "liked") {
        state.data.likes.push(activeuser);
      } else if (msg === "unliked") {
        const index = state.data.likes.indexOf(activeuser);
        if (index > -1) {
          state.data.likes.splice(index, 1);
        }
      } else {
        state;
      }
    },
    addcomment: (state, { payload }) => {
      console.log(payload);
      if (payload.parentComment === null) {
        state.data.comments.unshift(payload.newcomment);
      } else {
        state.data.comments
          .find((comment: any) => payload.parentComment === comment._id)
          .replies.unshift(payload.newcomment);
      }
    },
    showReplies: (state, { payload }) => {
      state.data.comments.find(
        (comment: any) => payload.commentid === comment._id
      ).replies = payload.replies;
    },
    subscribeHandler: (state, { payload }) => {
      if (payload === "subscribed") {
        state.data.isSubscribed = true;
      } else if (payload === "unsubscribed") {
        state.data.isSubscribed = false;
      } else {
        state;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(activeVideo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(activeVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(activeVideo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { likevideo, addcomment, showReplies, subscribeHandler } = activeVideoSlice.actions;
export default activeVideoSlice.reducer;

// {
//   "findvideo": {
//     "_id": "641696c99124d1414fabc8da",
//     "title": "hey there2",
//     "description": "hi there",
//     "likes": 0,
//     "dislikes": 0,
//     "comments": [],
//     "views": 54,
//     "uploader": {
//       "_id": "640daa2b3db25a5e579e2e7a",
//       "fullname": "dhiran sapkota",
//       "username": "dhiran45",
//       "profile_pic": "1678617131619-idcard.jpg",
//       "subscribers": []
//     },
//     "createdAt": "2023-03-19T04:59:53.057Z",
//     "updatedAt": "2023-03-20T16:52:18.085Z"
//   }
// }
