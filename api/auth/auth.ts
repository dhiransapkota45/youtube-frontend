import { api_instance } from "../instance";
import { Userdetails } from "../../components/authentication/Login";
import { toaster } from "../../components/common/custom/toaster";
import Cookies from "js-cookie";

// try to remove any of router

export const signin = async (user: Userdetails, router: any) => {
  try {
    const response = await api_instance.post("/api/users/signin", user);
    Cookies.set("accessToken", response.data.accessToken);
    Cookies.set("refreshToken", response.data.refreshToken);
    router.push("/");
  } catch (error: any) {
    toaster("error", error.response.data.message);
  }
};
