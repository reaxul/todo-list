import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
    id: string;
    task: string;
    description: string;
    isCompleted?: boolean;
}
type TInitialState = {
    todos: TTodo[];
}

const initialState: TInitialState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({ ...action.payload, isCompleted: false })
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleState: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;
            }
        }
    }
})

export const { addTodo, removeTodo, toggleState } = todoSlice.actions;

export default todoSlice.reducer;