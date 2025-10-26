import axios from "axios";
import { getSession, removeSession } from "@/utils/cookies";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 30000,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${getSession() ? getSession()?.accessToken : ""}`;
    config.headers["Content-Type"] = "application/json";
    config.headers["ngrok-skip-browser-warning"] = "true";
    return config;
  },
  (error:any) => {
    // Handle the error before it reaches the API
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      removeSession(false);
      return (window.location.href = "/login");
    }

    return error;
  }
);

export default axiosInstance;
