import {createApi, fetchBaseQuery, TagDescription} from "@reduxjs/toolkit/query/react";
import {loadCartProduct} from "./cartSlice.ts";
import {IProduct} from "./productSlice.ts";

export type TProductQueryParameters ={
    limit:number,
}
export const ApiSlice = createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"https://anxious-erin-shrug.cyclic.app/api",
    }),
    tagTypes:["product"],
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:(data:TProductQueryParameters)=>({
                url:`/products?limit=${Number(data.limit)}&page=${Math.round(Math.random() * 10)}`
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
        }),
        bkashPay:builder.mutation({
            query:(amount: number)=>({
                url:`/bkash/payment`,
                method: "POST",
                body: {amount}
            })
        })
    })
})

export const {
    useGetProductsQuery,
useLazyGetProductsQuery,
useBkashPayMutation
} = ApiSlice