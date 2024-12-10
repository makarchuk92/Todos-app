import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v1 } from "uuid"

export type FilterValuesType = "all" | "active" | "completed"

export interface ITodo {
    id: string
    title: string
    isDone: boolean
}

interface ITodoState {
    todos: ITodo[]
    filter: FilterValuesType | string
}


export const initialState: ITodoState = {
    todos: [],
    filter: 'all'
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: ITodo = {
                id: v1(),
                isDone: false,
                title: action.payload
            }
            state.todos.push(newTodo) 
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        changeStatusTodo: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if(todo) {
                todo.isDone = !todo.isDone
            }
        },
        changeFilterTodo: (state, action: PayloadAction<FilterValuesType>) => {
            state.filter = action.payload
        }
    }
})

export const {addTodo, removeTodo, changeStatusTodo, changeFilterTodo} = todoSlice.actions
export default todoSlice.reducer
