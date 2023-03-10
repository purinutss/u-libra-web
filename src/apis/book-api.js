import axios from "../config/axios";

export const createBook = (formData) => axios.post("/book/post/create-book", formData);
