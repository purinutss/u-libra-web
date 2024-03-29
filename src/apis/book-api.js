import axios from "../config/axios";

export const createBook = (formData) => axios.post("/book/post/create-book", formData);
export const deleteBook = (bookId) => axios.delete(`/book/delete/${bookId}`);
export const updateBook = (bookId, formData) => axios.patch(`/book/update/${bookId}`, formData);
export const getAllBooks = () => axios.get("/book");
export const getBookTitles = () => axios.get(`/book/get/book/title?${bookTitle}`);
