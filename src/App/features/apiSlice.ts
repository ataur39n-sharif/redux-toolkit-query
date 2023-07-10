import {createApi, fetchBaseQuery, TagDescription} from "@reduxjs/toolkit/query/react";
import {loadCartProduct} from "./cartSlice.ts";
import {IProduct} from "./productSlice.ts";

export type TProductQueryParameters ={
    limit:number,
    page?:number,
    pageName?:string
}
export const ApiSlice = createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://anxious-erin-shrug.cyclic.app/api",
    }),
    tagTypes:["product"],
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:(data:TProductQueryParameters={
                limit:5,
                page:Math.round(Math.random() * 10)
            })=>({
                url:`/products?limit=${Number(data.limit)}&page=${data.page}`
            }),
            providesTags: (result): TagDescription<"product">[] =>
                result.products
                    ? (result.products as IProduct[]).map(({ _id }) => ({
                        type: "product",
                        id: _id,
                    }))
                    : [{ type: "product", id: "all" }],
            // transformResponse:(data, meta, arg)=>{},
            async onQueryStarted(_,{queryFulfilled,dispatch}){
                const {data} = await queryFulfilled
                const modifiedData: any = [];
                data.products?.map((product: any, index: number) => {
                    modifiedData.push({...product, quantity: 1, position: index})
                })
                dispatch(loadCartProduct(modifiedData))
            }
        })
    })
})

export const {useGetProductsQuery,
useLazyGetProductsQuery} = ApiSlice