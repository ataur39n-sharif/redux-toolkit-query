import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {loadCartProduct} from "./cartSlice.ts";

export type IProduct = {
    _id: string;
    title: string;
    description?: string;
    price: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand: string;
    category: string;
    thumbnail: string;
    images?: string[];
}

export type TProductState = {
    products: IProduct[]
}

const initialState: TProductState = {
    products: []
}

export const getProducts = createAsyncThunk('product/getProducts',
    async (limit:number,thunkAPI) => {
    const res = await axios.get(`https://anxious-erin-shrug.cyclic.app/api/products?limit=${Number(limit)}&page=${Math.round(Math.random() * 10)}`)
    const modifiedData: any = [];
    res.data.products?.map((product: any, index: number) => {
        modifiedData.push({...product, quantity: 1, position: index})
    })
    thunkAPI.dispatch(loadCartProduct(modifiedData))
    return res.data
})

export const ProductSlice = createSlice({
    initialState,
    name: 'product',
    reducers: {},
    extraReducers: (builder) => {
        builder
            // .addCase(getProducts.pending, (state, action) => {
            // })
            // .addCase(getProducts.rejected, (state, action) => {
            // })
            .addCase(getProducts.fulfilled,(state, action)=>{

                state.products = action.payload

            })
    }
})

// export const {} = ProductSlice.actions
export default ProductSlice.reducer