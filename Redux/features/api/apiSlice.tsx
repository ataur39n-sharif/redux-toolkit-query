import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Blog {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export const blogApi = createApi({
    reducerPath: "blogApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    tagTypes: ['posts'],
    endpoints: (builder) => ({
        getBlogs: builder.query({
            query: () => `/posts`,
            providesTags: ['posts'],
            transformResponse: (response: Blog[]) => {
                return response.slice(0, 6)
            },
            

        })
    })
})

export const { useGetBlogsQuery } = blogApi