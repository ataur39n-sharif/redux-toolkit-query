import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoControlSlic";
import blogReducer from "../features/blogs/blogSlice";
import {blogApi} from "../features/api/apiSlice";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
        todos: todoReducer,
        posts: blogReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogApi.middleware)
})

export default store;