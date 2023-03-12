import axios from "../config/axios";

export const getAllCategories = () => axios.get("/category");
export const getCategoryById = (categoryId) => axios.get("/category/get/" + categoryId);
