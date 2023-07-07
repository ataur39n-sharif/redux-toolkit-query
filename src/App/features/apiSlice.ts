import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://anxious-erin-shrug.cyclic.app/api",
    }),
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:(limit)=>({
                url:`/products?limit=${Number(limit)}&page=${Math.round(Math.random() * 10)}`
            })
        })
    })
})

export const {useGetProductsQuery} = ApiSlice