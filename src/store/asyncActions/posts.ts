import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IPost } from "../../types/post";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios<IPost[]>(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  return response.data;
});
