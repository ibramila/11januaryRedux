import { createSlice } from "@reduxjs/toolkit";
const initialState = []
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, { payload }) => {
            return [...state, payload];
        },
        deleteTodo: (state, { payload }) => {
            const newArr = state.filter((s) => s.id !== payload);
            return newArr;
        },
        completeTodo: (state, { payload }) => {
            const completedTask = state.map((todo) => {
                if (todo.id === payload) {
                    return { ...todo, isComplete: !todo.isComplete }

                } else {
                    return todo;
                }
            });
            return completedTask;
        },
        removeAll: (state) => {
            return state = []

        }
    }
})
export const { addTodo, deleteTodo, completeTodo, removeAll } = todoSlice.actions
export default todoSlice.reducer