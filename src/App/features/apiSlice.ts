import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {loadCartProduct} from "./cartSlice.ts";

export const ApiSlice = createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://anxious-erin-shrug.cyclic.app/api",
    }),
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:({limit}:{limit:number})=>({
                url:`/products?limit=${Number(limit)}&page=${Math.round(Math.random() * 10)}`
            }),
            // transformResponse:(data, meta, arg)=>{},
            async onQueryStarted(payload,{queryFulfilled,dispatch}){
                const {data} = await queryFulfilled
                console.log({payload,data})
                const modifiedData: any = [];
                data.products?.map((product: any, index: number) => {
                    modifiedData.push({...product, quantity: 1, position: index})
                })
                dispatch(loadCartProduct(modifiedData))
            }
        })
    })
})

export const {useGetProductsQuery} = ApiSlice