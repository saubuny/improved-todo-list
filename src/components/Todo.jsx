import '../styles/Todo.scss';

function Todo({ text, modTodo, removeTodo, id, status }) {
	const handleRemove = (e) => {
		removeTodo(id);
	};

	const handleUpdate = (e) => {
		modTodo(id, 'Complete');
	};

	return (
		<>
			<div className="todo-card">
				<span className="todo-card_text">
					<p>{text}</p>
				</span>
				<span>
					<button
						onClick={handleUpdate}
						className={`todo-card_btn todo-card_${status.split(' ').join('').toLowerCase()}`}
					>
						{status}
					</button>
					<button onClick={handleRemove} className="todo-card_btn todo-card_x ">
						X
					</button>
				</span>
			</div>
		</>
	);
}

export default Todo;
