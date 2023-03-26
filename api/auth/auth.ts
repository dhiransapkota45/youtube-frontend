import { api_instance } from "../instance";
import { Userdetails } from "../../components/authentication/Login";
import { toaster } from "../../components/common/custom/toaster";
import Cookies from "js-cookie";

// try to remove any of router
interface UserdetailsSignup extends Userdetails {
  fullname: string;
  confirmpassword: string;
  profile_pic: null | File;
}

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

export const signup = async (user: UserdetailsSignup, router: any) => {
  if (user.password !== user.confirmpassword) {
    toaster("error", "Password and Confirm Password should be same");
    return;
  }
  try {
    const formData = new FormData();
    formData.append("fullname", user.fullname);
    formData.append("username", user.username);
    formData.append("password", user.password);
    formData.append("image", user.profile_pic as Blob);
    const response = await api_instance.post("/api/users/signup", formData);
    console.log(response);
    Cookies.set("accessToken", response.data.accessToken);
    Cookies.set("refreshToken", response.data.refreshToken);
    router.push("/");
  } catch (error: any) {
    toaster("error", error.response.data.message);
  }
};
