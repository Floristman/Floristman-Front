import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

export const productSlice = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:7000/"
    }),
    tagTypes: ["Task"],
    endpoints: (builder) => ({
        Products: builder.query({
            query: () => "/products",
            providesTags: ["Task"]
        }),
        addProduct: builder.mutation({
            query: (task) => ({
                url: "/products",
                method: "POST",
                body: task
            }),
            invalidatesTags: ["Task"]
        }),
        updateProduct: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/products/${id}`,
                method: "PUT",
                body: rest
            }),
            invalidatesTags: ["Task"]
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Task"]
        })
    })
});
export const {
    useProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
  } = productSlice;


  