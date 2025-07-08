import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addTodo } from "../../store/slises/todoSlice";

import styles from "./index.module.css";

export const AddTodo = () => {
	const [value, setValue] = useState("");
	const dispatch = useAppDispatch();

	const handleAdd = () => {
		if (value.trim()) {
			dispatch(addTodo(value));
			setValue("");
		}
	};

	return (
		<div className={styles.container}>
			<input
				className={styles.input}
				type="text"
				placeholder="Введите задачу"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className={styles.button} onClick={handleAdd}>
				Добавить
			</button>
		</div>
	);
};
