import {IProduct} from "./productSlice.ts";
import {createSlice} from "@reduxjs/toolkit";

export interface ICartProduct extends IProduct {
    quantity: number,
    position: number
}

export type TCartState = {
    products: ICartProduct[],
    shippingCost: number,
    coupon: string | null,
    discount: number,
    subTotal: number,
    total: number,
}
const initialState: TCartState = {
    products: [],
    subTotal: 0,
    shippingCost: 0,
    coupon: null,
    discount: 0,
    total: 0,
}

export const CartSlice = createSlice({
    initialState,
    name:'cart',
    reducers:{}
})