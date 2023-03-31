import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    tagTypes: ['posts'],
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => `/posts`,
            providesTags: ['posts']
        })
    })
})

export const {useGetBlogsQuery} = blogApi