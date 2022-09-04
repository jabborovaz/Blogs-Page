import { configureStore } from "@reduxjs/toolkit";
import { posts } from "../Api/Posts";
import { photos } from "../Api/Photos";

export const store = configureStore({
  reducer: {
    [posts.reducerPath]: posts.reducer,
    [photos.reducerPath]: photos.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(posts.middleware, photos.middleware),
});
