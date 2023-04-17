import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

export const userSlice = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:7000/"
    }),
    tagTypes: ["Task"],
    endpoints: (builder) => ({
        users: builder.query({
            query: () => "/users",
            providesTags: ["Task"]
        }),
        addUser: builder.mutation({
            query: (task) => ({
                url: "/users",
                method: "POST",
                body: task
            }),
            invalidatesTags: ["Task"]
        }),
        updateUser: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/users/${id}`,
                method: "PUT",
                body: rest
            }),
            invalidatesTags: ["Task"]
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Task"]
        })
    })
});
export const {
    useUsersQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
  } = userSlice;