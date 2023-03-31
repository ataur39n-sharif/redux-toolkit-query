import {createSlice} from "@reduxjs/toolkit";

export interface ITodoState {
    tasks: string[] | [],
    isLoading: boolean
}

const initialState: ITodoState = {
    tasks: [],
    isLoading: false
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        showLoading: (state: ITodoState, action) => {
            state.isLoading = true
        },
        addTodo: (state: ITodoState, action) => {
            state.isLoading = false
            state.tasks = [...state.tasks, action.payload]
        },
        deleteTodo: (state: ITodoState, action) => {
            state.isLoading = false
            state.tasks = state.tasks.filter(task => task !== action.payload)
        }
    }
})

export const {addTodo, showLoading, deleteTodo} = todoSlice.actions
export default todoSlice.reducer