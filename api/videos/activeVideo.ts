import { api_instance } from "../instance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toaster } from "../../components/common/custom/toaster";
import {
  addcomment,
  likevideo,
  showReplies,
  subscribeHandler,
} from "../../redux/activeVideoSlice";

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
    const payload = { newcomment: response.data.newcomment, parentComment };
    dispatch(addcomment(payload));
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
    dispatch(showReplies({ replies: response.data.replies, commentid }));
  } catch (error: any) {
    toaster("error", error.response.data.message);
  }
};

export const subscribe = async (
  channelid: number,
  setSubsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: any
) => {
  try {
    const response = await api_instance.post(`/api/users/subscribe`, {
      _id: channelid,
    });
    setSubsLoading(false);

    dispatch(subscribeHandler("subscribed"));
    console.log(response);
  } catch (error: any) {
    setSubsLoading(false);
    toaster("error", error.response.data.message);
  }
};

export const unsubscribe = async (
  channelid: number,
  setSubsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  dispatch: any
) => {
  try {
    const response = await api_instance.post(`/api/users/unsubscribe`, {
      _id: channelid,
    });
    setSubsLoading(false);

    dispatch(subscribeHandler("unsubscribed"));
    console.log(response);
  } catch (error: any) {
    setSubsLoading(false);
    toaster("error", error.response.data.message);
  }
};