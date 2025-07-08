import React from "react";
import { useAppSelector } from "../../store/hooks";
import { Todo } from "../Todo";

interface Props {
	filter: "all" | "active" | "completed";
}

export const TodoList = ({ filter }: Props) => {
	const todos = useAppSelector((state) => state.todos.todos);

	const filteredTodos = todos.filter((todo) => {
		if (filter === "active") return !todo.completed;
		if (filter === "completed") return todo.completed;
		return true;
	});

	return (
		<ul>
			{filteredTodos.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</ul>
	);
};
