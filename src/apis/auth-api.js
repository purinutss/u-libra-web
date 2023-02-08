import axios from "../config/axios";

export const register = (input) => {
  return axios.post("auth/register", input);
};
