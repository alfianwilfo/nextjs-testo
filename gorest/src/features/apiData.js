import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gorest.co.in/public/v2/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => `posts?page=1&per_page=6`,
    }),
  }),
});

export const { useGetPostsQuery } = postApi;
