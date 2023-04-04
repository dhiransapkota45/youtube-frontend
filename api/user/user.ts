import { createAsyncThunk } from "@reduxjs/toolkit";
import { api_instance } from "../instance";

export const fetchuser = createAsyncThunk("user/fetchuser", async () => {
  try {
    const response = await api_instance.get("/api/users/user");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
});

export const channeldetails = async (channelid: any, setChannel: any) => {
  try {
    console.log(channelid);

    const response = await api_instance.post(`/api/users/getchannel`, {
      username: channelid,
    });
    setChannel(response.data.channeldetails);
    // return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
