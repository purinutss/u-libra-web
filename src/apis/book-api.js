import axios from "../config/axios";

export const createBook = (formData) => axios.post("/book/post/create-book", formData);
export const deleteBook = (bookId) => axios.delete(`/book/delete/${bookId}`);
export const updateBook = (bookId, formData) => {
  console.log("----------------->", formData);
  return axios.patch(`/book/update/${bookId}`, formData);
};
