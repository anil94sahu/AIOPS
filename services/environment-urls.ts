import axios from "axios";
import { getBaseUrl } from ".";
import { getRequestsToken } from "@/app/auth-service";

const nodeEnv = process.env.REACT_APP_NODE_ENV || "development";
const baseURI = getBaseUrl(nodeEnv, "NEXT_PUBLIC_API_URL");

const headers = {
  "Content-Type": "application/json",
  timeout: 20000, // 20 seconds
};

const apiService = axios.create({
  baseURL: baseURI,
  headers,
  withCredentials: true
});

apiService.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      getRequestsToken();
      console.log("***********Unauthorized User**********");
    }
    return Promise.reject(error);
  }
);

export default apiService;
