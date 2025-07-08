import React from "react";
import { useAppDispatch } from "../../store/hooks";
import { TodoItem } from "../../types/todo";
import { toggleTodo, deleteTodo } from "../../store/slises/todoSlice";

import styles from "./index.module.css";

interface Props {
	todo: TodoItem;
}

export const Todo = ({ todo }: Props) => {
	const dispatch = useAppDispatch();

	return (
		<div className={styles.container}>
			<li onClick={() => dispatch(toggleTodo(todo.id))}>
				<span
					style={{ textDecoration: todo.completed ? "line-through" : "none" }}
				>
					{todo.content}
				</span>
				<button
					className={styles.button}
					onClick={(e) => {
						e.stopPropagation();
						dispatch(deleteTodo(todo.id));
					}}
				>
					Удалить
				</button>
			</li>
		</div>
	);
};
