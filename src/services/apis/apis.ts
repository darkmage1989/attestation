import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const usersApi = createApi({ //ртк запрос на апи
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (builder) => ({
    getUsersApi: builder.query<
      any,
      { currentPage: number; order: string; userName: string } 
    >({
      query: ({currentPage, order, userName}) => {
        return {
          url: `search/users?q=${userName}&sort=repositories&order=${order}&per_page=21&page=${currentPage}`,
        };
      },
    }),
  }),
});
export const { useGetUsersApiQuery } = usersApi;
