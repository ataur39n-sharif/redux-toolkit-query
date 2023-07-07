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
            state.products=payload
            state.subTotal = state.products.reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
            }, 0);
            state.discount = state.coupon === "flat20" ? Number((state.subTotal * 0.20).toFixed(2)) : 0

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
            state.discount = state.coupon === "flat20" ? Number((state.subTotal * 0.20).toFixed(2)) : 0
            state.total = state.subTotal + state.shippingCost - state.discount
        },
        decrementProductQuantity:(state, action)=>{
            const {payload} = action
            state.products = state.products.map(product => {
                if (product._id === payload && product.quantity>1) {
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
            state.discount = state.coupon === "flat20" ? Number((state.subTotal * 0.20).toFixed(2)) : 0
            state.total = state.subTotal + state.shippingCost - state.discount
        },
        setProductQuantity:(state, action)=>{
            const {payload} = action
            state.products = state.products.map(product => {
                if (product._id === payload._id && payload.quantity>1) {
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
            state.discount = state.coupon === "flat20" ? Number((state.subTotal * 0.20).toFixed(2)) : 0
            state.total = state.subTotal + state.shippingCost - state.discount
        },
        deleteFromCart:(state, action)=>{
            state.products = state.products.filter((product) => product._id !== action.payload)
            state.subTotal = state.products.reduce((accumulator, product) => {
                return accumulator + product.price * product.quantity;
            }, 0);
            state.discount = state.coupon === "flat20" ? Number((state.subTotal * 0.20).toFixed(2)) : 0

            state.total = state.subTotal + state.shippingCost - state.discount
        },
        updateShippingCost:(state, action)=>{
            state.shippingCost=Number(action.payload)
            state.total = state.subTotal + state.shippingCost
        },
        applyCoupon:(state, action)=>{
            state.coupon = action.payload.toLowerCase()
            state.discount = state.coupon === "flat20" ? Number((state.subTotal * 0.20).toFixed(2)) : 0
            state.total = state.subTotal + state.shippingCost - state.discount
        }
    }
})
export const {
    incrementProductQuantity,
    loadCartProduct,
    decrementProductQuantity,
    setProductQuantity,
    updateShippingCost,
    deleteFromCart,
    applyCoupon
}=CartSlice.actions

export default CartSlice.reducer