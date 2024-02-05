import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
    _id?: string;
    task: string;
    description: string;
    priority:string;
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
            state.todos.push({ ...action.payload })
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo) => todo._id !== action.payload)
        },
        toggleState: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find((todo) => todo._id === action.payload);
            if (todo) {
                todo.isCompleted = !todo.isCompleted;

                // Separate completed and pending tasks
                const completedTasks = state.todos.filter((task) => task.isCompleted);
                const pendingTasks = state.todos.filter((task) => !task.isCompleted);

                // Combine pending and completed tasks with completed tasks at the end
                state.todos = [...pendingTasks, ...completedTasks];
            }
        }
    }
})

export const { addTodo, removeTodo, toggleState } = todoSlice.actions;

export default todoSlice.reducer;