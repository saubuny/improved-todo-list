import '../styles/Todo.scss';

function Todo({ text, removeTodo, id }) {
	const handleClick = (e) => {
		removeTodo(id);
	};

	return (
		<>
			<div className="todo-card">
				<span className="todo-card_text">
					<p>{text}</p>
				</span>
				<button onClick={handleClick} className="todo-card_x">
					X
				</button>
			</div>
		</>
	);
}

export default Todo;
