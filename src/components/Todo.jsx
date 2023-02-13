import '../styles/Todo.scss';

function Todo({ text, modTodo, removeTodo, id, status }) {
	const handleRemove = (e) => {
		removeTodo(id);
	};

	const handleUpdate = (e) => {
		modTodo(id, e.target.value);
	};

	return (
		<>
			<div className="todo-card">
				<span className="todo-card_text">
					<p>{text}</p>
				</span>
				<span>
					<select
						onChange={handleUpdate}
						className={`todo-card_btn todo-card_${status.split(' ').join('').toLowerCase()}`}
					>
						<option value="Not Started">Not Started</option>
						<option value="In Progress">In Progress</option>
						<option value="Complete">Complete</option>
					</select>
					<button onClick={handleRemove} className="todo-card_btn todo-card_x ">
						X
					</button>
				</span>
			</div>
		</>
	);
}

export default Todo;
