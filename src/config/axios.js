import axios from "axios";
import { getAccessToken } from "../utils/LocalStorage";

axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;

axios.interceptors.request.use(
  (config) => {
    if (getAccessToken()) {
      config.headers.authorization = `Bearer ${getAccessToken()}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
); //25 noon at stating video

export default axios;
