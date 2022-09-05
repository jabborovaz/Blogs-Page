import { configureStore } from "@reduxjs/toolkit";
import { posts } from "../Api/Posts";

export const store = configureStore({
  reducer: {
    [posts.reducerPath]: posts.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(posts.middleware),
});
