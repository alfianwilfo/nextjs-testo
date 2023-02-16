import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gorest.co.in/public/v2/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (page) => `posts?page=${page}&per_page=6`,
    }),
    getPostDetails: builder.query({
      query: (id) => `posts/${id}`,
    }),
    getComment: builder.query({
      query: (id) => `posts/${id}/comments`,
    }),
    getUsers: builder.query({
      query: (page) => `users?page=${page}&per_page=4`,
    }),
    forPagination: builder.query({
      query: () => `posts`,
    }),
    forPaginationUser: builder.query({
      query: () => `users`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostDetailsQuery,
  useGetCommentQuery,
  useGetUsersQuery,
  useForPaginationQuery,
  useForPaginationUserQuery,
} = postApi;
