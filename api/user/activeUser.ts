import { createAsyncThunk } from "@reduxjs/toolkit";
import { api_instance } from "../instance";

export const activeUser = createAsyncThunk("user/activeUser", async()=>{
    try {
        const response = await api_instance.get("/api/users/user");
        console.log(response);
        return response.data.user;
    } catch (error) {
        console.log(error);
        return error;
    }
})