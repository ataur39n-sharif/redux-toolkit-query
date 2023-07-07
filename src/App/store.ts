import { configureStore } from '@reduxjs/toolkit'
import CartSlice from "./features/cartSlice.ts";
import ProductSlice from "./features/productSlice.ts";
import {ApiSlice} from "./features/apiSlice.ts";

export const store = configureStore({
    reducer: {
        [ApiSlice.reducerPath]:ApiSlice.reducer,
        cart:CartSlice,
        products:ProductSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(ApiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch