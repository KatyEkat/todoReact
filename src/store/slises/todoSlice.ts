// src/store/slices/todoSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoItem } from "../../types/todo";
import { v4 as uuidv4 } from "uuid";

interface TodosState {
	todos: TodoItem[];
}

const initialState: TodosState = {
	todos: [],
};

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<string>) {
			const newTodo: TodoItem = {
				id: uuidv4(),
				content: action.payload,
				completed: false,
			};
			state.todos.push(newTodo);
		},
		toggleTodo(state, action: PayloadAction<string>) {
			const todo = state.todos.find((t) => t.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
		deleteTodo(state, action: PayloadAction<string>) {
			state.todos = state.todos.filter((t) => t.id !== action.payload);
		},
		clearCompleted(state) {
			state.todos = state.todos.filter((t) => !t.completed);
		},
	},
});

export const { addTodo, toggleTodo, deleteTodo, clearCompleted } =
	todoSlice.actions;

export default todoSlice.reducer;
