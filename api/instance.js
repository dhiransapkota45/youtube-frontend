
import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:8000/";

export const api_instance = axios.create({
  baseURL: baseURL,
});

api_instance.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers.accessToken = `${accessToken}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

api_instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    let refreshToken = Cookies.get("refreshToken");
    if (
      refreshToken &&
      error.response.status === 403 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return axios
        .post(`${baseURL}/api/users/verifyrefresh`, {
          refreshToken: refreshToken,
        })
        .then((res) => {
          if (res.status === 201) {
            Cookies.set("accessToken", res.data.accessToken);
            Cookies.set("refreshToken", res.data.refreshToken);
            axios.defaults.headers.common["accessToken"] = res.data.accessToken;
            originalRequest.headers["accessToken"] = res.data.accessToken;
            return axios(originalRequest);
          } else {
            return Promise.reject(error);
          }
        });
    }
    return Promise.reject(error);
  }
);

