import React, { useState } from "react";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { FilterTabs } from "./components/FilterTabs";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { clearCompleted } from "./store/slises/todoSlice";

import styles from "./App.module.css";

const App = () => {
	const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
	const todos = useAppSelector((state) => state.todos.todos);
	const dispatch = useAppDispatch();

	const remaining = todos.filter((todo) => !todo.completed).length;

	return (
		<div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
			<h1>ToDo App</h1>
			<AddTodo />
			<FilterTabs currentFilter={filter} setFilter={setFilter} />
			<TodoList filter={filter} />
			<div style={{ marginTop: "1rem" }}>
				<span>Осталось задач: {remaining}</span>
			</div>
			<button
				className={styles.button}
				onClick={() => dispatch(clearCompleted())}
			>
				Очистить выполненные
			</button>
		</div>
	);
};

export default App;
