import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const posts = createApi({
  reducerPath: "Posts",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "comments",
    }),
  }),
});

export const { useGetPostsQuery } = posts;
