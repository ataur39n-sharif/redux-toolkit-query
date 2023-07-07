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
    reducers:{
        loadCartProduct:(state:TCartState, action)=>{
            const {payload} = action
            console.log('loadpd',payload)
            state.products=payload
            state.subTotal = state.products.reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
            }, 0);
            state.discount = state.coupon === "flat20" ? (state.subTotal * 0.20) : 0

            state.total = state.subTotal + state.shippingCost - state.discount
        },
        incrementProductQuantity:(state:TCartState, action)=>{
            const {payload} = action
            state.products = state.products.map(product => {
                if (product._id === payload) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                } else {
                    return product
                }
            })
            state.subTotal = state.products.reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
            }, 0);
            state.discount = state.coupon === "flat20" ? (state.subTotal * 0.20) : 0
            state.total = state.subTotal + state.shippingCost - state.discount
        },
        decrementProductQuantity:(state, action)=>{
            const {payload} = action
            state.products = state.products.map(product => {
                if (product._id === payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                } else {
                    return product
                }
            })
            state.subTotal = state.products.reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
            }, 0);
            state.discount = state.coupon === "flat20" ? (state.subTotal * 0.20) : 0
            state.total = state.subTotal + state.shippingCost - state.discount
        },
        setProductQuantity:(state, action)=>{
            const {payload} = action
            console.log(payload)
            state.products = state.products.map(product => {
                if (product._id === payload._id) {
                    return {
                        ...product,
                        quantity: Number(payload.quantity)
                    }
                } else {
                    return product
                }
            })
            state.subTotal = state.products.reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
            }, 0);
            state.discount = state.coupon === "flat20" ? (state.subTotal * 0.20) : 0
            state.total = state.subTotal + state.shippingCost - state.discount
        }
    }
})

export const {
    incrementProductQuantity,
    loadCartProduct,
    decrementProductQuantity,
    setProductQuantity
}=CartSlice.actions

export default CartSlice.reducer