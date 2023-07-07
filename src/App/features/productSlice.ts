import {createSlice } from "@reduxjs/toolkit";

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

export const ProductSlice = createSlice({
    initialState,
    name: 'product',
    reducers: {},
})

// export const {} = ProductSlice.actions
export default ProductSlice.reducer