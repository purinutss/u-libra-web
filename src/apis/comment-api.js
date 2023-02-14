import axios from "../config/axios";

export const createComment = (input, bookId) =>
  axios.post(`/comment/${bookId}`, input);
export const deleteComment = (commentId) => axios.post(`/comment/${commentId}`);
export const getAllCommentsInTheBook = (bookId) =>
  axios.get(`/comment/${bookId}/comments`);
export const updateComment = (input, commentId) =>
  axios.patch(`/comment/${commentId}`, input, commentId);
