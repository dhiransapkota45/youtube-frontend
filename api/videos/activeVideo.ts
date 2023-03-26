import { api_instance } from "../instance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toaster } from "../../components/common/custom/toaster";
import { addcomment, likevideo, showReplies } from "../../redux/activeVideoSlice";

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

export const commentOnVideo = async (
  videoid: number | undefined,
  comment: string,
  dispatch: any,
  parentComment: string | null = null
) => {
  try {
    const response = await api_instance.post(`/api/comments/createcomment`, {
      comment,
      videoid,
      parentComment,
    });
    console.log(response);
    if (parentComment === null) {
      dispatch(addcomment(response.data.newcomment));
    } else {
      // dispatch(replycomment())
      console.log("reply comment has been created");
    }
  } catch (error: any) {
    toaster("error", error.response.data.message);
  }
};

export const getCommentReplies = async (
  videoid: number,
  commentid: string,
  dispatch: any
) => {
  try {
    const response = await api_instance.post(`/api/comments/getreplies`, {
      videoid,
      commentid,
    });
    console.log(response);
    dispatch(showReplies({ commentid, replies: response.data.replies }))
  } catch (error: any) {
    toaster("error", error.response.data.message);
  }
};

// export const commentOnVideo = createAsyncThunk(
//   "video/commentOnVideo",
//   async () => {
//     console.log("i got fired");

//     try {
//       // const response = await api_instance.post(`/api/comments/createcomment`, {
//       //   comment,
//       //   videoid,
//       // });
//       // console.log(response);
//       // dispatch(addcomment(response.data.newcomment));
//     } catch (error: any) {
//       toaster("error", error.response.data.message);
//     }
//   }
// );
// {videoid, comment, dispatch}
