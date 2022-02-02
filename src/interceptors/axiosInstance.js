import axios from "axios";
import ApiRoutes from "../routes/apiRoutes";
import { Notification } from "../components";
import { AuthService } from "../services";
import { AppRoutes } from "../routes";
import { history } from "../helpers";

export const getHeaders = () => {
  let headers, token;
  if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
  }
  headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token,
  };
  return headers;
};

const axiosInstance = axios.create({
  baseURL: ApiRoutes.BASE_URL,
  timeout: 200000,
});

axiosInstance.interceptors.request.use(function (config) {
  config.headers = getHeaders();
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return {
      data: response.data,
      message: response.statusText,
      status: response.status,
    };
  },
  (error) => {
    const { response } = error;
    let errorMessage;
    if (response?.data?.errors?.length > 0) {
      errorMessage = response?.data?.errors
        .map((error) => error.friendlyMessage ?? error.msg)
        .join("\n");
    }
    Notification({
      type: "error",
      message: errorMessage || "Something went wrong. Please try again",
    });
    if (response.status === 401) {
      AuthService.logout(() => {
        history.push(AppRoutes.LOGIN);
      });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
