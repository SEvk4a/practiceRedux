import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost, InitialState } from "../../types/post";
import { fetchPosts } from "../asyncActions/posts";

const initialState: InitialState = {
  posts: [],
  loading: false,
  error: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addNewPostAction(state, action: PayloadAction<IPost>) {
      state.posts.unshift(action.payload);
    },
    deletePostAction(state, action: PayloadAction<number>) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log("fulfilled");

      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      console.log("reject");

      state.loading = false;
    });
  },
});

export default postsSlice.reducer;
