import axios from "../config/axios";

export const editProfile = (formData) => axios.patch("/user/profile", formData);
export const getProfileById = (userId) => axios.get("/user/profile/" + userId);
