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
