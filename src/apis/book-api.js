import axios from "../config/axios";

export const createBook = (input) => axios.createBook("/book/post/create-book", input);
