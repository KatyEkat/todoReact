import React from "react";

import styles from "./index.module.css";

interface Props {
	currentFilter: "all" | "active" | "completed";
	setFilter: (f: "all" | "active" | "completed") => void;
}

export const FilterTabs = ({ currentFilter, setFilter }: Props) => {
	return (
		<div className={styles.container}>
			<button
				className={styles.button}
				onClick={() => setFilter("all")}
				disabled={currentFilter === "all"}
			>
				Все
			</button>
			<button
				className={styles.button}
				onClick={() => setFilter("active")}
				disabled={currentFilter === "active"}
			>
				Активные
			</button>
			<button
				className={styles.button}
				onClick={() => setFilter("completed")}
				disabled={currentFilter === "completed"}
			>
				Выполненные
			</button>
		</div>
	);
};
