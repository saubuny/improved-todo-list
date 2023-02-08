import '../styles/Todo.scss';

function Todo({ text }) {
	const handleClick = (e) => {
		// ...
	};

	return (
		<>
			<div className="todo-card">
				<span className="todo-card_text">{text}</span>
				<button onClick={handleClick} className="todo-card_x">
					X
				</button>
			</div>
		</>
	);
}

export default Todo;
